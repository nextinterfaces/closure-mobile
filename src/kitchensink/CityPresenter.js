goog.provide('nx.CityPresenter');

goog.require('goog.dom');
goog.require('nx.City');
goog.require('nx.CityView');
goog.require('nx.Event');
goog.require('nx.Presenter');

/**
 * @param {nx.View} view
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.Presenter}
 */
nx.CityPresenter = function (view, ctx) {
    goog.base(this, view, ctx);
};
goog.inherits(nx.CityPresenter, nx.Presenter);
//-----------

/**
 * @return {nx.Presenter}
 */
nx.CityPresenter.prototype.init = function () {
    var d = {cities:[
        new nx.City('Andorra la Vella', 376, 'i-andorra.png'),
        new nx.City('Budapest', 369, 'i-budapest.png'),
        new nx.City('Baile Atha Cliath', 357, 'i-dublin.png'),
        new nx.City('Copenhagen', 45, 'i-copenhagen.png'),
        new nx.City('Danzig', 48, 'i-dancig.png'),
        new nx.City('Den Haag', 70, 'i-haag.png'),
        new nx.City('Helsingfors', 358, 'i-helsinki.png'),
        new nx.City('Letzebuerg', 352, 'i-luxemburg.png'),
        new nx.City('Lisboa', 21, 'i-lisboa.png'),
        new nx.City('Podgorica', 382, 'i-podgorica.png'),
        new nx.City('Praha', 420, 'i-praha.png'),
        new nx.City('Saint-Tropez', 494, 'i-saint.png'),
        new nx.City('Sofia', 359, 'i-sofia.png'),
        new nx.City('Tallinn', 372, 'i-tallinn.png'),
        new nx.City('Tinahely', 402, 'i-tinahely.png'),
        new nx.City('Wien', 43, 'i-wien.png')
    ]};
    this.view_.setData(d);
    return this;
};

/**
 */
nx.CityPresenter.prototype.executeClick = function () {
    log('nx.CityPresenter::executeClick >');

    this.ctx_.getEventBus().fire(nx.Event.CITY_TAB_CLICK, {'b':1});
};
