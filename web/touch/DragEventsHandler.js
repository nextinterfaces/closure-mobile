goog.provide('nx.DragEventHandler');

/**
 * @interface
 */
nx.DragEventHandler = function(){};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventHandler.prototype.onDragStart = function(e){};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventHandler.prototype.onDragMove = function(e){};

/**
 * @param {nx.DragEvent} e
 */
nx.DragEventHandler.prototype.onDragEnd = function(e){};

/**
 * @param {Element} container
 */
nx.DragEventHandler.prototype.getElement = function(){};
