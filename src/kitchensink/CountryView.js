goog.provide('nx.UserView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.soy.countries');

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

    var headerDiv = goog.dom.createDom('div', {'class':'navigationBar'});
    headerDiv.innerHTML = '<div>Countries</div>';
    var labelDiv = goog.dom.createDom('div', {'class':'xlabel Text'});
    var tabBar = goog.dom.createDom('div', {'class':'tabBar'});

    this.add(headerDiv);

    this.labelDiv_ = labelDiv;

    var navigationContent = new nx.NavigationContent(this);
    this.add(navigationContent);

    var scrollView = new nx.VerticalScrollView(this);
    var textDiv = goog.dom.createDom('div', {'id':'textDiv'});
    textDiv.innerHTML = nx.soy.countries.getHTML(
        {'countries': [
            'Bulgaria',
            'Croatia',
            'Czech Republic',
            'Denmark',
            'Estonia',
            'Finland',
            'France',
            'Germany',
            'Hungary',
            'Ireland']}
    );
    scrollView.setWidget(textDiv);
    navigationContent.add(scrollView);

    this.add(tabBar);

    var btn1 = goog.dom.createDom('div', {'class':'tab', 'style': 'width: 50%'});
    btn1.innerHTML = nx.soy.widgets.getTabButton(
        {title:'Cities', imgUrl:'images/tab0.png'}
    );
    tabBar.appendChild(btn1);
    goog.events.listen(btn1, goog.events.EventType.CLICK, this.onTabAction(), false, this);

    var btn2 = goog.dom.createDom('div', {'class':'tab selected', 'style': 'width: 50%'}, "Tab Two");
    btn2.innerHTML = nx.soy.widgets.getTabButton(
        {title:'Countries', imgUrl:'images/tab0.png'}
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

