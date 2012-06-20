goog.provide('nx.Fx');

/**
 * @return {boolean}
 */
nx.Fx.supportOrientation = function () {
    var b = ('onorientationchange' in window);
    return (b != null && b == true);
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getStyleTop = function (ele) {
    var style = ele.style;
    var top = style['top'];
    if (goog.string.isEmpty(top)) {
        return 0;
    } else {
        return parseFloat(top.replace('px', ''));
    }
};

/**
 * @param {Element} ele
 * @param {number} top
 */
nx.Fx.setStyleTop = function (ele, top) {
    var style = ele.style;
    style['top'] = top;
};

/**
 * @param {Element} ele
 * @param {number} y
 */
nx.Fx.setTranslateY = function (ele, y) {
    ele.style.webkitTransform = 'translate3d(0px, ' + y + 'px ,0px)';
};


/**
 * @param {Element} ele
 * @param {number} x
 */
nx.Fx.setTranslateX = function (ele, x) {
    ele.style.webkitTransform = 'translate3d(' + x + 'px ,0px,0px)';
};

/**
 * @param {Element} ele
 * @param {number} x
 * @param {number} y
 */
nx.Fx.setTranslateXY = function (ele, x, y) {
    ele.style.webkitTransform = 'translate3d(' + x + 'px ,' + y + 'px,0px)';
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getTranslateX = function (ele) {
    var transform = ele.style.webkitTransform;
    var translateX = 0;
    if (transform && transform !== '') {
        // this fails with IndexOutOfBounds error
        //			translateX = parseInt((/translate3d\((\-?.*)px, 0px, 0px\)/).exec(transform)[1]);
        var s = transform.replace('translate3d(', '').replace(')', '');
        var arr = s.split('px,');
        //console.log( 'transform=' + transform + ' [0]=' + arr[0] + '');
        translateX = parseInt(arr[0]);
    }
    return translateX;
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getTranslateY = function (ele) {
    var transform = ele.style.webkitTransform;
    var translateY = 0;
    if (transform && transform !== '') {
        // this fails with IndexOutOfBounds error
        // var v = (/translate3d\(0px, (\-?.*)px, 0px\)/).exec(transform);
        // translateY = parseInt(v[1]);
        var s = transform.replace('translate3d(', '').replace(')', '');
        var arr = s.split('px,');
        //console.log( 'transform=' + transform + ' [1]=' + arr[1] + '');
        translateY = parseInt(arr[1]);
    }
    //console.log( ele);
    //console.log(' translateY=' + translateY + '');
    return translateY;
};

/**
 * @param {Element} ele
 */
nx.Fx.debug = function (ele) {
    console.log('ele.style.webkitTransitionProperty: ' + ele.style.webkitTransitionProperty);
    console.log('ele.style.webkitTransitionDuration: ' + ele.style.webkitTransitionDuration);
    console.log('ele.style.webkitTransitionTimingFunction: ' + ele.style.webkitTransitionTimingFunction);
};

/**
 * @param {Element} ele
 * @param {string} property
 */
nx.Fx.setTransitionTimingFunction = function (ele, property) {
    //		ele.style.webkitTransitionTimingFunction = '' + value + 'ms';
    //		ele.style.webkitTransitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
    ele.style.webkitTransitionTimingFunction = property;
};

/**
 * @param {Element} ele
 * @param {number} value
 */
nx.Fx.setTransitionDuration = function (ele, value) {
    ele.style.webkitTransitionDuration = '' + value + 'ms';
};

/**
 * @param {Element} ele
 * @param {string} property
 */
nx.Fx.setTransitionProperty = function (ele, property) {
    ele.style.webkitTransitionProperty = property;
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getMatrixX = function (ele) {
    var matrix = new WebKitCSSMatrix(
        window.getComputedStyle(ele).webkitTransform);
    //console.log( 'XX: a:' + matrix.a + ' b:' + matrix.b + ' c:' + matrix.c + ' d:' + matrix.d + ' e:' + matrix.e + ' f:' + matrix.f + ' ');
    return matrix.e;
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getMatrixY = function (ele) {
    var matrix = new WebKitCSSMatrix(
        window.getComputedStyle(ele).webkitTransform);
    //console.log( 'YY: a:' + matrix.a + ' b:' + matrix.b + ' c:' + matrix.c + ' d:' + matrix.d + ' e:' + matrix.e + ' f:' + matrix.f + ' ');
    return matrix.f;
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getHeight = function (ele) {
    return parseInt(document.defaultView.getComputedStyle(ele, '')
        .getPropertyValue('height'));
};

/**
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getWidth = function (ele) {
    return parseInt(document.defaultView.getComputedStyle(ele, '')
        .getPropertyValue('width'));
};

/**
 *
 * @param {Element} ele
 * @return {number}
 */
nx.Fx.getOffsetHeight = function (ele) {
    return ele.offsetHeight || 0;
};

////return double
//nx.Fx.getStyleLeft = function(Element el) {
//    Style style = el.getStyle();
//    String left = style.getLeft();
//    if (left.isEmpty()) {
//        return 0;
//    } else {
//        return Double.parseDouble(left.replace('px', ''));
//    }
//}
//
////return double
//nx.Fx.getStyleLeft = function(Widget w) {
//    Style style = w.getElement().getStyle();
//    String left = style.getLeft();
//    if (left.isEmpty()) {
//        return 0;
//    } else {
//        return Double.parseDouble(left.replace('px', ''));
//    }
//}
//
////void
//nx.Fx.setStyleLeft = function(Widget w, double letf) {
//    Style style = w.getElement().getStyle();
//    style.setLeft(letf, Unit.PX);
//}
//
////return double
//nx.Fx.getStyleTop = function(Widget w) {
//    Style style = w.getElement().getStyle();
//    String top = style.getTop();
//    if (top.isEmpty()) {
//        return 0;
//    } else {
//        return Double.parseDouble(top.replace('px', ''));
//    }
//}
//
//// void
//nx.Fx.setStyleTop = function(Widget w, double top) {
//    Style style = w.getElement().getStyle();
//    style.setTop(top, Unit.PX);
//}
//
//// void
//nx.Fx.fadeIn = function(Element ele) {
//    fadeIn(ele, 250, null);
//}
//
//// void
//nx.Fx.fadeIn = function(final Element ele, final double duration, final Command onComplete) {
//
////		final Element ele = obj.getElement();
//
//    // obj.setVisible(false);
//    ele.getStyle().setOpacity(0);
//    setTransitionProperty(ele, 'opacity');
//    setTransitionDuration(ele, duration);
//
//    new Timer() {
//        public void run() {
//            UIObject.setVisible(ele, true);
//            ele.getStyle().setOpacity(1);
//            if (onComplete != null) {
//                new Timer() {
//                    public void run() {
//                        onComplete.execute();
//                    }
//                }.schedule((int)duration);
//            }
//        }
//    }.schedule(10);
//}
//
//// void
//nx.Fx.fadeOut = function(Element ele) {
//    fadeOut(ele, 250, null);
//
//}
//
//// void
//nx.Fx.fadeOut = function(final Element ele, final double duration, final Command onComplete) {
//
////		final Element ele = obj.getElement();
//
//    UIObject.setVisible(ele, true);
//    ele.getStyle().setOpacity(1);
//    setTransitionProperty(ele, 'opacity');
//    setTransitionDuration(ele, duration);
//
//    new Timer() {
//        public void run() {
//
//            ele.getStyle().setOpacity(0);
//
//            if (onComplete != null) {
//                new Timer() {
//                    public void run() {
//                        // obj.setVisible(false);
//                        onComplete.execute();
//                    }
//                }.schedule((int)duration);
//            }
//
//        }
//    }.schedule(10);
//}

