goog.provide('nx.MyEventBus');

goog.require('goog.pubsub.PubSub');
goog.require('nx.Event');
goog.require('nx.HousePresenter');
goog.require('nx.UserPresenter');

/**
 * @param {nx.Ctx} ctx
 * @constructor
 * @extends {nx.EventBus}
 */
nx.MyEventBus = function (ctx) {
    goog.base(this, ctx);
    log('nx.MyEventBus custom constructor ');
};
goog.inherits(nx.MyEventBus, nx.EventBus);
//-----------

/**
 */
nx.MyEventBus.prototype.events = function (ctx, pubsub) {
    this.subscribe(nx.Event.HOUSE_CLICK, function (valueObj) {
        log('nx.Event.HOUSE_CLICK %o', valueObj);
        var ctx2 = ctx;
        new nx.UserPresenter(ctx2.getUserView(), ctx2).init().render(ctx2.getRoot());
    });

    this.subscribe(nx.Event.USER_CLICK, function (valueObj) {
        log('nx.Event.USER_CLICK %o', valueObj);
        var ctx2 = ctx;
        new nx.HousePresenter(ctx2.getHouseView(), ctx2).init().render(ctx2.getRoot());
    });
//  log('nx.Event.HOUSE_CLICK count ' + this.pubsub_.getCount(nx.Event.HOUSE_CLICK));
};

goog.exportSymbol('nx.MyEventBus', nx.MyEventBus);


