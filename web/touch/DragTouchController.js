goog.provide('nx.DragTouchController');

goog.require('nx.Event');
goog.require('nx.Point');

/**
 * @param {nx.DragController} sourceEle
 * @param {element} sourceEle
 * @constructor
 */
nx.DragTouchController = function (sourceEle, dragController) {
    log('nx.DragTouchController::constructor', sourceEle, dragController);
    /**
     * @type {element}
     * @private
     */
    this.sourceEle_ = sourceEle;
    /**
     * @type {nx.DragController}
     * @private
     */
    nx.DragTouchController.prototype.dragController_ = dragController;
};

/**
 */
nx.DragTouchController.prototype.dragController_ = undefined;


/**
 */
nx.DragTouchController.prototype.registerEvents = function () {
    if (!goog.isDef(this.onDownKey_)) {
        log('nx.DragTouchController::registerEvents');
        this.onDownKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHSTART, this.onDownFn, true);
        this.onMoveKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHMOVE, this.onMoveFn, true);
        this.onUpKey__ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHEND, this.onUpFn, true);
    }
};


/**
 */
nx.DragTouchController.prototype.unregisterEvents = function () {
    log('nx.DragTouchController::unregisterEvents Mouse keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
    if (goog.isDef(this.onDownKey_)) {
        goog.events.unlistenByKey(this.onDownKey_);
        goog.events.unlistenByKey(this.onMoveKey_);
        goog.events.unlistenByKey(this.onUpKey__);
        this.onDownKey_ = this.onMoveKey_ = this.onUpKey__ = undefined;
    }
    log('nx.DragTouchController::unregisterEvents Mouse keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
};

nx.DragTouchController.prototype.onDownFn = function (e) {
    log('::::::: onDownFn ', e);

//    var target = e.target;
////    boolean preventDefault = true;
////    if (Element.is(target)) {
////        Element ele = Element.as(target);
////        // INPUT element will not get focus if default action is prevented.
////        if (Utils.isHtmlFormControl(ele)) {
////            ele.focus();
////            preventDefault = false;
////        }
////    }
////    if (preventDefault) {
//    e.preventDefault(); // prevent default action of selecting text
//    e.stopPropagation();
//    log('::::::: onDownFn ', nx.Ctx.getInstance());
//    nx.DragController.prototype.onStart(e, new nx.Point(e.clientX, e.clientY));
////    }
    log(nx.DragTouchController.prototype.dragController_.onStart);
    nx.DragTouchController.prototype.dragController_.onStart(e, new nx.Point(e.clientX, e.clientY));
};

nx.DragTouchController.prototype.onMoveFn = function (e) {
//    log('::::::: onMoveFn ', e);
//    nx.DragTouchController.prototype.dragController_.onMove(e, new nx.Point(e.clientX, e.clientY));
};

nx.DragTouchController.prototype.onUpFn = function (e) {
    log('::::::: onUpFn ', e);
    nx.DragTouchController.prototype.dragController_.onEnd(e, new nx.Point(e.clientX, e.clientY));
};

goog.exportSymbol('nx.DragTouchController', nx.DragTouchController);
