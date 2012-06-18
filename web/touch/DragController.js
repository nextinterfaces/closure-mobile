goog.provide('nx.DragController');

goog.require('nx.Event');
goog.require('nx.HousePresenter');
goog.require('nx.UserPresenter');
goog.require('nx.Point');

/**
 * @constructor
 */
nx.DragController = function(ctx){
    log('nx.DragController::constructor ...', ctx);
    /**
     * @type {nx.Ctx}
     * @private
     */
    this.ctx_ = ctx;
    /**
     * @type {element}
     * @private
     */
    this.sourceEle_ = ctx.getRoot();

    this.registerEvents();

//    var dc = this;
//    setTimeout(function(){
//        dc.unregisterEvents();
//    }, 5000);
};

/**
 */
nx.DragController.prototype.registerEvents = function(){
    if (!goog.isDef(this.clickKey_)) {
        log('nx.DragController::registerEvents');
        this.clickKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.CLICK, this.onClick, true);
        //-- child
        this.msDownKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEDOWN, this.onMouseDown, true);
        this.msMoveKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEMOVE, this.onMouseMove, true);
        this.msUpKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.MOUSEUP, this.onMouseUp, true);

//        var callBack = function(e) {
//            //listener.@com.google.gwt.user.client.EventListener::onBrowserEvent(Lcom/google/gwt/user/client/Event;)(e);
//        };
//        this.sourceEle_.addEventListener('click', callBack, true);
    }
};

/**
 */
nx.DragController.prototype.unregisterEvents = function(){
    log('nx.DragController::unregisterEvents key is ', this.clickKey_);
    if (goog.isDef(this.clickKey_)) {
        goog.events.unlistenByKey(this.clickKey_);
        this.clickKey_ = undefined;
    }

    //-- child
    log('nx.DragController::unregisterEvents Mouse keys are ', this.msDownKey_, this.msMoveKey_, this.msUpKey_);
    if (goog.isDef(this.msDownKey_)) {
        goog.events.unlistenByKey(this.msDownKey_);
        goog.events.unlistenByKey(this.msMoveKey_);
        goog.events.unlistenByKey(this.msUpKey_);
        this.msDownKey_ = this.msMoveKey_ = this.msUpKey_ = undefined;
    }
    log('nx.DragController::unregisterEvents Mouse keys are ', this.msDownKey_, this.msMoveKey_, this.msUpKey_);
};

nx.DragController.prototype.onClick = function(e){
    log('::::::: onClick ', e);
};

nx.DragController.prototype.onMouseDown = function(e){
    log('::::::: onMouseDown ', e);

    var target = e.target;
//    boolean preventDefault = true;
//    if (Element.is(target)) {
//        Element ele = Element.as(target);
//        // INPUT element will not get focus if default action is prevented.
//        if (Utils.isHtmlFormControl(ele)) {
//            ele.focus();
//            preventDefault = false;
//        }
//    }
//    if (preventDefault) {
    e.preventDefault(); // prevent default action of selecting text
    e.stopPropagation();
    log('::::::: onMouseDown ', nx.Ctx.getInstance());
    nx.DragController.prototype.onStart(e, new nx.Point(e.clientX, e.clientY));
//    }
};

nx.DragController.prototype.onMouseMove = function(e){
//    log('::::::: onMouseMove ', e);
//    nx.DragController.prototype.onMove(e, new nx.Point(e.clientX, e.clientY));
};

nx.DragController.prototype.onMouseUp = function(e){
    log('::::::: onMouseUp ', e);
    nx.DragController.prototype.onEnd(e, new nx.Point(e.clientX, e.clientY));
};

/**
 * @param {Event} e
 * @param {nx.Point} point
 */
nx.DragController.prototype.onStart = function(e, point){
    log('::::::: onStart %o, %o, %o', e, point, this);
};

/**
 * @param {Event} e
 * @param {nx.Point} point
 */
nx.DragController.prototype.onMove = function(e, point){
    log('::::::: onMove %o, %o, %o', e, point, this);
};

/**
 * @param {Event} e
 * @param {nx.Point} point
 */
nx.DragController.prototype.onEnd = function(e, point){
    log('::::::: onEnd %o, %o, %o', e, point, this);
};

/**
 */
nx.DragController.prototype.init = function(ctx){
    //...
};

goog.exportSymbol('nx.DragController', nx.DragController);
