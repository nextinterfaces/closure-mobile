goog.provide('nx.DragMouseController');

goog.require('nx.Event');
goog.require('nx.Point');

/**
 * @param {nx.DragController} sourceEle
 * @param {element} sourceEle
 * @constructor
 */
nx.DragMouseController = function (sourceEle, dragController) {
    log('nx.DragMouseController::constructor ...', sourceEle, dragController);
    /**
     * @type {element}
     * @private
     */
    this.sourceEle_ = sourceEle;
    /**
     * @type {nx.DragController}
     * @private
     */
    nx.DragMouseController.prototype.dragController_ = dragController;
};

/**
 */
nx.DragMouseController.prototype.dragController_ = undefined;


/**
 */
nx.DragMouseController.prototype.registerEvents = function () {
    if (!goog.isDef(this.onDownKey_)) {
        log('nx.DragMouseController::registerEvents');
        this.onDownKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEDOWN, this.onDownFn, true);
        this.onMoveKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEMOVE, this.onMoveFn, true);
        this.onUpKey__ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEUP, this.onUpFn, true);

//        var callBack = function(e) {
//            //listener.@com.google.gwt.user.client.EventListener::onBrowserEvent(Lcom/google/gwt/user/client/Event;)(e);
//        };
//        this.sourceEle_.addEventListener('click', callBack, true);
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

nx.DragMouseController.prototype.onDownFn = function (e) {
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
    log(nx.DragMouseController.prototype.dragController_.onStart);
    nx.DragMouseController.prototype.dragController_.onStart(e, new nx.Point(e.clientX, e.clientY));
};

nx.DragMouseController.prototype.onMoveFn = function (e) {
//    log('::::::: onMoveFn ', e);
//    nx.DragMouseController.prototype.dragController_.onMove(e, new nx.Point(e.clientX, e.clientY));
};

nx.DragMouseController.prototype.onUpFn = function (e) {
    log('::::::: onUpFn ', e);
    nx.DragMouseController.prototype.dragController_.onEnd(e, new nx.Point(e.clientX, e.clientY));
};

goog.exportSymbol('nx.DragMouseController', nx.DragMouseController);
