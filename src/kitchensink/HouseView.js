goog.provide('nx.HouseView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.SampleDragWidget');
goog.require('nx.VerticalScrollView');
goog.require('nx.Widget');
goog.require('nx.SampleWidget');
goog.require('nx.SampleSoyWidget');
goog.require('nx.soy.first');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 * @implements {nx.View}
 */
nx.HouseView = function (parent) {
    goog.base(this, parent);
    log('HouseView constructor...');
    var ele = goog.dom.createDom('div', {'id':this.getName()});

    this.widget_ = ele;

    var headerDiv = goog.dom.createDom('div', {'class':'navigationBar'}, 'House Title');
    var listDiv = goog.dom.createDom('div', {'id':'list', 'class': 'xlabel Text'});
    var btnsDiv = goog.dom.createDom('div', {'id':'btns'});

    this.add(headerDiv);
    this.add(listDiv);
    this.add(btnsDiv);

    this.listDiv_ = listDiv;

//    var dragBtn = new nx.SampleDragWidget(this);
//    this.add(dragBtn);
//
//    var wrappedWidg = new nx.SampleWidget(this);
//    this.add(wrappedWidg);
//
//    var soyWidg = new nx.SampleSoyWidget(this);
//    this.add(soyWidg);

    var scrollWrapper = goog.dom.createDom('div', {id:'scrollWrapper'});
    this.add(scrollWrapper);

    var scrollView = new nx.VerticalScrollView(this);
    var textDiv = goog.dom.createDom('div', {'id':'textDiv'});
    textDiv.innerHTML = nx.soy.first.getList();
    scrollView.setWidget(textDiv);
//    goog.dom.appendChild(scrollWrapper, scrollView.getElement());

    this.add(scrollView);

    var button = new goog.ui.CustomButton("Save");
    button.addClassName('xbtn');
    button.render(btnsDiv);
    goog.events.listen(
        button.getContentElement(),
        goog.events.EventType.CLICK,
        this.clickActionButton(), false, this);
};
goog.inherits(nx.HouseView, nx.Widget);

/**
 * @inheritDoc
 */
nx.HouseView.prototype.getElement = function () {
    return this.widget_;
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
nx.HouseView.prototype.getName = function () {
    return "HouseView";
};

/**
 * @return {Element}
 */
nx.HouseView.prototype.getList = function(){
    return this.listDiv_;
};

/**
 * @param {Element} element
 * @param {string} target
 * @return {function(goog.events.Event)}
 */
nx.HouseView.prototype.clickActionButton = function () {
    return function (e) {
        log(e);
        e.stopPropagation();
        this.presenter_.executeClick();
    };
};


goog.exportSymbol('nx.HouseView', nx.HouseView);

