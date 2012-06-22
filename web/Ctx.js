goog.provide('nx.Ctx');

goog.require('nx.EventBus');
goog.require('nx.House');
goog.require('nx.HouseView');
goog.require('nx.HousePresenter');
goog.require('nx.UserView');
goog.require('nx.Util');
goog.require('nx.Id');

/**
 * @constructor
 */
nx.Ctx = function () {

    /**
     * @type {nx.EventBus}
     * @private
     */
    this.eventBus_ = new nx.EventBus(this);

    /**
     * @type {nx.HouseView}
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
 * @return {nx.HouseView}
 */
nx.Ctx.prototype.getHouseView = function () {
    if (!goog.isDef(this.houseView_)) {
        this.houseView_ = new nx.HouseView(this.getRoot());
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

