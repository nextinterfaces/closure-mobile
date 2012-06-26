goog.provide('nx.CountryPresenter');

goog.require('goog.dom');
goog.require('nx.Country');
goog.require('nx.CountryView');
goog.require('nx.Event');

/**
 * @param {nx.View} view
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.Presenter}
 */
nx.CountryPresenter = function (view, ctx) {
    goog.base(this, view, ctx);
};
goog.inherits(nx.CountryPresenter, nx.Presenter);
//-----------

/**
 * @return {nx.Presenter}
 */
nx.CountryPresenter.prototype.init = function () {
    var d = {countries:[
        new nx.Country('Bulgaria', 'i-andorra.png'),
        new nx.Country('Croatia', 'i-budapest.png'),
        new nx.Country('Czech Republic', 'i-budapest.png'),
        new nx.Country('Denmark', 'i-budapest.png'),
        new nx.Country('Estonia', 'i-budapest.png'),
        new nx.Country('Finland', 'i-budapest.png'),
        new nx.Country('France', 'i-budapest.png'),
        new nx.Country('Germany', 'i-budapest.png'),
        new nx.Country('Hungary', 'i-budapest.png'),
        new nx.Country('Ireland', 'i-budapest.png')
    ]};
    this.view_.setData(d);
    return this;
};

/**
 */
nx.CountryPresenter.prototype.executeClick = function () {
    this.ctx_.getEventBus().fire(nx.Event.COUNTRY_TAB_CLICK, {'a':1});
};

goog.exportSymbol('nx.CountryPresenter', nx.CountryPresenter);