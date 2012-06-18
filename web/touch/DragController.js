goog.provide('nx.DragController');

goog.require('nx.Event');
goog.require('nx.Util');
goog.require('nx.DragTouchController');
goog.require('nx.DragMouseController');

/**
 * @param {nx.Ctx} ctx
 * @constructor
 */
nx.DragController = function (ctx) {
    log('nx.DragController::constructor ...');
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

    if (nx.isTouch()) {
        this.implController_ = new nx.DragTouchController(this.sourceEle_, this);
    } else {
        this.implController_ = new nx.DragMouseController(this.sourceEle_, this);
    }

    this.registerEvents();

//    var dc = this;
//    setTimeout(function(){
//        dc.unregisterEvents();
//    }, 5000);
};

/**
*/
nx.DragController.prototype.registerEvents = function () {
    if (!goog.isDef(this.clickKey_)) {
        log('nx.DragController::registerEvents');
        this.clickKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.CLICK, this.onClick, true);
        this.implController_.registerEvents();
    }
};

/**
*/
nx.DragController.prototype.unregisterEvents = function () {
    log('nx.DragController::unregisterEvents key is ', this.clickKey_);
    if (goog.isDef(this.clickKey_)) {
        goog.events.unlistenByKey(this.clickKey_);
        this.clickKey_ = undefined;
    this.implController_.unregisterEvents();
    }
};

nx.DragController.prototype.onClick = function (e) {
    log('::::::: onClick ', e);
};

/**
* @param {Event} e
* @param {nx.Point} point
*/
nx.DragController.prototype.onStart = function (e, point) {
    log('::::::: onStart %o, %o, %o', e, point);
};

/**
* @param {Event} e
* @param {nx.Point} point
*/
nx.DragController.prototype.onMove = function (e, point) {
    log('::::::: onMove %o, %o, %o', e, point);
};

/**
* @param {Event} e
* @param {nx.Point} point
*/
nx.DragController.prototype.onEnd = function (e, point) {
    log('::::::: onEnd %o, %o, %o', e, point);
};

goog.exportSymbol('nx.DragController', nx.DragController);
