goog.provide('nx.Ctx');

goog.require('nx.City');
goog.require('nx.CityView');
goog.require('nx.CityPresenter');
goog.require('nx.UserView');
goog.require('nx.Util');
goog.require('nx.Id');
goog.require('nx.MyEventBus');

/**
 * @constructor
 */
nx.Ctx = function () {

    /**
     * @type {nx.EventBus}
     * @private
     */
    this.eventBus_ = new nx.MyEventBus(this);

    /**
     * @type {nx.CityView}
     * @private
     */
    this.houseView_;

    /**
     * @type {nx.UserView}
     * @private
     */
    this.userView_;

    // Instantiate master root div
    this.getRoot();

    log('nx.Ctx::constructor');
};
// make singleton
goog.addSingletonGetter(nx.Ctx);

/**
 * @return {nx.EventBus}
 */
nx.Ctx.prototype.getEventBus = function () {
    return this.eventBus_;
};

/**
 * @return {nx.CityView}
 */
nx.Ctx.prototype.getHouseView = function () {
    if (!goog.isDef(this.houseView_)) {
        this.houseView_ = new nx.CityView(this.getRoot());
    }
    return this.houseView_;
};

/**
 * @return {nx.UserView}
 */
nx.Ctx.prototype.getUserView = function () {
    if (!goog.isDef(this.userView_)) {
        this.userView_ = new nx.UserView(this.getRoot());
    }
    return this.userView_;
};

/**
 * @return {Element}
 */
nx.Ctx.prototype.getRoot = function () {
    if (!goog.isDef(this.root_)) {
        this.root_ = goog.dom.createDom('div', {'id':nx.Id.ROOT});
        goog.dom.appendChild(document.body, this.root_);
    }
    return this.root_;
};

goog.exportSymbol('nx.Ctx', nx.Ctx);

