goog.provide('nx.DragEvent');


/**
 * @param {Event} nativeEvent Browser event object.
 * @param {nx.DragEvent.Type} type
 * @param {number} x
 * @param {number} y
 * @param {number} offsetX
 * @param {number} offsetY
 * @constructor
 */
nx.DragEvent = function (nativeEvent, type, x, y, offsetX, offsetY) {
    log('nx.DragEvent::constructor ...');

    this.nativeEvent_ = nativeEvent;
    this.type_ = type;
    this.x_ = x;
    this.y_ = y;
    this.offsetX_ = offsetX;
    this.offsetY_ = offsetY;
    //
    this.stopPropagation_ = false;
};

/**
 * @enum {string}
 */
nx.DragEvent.Type = {
    START:'0',
    MOVE:'1',
    END:'2'
};


/**
 * @param {nx.DragEventsHandler} handler
 */
nx.DragEvent.prototype.dispatch = function (handler) {
    if (this.type_ == nx.DragEvent.Type.START) {
        handler.onDragStart(this);

    } else if (this.type_ == nx.DragEvent.Type.MOVE) {
        handler.onDragMove(this);

//    } else if (_type == Type.MoveHorizontal) {
//        handler.onDragMoveHorizontal(this);
//
//    } else if (_type == Type.MoveVertical) {
//        handler.onDragMoveVertical(this);

    } else if (this.type_ == nx.DragEvent.Type.END) {
        handler.onDragEnd(this);
    }
};

/**
 * @return {boolean}
 */
nx.DragEvent.prototype.getStopPropagation = function () {
    return this.stopPropagation_;
};

/**
 * @return {Event} browser event object
 */
nx.DragEvent.prototype.getNativeEvent = function () {
    return this.nativeEvent_;
};

goog.exportSymbol('nx.DragEvent', nx.DragEvent);
