goog.provide('nx.EventBus');

goog.require('goog.pubsub.PubSub');
goog.require('nx.Event');
goog.require('nx.HousePresenter');
goog.require('nx.UserPresenter');

/**
 * @constructor
 */
nx.EventBus = function (ctx) {
    log('nx.EventBus::constructor ');
    /**
     * @type {nx.Ctx}
     * @private
     */
    this.ctx_ = ctx;
    /**
     * @type {goog.pubsub.PubSub}
     * @private
     */
    this.pubsub_ = new goog.pubsub.PubSub();

    this.init(ctx, this.pubsub_);
};

/**
 */
nx.EventBus.prototype.init = function (ctx, pubsub) {
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

/**
 * @param {nx.Event} event
 * @param {function} eventHandler
 */
nx.EventBus.prototype.subscribe = function (event, eventHandlerFn) {
    this.pubsub_.subscribe(event, eventHandlerFn);
};

/**
 * @param {nx.Event} event
 * @param {function} valueObj
 */
nx.EventBus.prototype.fire = function (event, valueObj) {
    this.pubsub_.publish(event, valueObj);
};

goog.exportSymbol('nx.EventBus', nx.EventBus);


