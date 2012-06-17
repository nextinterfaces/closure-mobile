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


///////////////////
/*
 var pubsub = new goog.pubsub.PubSub();
 log('nx.Main::pubsub ' + pubsub.getCount('foo'));

 var foo1 = function(a, b, fn){
 log('published ' + a + '-' + b + '-' + fn);
 if(nx.Util.isFunc(fn)){
 fn.call();

 } else {
 log('not a function');
 }
 };
 pubsub.subscribe('foo', foo1);
 pubsub.subscribe('boo', foo1);
 //pubsub.subscribe('foo', foo1);
 //log('nx.Main::pubsub ' + pubsub.getCount('foo'));
 //pubsub.unsubscribe('foo', foo1);

 log('nx.Main::pubsub ' + pubsub.getCount('foo'));


 setTimeout(function(){
 log('---------1---------');
 pubsub.publish('foo', 'x', 'y', function(){
 log('a publish func');

 log('nx.Main::pubsub ' + nx.Util.startsWith('foo  444', 'fooe'));
 });
 log('---------2---------');
 pubsub.publish('foo', 'x', 'y','z');
 }, 1000);
 */
//////////////////////


/*


 //////////////////////

 // Number of times handlers have been called.
 var actionCount = 0;
 var changeCount = 0;

 // Generic event handler class.
 function Handler() {
 }
 Handler.prototype.handleAction = function(e,a,b) {
 actionCount++;
 log('>handleAction ' + actionCount + ' param0 ' + e + ' param1 ' + a);
 log(e);

 var t = e.target;
 log('>event.target: ');
 log(t);
 };
 Handler.prototype.handleChange = function() {
 changeCount++;
 log('2 handleChange ' + changeCount);
 };


 //-------------
 // EventTarget subclass; uses goog.events.* to dispatch events.
 function Target() {
 goog.events.EventTarget.call(this);
 }
 goog.inherits(Target, goog.events.EventTarget);
 Target.prototype.fireEvent = function(type, a) {
 log('>> Target.prototype.fireEvent ' + a);
 this.dispatchEvent(type, a);
 };
 Target.prototype.setValue = function(val) {
 log('>>Target.prototype.setValue ' + val);
 this.value_ = val;
 };
 //-------------

 var ACTION = 'ACTION';
 var CHANGE = 'CHANGE';

 var h1 = new Handler();
 var t1 = new Target();

 goog.events.listen(t1, ACTION, Handler.prototype.handleAction,
 false, h1);
 goog.events.listen(t1, CHANGE, Handler.prototype.handleChange,
 false, h1);

 setTimeout(function(){
 log('---------1---------');
 t1.setValue(function(zxc){});
 t1.fireEvent(ACTION, 'x', 'a1110000');
 t1.fireEvent(CHANGE);
 }, 2000);


 setTimeout(function(){
 log('---------2---------');
 t1.setValue('aaaa');
 t1.fireEvent(CHANGE);
 }, 2010);
 //////////////////////

 */

