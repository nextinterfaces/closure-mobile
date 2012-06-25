goog.provide('nx.City');

/**
 *
 * @param {string} name
 * @param {number=} phoneCode
 * @param {Array.<Object>=} itemsGarage
 * @constructor
 */
nx.City = function(name, phoneCode, itemsGarage){

    /**
     * @type {string}
     * @private
     */
    this.name_ = name;

    if(goog.isDef(phoneCode)){
        this.phoneCode_ = phoneCode;
    }

    /**
     * @type {Array.<Object>}
     * @protected
     */
    this.itemsGarage = goog.isDef(itemsGarage) ? itemsGarage : [];
};

/**
 * @type {number}
 * @private
 */
nx.City.prototype.phoneCode_ = 1;

/**
 * @type {boolean}
 * @private
 */
nx.City.prototype.needsPaint_ = true;


/**
 * @return {string}
 */
nx.City.prototype.getAddress = function(){
    //log('nx.City getAddress ...');
    return this.name_;
};

/**
 * @return {number}
 */
nx.City.prototype.getNumBaths = function(){
    return this.phoneCode_;
};

/**
 * @return {boolean}
 */
nx.City.prototype.isNeedsPaint = function(){
    return this.needsPaint_;
};

/**
 * @param {boolean} x
 */
nx.City.prototype.setNeedsPaint = function(x){
    this.needsPaint_ = x;
};

/**
 * @param {string} color
 */
nx.City.prototype.paint = function(color){
    log('nx.City paint ... ' + color);
};

/**
 * @return {number}
 */
nx.City.prototype.getNumItemsInGarage = function(){
    return this.itemsGarage.length;
};

/**
 * Abstract method
 */
nx.City.prototype.myAbstractMethod = goog.abstractMethod;

