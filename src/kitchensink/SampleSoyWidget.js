goog.provide('nx.SampleSoyWidget');

goog.require('nx.Widget');
goog.require('nx.soy');

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

    var data = {greeting: 'Hello from KLM', year: new Date().getFullYear()};
    var soyHTML = nx.soy.hello(data);
    var eleSoy = goog.dom.createDom('div', {'id':'soy'});
    eleSoy.innerHTML = soyHTML;
    this.add(eleSoy);
};
goog.inherits(nx.SampleSoyWidget, nx.Widget);

/**
 * @inheritDoc
 */
nx.SampleSoyWidget.prototype.getElement = function () {
    return this.widget_;
};