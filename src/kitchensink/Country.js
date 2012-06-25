goog.provide('nx.Country');

/**
 *
 * @param {string} name
 * @param {string} address
 * @param {string} phone
 * @constructor
 */
nx.Country = function(name, address, phone){
    /**
     * @type {string}
     * @private
     */
    this.name_ = name;
    /**
     * @type {string}
     * @private
     */
    this.name_ = address;
    /**
     * @type {string}
     * @private
     */
    this.phone_ = phone;
};

/**
 * @return {string}
 */
nx.Country.prototype.getName = function(){
    return this.name_;
};

/**
 * @return {string}
 */
nx.Country.prototype.getAddress = function(){
    return this.name_;
};

/**
 * @return {string}
 */
nx.Country.prototype.getPhone = function(){
    return this.phone_;
};

goog.exportSymbol('nx.Country', nx.Country);

