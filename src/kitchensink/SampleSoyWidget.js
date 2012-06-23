goog.provide('nx.SampleSoyWidget');

goog.require('nx.Widget');
goog.require('nx.soy.first');
goog.require('nx.soy.second');
goog.require('nx.soy.third');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 */
nx.SampleSoyWidget = function (parent) {
    goog.base(this, parent);
    var ele = goog.dom.createDom('div', {'id':'soy-widget',
        'style':'margin: 30px; border: 2px solid #1AF; width: 50%; height: 100px;'}, 'Soy Widget');

    this.widget_ = ele;

    var soy1 = goog.dom.createDom('div');
    soy1.innerHTML = nx.soy.first.hello(
        {   greeting:'Hello from Soy1',
            year:new Date().getFullYear()}
    );
    this.add(soy1);

    var soy2 = goog.dom.createDom('div');
    soy2.innerHTML = nx.soy.second.helloSecond(
        {   greeting:'Hello from Soy2',
            year:'2010'}
    );
    this.add(soy2);

    var soy3 = goog.dom.createDom('div');
    soy3.innerHTML = nx.soy.third.helloThird(
        {greeting:'Hello from Soy3'}
    );
    this.add(soy3);
};
goog.inherits(nx.SampleSoyWidget, nx.Widget);

/**
 * @inheritDoc
 */
nx.SampleSoyWidget.prototype.getElement = function () {
    return this.widget_;
};