goog.provide('nx.DragMouseController');

goog.require('nx.Event');
goog.require('nx.Point');
goog.require('nx.Node');
goog.require('nx.Util');

/**
 * @param {Element} sourceEle
 * @param {nx.DragController} dragController
 * @constructor
 */
nx.DragMouseController = function (sourceEle, dragController) {
    log('nx.DragMouseController::constructor', sourceEle, dragController);
    /**
     * @type {element}
     * @private
     */
    this.sourceEle_ = sourceEle;
    /**
     * @type {nx.DragController}
     * @private
     */
    this.dragController_ = dragController;
};

/**
 */
nx.DragMouseController.prototype.registerEvents = function () {
    if (!goog.isDef(this.onDownKey_)) {
        log('nx.DragMouseController::registerEvents');
        var $this = this;
        this.onDownKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEDOWN, function (e) {
            $this.onDownFn(e);
        }, true);
        this.onMoveKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEMOVE, function (e) {
            $this.onMoveFn(e);
        }, true);
        this.onUpKey__ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEUP, function (e) {
            $this.onUpFn(e);
        }, true);
    }
};

/**
 */
nx.DragMouseController.prototype.unregisterEvents = function () {
    log('nx.DragMouseController::unregisterEvents Mouse keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
    if (goog.isDef(this.onDownKey_)) {
        goog.events.unlistenByKey(this.onDownKey_);
        goog.events.unlistenByKey(this.onMoveKey_);
        goog.events.unlistenByKey(this.onUpKey__);
        this.onDownKey_ = this.onMoveKey_ = this.onUpKey__ = undefined;
    }
    log('nx.DragMouseController::unregisterEvents Mouse keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
};

/**
 * @param {Event} e the browser event
 */
nx.DragMouseController.prototype.onDownFn = function (e) {
//    log('::::::: onDownFn ', e);
    var target = e.target;
    var preventDefault = true;

    var isElement = new nx.isNodeElement(target);

    if (isElement) {
        // INPUT element will not get focus if default action is prevented.
        if (nx.isHtmlFormControl(target)) {
            target.focus();
            preventDefault = false;
        }
    }
    if (preventDefault) {
        e.preventDefault(); // prevent default action of selecting text
        e.stopPropagation();
        this.dragController_.onStart(e, new nx.Point(e.clientX, e.clientY));
    }
};

/**
 * @param {Event} e the browser event
 */
nx.DragMouseController.prototype.onMoveFn = function (e) {
//    log('::::::: onMoveFn ', e);
    e.preventDefault();
    e.stopPropagation();
    this.dragController_.onMove(e, new nx.Point(e.clientX, e.clientY));
};

/**
 * @param {Event} e the browser event
 */
nx.DragMouseController.prototype.onUpFn = function (e) {
//    log('::::::: onUpFn ', e);
    e.preventDefault();
    e.stopPropagation();
    this.dragController_.onEnd(e, new nx.Point(e.clientX, e.clientY));
};

goog.exportSymbol('nx.DragMouseController', nx.DragMouseController);
