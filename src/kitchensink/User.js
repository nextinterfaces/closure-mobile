goog.provide('nx.User');

/**
 *
 * @param {string} name
 * @param {string} address
 * @param {string} phone
 * @constructor
 */
nx.User = function(name, address, phone){
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
nx.User.prototype.getName = function(){
    return this.name_;
};

/**
 * @return {string}
 */
nx.User.prototype.getAddress = function(){
    return this.name_;
};

/**
 * @return {string}
 */
nx.User.prototype.getPhone = function(){
    return this.phone_;
};

goog.exportSymbol('nx.User', nx.User);

