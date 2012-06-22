goog.provide('nx.UserPresenter');

goog.require('goog.dom');
goog.require('nx.User');
goog.require('nx.UserView');
goog.require('nx.Event');

/**
 * @constructor
 * @extends {nx.Presenter}
 */
nx.UserPresenter = function (view, ctx) {
    goog.base(this, view, ctx);
    log('nx.UserPresenter custom constructor ');
};
goog.inherits(nx.UserPresenter, nx.Presenter);
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
 */
nx.UserPresenter.prototype.executeClick = function(){
    this.ctx_.getEventBus().fire(nx.Event.USER_CLICK, {'a':1});
};

goog.exportSymbol('nx.UserPresenter', nx.UserPresenter);