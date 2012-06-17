goog.provide('nx.HousePresenter');

goog.require('goog.dom');
goog.require('nx.House');
goog.require('nx.HouseView');
goog.require('nx.Event');


/**
 * @constructor
 * @implements {nx.Presenter}
 */
nx.HousePresenter = function(view, ctx){
    /**
     * @type {nx.Ctx}
     * @private
     */
    this.ctx_ = ctx;

    /**
     * @type {nx.HouseView}
     * @private
     */
    this.view_ = view;

    this.view_.setPresenter(this);

    //log('nx.HousePresenter constructor...');
};
//-----------

/**
 * @return {nx.Presenter}
 */
nx.HousePresenter.prototype.init = function(){
    //log('nx.HousePresenter::init do AJAX ... ');
    var house = new nx.House('12 Maple Ln address', 3, 7);
    this.house_ = house;
    this.view_.getList().innerHTML = this.house_.getAddress();

    return this;
};

/**
 * @inheritDoc
 */
nx.HousePresenter.prototype.render = function(container){
    log('nx.HousePresenter::render container %o, view: %o', container, this.view_.get());

    // clear container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    // add to container
    container.appendChild(this.view_.get());
};


/**
 */
nx.HousePresenter.prototype.executeClick = function(){
    log('nx.HousePresenter::executeClick >');

    this.ctx_.getEventBus().fire(nx.Event.HOUSE_CLICK, {'b':1});
};

goog.exportSymbol('nx.HousePresenter', nx.HousePresenter);