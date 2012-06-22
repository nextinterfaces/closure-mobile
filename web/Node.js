goog.provide('nx.Node');

nx.NodeType = {
    ELEMENT_NODE:1,
    TEXT_NODE:3,
    DOCUMENT_NODE:9
};

nx.isNodeElement = function(o) {
    if (nx.isNodeDom(o)) {
        return nx.isNode(o);
    }
    return false;
};

/**
 * @param node
 * @return {Element}
 */
nx.getNodeParentElement = function (node) {
    var parent = node.parentNode;
    if (!parent || parent.nodeType != nx.NodeType.ELEMENT_NODE) {
        parent = null;
    }
    return parent;
};

/**
 * Determines whether the given {@link JavaScriptObject} is a DOM node. A
 * <code>null</code> object will cause this method to return
 * <code>false</code>.
 * The try catch is needed for the firefox permission error:
 * "Permission denied to access property 'nodeType'"
 */
nx.isNodeDom = function (o) {
    try {
        return (!!o) && (!!o.nodeType);
    } catch (e) {
        return false;
    }
};

/**
 *
 * @param node
 * @return {boolean}
 */
nx.isNode = function(node) {
    return goog.isDefAndNotNull(node) && (node.nodeType == nx.NodeType.ELEMENT_NODE);
};

nx.isHtmlFormControl = function(ele) {
    if (!goog.isDef(ele) || ele == null) {
        return false;
    }
//    log('>>>>>>>>>> isHtmlFormControl');
//    log(ele);
//    log(ele.nodeName);
    var nodeName = ele.nodeName.toUpperCase();
    var contains = goog.string.contains("BUTTON INPUT SELECT TEXTAREA", nodeName);
    return contains || nx.isHtmlFormControl(nx.getNodeParentElement(ele));
};