goog.provide('nx.UserPresenter');

goog.require('goog.dom');
goog.require('nx.User');
goog.require('nx.UserView');
goog.require('nx.Event');


/**
 * @constructor
 * @implements {nx.Presenter}
 */
nx.UserPresenter = function(view, ctx){
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

    //log('nx.UserPresenter constructor...');
};
//-----------


/**
 * @return {nx.Presenter}
 */
nx.UserPresenter.prototype.init = function(){
    //log('nx.UserPresenter::init do AJAX ... ');
    var u = new nx.User('Peter Gencha', '887 Botev Str', '604-123-2345');
    this.user_ = u;
    this.view_.getList().innerHTML = this.user_.getName();

    return this;
};

/**
 * @inheritDoc
 */
nx.UserPresenter.prototype.render = function(container){
    log('nx.UserPresenter::render container %o, view: %o', container, this.view_.get());

    // clear container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    // add to container
    container.appendChild(this.view_.get());
};


/**
 */
nx.UserPresenter.prototype.executeClick = function(){
    this.ctx_.getEventBus().fire(nx.Event.USER_CLICK, {'a':1});
};

goog.exportSymbol('nx.UserPresenter', nx.UserPresenter);