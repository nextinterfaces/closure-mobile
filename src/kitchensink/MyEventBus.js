goog.provide('nx.MyEventBus');

goog.require('nx.Event');
goog.require('nx.EventBus');
goog.require('nx.CityPresenter');
goog.require('nx.UserPresenter');

/**
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.EventBus}
 */
nx.MyEventBus = function (ctx) {
    goog.base(this, ctx);
    log('nx.MyEventBus constructor ');
    this.events(ctx);
};
goog.inherits(nx.MyEventBus, nx.EventBus);
//-----------

/**
 * @param {nx.Ctx} ctx
 */
nx.MyEventBus.prototype.events = function (ctx) {
    this.onEvent(nx.Event.CITY_TAB_CLICK, function (valueObj) {
        log('nx.Event.HOUSE_CLICK %o', valueObj);
        var ctx2 = ctx;
        new nx.UserPresenter(ctx2.getUserView(), ctx2).init().render(ctx2.getRoot());
    });

    this.onEvent(nx.Event.COUNTRY_TAB_CLICK, function (valueObj) {
        log('nx.Event.COUNTRY_TAB_CLICK %o', valueObj);
        var ctx2 = ctx;
        new nx.CityPresenter(ctx2.getHouseView(), ctx2).init().render(ctx2.getRoot());
    });
//  log('nx.Event.HOUSE_CLICK count ' + this.pubsub_.getCount(nx.Event.HOUSE_CLICK));
};

goog.exportSymbol('nx.MyEventBus', nx.MyEventBus);


