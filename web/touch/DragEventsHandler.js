goog.provide('nx.DragEventsHandler');

/**
 * @interface
 */
nx.DragEventsHandler = function () {
};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventsHandler.prototype.onDragStart = function (e) {
};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventsHandler.prototype.onDragMove = function (e) {
};
/**
 * @param {nx.DragEvent} e
 */
nx.DragEventsHandler.prototype.onDragMoveHorizontal = function (e) {
};
/**
 * @param {nx.DragEvent} e
 */
nx.DragEventsHandler.prototype.onDragMoveVertical = function (e) {
};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventsHandler.prototype.onDragEnd = function (e) {
};

/**
 * @param {Element} container
 */
nx.DragEventsHandler.prototype.getElement = function () {
};
