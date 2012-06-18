goog.provide('nx.SwipeEvent');

/**
 * @param {Event} nativeEvent Browser event object.
 * @param {nx.SwipeEvent.Type} type
 * @param {number} speed
 * @constructor
 */
nx.SwipeEvent = function (nativeEvent, type, speed) {
    log('nx.SwipeEvent::constructor ...');

    this.nativeEvent_ = nativeEvent;
    this.type_ = type;
    this.speed_ = speed;
    //
    this.stopPropagation_ = false;
};

/**
 * @enum {string}
 */
nx.SwipeEvent.Type = {
    VerticalTopBottom:'0',
    VerticalBottomTop:'1',
    HorizontalLeftRight:'2',
    HorizontalRightLeft:'3'
};

/**
 * @return {boolean}
 */
nx.SwipeEvent.prototype.getStopPropagation = function () {
    return this.stopPropagation_;
};

/**
 * @return {number}
 */
nx.SwipeEvent.prototype.getSpeed = function () {
    return this.speed_;
};

/**
 * @return {Event} browser event object
 */
nx.SwipeEvent.prototype.getNativeEvent = function () {
    return this.nativeEvent_;
};

/**
 * @param {nx.SwipeEventsHandler} handler
 */
nx.SwipeEvent.prototype.dispatch = function (handler) {
    if (this.type_ == nx.SwipeEvent.Type.VerticalTopBottom || this.type_ == nx.SwipeEvent.Type.VerticalBottomTop) {
        handler.onSwipeVertical(this);
    } else if (this.type_ == nx.SwipeEvent.Type.HorizontalLeftRight || this.type_ == nx.SwipeEvent.Type.HorizontalRightLeft) {
        handler.onSwipeHorizontal(this);
    }
};

goog.exportSymbol('nx.SwipeEvent', nx.SwipeEvent);
