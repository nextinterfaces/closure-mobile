goog.provide('nx.VerticalScrollView');

goog.require('nx.DragController');
goog.require('nx.Fx');

/**
 * @param {number} x
 * @param {number} y
 * @implements {nx.DragEventsHandler}
 * @implements {nx.SwipeEventsHandler}
 * @constructor
 */
nx.VerticalScrollView = function (x, y) {
    this.hasTextBox_ = false;
    this.widgetElement_ = undefined;
    this.panelHeight_ = -1;
    this.widgetHeight_ = -1;
    this.panel_ = goog.dom.createDom('div', {'class':'scrollPanel'});


    var dragCtrl = nx.DragController.getInstance();
    dragCtrl.addDragEventsHandler(this);

    var dragCtrl = nx.DragController.getInstance();
    dragCtrl.addSwipeEventsHandler(this);
};

//////////////////

nx.VerticalScrollView.prototype.add = function (widget) {
    this.widgetElement_ = widget;
    goog.dom.appendChild(this.panel_, widget);
};

nx.VerticalScrollView.prototype.clear = function () {
    goog.dom.removeChildren(this.panel_);
};

//public Element getParentContainer() {
//    return (Element)RootLayoutPanel.get().getWidgetContainerElement(this);
//}

//public Iterator<Widget>
//nx.VerticalScrollView.prototype.iterator = function() {
//    return this.panel_.iterator();
//};

//public boolean
nx.VerticalScrollView.prototype.remove = function (widget) {
//    return this.panel_.remove(w);
    goog.dom.removeNode(widget);
};


nx.VerticalScrollView.prototype.setScrollPositionY = function (pos) {
    if (this.hasTextBox_) {
        nx.Fx.setStyleTop(this, pos);
    } else {
        nx.Fx.setTranslateY(this.widgetElement_, pos);
    }
};

nx.VerticalScrollView.prototype.getScrollPositionY = function () {
    if (this.hasTextBox_) {
        return nx.Fx.getStyleTop(this);
    } else {
        return nx.Fx.getTranslateY(this.widgetElement_);
    }
};

nx.VerticalScrollView.prototype.getScrollToPositionY = function () {
    if (this.hasTextBox_) {
        return nx.Fx.getStyleTop(this);
    } else {
        return nx.Fx.getMatrixY(this.widgetElement_);
    }
};


//////////////////////
/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.getElement = function () {
    return this.panel_;
};

/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.onDragStart = function (e) {
    log('[[[[ VerticalScrollView ]]]] onDragStart', e);
};

/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.onDragMove = function (e) {
    log('[[[[ VerticalScrollView ]]]] onDragMove', e);
};
/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.onDragMoveHorizontal = function (e) {
    log('[[[[ VerticalScrollView ]]]] onDragMoveHorizontal', e);
};
/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.onDragMoveVertical = function (e) {
    log('[[[[ VerticalScrollView ]]]] onDragMoveVertical', e);
};

/**
 * @inheritDoc
 */
nx.VerticalScrollView.prototype.onDragEnd = function (e) {
    log('[[[[ VerticalScrollView ]]]] onDragEnd', e);
};

/**
 * @param {nx.SwipeEvent} e
 */
nx.VerticalScrollView.prototype.onSwipeVertical = function (e) {
    log('[[[[ VerticalScrollView ]]]] onSwipeHorizontal', e);
};

/**
 * @param {nx.SwipeEvent} e
 */
nx.VerticalScrollView.prototype.onSwipeHorizontal = function (e) {
    log('[[[[ VerticalScrollView ]]]] onSwipeHorizontal', e);
};
