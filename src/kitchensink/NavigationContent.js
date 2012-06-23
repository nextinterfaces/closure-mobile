goog.provide('nx.NavigationContent');

goog.require('nx.Widget');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 */
nx.NavigationContent = function (parent) {
    goog.base(this, parent);
    var ele = goog.dom.createDom('div', {'class':'navigationContent'});
    this.widget_ = ele;
};
goog.inherits(nx.NavigationContent, nx.Widget);

/**
 * @inheritDoc
 */
nx.NavigationContent.prototype.getElement = function () {
    return this.widget_;
};
