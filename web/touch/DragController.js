goog.provide('nx.DragController');

goog.require('nx.Event');
goog.require('nx.Util');
goog.require('nx.Point');
goog.require('nx.DragTouchController');
goog.require('nx.DragMouseController');
goog.require('nx.DragEvent');

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
//    private List<DragEventsHandler> _dragEventHandlers = new ArrayList<DragEventsHandler>();
//    private List<SwipeEventsHandler> _swipeEventHandlers = new ArrayList<SwipeEventsHandler>();
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
    this.movedirection = null;

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
//    fireDragEvent(dragEvent);
};

/**
 * @param {Event} e
 * @param {nx.Point} p
 */
nx.DragController.prototype.onMove = function (e, p) {
//    log('::::::: onMove %o, %o, %o', e, p);
};

/**
 * @param {Event} e
 * @param {nx.Point} p
 */
nx.DragController.prototype.onEnd = function (e, p) {
    log('::::::: onEnd %o, %o, %o', e, p);
};

goog.exportSymbol('nx.DragController', nx.DragController);
