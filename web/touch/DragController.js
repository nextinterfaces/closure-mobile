goog.provide('nx.DragController');

goog.require('nx.Event');
goog.require('nx.Util');
goog.require('nx.Point');
goog.require('nx.DragTouchController');
goog.require('nx.DragMouseController');
goog.require('nx.DragEvent');
goog.require('nx.SwipeEvent');

/**
 * @param {element} sourceEle
 * @constructor
 */
nx.DragController = function (sourceEle) {
    log('nx.DragController::constructor ...');
    /**
     * @type {element}
     * @private
     */
    this.sourceEle_ = sourceEle;

    /**
     * @type {Array<nx.DragEventsHandler>}
     * @private
     */
    this.dragEventHandlers_ = [];

    /**
     * @type {Array<nx.SwipeEventsHandler>}
     * @private
     */
    this.swipeEventHandlers_ = [];

    /**
     *
     * @type {nx.DragEventsHandler}
     * @private
     */
    this.capturingDragEventsHandler_ = null;
    /**
     *
     * @type {*}
     * @private
     */
    this.capturingSwipeEventsHandler_ = null;
    /**
     * @type {boolean}
     * @private
     */
    this.isDown_ = false;
    /**
     * @type {boolean}
     * @private
     */
    this.suppressNextClick_ = false;
    /**
     * @type {number}
     * @private
     */
    this.lastDragTimeStamp_ = 0;
    /**
     * @type {nx.Point}
     * @private
     */
    this.lastDragPos_ = new nx.Point(0, 0);
    /**
     * @type {number}
     * @private
     */
    this.currDragTimeStamp_ = 0;
    /**
     * @type {nx.Point}
     * @private
     */
    this.currDragPos_ = new nx.Point(0, 0);

    /**
     * @type {nx.Point}
     * @private
     */
    this.startDragPos_ = new nx.Point(0, 0);
    // private boolean _hasMoveStarted = false;
    /**
     * @type {nx.DragEvent.Type}
     * @private
     */
    this.movedirection_ = null;

    /**
     * @type {number}
     * @private
     */
    this.movecounter_ = 0;

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
 * @param {nx.Point} p
 */
nx.DragController.prototype.onStart = function (e, p) {
    log('::::::: onStart %o, %o, %o', e, p);

    this.isDown_ = true;
    this.suppressNextClick_ = false;
    var currentDateTime = new Date();
    this.lastDragTimeStamp_ = currentDateTime.getTime();
    this.currDragTimeStamp_ = this.lastDragTimeStamp_;
    this.lastDragPos_.clone(p);
    this.currDragPos_.clone(p);
    this.startDragPos_.clone(p);

    var dragEvent = new nx.DragEvent(e, nx.DragEvent.Type.START, p.X(), p.Y(),
        p.X() - this.currDragPos_.X(), p.Y() - this.currDragPos_.Y());
    this.fireDragEvent(dragEvent);
};

/**
 * @param {Event} e
 * @param {nx.Point} p
 */
nx.DragController.prototype.onMove = function (e, p) {
//    log('::::::: onMove %o, %o, %o', e, p);

    if (this.isDown_) {
        if (p.equals(this.currDragPos_)) {
            // log("NO movement onMove");
            return;
        }
        this.suppressNextClick_ = true;

        if (this.movedirection_ == null && this.movecounter_ > 0) {
            var vertDelta = Math.abs(this.startDragPos_.Y() - p.Y());
            var horizDelta = Math.abs(this.startDragPos_.X() - p.X());

            if (vertDelta > horizDelta) {
                this.movedirection_ = nx.DragEvent.Type.MOVE_VERTICAL;
            } else {
                this.movedirection_ = nx.DragEvent.Type.MOVE_HORIZONTAL;
            }
        }

        if (this.movedirection_ == null) {
            this.movecounter_++;
        } else {
            var dragEvent = new nx.DragEvent(e, this.movedirection_, p.X(), p.Y(),
                p.X() - this.currDragPos_.X(), p.Y() - this.currDragPos_.Y());
            this.fireDragEvent(dragEvent);
            // log("this.movedirection_ !!!! " + this.movedirection_ + " vertDelta=" + vertDelta + " horizDelta=" +horizDelta);
        }

        // XLog.info("onMove _lastDragPos=" + (int) _lastDragPos.X() + " : " +
        // (int) _lastDragPos.Y() + " curr="
        // + (int) p.X() + " : " + (int) p.Y());

        var dragEvent = new nx.DragEvent(e, nx.DragEvent.Type.MOVE, p.X(), p.Y(),
            p.X() - this.currDragPos_.X(), p.Y() - this.currDragPos_.Y());
        this.fireDragEvent(dragEvent);
        this.lastDragPos_.clone(this.currDragPos_);
        this.lastDragTimeStamp_ = this.currDragTimeStamp_;
        this.currDragPos_.clone(p);
        var currentDateTime = new Date();
        this.currDragTimeStamp_ = currentDateTime.getTime();
    }
};

/**
 * @param {Event} e
 * @param {nx.Point} p
 */
nx.DragController.prototype.onEnd = function (e, p) {
    log('::::::: onEnd %o, %o, %o', e, p);

    this.movedirection_ = null;
    this.movecounter_ = 0;

    if (this.isDown_) {
        this.isDown_ = false;
//			XLog.info("onEnd, p.X($1) p.Y($2) p.X()-_currDragPos.X() $3 p.Y()-_currDragPos.Y() $4 _currDragPos.X($5) _currDragPos.Y($6)" ,
//					p.X(), p.Y(),
//					p.X()-_currDragPos.X(), p.Y()-_currDragPos.Y(),
//					_currDragPos.X(), _currDragPos.Y());
        var dragEvent = new nx.DragEvent(e, nx.DragEvent.Type.END, p.X(), p.Y(),
            p.X() - this.currDragPos_.X(), p.Y() - this.currDragPos_.Y());
        this.fireDragEvent(dragEvent);
        var distanceX = p.X() - this.lastDragPos_.X();
        var distanceY = p.Y() - this.lastDragPos_.Y();
        var distance;
        var swipeType;
        if (Math.abs(distanceX) > Math.abs(distanceY)) {
            distance = distanceX;
            swipeType = distance > 0 ? nx.SwipeEvent.Type.HorizontalLeftRight : nx.SwipeEvent.Type.HorizontalRightLeft;
        } else {
            distance = distanceY;
            swipeType = distance > 0 ? nx.SwipeEvent.Type.VerticalTopBottom : nx.SwipeEvent.Type.VerticalBottomTop;
        }
        var currentDateTime = new Date();
        var time = currentDateTime.getTime() - this.lastDragTimeStamp_;
        var speed = distance / time;
        if (speed > 4) {
            speed = 4;
        } else if (speed < -4) {
            speed = -4;
        }
        log("onEnd, speed is " + speed);

        if (Math.abs(speed) > 0.2) {
            log("onEnd, before swipeEvent .... speed is " + speed);
            var swipeEvent = new nx.SwipeEvent(e, swipeType, speed);
            this.fireSwipeEvent(swipeEvent);
        }
    }
};

/**
 * @param {nx.DragEvent} e
 */
nx.DragController.prototype.fireDragEvent = function (e) {
//    log('::::::: fireDragEvent %o', e);
    if (this.capturingDragEventsHandler_ != null) {
        e.dispatch(this.capturingDragEventsHandler_);
        return;
    }
    var target = e.getNativeEvent().target;
//    log('::::::: fireDragEvent target %o', target);
    var node = target;
    if (nx.isNodeElement(target)) {
        node = nx.getNodeParentElement(target); // Text node this.parentNode
//        log('::::::: fireDragEvent parent node %o', node);
    }
    if (nx.isNodeElement(node)) {
        var ele = target;
        var count = 0;
        while (ele != null) {
            for (var i = 0; i < this.dragEventHandlers_.length; i++) {
                var handler = this.dragEventHandlers_[i];
                if (ele === handler.getElement()) {
                    e.dispatch(handler);
                    count++;
//                    log('::::::: fireDragEvent rrrrrrr handler %o', handler);
                    if (e.getStopPropagation() || count == this.dragEventHandlers_.length) {
                        return;
                    }
                }
            }
//            log('::::::: fireDragEvent while 1 %o', ele);
            ele = nx.getNodeParentElement(ele);
//            log('::::::: fireDragEvent while 2 %o', ele);
        }
    }
};


/**
 * @param {nx.SwipeEvent} e
 */
nx.SwipeEvent.prototype.fireSwipeEvent = function (e) {
    if (this.capturingSwipeEventsHandler_ != null) {
        e.dispatch(this.capturingSwipeEventsHandler_);
        return;
    }
    if (this.capturingDragEventsHandler_ != null) {
        return;
    }
    var target = e.getNativeEvent().target;
    var node = target;
//    Node node = Node.as(target);
    if (!nx.isNodeElement(node)) {
        // Text node
        node = nx.getNodeParentElement(node);
    }
    if (nx.isNode(node)) {
        var ele = target;//Element.as(target);
        var count = 0;
        while (ele != null) {
            for (var i = 0; this.swipeEventHandlers_.length; i++) {
                var handler = this.swipeEventHandlers_[i];
                if (ele.equals === handler.getElement()) {
                    e.dispatch(handler);
                    count++;
                    if (e.getStopPropagation() || count == this.swipeEventHandlers_.length) {
                        return;
                    }
                }
            }
            ele = nx.getNodeParentElement(ele);
        }
    }
};

goog.exportSymbol('nx.DragController', nx.DragController);
