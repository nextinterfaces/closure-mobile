goog.provide('nx.UserView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');


/**
 * @constructor
 * @implements {nx.View}
 */
nx.UserView = function(){
    var headerDiv = goog.dom.createDom('h2', {'style': 'background-color:#EFE'}, 'UserView Title');

    var listDiv = goog.dom.createDom('div', {'id': 'list'});

    var btnsDiv = goog.dom.createDom('div', {'id': 'btns'});

    var wrapperDiv = goog.dom.createDom('div', {'id': this.getName()});

    wrapperDiv.appendChild(headerDiv);
    wrapperDiv.appendChild(listDiv);
    wrapperDiv.appendChild(btnsDiv);

    this.wrapperDiv_ = wrapperDiv;
    this.listDiv_ = listDiv;

    var button = new goog.ui.CustomButton("Save");
    button.addClassName('xbtn');
    button.render(btnsDiv);
    goog.events.listen(
        button.getContentElement(),
        goog.events.EventType.CLICK,
        this.clickActionButton(), false, this);

    //log('UserView::constructor...');
};

/**
 * @return {Element}
 */
nx.UserView.prototype.getList = function(){
    return this.listDiv_;
};

/**
 * @return {Element}
 */
nx.UserView.prototype.get = function(){
    return this.wrapperDiv_;
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
nx.UserView.prototype.getName = function(){
    return "UserView";
};

/**
 *
 * @param {tutorial.tasks.Task} task
 * @param {Element} element
 * @param {string} target
 *
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

