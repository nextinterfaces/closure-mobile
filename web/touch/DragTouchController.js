goog.provide('nx.DragTouchController');

goog.require('nx.Event');

/**
 * @constructor
 * @extends {nx.DragTouchController}
 */
nx.DragTouchController = function(ctx){
    log('nx.DragTouchController::constructor ...', ctx);
    nx.DragTouchController.call(this, ctx);
};
goog.inherits(nx.DragTouchController, nx.DragTouchController);

/**
 */
nx.DragTouchController.prototype.init = function(ctx){
    //...
};

goog.exportSymbol('nx.DragTouchController', nx.DragTouchController);
