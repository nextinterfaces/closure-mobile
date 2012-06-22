goog.provide('nx.View');

goog.require('goog.dom');

/**
 * @interface
 */
nx.View = function(){};

/**
 * return {string} name of the View
 */
nx.View.prototype.getName = function(){};

/**
 * @param {nx.Presenter} presenter
 */
nx.View.prototype.setPresenter = function (presenter) {};

goog.exportSymbol('nx.View', nx.View);