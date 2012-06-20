goog.provide('nx.Widget');

goog.require('goog.dom');

/**
 * @constructor
 */
nx.Widget = function () {};

/**
 * invoked when widget is attached to DOM
 * @type {Function}
 */
nx.Widget.prototype.onAttach = goog.abstractMethod;

/**
 * invoked when widget is detached from DOM
 * @type {Function}
 */
nx.Widget.prototype.onDetach = goog.abstractMethod;

/**
 * @type {Function}
 */
nx.Widget.prototype.getElement = goog.abstractMethod;

/**
 * @param {Element} parentEle
 */
nx.Widget.prototype.attach = function(parentEle){
    parentEle.appendChild(this.getElement());
//    this.getElement().render(parentEle);
    this.onAttach();
};

/**
 * @param {Element} parentEle
 */
nx.Widget.prototype.detach = function(parentEle){
    parentEle.removeChild(this.getElement());
    this.onDetach();
};

goog.exportSymbol('nx.Widget', nx.Widget);