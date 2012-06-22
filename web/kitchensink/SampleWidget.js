goog.provide('nx.SampleWidget');

goog.require('nx.Widget');
goog.require('nx.SampleDragWidget');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 */
nx.SampleWidget = function (parent) {
    goog.base(this, parent);
    var ele = goog.dom.createDom('div', {'id':'wrapper-widget',
        'style': 'margin: 30px; border: 2px solid #1AF; width: 50%; height: 100px;'});

    this.widget_ = ele;

    var dragBtn = new nx.SampleDragWidget(this);
    this.add(dragBtn);

    var ele2 = goog.dom.createDom('div', {'id':'widget2',
        'style': 'margin: 10px; border: 2px solid #A1F; width: 30px; height: 20px;'});
    this.add(ele2);

    var ele3 = goog.dom.createDom('div', {'id':'widget3',
        'style': 'margin: 10px; border: 2px solid #F1A; width: 30px; height: 20px;'});
    this.add(ele3);
};
goog.inherits(nx.SampleWidget, nx.Widget);

/**
* @inheritDoc
*/
nx.SampleWidget.prototype.onAttach = function () {
    log('[[[[ WrapperWidget ]]]] onAttach');
};

/**
* @inheritDoc
*/
nx.SampleWidget.prototype.onDetach = function () {
    log('[[[[ WrapperWidget ]]]] onDetach');
};

/**
 * @inheritDoc
 */
nx.SampleWidget.prototype.getElement = function () {
    return this.widget_;
};
