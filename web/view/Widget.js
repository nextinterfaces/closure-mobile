goog.provide('nx.Widget');

goog.require('goog.dom');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 */
nx.Widget = function (parent) {

    log('------ nx.Widget CONSTRUCTOR -----');

    if (!goog.isDefAndNotNull(parent)) {
        throw new Error("nx.Widget(): Empty parent widget.");
    }

    if (!this.isWidgetOrEle_(parent)) {
        throw new Error("nx.Widget(): Parent must be {nx.Widget} or {Element} type.");
    }

    /**
     * @type {Array<nx.Widget|Element>}
     * @private
     */
    this.children_ = [];

    /**
     * @type {nx.Widget|Element}
     * @private
     */
    this.parent_ = parent;

    /**
     * @type {boolean}
     * @private
     */
    this.isAttached_ = false;
//    this.onAttach();
//    this.isAttached_ = true;
};

/**
 * invoked when widget is attached to DOM
 * @type {Function}
 */
nx.Widget.prototype.onAttach = goog.abstractMethod;

/**
 * invoked when widget is detached from DOM
 * @type {Function}
 */
nx.Widget.prototype.onDetach = goog.abstractMethod;

/**
 * @return {Element}
 */
nx.Widget.prototype.getElement = goog.abstractMethod;

/**
 * @return {Element}
 */
nx.Widget.prototype.getParent = function () {
    return this.parent_;
};

/**
 * @return {Array<nx.Widget|Element>}
 */
nx.Widget.prototype.getChildren = function () {
    return this.children_;
};

/**
 * @param {nx.Widget|Element} widget
 * @private
 * return {boolean}
 */
nx.Widget.prototype.isWidgetOrEle_ = function (widget) {
    if ((widget instanceof nx.Widget) || (widget instanceof Element)) {
        return true;
    } else {
        return false;
    }
};

/**
 * @param {nx.Widget|Element} widget
 * @private
 * return {boolean}
 */
nx.Widget.prototype.isWidget = function (widget) {
    return (widget instanceof nx.Widget);
};

/**
 * @param {nx.Widget|Element} widget
 */
nx.Widget.prototype.add = function (widget) {
//    parentEle.appendChild(this.getElement());
//    this.getElement().render(parentEle);
    log('------ nx.Widget:add -----', this, widget);
    if (!goog.isDefAndNotNull(widget)) {
        throw new Error("nx.Widget:add Empty widget");
    }
    if (!this.isWidgetOrEle_(widget)) {
        throw new Error("nx.Widget:add Wrong type, not a Widget or Element");
    }
    // adding to array
    goog.array.insert(this.children_, widget);

    if (this.isWidget(widget)) {
        log('------ nx.Widget:add THIS IS WIDGET attaching -----', this, widget);
        goog.dom.appendChild(this.getElement(), widget.getElement());
        if (!widget.isAttached_) {
            widget.onAttach();
            widget.isAttached_ = true;
        }

        this.attachChildren(widget, 0);
    } else {
        log('------ nx.Widget:add not a WIDGET -----', this, widget);
        goog.dom.appendChild(this.getElement(), widget);
    }
};

/**
 * @param {nx.Widget|Element} widget
 */
nx.Widget.prototype.remove = function (widget) {
//    parentEle.appendChild(this.getElement());
//    this.getElement().render(parentEle);
    log('------ nx.Widget:remove -----', this, widget);
    if (!goog.isDefAndNotNull(widget)) {
        throw new Error("nx.Widget:remove Empty widget");
    }
    if (!this.isWidgetOrEle_(widget)) {
        throw new Error("nx.Widget:remove Wrong type, not a Widget or Element");
    }

    var removed = goog.array.remove(this.children_, widget);

    if (removed >= 0) {
        goog.dom.removeNode(widget.getElement());
        if (this.isWidget(widget)) {
            log('------ nx.Widget:add THIS IS WIDGET detaching -----', this, widget);
            if (widget.isAttached_) {
                widget.onDetach();
                widget.isAttached_ = false;
            }
            this.detachChildren(widget);
        }
    } else {
        throw new Error("nx.Widget:remove widget not found in current Element");
    }
};

/**
 * @param {Element} parent
 */
nx.Widget.prototype.render = function (parentContainer) {
    log('nx.Widget:render ', this, parentContainer);

    if (!nx.isNode(parentContainer)) {
        throw new Error("nx.Widget:parentContainer Empty or null parentContainer");
    }
//    // clear container
//    while (parentContainer.hasChildNodes()) {
//        parentContainer.removeChild(parentContainer.lastChild);
//    }
//
//    // add to container
//    parentContainer.appendChild(this.getElement());
    goog.dom.removeChildren(parentContainer);
    goog.dom.appendChild(parentContainer, this.getElement());

    if (!this.isAttached_) {
        this.onAttach();
        this.isAttached_ = true;
    }
};

/**
 */
nx.Widget.prototype.removeFromParent = function () {
//    parentEle.appendChild(this.getElement());
//    this.getElement().render(parentEle);
    log('nx.Widget:removeFromParent ', this);
    if (!goog.isDefAndNotNull(this.parent_)) {
        throw new Error("nx.Widget:removeFromParent Empty parent_");
    }

    if (this.isWidget(this.parent_)) {
        log('------ nx.Widget:removeFromParent parent IS WIDGET -----', this, parent);
        this.parent_.remove(this);

    } else {
        log('------ nx.Widget:removeFromParent parent is not a WIDGET -----', this, parent);
        goog.dom.removeNode(this.getElement());
    }
};

/**
 * @param {nx.Widget|Element} w
 * @param {number} level
 */
nx.Widget.prototype.detachChildren = function (w, level) {
    if (!goog.isDefAndNotNull(w)) {
        return;
    }
    if (!this.isWidget(w)) {
        return;
    }

    var children = w.getChildren();
    for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c instanceof nx.Widget) {
            log('---- nx.Widget:detachChildren ', c, level);
            if (c.isAttached_) {
                c.onDetach();
                c.isAttached_ = false;
            }
            this.detachChildren(c, level++);
        }
    }
};

/**
 * @param {nx.Widget|Element} w
 * @param {number} level
 */
nx.Widget.prototype.attachChildren = function (w, level) {
    if (!goog.isDefAndNotNull(w)) {
        return;
    }
    if (!this.isWidget(w)) {
        return;
    }

    var children = w.getChildren();
    for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c instanceof nx.Widget) {
            log('---- nx.Widget:attachChildren ', c, level);
            if (!c.isAttached_) {
                c.onAttach();
                c.isAttached_ = false;
            }
            this.attachChildren(c, level++);
        }
    }
};

goog.exportSymbol('nx.Widget', nx.Widget);