goog.provide('nx.SwipeEventsHandler');

/**
 * @interface
 */
nx.SwipeEventsHandler = function () {};

/**
 * @param {nx.SwipeEvent} e
 */
nx.SwipeEventsHandler.prototype.onSwipeVertical = function (e) {};

/**
 * @param {nx.SwipeEvent} e
 */
nx.SwipeEventsHandler.prototype.onSwipeHorizontal = function (e) {};

/**
 * @param {Element} container
 */
nx.SwipeEventsHandler.prototype.getElement = function () {};
