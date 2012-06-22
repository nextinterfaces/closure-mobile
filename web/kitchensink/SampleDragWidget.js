goog.provide('nx.SampleDragWidget');

goog.require('nx.Widget');
goog.require('nx.DragController');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @implements {nx.DragEventsHandler}
 * @extends {nx.Widget}
 */
nx.SampleDragWidget = function (parent) {
//    nx.Widget.call(this, parent);
    goog.base(this, parent);
    var btn = goog.dom.createDom('div', {'style':'background-color:#FEE;border: 1px solid #CCC;margin:50px;padding: 10px;'}, 'Touch area');

    this.widget_ = btn;
};
goog.inherits(nx.SampleDragWidget, nx.Widget);

/**
* @inheritDoc
*/
nx.SampleDragWidget.prototype.onAttach = function () {
    log('[[[[ DragButton ]]]] onAttach');
    nx.DragController.getInstance().addDragEventsHandler(this);
};

/**
* @inheritDoc
*/
nx.SampleDragWidget.prototype.onDetach = function () {
    log('[[[[ DragButton ]]]] onDetach');
    nx.DragController.getInstance().removeDragEventsHandler(this);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.onDragStart = function (e) {
    log('[[[[ DragButton ]]]] onDragStart', e);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.onDragMove = function (e) {
    log('[[[[ DragButton ]]]] onDragMove', e);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.onDragMoveHorizontal = function (e) {
    log('[[[[ DragButton ]]]] onDragMoveHorizontal', e);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.onDragMoveVertical = function (e) {
    log('[[[[ DragButton ]]]] onDragMoveVertical', e);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.onDragEnd = function (e) {
    log('[[[[ DragButton ]]]] onDragEnd', e);
};

/**
 * @inheritDoc
 */
nx.SampleDragWidget.prototype.getElement = function () {
    return this.widget_;
};
