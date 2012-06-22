goog.provide('nx.HousePresenter');

goog.require('goog.dom');
goog.require('nx.House');
goog.require('nx.HouseView');
goog.require('nx.Event');
goog.require('nx.Presenter');

/**
 * @param {nx.View} view
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.Presenter}
 */
nx.HousePresenter = function (view, ctx) {
    goog.base(this, view, ctx);
    log('nx.HousePresenter custom constructor ');
};
goog.inherits(nx.HousePresenter, nx.Presenter);
//-----------

/**
 * @return {nx.Presenter}
 */
nx.HousePresenter.prototype.init = function () {
    //log('nx.HousePresenter::init do AJAX ... ');
    var house = new nx.House('12 Maple Ln address', 3, 7);
    this.house_ = house;
    this.view_.getList().innerHTML = this.house_.getAddress();
    return this;
};

/**
 */
nx.HousePresenter.prototype.executeClick = function () {
    log('nx.HousePresenter::executeClick >');

    this.ctx_.getEventBus().fire(nx.Event.HOUSE_CLICK, {'b':1});
};

goog.exportSymbol('nx.HousePresenter', nx.HousePresenter);