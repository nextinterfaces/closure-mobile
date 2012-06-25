goog.provide('nx.CityView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.VerticalScrollView');
goog.require('nx.Widget');
goog.require('nx.soy.widgets');
goog.require('nx.NavigationContent');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 * @implements {nx.View}
 */
nx.CityView = function (parent) {
    goog.base(this, parent);
    var ele = goog.dom.createDom('div', {'id':this.getName()});

    this.widget_ = ele;

    var headerDiv = goog.dom.createDom('div', {'class':'navigationBar'});
    headerDiv.innerHTML = '<div>Cities</div>';
    var labelDiv = goog.dom.createDom('div', {'class':'xlabel Text'});
    var tabBar = goog.dom.createDom('div', {'class':'tabBar'});

    this.add(headerDiv);

    this.labelDiv_ = labelDiv;

    var navigationContent = new nx.NavigationContent(this);
    this.add(navigationContent);

    var scrollView = new nx.VerticalScrollView(this);
    var textDiv = goog.dom.createDom('div', {'id':'textDiv'});
    textDiv.innerHTML = nx.soy.widgets.getHTML();
    scrollView.setWidget(textDiv);
    navigationContent.add(scrollView);

//    this.add(labelDiv);
    this.add(tabBar);

    var btn1 = goog.dom.createDom('div', {'class':'tab selected', 'style':'width: 50%'});
    btn1.innerHTML = nx.soy.widgets.getTabButton(
        {title:'Cities', imgUrl:'images/tab0.png'}
    );
    tabBar.appendChild(btn1);

    var btn2 = goog.dom.createDom('div', {'class':'tab', 'style':'width: 50%'}, "Tab Two");
    btn2.innerHTML = nx.soy.widgets.getTabButton(
        {title:'Countries', imgUrl:'images/tab0.png'}
    );
    tabBar.appendChild(btn2);
    goog.events.listen(btn2, goog.events.EventType.CLICK, this.onTabAction(), false, this);
};
goog.inherits(nx.CityView, nx.Widget);

/**
 * @inheritDoc
 */
nx.CityView.prototype.getElement = function () {
    return this.widget_;
};

/**
 * @inheritDoc
 */
nx.CityView.prototype.setPresenter = function (presenter) {
    this.presenter_ = presenter;
};

/**
 * @inheritDoc
 */
nx.CityView.prototype.getName = function () {
    return "HouseView";
};

/**
 * @param {nx.City} data
 * @return {Element}
 */
nx.CityView.prototype.setData = function (data) {
    this.labelDiv_.innerHTML = data.getAddress();
};

/**
 * @return {function(Event)}
 */
nx.CityView.prototype.onTabAction = function () {
    return function (e) {
        log('onTabAction', e);
        e.stopPropagation();
        this.presenter_.executeClick();
    };
};