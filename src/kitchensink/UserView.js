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
//    goog.base(this, parent);
//    log('UserView constructor...');
//    var ele = goog.dom.createDom('div', {'id':this.getName()});
//
//    this.widget_ = ele;
//
//    var headerDiv = goog.dom.createDom('h2', {'style': 'background-color:#EFE'}, 'UserView Title');
//    var listDiv = goog.dom.createDom('div', {'id': 'list'});
//    var btnsDiv = goog.dom.createDom('div', {'id': 'btns'});
//
//
//    this.add(headerDiv);
//    this.add(listDiv);
//    this.add(btnsDiv);
//
//    this.labelDiv_ = listDiv;
//
//    var button = new goog.ui.CustomButton("Save");
//    button.addClassName('xbtn');
//    button.render(btnsDiv);
//    goog.events.listen(
//        button.getContentElement(),
//        goog.events.EventType.CLICK,
//        this.onTabAction(), false, this);



    ////////////
    goog.base(this, parent);
    log('UserView constructor...');
    var ele = goog.dom.createDom('div', {'id':this.getName()});

    this.widget_ = ele;

    var headerDiv = goog.dom.createDom('div', {'class':'navigationBar'});
    headerDiv.innerHTML = '<div>House Title</div>';
    var labelDiv = goog.dom.createDom('div', {'class':'xlabel Text'});
    var tabBar = goog.dom.createDom('div', {'class':'tabBar'});

    this.add(headerDiv);

    this.labelDiv_ = labelDiv;

    var navigationContent = new nx.NavigationContent(this);
    this.add(navigationContent);

    var scrollView = new nx.VerticalScrollView(this);
    var textDiv = goog.dom.createDom('div', {'id':'textDiv'});
    textDiv.innerHTML = nx.soy.first.getList();
    scrollView.setWidget(textDiv);
    navigationContent.add(scrollView);

//    this.add(labelDiv);
    this.add(tabBar);

    var btn1 = goog.dom.createDom('div', {'class':'tab', 'style': 'width: 50%'});
    btn1.innerHTML = nx.soy.first.getTabButton(
        {title:'Tab One', imgUrl:'images/tab0.png'}
    );
    tabBar.appendChild(btn1);
    goog.events.listen(btn1, goog.events.EventType.CLICK, this.onTabAction(), false, this);

    var btn2 = goog.dom.createDom('div', {'class':'tab selected', 'style': 'width: 50%'}, "Tab Two");
    btn2.innerHTML = nx.soy.first.getTabButton(
        {title:'Tab Two', imgUrl:'images/tab0.png'}
    );
    tabBar.appendChild(btn2);
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
    return this.labelDiv_;
};

/**
 * @return {function(Event)}
 */
nx.UserView.prototype.onTabAction = function() {
    return function (e) {
        log(e);
        e.stopPropagation();
        this.presenter_.executeClick();
    };
};

goog.exportSymbol('nx.UserView', nx.UserView);

