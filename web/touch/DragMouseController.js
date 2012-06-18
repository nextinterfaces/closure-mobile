goog.provide('nx.DragMouseController');

goog.require('nx.Event');

/**
 * @constructor
 * @extends {nx.DragController}
 */
nx.DragMouseController = function(ctx){
    log('nx.DragMouseController::constructor ...', ctx);
    nx.DragController.call(this, ctx);
};
goog.inherits(nx.DragMouseController, nx.DragController);

/**
 */
nx.DragMouseController.prototype.init = function(ctx){
    //...
};

goog.exportSymbol('nx.DragMouseController', nx.DragMouseController);
