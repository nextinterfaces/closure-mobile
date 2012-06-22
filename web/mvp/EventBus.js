goog.provide('nx.EventBus');

goog.require('goog.pubsub.PubSub');

/**
 * @param {nx.Ctx} ctx
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
};

/**
 * @param {string} event
 * @param {function} eventHandler
 */
nx.EventBus.prototype.onEvent = function (event, eventHandlerFn) {
    this.pubsub_.subscribe(event, eventHandlerFn);
};

/**
 * @param {string} event
 * @param {function} valueObj
 */
nx.EventBus.prototype.fire = function (event, valueObj) {
    this.pubsub_.publish(event, valueObj);
};

goog.exportSymbol('nx.EventBus', nx.EventBus);


