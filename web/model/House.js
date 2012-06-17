goog.provide('nx.House');

/**
 *
 * @param {string} address
 * @param {number=} numBaths
 * @param {Array.<Object>=} itemsGarage
 * @constructor
 */
nx.House = function(address, numBaths, itemsGarage){

    /**
     * @type {string}
     * @private
     */
    this.address_ = address;

    if(goog.isDef(numBaths)){
        this.numBaths_ = numBaths;
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
nx.House.prototype.numBaths_ = 1;

/**
 * @type {boolean}
 * @private
 */
nx.House.prototype.needsPaint_ = true;


/**
 * @return {string}
 */
nx.House.prototype.getAddress = function(){
    //log('nx.House getAddress ...');
    return this.address_;
};

/**
 * @return {number}
 */
nx.House.prototype.getNumBaths = function(){
    return this.numBaths_;
};

/**
 * @return {boolean}
 */
nx.House.prototype.isNeedsPaint = function(){
    return this.needsPaint_;
};

/**
 * @param {boolean} x
 */
nx.House.prototype.setNeedsPaint = function(x){
    this.needsPaint_ = x;
};

/**
 * @param {string} color
 */
nx.House.prototype.paint = function(color){
    log('nx.House paint ... ' + color);
};

/**
 * @return {number}
 */
nx.House.prototype.getNumItemsInGarage = function(){
    return this.itemsGarage.length;
};

/**
 * Abstract method
 */
nx.House.prototype.myAbstractMethod = goog.abstractMethod;


goog.exportSymbol('nx.House', nx.House);

