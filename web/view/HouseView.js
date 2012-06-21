goog.provide('nx.HouseView');

goog.require('goog.dom');
goog.require('goog.ui.CustomButton');
goog.require('nx.DragButton');
goog.require('nx.VerticalScrollView');
goog.require('nx.Widget');
goog.require('nx.WrapperWidget');

/**
 * @param {nx.Widget|Element} parent
 * @constructor
 * @extends {nx.Widget}
 * @implements {nx.View}
 */
nx.HouseView = function (parent) {
    goog.base(this, parent);
    var ele = goog.dom.createDom('div', {'id':this.getName()});

    this.widget_ = ele;

//    var headerDiv = goog.dom.createDom('h2', {'style':'background-color:#EFE'}, 'HouseView Title');
//    var listDiv = goog.dom.createDom('div', {'id':'list'});
//    var btnsDiv = goog.dom.createDom('div', {'id':'btns'});
//    var wrapperDiv = goog.dom.createDom('div', {'id':this.getName()});

    var dragBtn = new nx.DragButton(this);
    this.add(dragBtn);

    var wrappedWidg = new nx.WrapperWidget(this);
    this.add(wrappedWidg);



//    /////
//    var scrollView = new nx.VerticalScrollView();
//    var textDiv = goog.dom.createDom('div', {'id':'textDiv'});
//    textDiv.innerHTML = '111111<br>2222<br>3333<br>';
//    scrollView.add(textDiv);
//    /////
//
//    wrapperDiv.appendChild(headerDiv);
//    wrapperDiv.appendChild(listDiv);
////    dragBtn.add(wrapperDiv);
////    wrapperDiv.appendChild(dragBtn.getElement());
//
//    var wrapperWidg = new nx.WrapperWidget(wrapperDiv);
//    wrapperDiv.appendChild(wrapperWidg.getElement());
//    wrapperWidg.add(dragBtn);
//
//    wrapperDiv.appendChild(scrollView.getElement());
//    wrapperDiv.appendChild(btnsDiv);
//
//    this.wrapperDiv_ = wrapperDiv;
//    this.listDiv_ = listDiv;
//
//    var button = new goog.ui.CustomButton("Save");
//    button.addClassName('xbtn');
//    button.render(btnsDiv);
//    goog.events.listen(
//        button.getContentElement(),
//        goog.events.EventType.CLICK,
//        this.clickActionButton(), false, this);
//    //log('HouseView constructor...');
};
goog.inherits(nx.HouseView, nx.Widget);

/**
 * @inheritDoc
 */
nx.HouseView.prototype.onAttach = function () {
    log('[[[[ HouseView ]]]] onAttach');
};

/**
 * @inheritDoc
 */
nx.HouseView.prototype.onDetach = function () {
    log('[[[[ HouseView ]]]] onDetach');
};

/**
 * @inheritDoc
 */
nx.HouseView.prototype.getElement = function () {
    return this.widget_;
};

/**
 * @return {Element}
 */
nx.HouseView.prototype.getList = function () {
    return this.listDiv_;
};

///**
// * @return {Element}
// */
//nx.HouseView.prototype.get = function () {
//    return this.wrapperDiv_;
//};

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
 *
 * @param {tutorial.tasks.Task} task
 * @param {Element} element
 * @param {string} target
 *
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


//
///**
// * @param {nx.Widget|Element} parent
// * @constructor
// * @extends {nx.Widget}
// * @return {Element}
// */
//nx.WrapperWidget = function (parent) {
////    nx.Widget.call(this, parent);
//    goog.base(this, parent);
//    var ele = goog.dom.createDom('div', {'id':'wrapper-widget'});
//
//    this.widget_ = ele;
//};
//goog.inherits(nx.WrapperWidget, nx.Widget);
//
///**
// * @inheritDoc
// */
//nx.WrapperWidget.prototype.onAttach = function (e) {
//    log('[[[[ WrapperWidget ]]]] onLoad', e);
//    nx.DragController.getInstance().addDragEventsHandler(this);
//};
//
///**
// * @inheritDoc
// */
//nx.WrapperWidget.prototype.onDetach = function (e) {
//    log('[[[[ WrapperWidget ]]]] onUnload', e);
//    nx.DragController.getInstance().removeDragEventsHandler(this);
//};
//
///**
// * @inheritDoc
// */
//nx.WrapperWidget.prototype.getElement = function () {
//    return this.widget_;
//};

