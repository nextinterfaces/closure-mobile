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
    log('nx.CountryPresenter custom constructor ');
};
goog.inherits(nx.CountryPresenter, nx.Presenter);
//-----------

/**
 * @return {nx.Presenter}
 */
nx.CountryPresenter.prototype.init = function(){
    //log('nx.CountryPresenter::init do AJAX ... ');
    var u = new nx.Country('Peter Gencha', '887 Botev Str', '604-123-2345');
    this.user_ = u;
    this.view_.getList().innerHTML = this.user_.getName();
    return this;
};

/**
 */
nx.CountryPresenter.prototype.executeClick = function(){
    this.ctx_.getEventBus().fire(nx.Event.COUNTRY_TAB_CLICK, {'a':1});
};

goog.exportSymbol('nx.CountryPresenter', nx.CountryPresenter);