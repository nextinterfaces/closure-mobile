goog.provide('nx.Country');

/**
 *
 * @param {string} name
 * @param {string} flag
 * @constructor
 */
nx.Country = function (name, flag) {
    /**
     * @type {string}
     * @private
     */
    this.name = name;
    /**
     * @type {string}
     * @private
     */
    this.flag = flag;
};

/**
 * @return {string}
 */
nx.Country.prototype.getName = function () {
    return this.name;
};

/**
 * @return {string}
 */
nx.Country.prototype.getFlag = function () {
    return this.flag;
};

goog.exportSymbol('nx.Country', nx.Country);

