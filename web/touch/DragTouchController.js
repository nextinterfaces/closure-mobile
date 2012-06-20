goog.provide('nx.DragTouchController');

goog.require('nx.Event');
goog.require('nx.Point');
goog.require('nx.Node');
goog.require('nx.Util');

/**
 * @param {Element} sourceEle
 * @param {nx.DragController} sourceEle
 * @constructor
 */
nx.DragTouchController = function (sourceEle, dragController) {
    log('nx.DragTouchController::constructor', sourceEle, dragController);
    /**
     * @type {Element}
     * @private
     */
    this.sourceEle_ = sourceEle;
    /**
     * @type {nx.DragController}
     * @private
     */
    this.dragController_ = dragController;

    /**
     * @type {boolean}
     * @private
     */
    this.touchMoving_ = false;
};

/**
 */
nx.DragTouchController.prototype.registerEvents = function () {
    if (!goog.isDef(this.onDownKey_)) {
        log('nx.DragTouchController::registerEvents');
        var $this = this;
//        this.onDownKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHSTART, function (e) {
//
//            console.log("TOUCHSTART touches");
//            console.log(e.touches);
//
//            console.log("target");
//            console.log(e.target);
//
//            console.log("before stopPropagation");
//            e.stopPropagation();
//
//            console.log("before onDownFn");
//            $this.onDownFn(e);
//        }, true);
////        this.onMoveKey_ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHMOVE, function (e) {
////            $this.onMoveFn(e);
////        }, true);
////        this.onUpKey__ = goog.events.listen(this.sourceEle_, goog.events.EventType.TOUCHEND, function (e) {
////            $this.onUpFn(e);
////        }, true);

        this.onDownFnKey_ = function(e) {
            $this.onDownFn(e);
        };
        this.onMoveFnKey_ = function(e) {
            $this.onMoveFn(e);
        };
        this.onEndFnKey_ = function(e) {
            $this.onUpFn(e);
        };

        this.sourceEle_.addEventListener('touchstart', this.onDownFnKey_, true);
        this.sourceEle_.addEventListener('touchmove', this.onMoveFnKey_, true);
        this.sourceEle_.addEventListener('touchend', this.onEndFnKey_, true);
    }
};

/**
 */
nx.DragTouchController.prototype.unregisterEvents = function () {
    log('nx.DragTouchController::unregisterEvents touch keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
    if (goog.isDef(this.onDownFnKey_)) {
//        goog.events.unlistenByKey(this.onDownKey_);
//        goog.events.unlistenByKey(this.onMoveKey_);
//        goog.events.unlistenByKey(this.onUpKey__);
        this.sourceEle_.removeEventListener('touchstart', this.onDownFnKey_, true);
        this.sourceEle_.removeEventListener('touchmove', this.onMoveFnKey_, true);
        this.sourceEle_.removeEventListener('touchend', this.onEndFnKey_, true);
        this.onDownKey_ = this.onMoveKey_ = this.onUpKey__ = undefined;
    }
    log('nx.DragTouchController::unregisterEvents Mouse keys are ', this.onDownKey_, this.onMoveKey_, this.onUpKey__);
};

/**
 * @param {Event} e the browser event
 */
nx.DragTouchController.prototype.onDownFn = function (e) {
//    log('::::::: onDownFn ', e);
    var target = e.target;
    var preventDefault = true;
    var isElement = new nx.isNodeElement(target);

    if (isElement) {
//        Element ele = Element.as(target);
        // INPUT element will not get focus if default action is prevented.
        if (nx.isHtmlFormControl(target)) {
            target.focus();
            preventDefault = false;
        }
    }
    if (preventDefault) {
        e.preventDefault(); // prevent default action of selecting text
        e.stopPropagation();
    }
    // TODO: for multi-touch platforms.
    this.dragController_.onStart(e, new nx.Point(e.touches[0].clientX, e.touches[0].clientY));
};

/**
 * @param {Event} e the browser event
 */
nx.DragTouchController.prototype.onMoveFn = function (e) {
//    log('::::::: onMoveFn ', e);
    e.preventDefault();
    e.stopPropagation();
    this.touchMoving_ = true;
    this.dragController_.onMove(e, new nx.Point(e.touches[0].clientX, e.touches[0].clientY));
};

/**
 * @param {Event} e the browser event
 */
nx.DragTouchController.prototype.onUpFn = function (e) {
    log('::::::: onUpFn ', e);
    var target = e.target;
    var isElement = new nx.isNodeElement(target);

    if (isElement) {
        // fixing "iOS eats native SELECT event and propagates the dragEvent instead".
        if ('SELECT' === ('' + target.nodeName)) {
            return;
        }
    }

    e.preventDefault();
    e.stopPropagation();
    if (!this.touchMoving_) {
        this.fireClick(e);
    }
    this.touchMoving_ = false;
    this.dragController_.onEnd(e, new nx.Point(e.changedTouches[0].clientX, e.changedTouches[0].clientY));
};

/**
 * @param {Event} e the browser event
 */
nx.DragTouchController.prototype.fireClick = function (e) {
    var x = e.changedTouches[0].pageX;
    var y = e.changedTouches[0].pageY;

    var theTarget = document.elementFromPoint(x, y);
    if (theTarget.nodeType == 3)
        theTarget = theTarget.parentNode;

    var theEvent = document.createEvent('MouseEvents');
    theEvent.initEvent(goog.events.EventType.CLICK, true, true);
    theTarget.dispatchEvent(theEvent);
};

goog.exportSymbol('nx.DragTouchController', nx.DragTouchController);
