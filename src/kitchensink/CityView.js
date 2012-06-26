goog.provide('nx.CityView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.VerticalScrollView');
goog.require('nx.Widget');
goog.require('nx.soy.cities');
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
    var tabBar = goog.dom.createDom('div', {'class':'tabBar'});

    this.add(headerDiv);

    var navigationContent = new nx.NavigationContent(this);
    this.add(navigationContent);

    var scrollView = new nx.VerticalScrollView(this);
    this.textDiv_ = goog.dom.createDom('div', {'id':'textDiv'});

    scrollView.setWidget(this.textDiv_);
    navigationContent.add(scrollView);

    this.add(tabBar);

    var btn1 = goog.dom.createDom('div', {'class':'tab selected', 'style':'width: 50%'});
    btn1.innerHTML = nx.soy.cities.getTabButton(
        {title:'Cities', imgUrl:'images/tab0-selected.png'}
    );
    tabBar.appendChild(btn1);

    var btn2 = goog.dom.createDom('div', {'class':'tab', 'style':'width: 50%'}, "Tab Two");
    btn2.innerHTML = nx.soy.cities.getTabButton(
        {title:'Countries', imgUrl:'images/tab1.png'}
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
    return "CityView";
};

/**
 * @param {nx.City} data
 * @return {Element}
 */
nx.CityView.prototype.setData = function (data) {
    this.textDiv_.innerHTML = nx.soy.cities.getHTML(data);
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