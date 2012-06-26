goog.provide('nx.City');

/**
 *
 * @param {string} name
 * @param {number=} phoneCode
 * @param {string} coatOfArms
 * @constructor
 */
nx.City = function (name, phoneCode, coatOfArms) {

    /**
     * @type {string}
     * @private
     */
    this.name = name;

    /**
     * @type {number}
     * @private
     */
    this.phoneCode = phoneCode;

    /**
     * @type {string}
     * @private
     */
    this.image = coatOfArms;
};

/**
 * @return {string}
 */
nx.City.prototype.getName = function () {
    return this.name;
};

/**
 * @return {number}
 */
nx.City.prototype.getPhoneCode = function () {
    return this.phoneCode;
};

/**
 * @return {string}
 */
nx.City.prototype.getImage = function () {
    return this.image;
};

