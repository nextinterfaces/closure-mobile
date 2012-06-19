goog.provide('nx.HouseView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.DragButton');
goog.require('nx.VerticalScrollView');

/**
 * @constructor
 * @implements {nx.View}
 */
nx.HouseView = function(){
    var headerDiv = goog.dom.createDom('h2', {'style': 'background-color:#EFE'}, 'HouseView Title');

    var listDiv = goog.dom.createDom('div', {'id': 'list'});

    var btnsDiv = goog.dom.createDom('div', {'id': 'btns'});

    var wrapperDiv = goog.dom.createDom('div', {'id': this.getName()});

    var dragBtn = new nx.DragButton();
    /////
    var scrollView = new nx.VerticalScrollView();
    var textDiv = goog.dom.createDom('div', {'id': 'textDiv'});
    textDiv.innerHTML = 'aaaa<br>bbbb<br>ccccc';
    scrollView.add(textDiv);
    /////

    wrapperDiv.appendChild(headerDiv);
    wrapperDiv.appendChild(listDiv);
    wrapperDiv.appendChild(dragBtn.getElement());
    wrapperDiv.appendChild(scrollView.getElement());
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
    //log('HouseView constructor...');
};

/**
 * @return {Element}
 */
nx.HouseView.prototype.getList = function(){
    return this.listDiv_;
};

/**
 * @return {Element}
 */
nx.HouseView.prototype.get = function(){
    return this.wrapperDiv_;
};

/**
 * @inheritDoc
 */
nx.HouseView.prototype.setPresenter = function (presenter) {
    this.presenter_ = presenter;
};

/**
 * @inheritDoc
 */
nx.HouseView.prototype.getName = function(){
    return "HouseView";
};

/**
 *
 * @param {tutorial.tasks.Task} task
 * @param {Element} element
 * @param {string} target
 *
 * @return {function(goog.events.Event)}
 */
nx.HouseView.prototype.clickActionButton = function() {
    return function (e) {
        log(e);
        e.stopPropagation();
        this.presenter_.executeClick();
    };
};


goog.exportSymbol('nx.HouseView', nx.HouseView);

