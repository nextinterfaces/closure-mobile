goog.provide('nx.DragButton');

goog.require('nx.DragController');

/**
 * @constructor
 * @implements {nx.DragEventsHandler}
 * @return {Element}
 */
nx.DragButton = function(){
    var btn = goog.dom.createDom('div', {'style': 'background-color:#FEE;border: 1px solid #CCC;margin:50px;padding: 10px;'}, 'Click me');

    var dragCtrl = nx.DragController.getInstance();
    dragCtrl.addDragEventsHandler(this);
    this.widget_ = btn;
};

/**
 * @inheritDoc
 */
nx.DragButton.prototype.onDragStart = function (e) {
    log('[[[[ DragButton ]]]] onDragStart', e);
};

/**
 * @inheritDoc
 */
nx.DragButton.prototype.onDragMove = function (e) {
    log('[[[[ DragButton ]]]] onDragMove', e);
};
/**
 * @inheritDoc
 */
nx.DragButton.prototype.onDragMoveHorizontal = function (e) {
    log('[[[[ DragButton ]]]] onDragMoveHorizontal', e);
};
/**
 * @inheritDoc
 */
nx.DragButton.prototype.onDragMoveVertical = function (e) {
    log('[[[[ DragButton ]]]] onDragMoveVertical', e);
};

/**
 * @inheritDoc
 */
nx.DragButton.prototype.onDragEnd = function (e) {
    log('[[[[ DragButton ]]]] onDragEnd', e);
};

/**
 * @inheritDoc
 */
nx.DragButton.prototype.getElement = function () {
    return this.widget_;
};
