goog.provide('nx.UserView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 * @implements {nx.View}
 */
nx.UserView = function (parent) {
    goog.base(this, parent);
    log('UserView constructor...');
    var ele = goog.dom.createDom('div', {'id':this.getName()});

    this.widget_ = ele;

    var headerDiv = goog.dom.createDom('h2', {'style': 'background-color:#EFE'}, 'UserView Title');
    var listDiv = goog.dom.createDom('div', {'id': 'list'});
    var btnsDiv = goog.dom.createDom('div', {'id': 'btns'});


    this.add(headerDiv);
    this.add(listDiv);
    this.add(btnsDiv);

    this.listDiv_ = listDiv;

    var button = new goog.ui.CustomButton("Save");
    button.addClassName('xbtn');
    button.render(btnsDiv);
    goog.events.listen(
        button.getContentElement(),
        goog.events.EventType.CLICK,
        this.clickActionButton(), false, this);
};
goog.inherits(nx.UserView, nx.Widget);

/**
 * @inheritDoc
 */
nx.UserView.prototype.getElement = function () {
    return this.widget_;
};

/**
 * @inheritDoc
 */
nx.UserView.prototype.setPresenter = function (presenter) {
    this.presenter_ = presenter;
};

/**
 * @inheritDoc
 */
nx.UserView.prototype.getName = function () {
    return "UserView";
};

/**
 * @return {Element}
 */
nx.UserView.prototype.getList = function(){
    return this.listDiv_;
};

/**
 * @param {Element} element
 * @param {string} target
 * @return {function(goog.events.Event)}
 */
nx.UserView.prototype.clickActionButton = function() {
    return function (e) {
        log(e);
        e.stopPropagation();
        this.presenter_.executeClick();
    };
};

goog.exportSymbol('nx.UserView', nx.UserView);

