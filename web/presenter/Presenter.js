goog.provide('nx.Presenter');

goog.require('goog.dom');


/**
 * @interface
 */
nx.Presenter = function(){};

/**
 * @param {Element} container
 */
nx.Presenter.prototype.render = function(container){};

goog.exportSymbol('nx.Presenter', nx.Presenter);