goog.provide('nx.Presenter');

goog.require('goog.dom');

/**
 * @param {nx.View} view
 * @param {nx.Ctx} ctx
 * @constructor
 */
nx.Presenter = function (view, ctx) {
    log('nx.Presenter constructor');
    /**
     * @type {nx.Ctx}
     * @private
     */
    this.ctx_ = ctx;

    /**
     * @type {nx.View}
     * @private
     */
    this.view_ = view;

    this.view_.setPresenter(this);
};

/**
 * @param {Element} container
 */
nx.Presenter.prototype.render = function (container) {
    log('nx.Presenter::render container %o, view: %o', container, this.view_.getElement());

    if (this.view_ instanceof nx.Widget) {
        this.view_.render(container);

    } else {
//        // clear container
//        while (container.hasChildNodes()) {
//            container.removeChild(container.lastChild);
//        }
//        // add to container
////        container.appendChild(this.view_.getElement());
        goog.dom.removeChildren(container);
        goog.dom.appendChild(container, this.view_.getElement());
    }
};

/**
 * @param {nx.View} presenter
 */
nx.Presenter.prototype.getView = goog.abstractMethod;

goog.exportSymbol('nx.Presenter', nx.Presenter);