/*! jQuery Mobile v1.1.1 1981b3f5ec22675ae47df8f0bdf9622e7780e90e jquerymobile.com | jquery.org/license */
(function (l, t, k) { typeof define === "function" && define.amd ? define(["jquery"], function (E) { k(E, l, t); return E.mobile }) : k(l.jQuery, l, t) })(this, document, function (l, t, k, E) {
    (function (a, c, b, d) {
        function e(a) { for (; a && typeof a.originalEvent !== "undefined"; ) a = a.originalEvent; return a } function g(b) { for (var e = {}, g, d; b; ) { g = a.data(b, s); for (d in g) if (g[d]) e[d] = e.hasVirtualBinding = true; b = b.parentNode } return e } function f() { y && (clearTimeout(y), y = 0); y = setTimeout(function () { G = y = 0; A.length = 0; F = false; H = true }, a.vmouse.resetTimerDuration) }
        function j(b, g, c) {
            var f, h; if (!(h = c && c[b])) { if (c = !c)a: { for (c = g.target; c; ) { if ((h = a.data(c, s)) && (!b || h[b])) break a; c = c.parentNode } c = null } h = c } if (h) {
                f = g; var c = f.type, j, F; f = a.Event(f); f.type = b; h = f.originalEvent; j = a.event.props; c.search(/^(mouse|click)/) > -1 && (j = w); if (h) for (F = j.length; F; ) b = j[--F], f[b] = h[b]; if (c.search(/mouse(down|up)|click/) > -1 && !f.which) f.which = 1; if (c.search(/^touch/) !== -1 && (b = e(h), c = b.touches, b = b.changedTouches, c = c && c.length ? c[0] : b && b.length ? b[0] : d)) for (h = 0, len = x.length; h < len; h++) b = x[h],
f[b] = c[b]; a(g.target).trigger(f)
            } return f
        } function h(b) { var e = a.data(b.target, u); if (!F && (!G || G !== e)) if (e = j("v" + b.type, b)) e.isDefaultPrevented() && b.preventDefault(), e.isPropagationStopped() && b.stopPropagation(), e.isImmediatePropagationStopped() && b.stopImmediatePropagation() } function q(b) { var c = e(b).touches, d; if (c && c.length === 1 && (d = b.target, c = g(d), c.hasVirtualBinding)) G = N++, a.data(d, u, G), y && (clearTimeout(y), y = 0), z = H = false, d = e(b).touches[0], t = d.pageX, C = d.pageY, j("vmouseover", b, c), j("vmousedown", b, c) }
        function o(a) { H || (z || j("vmousecancel", a, g(a.target)), z = true, f()) } function m(b) { if (!H) { var c = e(b).touches[0], d = z, h = a.vmouse.moveDistanceThreshold; z = z || Math.abs(c.pageX - t) > h || Math.abs(c.pageY - C) > h; flags = g(b.target); z && !d && j("vmousecancel", b, flags); j("vmousemove", b, flags); f() } } function v(a) { if (!H) { H = true; var b = g(a.target), c; j("vmouseup", a, b); if (!z && (c = j("vclick", a, b)) && c.isDefaultPrevented()) c = e(a).changedTouches[0], A.push({ touchID: G, x: c.clientX, y: c.clientY }), F = true; j("vmouseout", a, b); z = false; f() } } function n(b) {
            var b =
a.data(b, s), e; if (b) for (e in b) if (b[e]) return true; return false
        } function k() { } function p(b) {
            var e = b.substr(1); return { setup: function () { n(this) || a.data(this, s, {}); a.data(this, s)[b] = true; l[b] = (l[b] || 0) + 1; l[b] === 1 && J.bind(e, h); a(this).bind(e, k); if (M) l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && J.bind("touchstart", q).bind("touchend", v).bind("touchmove", m).bind("scroll", o) }, teardown: function () {
                --l[b]; l[b] || J.unbind(e, h); M && (--l.touchstart, l.touchstart || J.unbind("touchstart", q).unbind("touchmove", m).unbind("touchend",
v).unbind("scroll", o)); var g = a(this), c = a.data(this, s); c && (c[b] = false); g.unbind(e, k); n(this) || g.removeData(s)
            } 
            }
        } var s = "virtualMouseBindings", u = "virtualTouchID", c = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), x = "clientX clientY pageX pageY screenX screenY".split(" "), w = a.event.props.concat(a.event.mouseHooks ? a.event.mouseHooks.props : []), l = {}, y = 0, t = 0, C = 0, z = false, A = [], F = false, H = false, M = "addEventListener" in b, J = a(b), N = 1, G = 0; a.vmouse = { moveDistanceThreshold: 10, clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }; for (var K = 0; K < c.length; K++) a.event.special[c[K]] = p(c[K]); M && b.addEventListener("click", function (b) { var e = A.length, g = b.target, c, d, f, h, j; if (e) { c = b.clientX; d = b.clientY; threshold = a.vmouse.clickDistanceThreshold; for (f = g; f; ) { for (h = 0; h < e; h++) if (j = A[h], f === g && Math.abs(j.x - c) < threshold && Math.abs(j.y - d) < threshold || a.data(f, u) === j.touchID) { b.preventDefault(); b.stopPropagation(); return } f = f.parentNode } } }, true)
    })(l, t, k); (function (a, c, b) {
        function d(a) {
            a = a || location.href; return "#" + a.replace(/^[^#]*#?(.*)$/,
"$1")
        } var e = "hashchange", g = k, f, j = a.event.special, h = g.documentMode, q = "on" + e in c && (h === b || h > 7); a.fn[e] = function (a) { return a ? this.bind(e, a) : this.trigger(e) }; a.fn[e].delay = 50; j[e] = a.extend(j[e], { setup: function () { if (q) return false; a(f.start) }, teardown: function () { if (q) return false; a(f.stop) } }); f = function () {
            function f() { var b = d(), g = s(n); if (b !== n) p(n = b, g), a(c).trigger(e); else if (g !== n) location.href = location.href.replace(/#.*/, "") + g; j = setTimeout(f, a.fn[e].delay) } var h = {}, j, n = d(), k = function (a) { return a }, p =
k, s = k; h.start = function () { j || f() }; h.stop = function () { j && clearTimeout(j); j = b }; a.browser.msie && !q && function () {
    var b, c; h.start = function () { if (!b) c = (c = a.fn[e].src) && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () { c || p(d()); f() }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function () { try { if (event.propertyName === "title") b.document.title = g.title } catch (a) { } } }; h.stop = k; s = function () { return d(b.location.href) }; p = function (c, d) {
        var f = b.document,
h = a.fn[e].domain; if (c !== d) f.title = g.title, f.open(), h && f.write('<script>document.domain="' + h + '"<\/script>'), f.close(), b.location.hash = c
    } 
} (); return h
        } ()
    })(l, this); (function (a, c) {
        if (a.cleanData) { var b = a.cleanData; a.cleanData = function (e) { for (var c = 0, f; (f = e[c]) != null; c++) a(f).triggerHandler("remove"); b(e) } } else {
            var d = a.fn.remove; a.fn.remove = function (b, c) {
                return this.each(function () {
                    c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () { a(this).triggerHandler("remove") }); return d.call(a(this),
b, c)
                })
            } 
        } a.widget = function (b, c, f) { var d = b.split(".")[0], h, b = b.split(".")[1]; h = d + "-" + b; if (!f) f = c, c = a.Widget; a.expr[":"][h] = function (c) { return !!a.data(c, b) }; a[d] = a[d] || {}; a[d][b] = function (a, b) { arguments.length && this._createWidget(a, b) }; c = new c; c.options = a.extend(true, {}, c.options); a[d][b].prototype = a.extend(true, c, { namespace: d, widgetName: b, widgetEventPrefix: a[d][b].prototype.widgetEventPrefix || b, widgetBaseClass: h }, f); a.widget.bridge(b, a[d][b]) }; a.widget.bridge = function (b, g) {
            a.fn[b] = function (d) {
                var j =
typeof d === "string", h = Array.prototype.slice.call(arguments, 1), q = this, d = !j && h.length ? a.extend.apply(null, [true, d].concat(h)) : d; if (j && d.charAt(0) === "_") return q; j ? this.each(function () { var g = a.data(this, b); if (!g) throw "cannot call methods on " + b + " prior to initialization; attempted to call method '" + d + "'"; if (!a.isFunction(g[d])) throw "no such method '" + d + "' for " + b + " widget instance"; var j = g[d].apply(g, h); if (j !== g && j !== c) return q = j, false }) : this.each(function () {
    var c = a.data(this, b); c ? c.option(d || {})._init() :
a.data(this, b, new g(d, this))
}); return q
            } 
        }; a.Widget = function (a, b) { arguments.length && this._createWidget(a, b) }; a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (b, c) { a.data(c, this.widgetName, this); this.element = a(c); this.options = a.extend(true, {}, this.options, this._getCreateOptions(), b); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }); this._create(); this._trigger("create"); this._init() }, _getCreateOptions: function () {
            var b =
{}; a.metadata && (b = a.metadata.get(element)[this.widgetName]); return b
        }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") }, widget: function () { return this.element }, option: function (b, d) {
            var f = b; if (arguments.length === 0) return a.extend({}, this.options); if (typeof b === "string") {
                if (d === c) return this.options[b];
                f = {}; f[b] = d
            } this._setOptions(f); return this
        }, _setOptions: function (b) { var c = this; a.each(b, function (a, b) { c._setOption(a, b) }); return this }, _setOption: function (a, b) { this.options[a] = b; a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b); return this }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (b, c, d) {
            var j = this.options[b], c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(); d = d || {}; if (c.originalEvent) for (var b = a.event.props.length, h; b; ) h = a.event.props[--b], c[h] = c.originalEvent[h]; this.element.trigger(c, d); return !(a.isFunction(j) && j.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        } 
        }
    })(l); (function (a, c) {
        a.widget("mobile.widget", { _createWidget: function () { a.Widget.prototype._createWidget.apply(this, arguments); this._trigger("init") }, _getCreateOptions: function () {
            var b = this.element, d = {};
            a.each(this.options, function (a) { var g = b.jqmData(a.replace(/[A-Z]/g, function (a) { return "-" + a.toLowerCase() })); g !== c && (d[a] = g) }); return d
        }, enhanceWithin: function (b, c) { this.enhance(a(this.options.initSelector, a(b)), c) }, enhance: function (b, c) { var e, g = a(b), g = a.mobile.enhanceable(g); c && g.length && (e = (e = a.mobile.closestPageData(g)) && e.keepNativeSelector() || "", g = g.not(e)); g[this.widgetName]() }, raise: function (a) { throw "Widget [" + this.widgetName + "]: " + a; } 
        })
    })(l); (function (a, c) {
        var b = {}; a.mobile = a.extend({}, { version: "1.1.1",
            ns: "", subPageUrlKey: "ui-page", activePageClass: "ui-page-active", activeBtnClass: "ui-btn-active", focusClass: "ui-focus", ajaxEnabled: true, hashListeningEnabled: true, linkBindingEnabled: true, defaultPageTransition: "fade", maxTransitionWidth: false, minScrollBack: 250, touchOverflowEnabled: false, defaultDialogTransition: "pop", loadingMessage: "loading", pageLoadErrorMessage: "Error Loading Page", loadingMessageTextVisible: false, loadingMessageTheme: "a", pageLoadErrorMessageTheme: "e", autoInitializePage: true, pushStateEnabled: true,
            ignoreContentEnabled: false, orientationChangeEnabled: true, buttonMarkup: { hoverDelay: 200 }, keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91 }, silentScroll: function (b) {
                if (a.type(b) !==
"number") b = a.mobile.defaultHomeScroll; a.event.special.scrollstart.enabled = false; setTimeout(function () { c.scrollTo(0, b); a(k).trigger("silentscroll", { x: 0, y: b }) }, 20); setTimeout(function () { a.event.special.scrollstart.enabled = true }, 150)
            }, nsNormalizeDict: b, nsNormalize: function (c) { return !c ? void 0 : b[c] || (b[c] = a.camelCase(a.mobile.ns + c)) }, getInheritedTheme: function (a, b) {
                for (var c = a[0], d = "", e = /ui-(bar|body|overlay)-([a-z])\b/, o, m; c; ) { if ((o = c.className || "") && (m = e.exec(o)) && (d = m[2])) break; c = c.parentNode } return d ||
b || "a"
            }, closestPageData: function (a) { return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page") }, enhanceable: function (a) { return this.haveParents(a, "enhance") }, hijackable: function (a) { return this.haveParents(a, "ajax") }, haveParents: function (b, c) { if (!a.mobile.ignoreContentEnabled) return b; for (var d = b.length, e = a(), q, o, m, v = 0; v < d; v++) { o = b.eq(v); m = false; for (q = b[v]; q; ) { if ((q.getAttribute ? q.getAttribute("data-" + a.mobile.ns + c) : "") === "false") { m = true; break } q = q.parentNode } m || (e = e.add(o)) } return e },
            getScreenHeight: function () { return c.innerHeight || a(c).height() } 
        }, a.mobile); a.fn.jqmData = function (b, c) { var d; typeof b != "undefined" && (b && (b = a.mobile.nsNormalize(b)), d = this.data.apply(this, arguments.length < 2 ? [b] : [b, c])); return d }; a.jqmData = function (b, c, d) { var e; typeof c != "undefined" && (e = a.data(b, c ? a.mobile.nsNormalize(c) : c, d)); return e }; a.fn.jqmRemoveData = function (b) { return this.removeData(a.mobile.nsNormalize(b)) }; a.jqmRemoveData = function (b, c) { return a.removeData(b, a.mobile.nsNormalize(c)) }; a.fn.removeWithDependents =
function () { a.removeWithDependents(this) }; a.removeWithDependents = function (b) { b = a(b); (b.jqmData("dependents") || a()).remove(); b.remove() }; a.fn.addDependents = function (b) { a.addDependents(a(this), b) }; a.addDependents = function (b, c) { var d = a(b).jqmData("dependents") || a(); a(b).jqmData("dependents", a.merge(d, c)) }; a.fn.getEncodedText = function () { return a("<div/>").text(a(this).text()).html() }; a.fn.jqmEnhanceable = function () { return a.mobile.enhanceable(this) }; a.fn.jqmHijackable = function () { return a.mobile.hijackable(this) };
        var d = a.find, e = /:jqmData\(([^)]*)\)/g; a.find = function (b, c, j, h) { b = b.replace(e, "[data-" + (a.mobile.ns || "") + "$1]"); return d.call(this, b, c, j, h) }; a.extend(a.find, d); a.find.matches = function (b, c) { return a.find(b, null, null, c) }; a.find.matchesSelector = function (b, c) { return a.find(c, null, null, [b]).length > 0 } 
    })(l, this); (function (a) {
        a(t); var c = a("html"); a.mobile.media = function () {
            var b = {}, d = a("<div id='jquery-mediatest'></div>"), e = a("<body>").append(d); return function (a) {
                if (!(a in b)) {
                    var f = k.createElement("style"),
j = "@media " + a + " { #jquery-mediatest { position:absolute; } }"; f.type = "text/css"; f.styleSheet ? f.styleSheet.cssText = j : f.appendChild(k.createTextNode(j)); c.prepend(e).prepend(f); b[a] = d.css("position") === "absolute"; e.add(f).remove()
                } return b[a]
            } 
        } ()
    })(l); (function (a, c) {
        function b(a) { var b = a.charAt(0).toUpperCase() + a.substr(1), a = (a + " " + f.join(b + " ") + b).split(" "), d; for (d in a) if (g[a[d]] !== c) return true } function d(a, b, c) {
            var d = k.createElement("div"), c = c ? [c] : f, e; for (i = 0; i < c.length; i++) {
                var h = c[i], j = "-" + h.charAt(0).toLowerCase() +
h.substr(1) + "-" + a + ": " + b + ";", h = h.charAt(0).toUpperCase() + h.substr(1) + (a.charAt(0).toUpperCase() + a.substr(1)); d.setAttribute("style", j); d.style[h] && (e = true)
            } return !!e
        } var e = a("<body>").prependTo("html"), g = e[0].style, f = ["Webkit", "Moz", "O"], j = "palmGetResource" in t, h = t.opera, q = t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]", o = t.blackberry; a.extend(a.mobile, { browser: {} }); a.mobile.browser.ie = function () {
            for (var a = 3, b = k.createElement("div"), c = b.all || []; b.innerHTML = "<\!--[if gt IE " + ++a +
"]><br><![endif]--\>", c[0]; ); return a > 4 ? a : !a
        } (); a.extend(a.support, { orientation: "orientation" in t && "onorientationchange" in t, touch: "ontouchend" in k, cssTransitions: "WebKitTransitionEvent" in t || d("transition", "height 100ms linear") && !h, pushState: "pushState" in history && "replaceState" in history, mediaquery: a.mobile.media("only all"), cssPseudoElement: !!b("content"), touchOverflow: !!b("overflowScrolling"), cssTransform3d: d("perspective", "10px", "moz") || a.mobile.media("(-" + f.join("-transform-3d),(-") + "-transform-3d),(transform-3d)"),
            boxShadow: !!b("boxShadow") && !o, scrollTop: ("pageXOffset" in t || "scrollTop" in k.documentElement || "scrollTop" in e[0]) && !j && !q, dynamicBaseTag: function () { var b = location.protocol + "//" + location.host + location.pathname + "ui-dir/", c = a("head base"), d = null, h = "", f; c.length ? h = c.attr("href") : c = d = a("<base>", { href: b }).appendTo("head"); f = a("<a href='testurl' />").prependTo(e)[0].href; c[0].href = h || location.pathname; d && d.remove(); return f.indexOf(b) === 0 } (), cssPointerEvents: function () {
                var a = k.createElement("x"), b = k.documentElement,
c = t.getComputedStyle; if (!("pointerEvents" in a.style)) return false; a.style.pointerEvents = "auto"; a.style.pointerEvents = "x"; b.appendChild(a); c = c && c(a, "").pointerEvents === "auto"; b.removeChild(a); return !!c
            } ()
        }); e.remove(); j = function () { var a = t.navigator.userAgent; return a.indexOf("Nokia") > -1 && (a.indexOf("Symbian/3") > -1 || a.indexOf("Series60/5") > -1) && a.indexOf("AppleWebKit") > -1 && a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/) } (); a.mobile.gradeA = function () {
            return a.support.mediaquery || a.mobile.browser.ie && a.mobile.browser.ie >=
7
        }; a.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || q || j; j && a(function () { a("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet") }); a.support.boxShadow || a("html").addClass("ui-mobile-nosupport-boxshadow")
    })(l); (function (a, c, b) {
        function d(b, c, d) { var e = d.type; d.type = c; a.event.handle.call(b, d); d.type = e } a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (b, c) {
            a.fn[c] =
function (a) { return a ? this.bind(c, a) : this.trigger(c) }; a.attrFn[c] = true
        }); var e = a.support.touch, g = e ? "touchstart" : "mousedown", f = e ? "touchend" : "mouseup", j = e ? "touchmove" : "mousemove"; a.event.special.scrollstart = { enabled: true, setup: function () { function b(a, h) { e = h; d(c, e ? "scrollstart" : "scrollstop", a) } var c = this, e, f; a(c).bind("touchmove scroll", function (c) { a.event.special.scrollstart.enabled && (e || b(c, true), clearTimeout(f), f = setTimeout(function () { b(c, false) }, 50)) }) } }; a.event.special.tap = { setup: function () {
            var b =
this, c = a(b); c.bind("vmousedown", function (e) { function f() { clearTimeout(p) } function j() { f(); c.unbind("vclick", g).unbind("vmouseup", f); a(k).unbind("vmousecancel", j) } function g(a) { j(); r == a.target && d(b, "tap", a) } if (e.which && e.which !== 1) return false; var r = e.target, p; c.bind("vmouseup", f).bind("vclick", g); a(k).bind("vmousecancel", j); p = setTimeout(function () { d(b, "taphold", a.Event("taphold", { target: r })) }, 750) })
        } 
        }; a.event.special.swipe = { scrollSupressionThreshold: 10, durationThreshold: 1E3, horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75, setup: function () {
                var c = a(this); c.bind(g, function (d) {
                    function e(b) { if (k) { var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b; n = { time: (new Date).getTime(), coords: [c.pageX, c.pageY] }; Math.abs(k.coords[0] - n.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault() } } var g = d.originalEvent.touches ? d.originalEvent.touches[0] : d, k = { time: (new Date).getTime(), coords: [g.pageX, g.pageY], origin: a(d.target) }, n; c.bind(j, e).one(f, function () {
                        c.unbind(j, e); k && n &&
n.time - k.time < a.event.special.swipe.durationThreshold && Math.abs(k.coords[0] - n.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(k.coords[1] - n.coords[1]) < a.event.special.swipe.verticalDistanceThreshold && k.origin.trigger("swipe").trigger(k.coords[0] > n.coords[0] ? "swipeleft" : "swiperight"); k = n = b
                    })
                })
            } 
        }; (function (a, b) {
            function c() { var a = e(); a !== f && (f = a, d.trigger("orientationchange")) } var d = a(b), e, f, j, g, l = { 0: true, 180: true }; if (a.support.orientation && (j = b.innerWidth || a(b).width(), g = b.innerHeight ||
a(b).height(), j = j > g && j - g > 50, g = l[b.orientation], j && g || !j && !g)) l = { "-90": true, 90: true }; a.event.special.orientationchange = { setup: function () { if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; f = e(); d.bind("throttledresize", c) }, teardown: function () { if (a.support.orientation && a.mobile.orientationChangeEnabled) return false; d.unbind("throttledresize", c) }, add: function (a) { var b = a.handler; a.handler = function (a) { a.orientation = e(); return b.apply(this, arguments) } } }; a.event.special.orientationchange.orientation =
e = function () { var c = true, c = k.documentElement; return (c = a.support.orientation ? l[b.orientation] : c && c.clientWidth / c.clientHeight < 1.1) ? "portrait" : "landscape" } 
        })(l, c); (function () { a.event.special.throttledresize = { setup: function () { a(this).bind("resize", b) }, teardown: function () { a(this).unbind("resize", b) } }; var b = function () { e = (new Date).getTime(); f = e - c; f >= 250 ? (c = e, a(this).trigger("throttledresize")) : (d && clearTimeout(d), d = setTimeout(b, 250 - f)) }, c = 0, d, e, f })(); a.each({ scrollstop: "scrollstart", taphold: "tap", swipeleft: "swipe",
            swiperight: "swipe"
        }, function (b, c) { a.event.special[b] = { setup: function () { a(this).bind(c, a.noop) } } })
    })(l, this); (function (a) {
        a.widget("mobile.page", a.mobile.widget, { options: { theme: "c", domCache: false, keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')" }, _create: function () {
            var a = this; if (a._trigger("beforecreate") === false) return false; a.element.attr("tabindex", "0").addClass("ui-page ui-body-" + a.options.theme).bind("pagebeforehide", function () { a.removeContainerBackground() }).bind("pagebeforeshow",
function () { a.setContainerBackground() })
        }, removeContainerBackground: function () { a.mobile.pageContainer.removeClass("ui-overlay-" + a.mobile.getInheritedTheme(this.element.parent())) }, setContainerBackground: function (c) { this.options.theme && a.mobile.pageContainer.addClass("ui-overlay-" + (c || this.options.theme)) }, keepNativeSelector: function () { var c = this.options; return c.keepNative && a.trim(c.keepNative) && c.keepNative !== c.keepNativeDefault ? [c.keepNative, c.keepNativeDefault].join(", ") : c.keepNativeDefault } 
        })
    })(l);
    (function (a, c, b) {
        var d = function (d) {
            d === b && (d = true); return function (b, e, h, q) {
                var k = new a.Deferred, m = e ? " reverse" : "", l = a.mobile.urlHistory.getActive().lastScroll || a.mobile.defaultHomeScroll, n = a.mobile.getScreenHeight(), r = a.mobile.maxTransitionWidth !== false && a(c).width() > a.mobile.maxTransitionWidth, p = !a.support.cssTransitions || r || !b || b === "none" || Math.max(a(c).scrollTop(), l) > a.mobile.getMaxScrollForTransition(), s = function () {
                    a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" +
b)
                }, u = function () { a.event.special.scrollstart.enabled = false; c.scrollTo(0, l); setTimeout(function () { a.event.special.scrollstart.enabled = true }, 150) }, x = function () { q.removeClass(a.mobile.activePageClass + " out in reverse " + b).height("") }, r = function () { q && d && x(); h.addClass(a.mobile.activePageClass); a.mobile.focusPage(h); h.height(n + l); u(); p || h.animationComplete(w); h.addClass(b + " in" + m); p && w() }, w = function () {
                    d || q && x(); h.removeClass("out in reverse " + b).height(""); s(); a(c).scrollTop() !== l && u(); k.resolve(b, e, h,
q, true)
                }; s(); q && !p ? (d ? q.animationComplete(r) : r(), q.height(n + a(c).scrollTop()).addClass(b + " out" + m)) : r(); return k.promise()
            } 
        }, e = d(), d = d(false); a.mobile.defaultTransitionHandler = e; a.mobile.transitionHandlers = { "default": a.mobile.defaultTransitionHandler, sequential: e, simultaneous: d }; a.mobile.transitionFallbacks = {}; a.mobile.getMaxScrollForTransition = a.mobile.getMaxScrollForTransition || function () { return a.mobile.getScreenHeight() * 3 } 
    })(l, this); (function (a, c) {
        function b(b) {
            l && (!l.closest(".ui-page-active").length ||
b) && l.removeClass(a.mobile.activeBtnClass); l = null
        } function d() { p = false; r.length > 0 && a.mobile.changePage.apply(null, r.pop()) } function e(b, c, d, e) {
            c && c.data("page")._trigger("beforehide", null, { nextPage: b }); b.data("page")._trigger("beforeshow", null, { prevPage: c || a("") }); a.mobile.hidePageLoadingMsg(); d && !a.support.cssTransform3d && a.mobile.transitionFallbacks[d] && (d = a.mobile.transitionFallbacks[d]); d = (a.mobile.transitionHandlers[d || "default"] || a.mobile.defaultTransitionHandler)(d, e, b, c); d.done(function () {
                c &&
c.data("page")._trigger("hide", null, { nextPage: b }); b.data("page")._trigger("show", null, { prevPage: c || a("") })
            }); return d
        } function g() { var b = a("." + a.mobile.activePageClass), c = parseFloat(b.css("padding-top")), d = parseFloat(b.css("padding-bottom")), e = parseFloat(b.css("border-top-width")), f = parseFloat(b.css("border-bottom-width")); b.css("min-height", y() - c - d - e - f) } function f(b, c) { c && b.attr("data-" + a.mobile.ns + "role", c); b.page() } function j(a) {
            for (; a; ) {
                if (typeof a.nodeName === "string" && a.nodeName.toLowerCase() ==
"a") break; a = a.parentNode
            } return a
        } function h(b) { var b = a(b).closest(".ui-page").jqmData("url"), c = w.hrefNoHash; if (!b || !m.isPath(b)) b = c; return m.makeUrlAbsolute(b, c) } var q = a(t); a("html"); var o = a("head"), m = { urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/, parseUrl: function (b) {
            if (a.type(b) === "object") return b; b = m.urlParseRE.exec(b || "") || []; return { href: b[0] || "", hrefNoHash: b[1] ||
"", hrefNoSearch: b[2] || "", domain: b[3] || "", protocol: b[4] || "", doubleSlash: b[5] || "", authority: b[6] || "", username: b[8] || "", password: b[9] || "", host: b[10] || "", hostname: b[11] || "", port: b[12] || "", pathname: b[13] || "", directory: b[14] || "", filename: b[15] || "", search: b[16] || "", hash: b[17] || ""
            }
        }, makePathAbsolute: function (a, b) {
            if (a && a.charAt(0) === "/") return a; for (var a = a || "", c = (b = b ? b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "") ? b.split("/") : [], d = a.split("/"), e = 0; e < d.length; e++) {
                var f = d[e]; switch (f) {
                    case ".": break; case "..": c.length &&
c.pop(); break; default: c.push(f)
                } 
            } return "/" + c.join("/")
        }, isSameDomain: function (a, b) { return m.parseUrl(a).domain === m.parseUrl(b).domain }, isRelativeUrl: function (a) { return m.parseUrl(a).protocol === "" }, isAbsoluteUrl: function (a) { return m.parseUrl(a).protocol !== "" }, makeUrlAbsolute: function (a, b) {
            if (!m.isRelativeUrl(a)) return a; var c = m.parseUrl(a), d = m.parseUrl(b), e = c.protocol || d.protocol, f = c.protocol ? c.doubleSlash : c.doubleSlash || d.doubleSlash, h = c.authority || d.authority, j = c.pathname !== "", g = m.makePathAbsolute(c.pathname ||
d.filename, d.pathname); return e + f + h + g + (c.search || !j && d.search || "") + c.hash
        }, addSearchParams: function (b, c) { var d = m.parseUrl(b), e = typeof c === "object" ? a.param(c) : c, f = d.search || "?"; return d.hrefNoSearch + f + (f.charAt(f.length - 1) !== "?" ? "&" : "") + e + (d.hash || "") }, convertUrlToDataUrl: function (a) { var b = m.parseUrl(a); if (m.isEmbeddedPage(b)) return b.hash.split(s)[0].replace(/^#/, ""); else if (m.isSameDomain(b, w)) return b.hrefNoHash.replace(w.domain, "").split(s)[0]; return a }, get: function (a) {
            if (a === c) a = location.hash;
            return m.stripHash(a).replace(/[^\/]*\.[^\/*]+$/, "")
        }, getFilePath: function (b) { var c = "&" + a.mobile.subPageUrlKey; return b && b.split(c)[0].split(s)[0] }, set: function (a) { location.hash = a }, isPath: function (a) { return /\//.test(a) }, clean: function (a) { return a.replace(w.domain, "") }, stripHash: function (a) { return a.replace(/^#/, "") }, cleanHash: function (a) { return m.stripHash(a.replace(/\?.*$/, "").replace(s, "")) }, isHashValid: function (a) { return /^#[^#]+$/.test(a) }, isExternal: function (a) {
            a = m.parseUrl(a); return a.protocol &&
a.domain !== x.domain ? true : false
        }, hasProtocol: function (a) { return /^(:?\w+:)/.test(a) }, isFirstPageUrl: function (b) { var b = m.parseUrl(m.makeUrlAbsolute(b, w)), d = a.mobile.firstPage, d = d && d[0] ? d[0].id : c; return (b.hrefNoHash === x.hrefNoHash || D && b.hrefNoHash === w.hrefNoHash) && (!b.hash || b.hash === "#" || d && b.hash.replace(/^#/, "") === d) }, isEmbeddedPage: function (a) { a = m.parseUrl(a); return a.protocol !== "" ? a.hash && (a.hrefNoHash === x.hrefNoHash || D && a.hrefNoHash === w.hrefNoHash) : /^#/.test(a.href) }, isPermittedCrossDomainRequest: function (b,
c) { return a.mobile.allowCrossDomainPages && b.protocol === "file:" && c.search(/^https?:/) != -1 } 
        }, l = null, n = { stack: [], activeIndex: 0, getActive: function () { return n.stack[n.activeIndex] }, getPrev: function () { return n.stack[n.activeIndex - 1] }, getNext: function () { return n.stack[n.activeIndex + 1] }, addNew: function (a, b, c, d, e) { n.getNext() && n.clearForward(); n.stack.push({ url: a, transition: b, title: c, pageUrl: d, role: e }); n.activeIndex = n.stack.length - 1 }, clearForward: function () { n.stack = n.stack.slice(0, n.activeIndex + 1) }, directHashChange: function (b) {
            var d,
e, f; this.getActive(); a.each(n.stack, function (a, c) { b.currentUrl === c.url && (d = a < n.activeIndex, e = !d, f = a) }); this.activeIndex = f !== c ? f : this.activeIndex; d ? (b.either || b.isBack)(true) : e && (b.either || b.isForward)(false)
        }, ignoreNextHashChange: false
        }, r = [], p = false, s = "&ui-state=dialog", u = o.children("base"), x = m.parseUrl(location.href), w = u.length ? m.parseUrl(m.makeUrlAbsolute(u.attr("href"), x.href)) : x, D = x.hrefNoHash !== w.hrefNoHash, y = a.mobile.getScreenHeight, B = a.support.dynamicBaseTag ? { element: u.length ? u : a("<base>",
{ href: w.hrefNoHash }).prependTo(o), set: function (a) { B.element.attr("href", m.makeUrlAbsolute(a, w)) }, reset: function () { B.element.attr("href", w.hrefNoHash) } 
        } : c; a.mobile.focusPage = function (a) { var b = a.find("[autofocus]"), c = a.find(".ui-title:eq(0)"); b.length ? b.focus() : c.length ? c.focus() : a.focus() }; var C = true, z, A; z = function () { if (C) { var b = a.mobile.urlHistory.getActive(); if (b) { var c = q.scrollTop(); b.lastScroll = c < a.mobile.minScrollBack ? a.mobile.defaultHomeScroll : c } } }; A = function () { setTimeout(z, 100) }; q.bind(a.support.pushState ?
"popstate" : "hashchange", function () { C = false }); q.one(a.support.pushState ? "popstate" : "hashchange", function () { C = true }); q.one("pagecontainercreate", function () { a.mobile.pageContainer.bind("pagechange", function () { C = true; q.unbind("scrollstop", A); q.bind("scrollstop", A) }) }); q.bind("scrollstop", A); a.fn.animationComplete = function (b) { return a.support.cssTransitions ? a(this).one("webkitAnimationEnd animationend", b) : (setTimeout(b, 0), a(this)) }; a.mobile.path = m; a.mobile.base = B; a.mobile.urlHistory = n; a.mobile.dialogHashKey =
s; a.mobile.allowCrossDomainPages = false; a.mobile.getDocumentUrl = function (b) { return b ? a.extend({}, x) : x.href }; a.mobile.getDocumentBase = function (b) { return b ? a.extend({}, w) : w.href }; a.mobile._bindPageRemove = function () { var b = a(this); !b.data("page").options.domCache && b.is(":jqmData(external-page='true')") && b.bind("pagehide.remove", function () { var b = a(this), c = new a.Event("pageremove"); b.trigger(c); c.isDefaultPrevented() || b.removeWithDependents() }) }; a.mobile.loadPage = function (b, d) {
    var e = a.Deferred(), j = a.extend({},
a.mobile.loadPage.defaults, d), g = null, q = null, k = m.makeUrlAbsolute(b, a.mobile.activePage && h(a.mobile.activePage) || w.hrefNoHash); if (j.data && j.type === "get") k = m.addSearchParams(k, j.data), j.data = c; if (j.data && j.type === "post") j.reloadPage = true; var n = m.getFilePath(k), o = m.convertUrlToDataUrl(k); j.pageContainer = j.pageContainer || a.mobile.pageContainer; g = j.pageContainer.children(":jqmData(url='" + o + "')"); g.length === 0 && o && !m.isPath(o) && (g = j.pageContainer.children("#" + o).attr("data-" + a.mobile.ns + "url", o)); if (g.length ===
0) if (a.mobile.firstPage && m.isFirstPageUrl(n)) a.mobile.firstPage.parent().length && (g = a(a.mobile.firstPage)); else if (m.isEmbeddedPage(n)) return e.reject(k, d), e.promise(); B && B.reset(); if (g.length) { if (!j.reloadPage) return f(g, j.role), e.resolve(k, d, g), e.promise(); q = g } var l = j.pageContainer, u = new a.Event("pagebeforeload"), p = { url: b, absUrl: k, dataUrl: o, deferred: e, options: j }; l.trigger(u, p); if (u.isDefaultPrevented()) return e.promise(); if (j.showLoadMsg) var r = setTimeout(function () { a.mobile.showPageLoadingMsg() },
j.loadMsgDelay); !a.mobile.allowCrossDomainPages && !m.isSameDomain(x, k) ? e.reject(k, d) : a.ajax({ url: n, type: j.type, data: j.data, dataType: "html", success: function (c, h, x) {
    var l = a("<div></div>"), u = c.match(/<title[^>]*>([^<]*)/) && RegExp.$1, w = RegExp("\\bdata-" + a.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?"); RegExp("(<[^>]+\\bdata-" + a.mobile.ns + "role=[\"']?page[\"']?[^>]*>)").test(c) && RegExp.$1 && w.test(RegExp.$1) && RegExp.$1 && (b = n = m.getFilePath(RegExp.$1)); B && B.set(n); l.get(0).innerHTML = c; g = l.find(":jqmData(role='page'), :jqmData(role='dialog')").first();
    g.length || (g = a("<div data-" + a.mobile.ns + "role='page'>" + c.split(/<\/?body[^>]*>/gmi)[1] + "</div>")); u && !g.jqmData("title") && (~u.indexOf("&") && (u = a("<div>" + u + "</div>").text()), g.jqmData("title", u)); if (!a.support.dynamicBaseTag) {
        var s = m.get(n); g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () {
            var b = a(this).is("[href]") ? "href" : a(this).is("[src]") ? "src" : "action", c = a(this).attr(b), c = c.replace(location.protocol + "//" + location.host + location.pathname, ""); /^(\w+:|#|\/)/.test(c) ||
a(this).attr(b, s + c)
        })
    } g.attr("data-" + a.mobile.ns + "url", m.convertUrlToDataUrl(n)).attr("data-" + a.mobile.ns + "external-page", true).appendTo(j.pageContainer); g.one("pagecreate", a.mobile._bindPageRemove); f(g, j.role); k.indexOf("&" + a.mobile.subPageUrlKey) > -1 && (g = j.pageContainer.children(":jqmData(url='" + o + "')")); j.showLoadMsg && (clearTimeout(r), a.mobile.hidePageLoadingMsg()); p.xhr = x; p.textStatus = h; p.page = g; j.pageContainer.trigger("pageload", p); e.resolve(k, d, g, q)
}, error: function (b, c, f) {
    B && B.set(m.get()); p.xhr =
b; p.textStatus = c; p.errorThrown = f; b = new a.Event("pageloadfailed"); j.pageContainer.trigger(b, p); b.isDefaultPrevented() || (j.showLoadMsg && (clearTimeout(r), a.mobile.hidePageLoadingMsg(), a.mobile.showPageLoadingMsg(a.mobile.pageLoadErrorMessageTheme, a.mobile.pageLoadErrorMessage, true), setTimeout(a.mobile.hidePageLoadingMsg, 1500)), e.reject(k, d))
} 
}); return e.promise()
}; a.mobile.loadPage.defaults = { type: "get", data: c, reloadPage: false, role: c, showLoadMsg: false, pageContainer: c, loadMsgDelay: 50 }; a.mobile.changePage =
function (j, g) {
    if (p) r.unshift(arguments); else {
        var h = a.extend({}, a.mobile.changePage.defaults, g); h.pageContainer = h.pageContainer || a.mobile.pageContainer; h.fromPage = h.fromPage || a.mobile.activePage; var q = h.pageContainer, o = new a.Event("pagebeforechange"), l = { toPage: j, options: h }; q.trigger(o, l); if (!o.isDefaultPrevented()) if (j = l.toPage, p = true, typeof j == "string") a.mobile.loadPage(j, h).done(function (b, c, d, e) { p = false; c.duplicateCachedPage = e; a.mobile.changePage(d, c) }).fail(function () {
            p = false; b(true); d(); h.pageContainer.trigger("pagechangefailed",
l)
        }); else {
            if (j[0] === a.mobile.firstPage[0] && !h.dataUrl) h.dataUrl = x.hrefNoHash; var o = h.fromPage, u = h.dataUrl && m.convertUrlToDataUrl(h.dataUrl) || j.jqmData("url"), w = u; m.getFilePath(u); var v = n.getActive(), t = n.activeIndex === 0, y = 0, D = k.title, B = h.role === "dialog" || j.jqmData("role") === "dialog"; if (o && o[0] === j[0] && !h.allowSamePageTransition) p = false, q.trigger("pagechange", l), h.fromHashChange && n.directHashChange({ currentUrl: u, isBack: function () { }, isForward: function () { } }); else {
                f(j, h.role); h.fromHashChange && n.directHashChange({ currentUrl: u,
                    isBack: function () { y = -1 }, isForward: function () { y = 1 } 
                }); try { k.activeElement && k.activeElement.nodeName.toLowerCase() != "body" ? a(k.activeElement).blur() : a("input:focus, textarea:focus, select:focus").blur() } catch (z) { } var C = false; if (B && v) { if (v.url.indexOf(s) > -1 && !a.mobile.activePage.is(".ui-dialog")) h.changeHash = false, C = true; u = (v.url || "") + s; n.activeIndex === 0 && u === n.initialDst && (u += s) } if (h.changeHash !== false && u) n.ignoreNextHashChange = true, m.set(u); var A = !v ? D : j.jqmData("title") || j.children(":jqmData(role='header')").find(".ui-title").getEncodedText();
                A && D == k.title && (D = A); j.jqmData("title") || j.jqmData("title", D); h.transition = h.transition || (y && !t ? v.transition : c) || (B ? a.mobile.defaultDialogTransition : a.mobile.defaultPageTransition); !y && !C && n.addNew(u, h.transition, D, w, h.role); k.title = n.getActive().title; a.mobile.activePage = j; h.reverse = h.reverse || y < 0; e(j, o, h.transition, h.reverse).done(function (c, e, f, g, m) { b(); h.duplicateCachedPage && h.duplicateCachedPage.remove(); m || a.mobile.focusPage(j); d(); q.trigger("pagechange", l) })
            } 
        } 
    } 
}; a.mobile.changePage.defaults =
{ transition: c, reverse: false, changeHash: true, fromHashChange: false, role: c, duplicateCachedPage: c, pageContainer: c, showLoadMsg: true, dataUrl: c, fromPage: c, allowSamePageTransition: false }; a.mobile.navreadyDeferred = a.Deferred(); a.mobile.navreadyDeferred.done(function () {
    a(k).delegate("form", "submit", function (b) {
        var c = a(this); if (a.mobile.ajaxEnabled && !c.is(":jqmData(ajax='false')") && c.jqmHijackable().length) {
            var d = c.attr("method"), e = c.attr("target"), j = c.attr("action"); if (!j && (j = h(c), j === w.hrefNoHash)) j = x.hrefNoSearch;
            j = m.makeUrlAbsolute(j, h(c)); m.isExternal(j) && !m.isPermittedCrossDomainRequest(x, j) || e || (a.mobile.changePage(j, { type: d && d.length && d.toLowerCase() || "get", data: c.serialize(), transition: c.jqmData("transition"), direction: c.jqmData("direction"), reloadPage: true }), b.preventDefault())
        } 
    }); a(k).bind("vclick", function (c) {
        if (!(c.which > 1) && a.mobile.linkBindingEnabled && (c = j(c.target), a(c).jqmHijackable().length && c && m.parseUrl(c.getAttribute("href") || "#").hash !== "#")) b(true), l = a(c).closest(".ui-btn").not(".ui-disabled"),
l.addClass(a.mobile.activeBtnClass)
    }); a(k).bind("click", function (d) {
        if (a.mobile.linkBindingEnabled) {
            var e = j(d.target), f = a(e), g; if (e && !(d.which > 1) && f.jqmHijackable().length) {
                g = function () { t.setTimeout(function () { b(true) }, 200) }; if (f.is(":jqmData(rel='back')")) return t.history.back(), false; var k = h(f), e = m.makeUrlAbsolute(f.attr("href") || "#", k); if (!a.mobile.ajaxEnabled && !m.isEmbeddedPage(e)) g(); else {
                    if (e.search("#") != -1) if (e = e.replace(/[^#]*#/, "")) e = m.isPath(e) ? m.makeUrlAbsolute(e, k) : m.makeUrlAbsolute("#" +
e, x.hrefNoHash); else { d.preventDefault(); return } f.is("[rel='external']") || f.is(":jqmData(ajax='false')") || f.is("[target]") || m.isExternal(e) && !m.isPermittedCrossDomainRequest(x, e) ? g() : (g = f.jqmData("transition"), k = (k = f.jqmData("direction")) && k === "reverse" || f.jqmData("back"), f = f.attr("data-" + a.mobile.ns + "rel") || c, a.mobile.changePage(e, { transition: g, reverse: k, role: f }), d.preventDefault())
                } 
            } 
        } 
    }); a(k).delegate(".ui-page", "pageshow.prefetch", function () {
        var b = []; a(this).find("a:jqmData(prefetch)").each(function () {
            var c =
a(this), d = c.attr("href"); d && a.inArray(d, b) === -1 && (b.push(d), a.mobile.loadPage(d, { role: c.attr("data-" + a.mobile.ns + "rel") }))
        })
    }); a.mobile._handleHashChange = function (b) {
        var d = m.stripHash(b), e = { transition: a.mobile.urlHistory.stack.length === 0 ? "none" : c, changeHash: false, fromHashChange: true }; if (0 === n.stack.length) n.initialDst = d; if (!a.mobile.hashListeningEnabled || n.ignoreNextHashChange) n.ignoreNextHashChange = false; else {
            if (n.stack.length > 1 && d.indexOf(s) > -1 && n.initialDst !== d) if (a.mobile.activePage.is(".ui-dialog")) n.directHashChange({ currentUrl: d,
                either: function (b) { var c = a.mobile.urlHistory.getActive(); d = c.pageUrl; a.extend(e, { role: c.role, transition: c.transition, reverse: b }) } 
            }); else { n.directHashChange({ currentUrl: d, isBack: function () { t.history.back() }, isForward: function () { t.history.forward() } }); return } d ? (d = typeof d === "string" && !m.isPath(d) ? m.makeUrlAbsolute("#" + d, w) : d, a.mobile.changePage(d, e)) : a.mobile.changePage(a.mobile.firstPage, e)
        } 
    }; q.bind("hashchange", function () { a.mobile._handleHashChange(location.hash) }); a(k).bind("pageshow", g); a(t).bind("throttledresize",
g)
})
    })(l); (function (a, c) {
        var b = {}, d = a(c), e = a.mobile.path.parseUrl(location.href), g = a.Deferred(), f = a.Deferred(); a(k).ready(a.proxy(f, "resolve")); a(k).one("mobileinit", a.proxy(g, "resolve")); a.extend(b, { initialFilePath: e.pathname + e.search, hashChangeTimeout: 200, hashChangeEnableTimer: E, initialHref: e.hrefNoHash, state: function () { return { hash: location.hash || "#" + b.initialFilePath, title: k.title, initialHref: b.initialHref} }, resetUIKeys: function (b) {
            var c = "&" + a.mobile.subPageUrlKey, d = b.indexOf(a.mobile.dialogHashKey);
            d > -1 ? b = b.slice(0, d) + "#" + b.slice(d) : b.indexOf(c) > -1 && (b = b.split(c).join("#" + c)); return b
        }, nextHashChangePrevented: function (c) { a.mobile.urlHistory.ignoreNextHashChange = c; b.onHashChangeDisabled = c }, onHashChange: function () { if (!b.onHashChangeDisabled) { var c, d; c = location.hash; var e = a.mobile.path.isPath(c), f = e ? location.href : a.mobile.getDocumentUrl(); c = e ? c.replace("#", "") : c; d = b.state(); c = a.mobile.path.makeUrlAbsolute(c, f); e && (c = b.resetUIKeys(c)); history.replaceState(d, k.title, c) } }, onPopState: function (c) {
            if (c =
c.originalEvent.state) clearTimeout(b.hashChangeEnableTimer), b.nextHashChangePrevented(false), a.mobile._handleHashChange(c.hash), b.nextHashChangePrevented(true), b.hashChangeEnableTimer = setTimeout(function () { b.nextHashChangePrevented(false) }, b.hashChangeTimeout)
        }, init: function () { d.bind("hashchange", b.onHashChange); d.bind("popstate", b.onPopState); location.hash === "" && history.replaceState(b.state(), k.title, location.href) } 
        }); a.when(f, g, a.mobile.navreadyDeferred).done(function () {
            a.mobile.pushStateEnabled &&
a.support.pushState && b.init()
        })
    })(l, this); l.mobile.transitionFallbacks.pop = "fade"; (function (a) { a.mobile.transitionHandlers.slide = a.mobile.transitionHandlers.simultaneous; a.mobile.transitionFallbacks.slide = "fade" })(l, this); l.mobile.transitionFallbacks.slidedown = "fade"; l.mobile.transitionFallbacks.slideup = "fade"; l.mobile.transitionFallbacks.flip = "fade"; l.mobile.transitionFallbacks.flow = "fade"; l.mobile.transitionFallbacks.turn = "fade"; (function (a) {
        a.mobile.page.prototype.options.degradeInputs = { color: false,
            date: false, datetime: false, "datetime-local": false, email: false, month: false, number: false, range: "number", search: "text", tel: false, time: false, url: false, week: false
        }; a(k).bind("pagecreate create", function (c) {
            var b = a.mobile.closestPageData(a(c.target)), d; if (b) d = b.options, a(c.target).find("input").not(b.keepNativeSelector()).each(function () {
                var b = a(this), c = this.getAttribute("type"), f = d.degradeInputs[c] || "text"; if (d.degradeInputs[c]) {
                    var j = a("<div>").html(b.clone()).html(), h = j.indexOf(" type=") > -1; b.replaceWith(j.replace(h ?
/\s+type=["']?\w+['"]?/ : /\/?>/, ' type="' + f + '" data-' + a.mobile.ns + 'type="' + c + '"' + (h ? "" : ">")))
                } 
            })
        })
    })(l); (function (a, c) {
        a.widget("mobile.dialog", a.mobile.widget, { options: { closeBtnText: "Close", overlayTheme: "a", initSelector: ":jqmData(role='dialog')" }, _create: function () {
            var b = this, c = this.element, e = a("<a href='#' data-" + a.mobile.ns + "icon='delete' data-" + a.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), g = a("<div/>", { role: "dialog", "class": "ui-dialog-contain ui-corner-all ui-overlay-shadow" });
            c.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme); c.wrapInner(g).children().find(":jqmData(role='header')").prepend(e).end().children(":first-child").addClass("ui-corner-top").end().children(":last-child").addClass("ui-corner-bottom"); e.bind("click", function () { b.close() }); c.bind("vclick submit", function (b) {
                var b = a(b.target).closest(b.type === "vclick" ? "a" : "form"), c; b.length && !b.jqmData("transition") && (c = a.mobile.urlHistory.getActive() || {}, b.attr("data-" + a.mobile.ns + "transition", c.transition ||
a.mobile.defaultDialogTransition).attr("data-" + a.mobile.ns + "direction", "reverse"))
            }).bind("pagehide", function () { b._isClosed = false; a(this).find("." + a.mobile.activeBtnClass).not(".ui-slider-bg").removeClass(a.mobile.activeBtnClass) }).bind("pagebeforeshow", function () { b.options.overlayTheme && b.element.page("removeContainerBackground").page("setContainerBackground", b.options.overlayTheme) })
        }, close: function () { if (!this._isClosed) this._isClosed = true, a.mobile.hashListeningEnabled ? c.history.back() : a.mobile.changePage(a.mobile.urlHistory.getPrev().url) } 
        });
        a(k).delegate(a.mobile.dialog.prototype.options.initSelector, "pagecreate", function () { a.mobile.dialog.prototype.enhance(this) })
    })(l, this); (function (a) {
        a.mobile.page.prototype.options.backBtnText = "Back"; a.mobile.page.prototype.options.addBackBtn = false; a.mobile.page.prototype.options.backBtnTheme = null; a.mobile.page.prototype.options.headerTheme = "a"; a.mobile.page.prototype.options.footerTheme = "a"; a.mobile.page.prototype.options.contentTheme = null; a(k).bind("pagecreate", function (c) {
            var b = a(c.target), d =
b.data("page").options, e = b.jqmData("role"), g = d.theme; a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", b).jqmEnhanceable().each(function () {
    var c = a(this), j = c.jqmData("role"), h = c.jqmData("theme"), k = h || d.contentTheme || e === "dialog" && g, o; c.addClass("ui-" + j); if (j === "header" || j === "footer") {
        var m = h || (j === "header" ? d.headerTheme : d.footerTheme) || g; c.addClass("ui-bar-" + m).attr("role", j === "header" ? "banner" : "contentinfo"); j === "header" && (h = c.children("a"), o = h.hasClass("ui-btn-left"),
k = h.hasClass("ui-btn-right"), o = o || h.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, k || h.eq(1).addClass("ui-btn-right")); d.addBackBtn && j === "header" && a(".ui-page").length > 1 && b.jqmData("url") !== a.mobile.path.stripHash(location.hash) && !o && a("<a href='javascript:void(0);' class='ui-btn-left' data-" + a.mobile.ns + "rel='back' data-" + a.mobile.ns + "icon='arrow-l'>" + d.backBtnText + "</a>").attr("data-" + a.mobile.ns + "theme", d.backBtnTheme || m).prependTo(c); c.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({ role: "heading",
    "aria-level": "1"
})
    } else j === "content" && (k && c.addClass("ui-body-" + k), c.attr("role", "main"))
})
        })
    })(l); (function (a) { a.fn.fieldcontain = function () { return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function () { return this.nodeType === 3 && !/\S/.test(this.nodeValue) }).remove() }; a(k).bind("pagecreate create", function (c) { a(":jqmData(role='fieldcontain')", c.target).jqmEnhanceable().fieldcontain() }) })(l); (function (a) {
        a.fn.grid = function (c) {
            return this.each(function () {
                var b = a(this), d = a.extend({ grid: null },
c), e = b.children(), g = { solo: 1, a: 2, b: 3, c: 4, d: 5 }, d = d.grid; if (!d) if (e.length <= 5) for (var f in g) g[f] === e.length && (d = f); else d = "a", b.addClass("ui-grid-duo"); g = g[d]; b.addClass("ui-grid-" + d); e.filter(":nth-child(" + g + "n+1)").addClass("ui-block-a"); g > 1 && e.filter(":nth-child(" + g + "n+2)").addClass("ui-block-b"); g > 2 && e.filter(":nth-child(3n+3)").addClass("ui-block-c"); g > 3 && e.filter(":nth-child(4n+4)").addClass("ui-block-d"); g > 4 && e.filter(":nth-child(5n+5)").addClass("ui-block-e")
            })
        } 
    })(l); (function (a) {
        a(k).bind("pagecreate create",
function (c) { a(":jqmData(role='nojs')", c.target).addClass("ui-nojs") })
    })(l); (function (a, c) {
        function b(a) { for (var b; a; ) { if ((b = typeof a.className === "string" && a.className + " ") && b.indexOf("ui-btn ") > -1 && b.indexOf("ui-disabled ") < 0) break; a = a.parentNode } return a } a.fn.buttonMarkup = function (b) {
            for (var b = b && a.type(b) == "object" ? b : {}, g = 0; g < this.length; g++) {
                var f = this.eq(g), j = f[0], h = a.extend({}, a.fn.buttonMarkup.defaults, { icon: b.icon !== c ? b.icon : f.jqmData("icon"), iconpos: b.iconpos !== c ? b.iconpos : f.jqmData("iconpos"),
                    theme: b.theme !== c ? b.theme : f.jqmData("theme") || a.mobile.getInheritedTheme(f, "c"), inline: b.inline !== c ? b.inline : f.jqmData("inline"), shadow: b.shadow !== c ? b.shadow : f.jqmData("shadow"), corners: b.corners !== c ? b.corners : f.jqmData("corners"), iconshadow: b.iconshadow !== c ? b.iconshadow : f.jqmData("iconshadow"), mini: b.mini !== c ? b.mini : f.jqmData("mini")
                }, b), q = "ui-btn-inner", o, m, l, n, r, p; a.each(h, function (b, c) { j.setAttribute("data-" + a.mobile.ns + b, c); f.jqmData(b, c) }); (p = a.data(j.tagName === "INPUT" || j.tagName === "BUTTON" ?
j.parentNode : j, "buttonElements")) ? (j = p.outer, f = a(j), l = p.inner, n = p.text, a(p.icon).remove(), p.icon = null) : (l = k.createElement(h.wrapperEls), n = k.createElement(h.wrapperEls)); r = h.icon ? k.createElement("span") : null; d && !p && d(); if (!h.theme) h.theme = a.mobile.getInheritedTheme(f, "c"); o = "ui-btn ui-btn-up-" + h.theme; o += h.inline ? " ui-btn-inline" : ""; o += h.shadow ? " ui-shadow" : ""; o += h.corners ? " ui-btn-corner-all" : ""; h.mini !== c && (o += h.mini ? " ui-mini" : " ui-fullsize"); h.inline !== c && (o += h.inline === false ? " ui-btn-block" : " ui-btn-inline");
                if (h.icon) h.icon = "ui-icon-" + h.icon, h.iconpos = h.iconpos || "left", m = "ui-icon " + h.icon, h.iconshadow && (m += " ui-icon-shadow"); h.iconpos && (o += " ui-btn-icon-" + h.iconpos, h.iconpos == "notext" && !f.attr("title") && f.attr("title", f.getEncodedText())); q += h.corners ? " ui-btn-corner-all" : ""; h.iconpos && h.iconpos === "notext" && !f.attr("title") && f.attr("title", f.getEncodedText()); p && f.removeClass(p.bcls || ""); f.removeClass("ui-link").addClass(o); l.className = q; n.className = "ui-btn-text"; p || l.appendChild(n); if (r && (r.className =
m, !p || !p.icon)) r.appendChild(k.createTextNode("\u00a0")), l.appendChild(r); for (; j.firstChild && !p; ) n.appendChild(j.firstChild); p || j.appendChild(l); p = { bcls: o, outer: j, inner: l, text: n, icon: r }; a.data(j, "buttonElements", p); a.data(l, "buttonElements", p); a.data(n, "buttonElements", p); r && a.data(r, "buttonElements", p)
            } return this
        }; a.fn.buttonMarkup.defaults = { corners: true, shadow: true, iconshadow: true, wrapperEls: "span" }; var d = function () {
            var c = a.mobile.buttonMarkup.hoverDelay, g, f; a(k).bind({ "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (d) {
                var h,
k = a(b(d.target)), d = d.type; if (k.length) if (h = k.attr("data-" + a.mobile.ns + "theme"), d === "vmousedown") a.support.touch ? g = setTimeout(function () { k.removeClass("ui-btn-up-" + h).addClass("ui-btn-down-" + h) }, c) : k.removeClass("ui-btn-up-" + h).addClass("ui-btn-down-" + h); else if (d === "vmousecancel" || d === "vmouseup") k.removeClass("ui-btn-down-" + h).addClass("ui-btn-up-" + h); else if (d === "vmouseover" || d === "focus") a.support.touch ? f = setTimeout(function () { k.removeClass("ui-btn-up-" + h).addClass("ui-btn-hover-" + h) }, c) : k.removeClass("ui-btn-up-" +
h).addClass("ui-btn-hover-" + h); else if (d === "vmouseout" || d === "blur" || d === "scrollstart") k.removeClass("ui-btn-hover-" + h + " ui-btn-down-" + h).addClass("ui-btn-up-" + h), g && clearTimeout(g), f && clearTimeout(f)
            }, "focusin focus": function (c) { a(b(c.target)).addClass(a.mobile.focusClass) }, "focusout blur": function (c) { a(b(c.target)).removeClass(a.mobile.focusClass) } 
            }); d = null
        }; a(k).bind("pagecreate create", function (b) {
            a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",
b.target).not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    })(l); (function (a) {
        a.widget("mobile.collapsible", a.mobile.widget, { options: { expandCueText: " click to expand contents", collapseCueText: " click to collapse contents", collapsed: true, heading: "h1,h2,h3,h4,h5,h6,legend", theme: null, contentTheme: null, iconTheme: "d", mini: false, initSelector: ":jqmData(role='collapsible')" }, _create: function () {
            var c = this.element, b = this.options, d = c.addClass("ui-collapsible"), e = c.children(b.heading).first(),
g = d.wrapInner("<div class='ui-collapsible-content'></div>").find(".ui-collapsible-content"), f = c.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"); e.is("legend") && (e = a("<div role='heading'>" + e.html() + "</div>").insertBefore(e), e.next().remove()); if (f.length) { if (!b.theme) b.theme = f.jqmData("theme") || a.mobile.getInheritedTheme(f, "c"); if (!b.contentTheme) b.contentTheme = f.jqmData("content-theme"); if (!b.iconPos) b.iconPos = f.jqmData("iconpos"); if (!b.mini) b.mini = f.jqmData("mini") } g.addClass(b.contentTheme ?
"ui-body-" + b.contentTheme : ""); e.insertBefore(g).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({ shadow: false, corners: false, iconpos: c.jqmData("iconpos") || b.iconPos || "left", icon: "plus", mini: b.mini, theme: b.theme }).add(".ui-btn-inner", c).addClass("ui-corner-top ui-corner-bottom"); d.bind("expand collapse", function (c) {
    if (!c.isDefaultPrevented()) {
        c.preventDefault();
        var h = a(this), c = c.type === "collapse", k = b.contentTheme; e.toggleClass("ui-collapsible-heading-collapsed", c).find(".ui-collapsible-heading-status").text(c ? b.expandCueText : b.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-minus", !c).toggleClass("ui-icon-plus", c).end().find("a").first().removeClass(a.mobile.activeBtnClass); h.toggleClass("ui-collapsible-collapsed", c); g.toggleClass("ui-collapsible-content-collapsed", c).attr("aria-hidden", c); if (k && (!f.length || d.jqmData("collapsible-last"))) e.find("a").first().add(e.find(".ui-btn-inner")).toggleClass("ui-corner-bottom",
c), g.toggleClass("ui-corner-bottom", !c); g.trigger("updatelayout")
    } 
}).trigger(b.collapsed ? "collapse" : "expand"); e.bind("tap", function () { e.find("a").first().addClass(a.mobile.activeBtnClass) }).bind("click", function (a) { var b = e.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse"; d.trigger(b); a.preventDefault(); a.stopPropagation() })
        } 
        }); a(k).bind("pagecreate create", function (c) { a.mobile.collapsible.prototype.enhanceWithin(c.target) })
    })(l); (function (a, c) {
        a.widget("mobile.collapsibleset", a.mobile.widget,
{ options: { initSelector: ":jqmData(role='collapsible-set')" }, _create: function () {
    var b = this.element.addClass("ui-collapsible-set"), d = this.options; if (!d.theme) d.theme = a.mobile.getInheritedTheme(b, "c"); if (!d.contentTheme) d.contentTheme = b.jqmData("content-theme"); if (!d.corners) d.corners = b.jqmData("corners") === c ? true : false; b.jqmData("collapsiblebound") || b.jqmData("collapsiblebound", true).bind("expand collapse", function (b) {
        var c = b.type === "collapse", b = a(b.target).closest(".ui-collapsible"), d = b.data("collapsible");
        d.options.contentTheme && b.jqmData("collapsible-last") && (b.find(d.options.heading).first().find("a").first().toggleClass("ui-corner-bottom", c).find(".ui-btn-inner").toggleClass("ui-corner-bottom", c), b.find(".ui-collapsible-content").toggleClass("ui-corner-bottom", !c))
    }).bind("expand", function (b) { a(b.target).closest(".ui-collapsible").siblings(".ui-collapsible").trigger("collapse") })
}, _init: function () { this.refresh() }, refresh: function () {
    var b = this.options, c = this.element.children(":jqmData(role='collapsible')");
    a.mobile.collapsible.prototype.enhance(c.not(".ui-collapsible")); c.each(function () { a(this).find(a.mobile.collapsible.prototype.options.heading).find("a").first().removeClass("ui-corner-top ui-corner-bottom").find(".ui-btn-inner").removeClass("ui-corner-top ui-corner-bottom") }); c.first().find("a").first().addClass(b.corners ? "ui-corner-top" : "").find(".ui-btn-inner").addClass("ui-corner-top"); c.last().jqmData("collapsible-last", true).find("a").first().addClass(b.corners ? "ui-corner-bottom" : "").find(".ui-btn-inner").addClass("ui-corner-bottom")
} 
});
        a(k).bind("pagecreate create", function (b) { a.mobile.collapsibleset.prototype.enhanceWithin(b.target) })
    })(l); (function (a, c) {
        a.widget("mobile.navbar", a.mobile.widget, { options: { iconpos: "top", grid: null, initSelector: ":jqmData(role='navbar')" }, _create: function () {
            var b = this.element, d = b.find("a"), e = d.filter(":jqmData(icon)").length ? this.options.iconpos : c; b.addClass("ui-navbar ui-mini").attr("role", "navigation").find("ul").jqmEnhanceable().grid({ grid: this.options.grid }); d.buttonMarkup({ corners: false, shadow: false,
                inline: true, iconpos: e
            }); b.delegate("a", "vclick", function (b) { a(b.target).hasClass("ui-disabled") || (d.removeClass(a.mobile.activeBtnClass), a(this).addClass(a.mobile.activeBtnClass)) }); b.closest(".ui-page").bind("pagebeforeshow", function () { d.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass) })
        } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.navbar.prototype.enhanceWithin(b.target) })
    })(l); (function (a) {
        var c = {}; a.widget("mobile.listview", a.mobile.widget, { options: { theme: null, countTheme: "c",
            headerTheme: "b", dividerTheme: "b", splitIcon: "arrow-r", splitTheme: "b", inset: false, initSelector: ":jqmData(role='listview')"
        }, _create: function () { var a = ""; a += this.options.inset ? " ui-listview-inset ui-corner-all ui-shadow " : ""; this.element.addClass(function (c, e) { return e + " ui-listview " + a }); this.refresh(true) }, _removeCorners: function (a, c) {
            a = a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")); c === "top" ? a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl") : c === "bottom" ? a.removeClass("ui-corner-bottom ui-corner-br ui-corner-bl") :
a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl ui-corner-bottom ui-corner-br ui-corner-bl")
        }, _refreshCorners: function (a) {
            var c, e; this.options.inset && (c = this.element.children("li"), e = a ? c.not(".ui-screen-hidden") : c.filter(":visible"), this._removeCorners(c), c = e.first().addClass("ui-corner-top"), c.add(c.find(".ui-btn-inner").not(".ui-li-link-alt span:first-child")).addClass("ui-corner-top").end().find(".ui-li-link-alt, .ui-li-link-alt span:first-child").addClass("ui-corner-tr").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-tl"),
e = e.last().addClass("ui-corner-bottom"), e.add(e.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").not(".ui-li-icon").addClass("ui-corner-bl")); a || this.element.trigger("updatelayout")
        }, _findFirstElementByTagName: function (a, c, e, g) { var f = {}; for (f[e] = f[g] = true; a; ) { if (f[a.nodeName]) return a; a = a[c] } return null }, _getChildrenByTagName: function (b, c, e) { var g = [], f = {}; f[c] = f[e] = true; for (b = b.firstChild; b; ) f[b.nodeName] && g.push(b), b = b.nextSibling; return a(g) }, _addThumbClasses: function (b) {
            var c,
e, g = b.length; for (c = 0; c < g; c++) e = a(this._findFirstElementByTagName(b[c].firstChild, "nextSibling", "img", "IMG")), e.length && (e.addClass("ui-li-thumb"), a(this._findFirstElementByTagName(e[0].parentNode, "parentNode", "li", "LI")).addClass(e.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
        }, refresh: function (b) {
            this.parentPage = this.element.closest(".ui-page"); this._createSubPages(); var c = this.options, e = this.element, g = e.jqmData("dividertheme") || c.dividerTheme, f = e.jqmData("splittheme"), j = e.jqmData("spliticon"),
h = this._getChildrenByTagName(e[0], "li", "LI"), l = a.support.cssPseudoElement || !a.nodeName(e[0], "ol") ? 0 : 1, o = {}, m, v, n, r, p, s, u; l && e.find(".ui-li-dec").remove(); if (!c.theme) c.theme = a.mobile.getInheritedTheme(this.element, "c"); for (var x = 0, w = h.length; x < w; x++) {
                m = h.eq(x); v = "ui-li"; if (b || !m.hasClass("ui-li")) n = m.jqmData("theme") || c.theme, r = this._getChildrenByTagName(m[0], "a", "A"), s = m.jqmData("role") === "list-divider", r.length && !s ? (s = m.jqmData("icon"), m.buttonMarkup({ wrapperEls: "div", shadow: false, corners: false,
                    iconpos: "right", icon: r.length > 1 || s === false ? false : s || "arrow-r", theme: n
                }), s != false && r.length == 1 && m.addClass("ui-li-has-arrow"), r.first().removeClass("ui-link").addClass("ui-link-inherit"), r.length > 1 && (v += " ui-li-has-alt", r = r.last(), p = f || r.jqmData("theme") || c.splitTheme, u = r.jqmData("icon"), r.appendTo(m).attr("title", r.getEncodedText()).addClass("ui-li-link-alt").empty().buttonMarkup({ shadow: false, corners: false, theme: n, icon: false, iconpos: "notext" }).find(".ui-btn-inner").append(a(k.createElement("span")).buttonMarkup({ shadow: true,
                    corners: true, theme: p, iconpos: "notext", icon: u || s || j || c.splitIcon
                })))) : s ? (v += " ui-li-divider ui-bar-" + g, m.attr("role", "heading"), l && (l = 1)) : v += " ui-li-static ui-body-" + n; l && v.indexOf("ui-li-divider") < 0 && (n = m.is(".ui-li-static:first") ? m : m.find(".ui-link-inherit"), n.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + l++ + ". </span>")); o[v] || (o[v] = []); o[v].push(m[0])
            } for (v in o) a(o[v]).addClass(v).children(".ui-btn-inner").addClass(v); e.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () {
                var b =
a(this); b.prependTo(b.parent())
            }).end().find(".ui-li-count").each(function () { a(this).closest("li").addClass("ui-li-has-count") }).addClass("ui-btn-up-" + (e.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"); this._addThumbClasses(h); this._addThumbClasses(e.find(".ui-link-inherit")); this._refreshCorners(b)
        }, _idStringEscape: function (a) { return a.replace(/[^a-zA-Z0-9]/g, "-") }, _createSubPages: function () {
            var b = this.element, d = b.closest(".ui-page"), e = d.jqmData("url"), g = e || d[0][a.expando],
f = b.attr("id"), j = this.options, h = "data-" + a.mobile.ns, k = this, l = d.find(":jqmData(role='footer')").jqmData("id"), m; typeof c[g] === "undefined" && (c[g] = -1); f = f || ++c[g]; a(b.find("li>ul, li>ol").toArray().reverse()).each(function (c) {
    var d = a(this), g = d.attr("id") || f + "-" + c, c = d.parent(), k = a(d.prevAll().toArray().reverse()), k = k.length ? k : a("<span>" + a.trim(c.contents()[0].nodeValue) + "</span>"), q = k.first().getEncodedText(), g = (e || "") + "&" + a.mobile.subPageUrlKey + "=" + g, u = d.jqmData("theme") || j.theme, x = d.jqmData("counttheme") ||
b.jqmData("counttheme") || j.countTheme; m = true; d.detach().wrap("<div " + h + "role='page' " + h + "url='" + g + "' " + h + "theme='" + u + "' " + h + "count-theme='" + x + "'><div " + h + "role='content'></div></div>").parent().before("<div " + h + "role='header' " + h + "theme='" + j.headerTheme + "'><div class='ui-title'>" + q + "</div></div>").after(l ? a("<div " + h + "role='footer' " + h + "id='" + l + "'>") : "").parent().appendTo(a.mobile.pageContainer).page(); d = c.find("a:first"); d.length || (d = a("<a/>").html(k || q).prependTo(c.empty())); d.attr("href", "#" + g)
}).listview();
            m && d.is(":jqmData(external-page='true')") && d.data("page").options.domCache === false && d.unbind("pagehide.remove").bind("pagehide.remove", function (b, c) { var f = c.nextPage, h = new a.Event("pageremove"); c.nextPage && (f = f.jqmData("url"), f.indexOf(e + "&" + a.mobile.subPageUrlKey) !== 0 && (k.childPages().remove(), d.trigger(h), h.isDefaultPrevented() || d.removeWithDependents())) })
        }, childPages: function () { var b = this.parentPage.jqmData("url"); return a(":jqmData(url^='" + b + "&" + a.mobile.subPageUrlKey + "')") } 
        }); a(k).bind("pagecreate create",
function (b) { a.mobile.listview.prototype.enhanceWithin(b.target) })
    })(l); (function (a, c) {
        a.widget("mobile.checkboxradio", a.mobile.widget, { options: { theme: null, initSelector: "input[type='checkbox'],input[type='radio']" }, _create: function () {
            var b = this, d = this.element, e = a(d).closest("label"), g = e.length ? e : a(d).closest("form,fieldset,:jqmData(role='page'),:jqmData(role='dialog')").find("label").filter("[for='" + d[0].id + "']"), f = d[0].type, e = d.jqmData("mini") || d.closest("form,fieldset").jqmData("mini"), j = f + "-on",
h = f + "-off", l = d.parents(":jqmData(type='horizontal')").length ? c : h, o = d.jqmData("iconpos") || d.closest("form,fieldset").jqmData("iconpos"); if (!(f !== "checkbox" && f !== "radio")) {
                a.extend(this, { label: g, inputtype: f, checkedClass: "ui-" + j + (l ? "" : " " + a.mobile.activeBtnClass), uncheckedClass: "ui-" + h, checkedicon: "ui-icon-" + j, uncheckedicon: "ui-icon-" + h }); if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.element, "c"); g.buttonMarkup({ theme: this.options.theme, icon: l, shadow: false, mini: e, iconpos: o });
                e = k.createElement("div"); e.className = "ui-" + f; d.add(g).wrapAll(e); g.bind({ vmouseover: function (b) { a(this).parent().is(".ui-disabled") && b.stopPropagation() }, vclick: function (a) { if (d.is(":disabled")) a.preventDefault(); else return b._cacheVals(), d.prop("checked", f === "radio" && true || !d.prop("checked")), d.triggerHandler("click"), b._getInputSet().not(d).prop("checked", false), b._updateAll(), false } }); d.bind({ vmousedown: function () { b._cacheVals() }, vclick: function () {
                    var c = a(this); c.is(":checked") ? (c.prop("checked",
true), b._getInputSet().not(c).prop("checked", false)) : c.prop("checked", false); b._updateAll()
                }, focus: function () { g.addClass(a.mobile.focusClass) }, blur: function () { g.removeClass(a.mobile.focusClass) } 
                }); this.refresh()
            } 
        }, _cacheVals: function () { this._getInputSet().each(function () { a(this).jqmData("cacheVal", this.checked) }) }, _getInputSet: function () {
            return this.inputtype === "checkbox" ? this.element : this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='" + this.element[0].name + "'][type='" +
this.inputtype + "']")
        }, _updateAll: function () { var b = this; this._getInputSet().each(function () { var c = a(this); (this.checked || b.inputtype === "checkbox") && c.trigger("change") }).checkboxradio("refresh") }, refresh: function () {
            var a = this.element[0], c = this.label, e = c.find(".ui-icon"); a.checked ? (c.addClass(this.checkedClass).removeClass(this.uncheckedClass), e.addClass(this.checkedicon).removeClass(this.uncheckedicon)) : (c.removeClass(this.checkedClass).addClass(this.uncheckedClass), e.removeClass(this.checkedicon).addClass(this.uncheckedicon));
            a.disabled ? this.disable() : this.enable()
        }, disable: function () { this.element.prop("disabled", true).parent().addClass("ui-disabled") }, enable: function () { this.element.prop("disabled", false).parent().removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.checkboxradio.prototype.enhanceWithin(b.target, true) })
    })(l); (function (a, c) {
        a.widget("mobile.button", a.mobile.widget, { options: { theme: null, icon: null, iconpos: null, inline: false, corners: true, shadow: true, iconshadow: true, initSelector: "button, [type='button'], [type='submit'], [type='reset'], [type='image']",
            mini: false
        }, _create: function () {
            var b = this.element, d, e = this.options, g; g = ""; var f; if (b[0].tagName === "A") !b.hasClass("ui-btn") && b.buttonMarkup(); else {
                if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.element, "c"); ~b[0].className.indexOf("ui-btn-left") && (g = "ui-btn-left"); ~b[0].className.indexOf("ui-btn-right") && (g = "ui-btn-right"); if (b.attr("type") === "submit" || b.attr("type") === "reset") g ? g += " ui-submit" : g = "ui-submit"; a("label[for='" + b.attr("id") + "']").addClass("ui-submit"); d = this.button =
a("<div></div>").text(b.text() || b.val()).insertBefore(b).buttonMarkup({ theme: e.theme, icon: e.icon, iconpos: e.iconpos, inline: e.inline, corners: e.corners, shadow: e.shadow, iconshadow: e.iconshadow, mini: e.mini }).addClass(g).append(b.addClass("ui-btn-hidden")); e = b.attr("type"); g = b.attr("name"); e !== "button" && e !== "reset" && g && b.bind("vclick", function () { f === c && (f = a("<input>", { type: "hidden", name: b.attr("name"), value: b.attr("value") }).insertBefore(b), a(k).one("submit", function () { f.remove(); f = c })) }); b.bind({ focus: function () { d.addClass(a.mobile.focusClass) },
    blur: function () { d.removeClass(a.mobile.focusClass) } 
}); this.refresh()
            } 
        }, enable: function () { this.element.attr("disabled", false); this.button.removeClass("ui-disabled").attr("aria-disabled", false); return this._setOption("disabled", false) }, disable: function () { this.element.attr("disabled", true); this.button.addClass("ui-disabled").attr("aria-disabled", true); return this._setOption("disabled", true) }, refresh: function () {
            var b = this.element; b.prop("disabled") ? this.disable() : this.enable(); a(this.button.data("buttonElements").text).text(b.text() ||
b.val())
        } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.button.prototype.enhanceWithin(b.target, true) })
    })(l); (function (a) {
        a.fn.controlgroup = function (c) {
            function b(a, b) { a.removeClass("ui-btn-corner-all ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-controlgroup-last ui-shadow").eq(0).addClass(b[0]).end().last().addClass(b[1]).addClass("ui-controlgroup-last") } return this.each(function () {
                var d = a(this), e = a.extend({ direction: d.jqmData("type") || "vertical", shadow: false, excludeInvisible: true,
                    mini: d.jqmData("mini")
                }, c), g = d.children("legend"), f = e.direction == "horizontal" ? ["ui-corner-left", "ui-corner-right"] : ["ui-corner-top", "ui-corner-bottom"]; d.find("input").first().attr("type"); d.wrapInner("<div class='ui-controlgroup-controls'></div>"); g.length && (a("<div role='heading' class='ui-controlgroup-label'>" + g.html() + "</div>").insertBefore(d.children(0)), g.remove()); d.addClass("ui-corner-all ui-controlgroup ui-controlgroup-" + e.direction); b(d.find(".ui-btn" + (e.excludeInvisible ? ":visible" : "")).not(".ui-slider-handle"),
f); b(d.find(".ui-btn-inner"), f); e.shadow && d.addClass("ui-shadow"); e.mini && d.addClass("ui-mini")
            })
        } 
    })(l); (function (a) { a(k).bind("pagecreate create", function (c) { a(c.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link") }) })(l); (function (a) {
        var c = a("meta[name=viewport]"), b = c.attr("content"), d = b + ",maximum-scale=1, user-scalable=no", e = b + ",maximum-scale=10, user-scalable=yes", g = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(b);
        a.mobile.zoom = a.extend({}, { enabled: !g, locked: false, disable: function (b) { if (!g && !a.mobile.zoom.locked) c.attr("content", d), a.mobile.zoom.enabled = false, a.mobile.zoom.locked = b || false }, enable: function (b) { if (!g && (!a.mobile.zoom.locked || b === true)) c.attr("content", e), a.mobile.zoom.enabled = true, a.mobile.zoom.locked = false }, restore: function () { if (!g) c.attr("content", b), a.mobile.zoom.enabled = true } })
    })(l); (function (a) {
        a.widget("mobile.textinput", a.mobile.widget, { options: { theme: null, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) &&
navigator.userAgent.indexOf("AppleWebKit") > -1, initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type])", clearSearchButtonText: "clear text"
        }, _create: function () {
            var c =
this.element, b = this.options, d = b.theme || a.mobile.getInheritedTheme(this.element, "c"), e = " ui-body-" + d, g = c.jqmData("mini") == true, f = g ? " ui-mini" : "", j, h; a("label[for='" + c.attr("id") + "']").addClass("ui-input-text"); j = c.addClass("ui-input-text ui-body-" + d); typeof c[0].autocorrect !== "undefined" && !a.support.touchOverflow && (c[0].setAttribute("autocorrect", "off"), c[0].setAttribute("autocomplete", "off")); c.is("[type='search'],:jqmData(type='search')") ? (j = c.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" +
e + f + "'></div>").parent(), h = a("<a href='#' class='ui-input-clear' title='" + b.clearSearchButtonText + "'>" + b.clearSearchButtonText + "</a>").bind("click", function (a) { c.val("").focus().trigger("change"); h.addClass("ui-input-clear-hidden"); a.preventDefault() }).appendTo(j).buttonMarkup({ icon: "delete", iconpos: "notext", corners: true, shadow: true, mini: g }), d = function () { setTimeout(function () { h.toggleClass("ui-input-clear-hidden", !c.val()) }, 0) }, d(), c.bind("paste cut keyup focus change blur", d)) : c.addClass("ui-corner-all ui-shadow-inset" +
e + f); c.focus(function () { j.addClass(a.mobile.focusClass) }).blur(function () { j.removeClass(a.mobile.focusClass) }).bind("focus", function () { b.preventFocusZoom && a.mobile.zoom.disable(true) }).bind("blur", function () { b.preventFocusZoom && a.mobile.zoom.enable(true) }); if (c.is("textarea")) { var l = function () { var a = c[0].scrollHeight; c[0].clientHeight < a && c.height(a + 15) }, o; c.keyup(function () { clearTimeout(o); o = setTimeout(l, 100) }); a(k).one("pagechange", l); a.trim(c.val()) && a(t).load(l) } 
        }, disable: function () {
            (this.element.attr("disabled",
true).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).addClass("ui-disabled")
        }, enable: function () { (this.element.attr("disabled", false).is("[type='search'],:jqmData(type='search')") ? this.element.parent() : this.element).removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create", function (c) { a.mobile.textinput.prototype.enhanceWithin(c.target, true) })
    })(l); (function (a) {
        a.mobile.listview.prototype.options.filter = false; a.mobile.listview.prototype.options.filterPlaceholder =
"Filter items..."; a.mobile.listview.prototype.options.filterTheme = "c"; a.mobile.listview.prototype.options.filterCallback = function (a, b) { return a.toLowerCase().indexOf(b) === -1 }; a(k).delegate(":jqmData(role='listview')", "listviewcreate", function () {
    var c = a(this), b = c.data("listview"); if (b.options.filter) {
        var d = a("<form>", { "class": "ui-listview-filter ui-bar-" + b.options.filterTheme, role: "search" }); a("<input>", { placeholder: b.options.filterPlaceholder }).attr("data-" + a.mobile.ns + "type", "search").jqmData("lastval",
"").bind("keyup change", function () {
    var d = a(this), g = this.value.toLowerCase(), f = null, f = d.jqmData("lastval") + "", j = false, h = ""; d.jqmData("lastval", g); f = g.length < f.length || g.indexOf(f) !== 0 ? c.children() : c.children(":not(.ui-screen-hidden)"); if (g) {
        for (var k = f.length - 1; k >= 0; k--) d = a(f[k]), h = d.jqmData("filtertext") || d.text(), d.is("li:jqmData(role=list-divider)") ? (d.toggleClass("ui-filter-hidequeue", !j), j = false) : b.options.filterCallback(h, g) ? d.toggleClass("ui-filter-hidequeue", true) : j = true; f.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",
false); f.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", true).toggleClass("ui-filter-hidequeue", false)
    } else f.toggleClass("ui-screen-hidden", false); b._refreshCorners()
}).appendTo(d).textinput(); b.options.inset && d.addClass("ui-listview-filter-inset"); d.bind("submit", function () { return false }).insertBefore(c)
    } 
})
    })(l); (function (a, c) {
        a.widget("mobile.slider", a.mobile.widget, { options: { theme: null, trackTheme: null, disabled: false, initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
            mini: false
        }, _create: function () {
            var b = this, d = this.element, e = a.mobile.getInheritedTheme(d, "c"), g = this.options.theme || e, e = this.options.trackTheme || e, f = d[0].nodeName.toLowerCase(), j = f == "select" ? "ui-slider-switch" : "", h = d.attr("id"), l = a("[for='" + h + "']"), o = l.attr("id") || h + "-label", l = l.attr("id", o), m = function () { return f == "input" ? parseFloat(d.val()) : d[0].selectedIndex }, v = f == "input" ? parseFloat(d.attr("min")) : 0, n = f == "input" ? parseFloat(d.attr("max")) : d.find("option").length - 1, r = t.parseFloat(d.attr("step") || 1),
p = this.options.inline || d.jqmData("inline") == true ? " ui-slider-inline" : "", s = this.options.mini || d.jqmData("mini") ? " ui-slider-mini" : "", u = k.createElement("a"), x = a(u), h = k.createElement("div"), w = a(h), D = d.jqmData("highlight") && f != "select" ? function () { var b = k.createElement("div"); b.className = "ui-slider-bg " + a.mobile.activeBtnClass + " ui-btn-corner-all"; return a(b).prependTo(w) } () : false; u.setAttribute("href", "#"); h.setAttribute("role", "application"); h.className = ["ui-slider ", j, " ui-btn-down-", e, " ui-btn-corner-all",
p, s].join(""); u.className = "ui-slider-handle"; h.appendChild(u); x.buttonMarkup({ corners: true, theme: g, shadow: true }).attr({ role: "slider", "aria-valuemin": v, "aria-valuemax": n, "aria-valuenow": m(), "aria-valuetext": m(), title: m(), "aria-labelledby": o }); a.extend(this, { slider: w, handle: x, valuebg: D, dragging: false, beforeStart: null, userModified: false, mouseMoved: false }); if (f == "select") {
                g = k.createElement("div"); g.className = "ui-slider-inneroffset"; j = 0; for (o = h.childNodes.length; j < o; j++) g.appendChild(h.childNodes[j]);
                h.appendChild(g); x.addClass("ui-slider-handle-snapping"); g = d.find("option"); h = 0; for (j = g.length; h < j; h++) o = !h ? "b" : "a", p = !h ? " ui-btn-down-" + e : " " + a.mobile.activeBtnClass, k.createElement("div"), s = k.createElement("span"), s.className = ["ui-slider-label ui-slider-label-", o, p, " ui-btn-corner-all"].join(""), s.setAttribute("role", "img"), s.appendChild(k.createTextNode(g[h].innerHTML)), a(s).prependTo(w); b._labels = a(".ui-slider-label", w)
            } l.addClass("ui-slider"); d.addClass(f === "input" ? "ui-slider-input" : "ui-slider-switch").change(function () {
                b.mouseMoved ||
b.refresh(m(), true)
            }).keyup(function () { b.refresh(m(), true, true) }).blur(function () { b.refresh(m(), true) }); a(k).bind("vmousemove", function (a) { if (b.dragging) return b.mouseMoved = true, f === "select" && x.removeClass("ui-slider-handle-snapping"), b.refresh(a), b.userModified = b.beforeStart !== d[0].selectedIndex, false }); w.bind("vmousedown", function (a) { b.dragging = true; b.userModified = false; b.mouseMoved = false; if (f === "select") b.beforeStart = d[0].selectedIndex; b.refresh(a); return false }).bind("vclick", false); w.add(k).bind("vmouseup",
function () { if (b.dragging) return b.dragging = false, f === "select" && (x.addClass("ui-slider-handle-snapping"), b.mouseMoved ? b.userModified ? b.refresh(b.beforeStart == 0 ? 1 : 0) : b.refresh(b.beforeStart) : b.refresh(b.beforeStart == 0 ? 1 : 0)), b.mouseMoved = false }); w.insertAfter(d); f == "select" && this.handle.bind({ focus: function () { w.addClass(a.mobile.focusClass) }, blur: function () { w.removeClass(a.mobile.focusClass) } }); this.handle.bind({ vmousedown: function () { a(this).focus() }, vclick: false, keydown: function (c) {
    var d = m(); if (!b.options.disabled) {
        switch (c.keyCode) {
            case a.mobile.keyCode.HOME: case a.mobile.keyCode.END: case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: if (c.preventDefault(),
!b._keySliding) b._keySliding = true, a(this).addClass("ui-state-active")
        } switch (c.keyCode) { case a.mobile.keyCode.HOME: b.refresh(v); break; case a.mobile.keyCode.END: b.refresh(n); break; case a.mobile.keyCode.PAGE_UP: case a.mobile.keyCode.UP: case a.mobile.keyCode.RIGHT: b.refresh(d + r); break; case a.mobile.keyCode.PAGE_DOWN: case a.mobile.keyCode.DOWN: case a.mobile.keyCode.LEFT: b.refresh(d - r) } 
    } 
}, keyup: function () { if (b._keySliding) b._keySliding = false, a(this).removeClass("ui-state-active") } 
}); this.refresh(c, c, true)
        },
            refresh: function (b, c, e) {
                (this.options.disabled || this.element.attr("disabled")) && this.disable(); var g = this.element, f = g[0].nodeName.toLowerCase(), j = f === "input" ? parseFloat(g.attr("min")) : 0, h = f === "input" ? parseFloat(g.attr("max")) : g.find("option").length - 1, k = f === "input" && parseFloat(g.attr("step")) > 0 ? parseFloat(g.attr("step")) : 1; if (typeof b === "object") {
                    if (!this.dragging || b.pageX < this.slider.offset().left - 8 || b.pageX > this.slider.offset().left + this.slider.width() + 8) return; b = Math.round((b.pageX - this.slider.offset().left) /
this.slider.width() * 100)
                } else b == null && (b = f === "input" ? parseFloat(g.val() || 0) : g[0].selectedIndex), b = (parseFloat(b) - j) / (h - j) * 100; if (!isNaN(b)) {
                    b < 0 && (b = 0); b > 100 && (b = 100); var l = b / 100 * (h - j) + j, m = (l - j) % k; l -= m; Math.abs(m) * 2 >= k && (l += m > 0 ? k : -k); l = parseFloat(l.toFixed(5)); l < j && (l = j); l > h && (l = h); this.handle.css("left", b + "%"); this.handle.attr({ "aria-valuenow": f === "input" ? l : g.find("option").eq(l).attr("value"), "aria-valuetext": f === "input" ? l : g.find("option").eq(l).getEncodedText(), title: f === "input" ? l : g.find("option").eq(l).getEncodedText() });
                    this.valuebg && this.valuebg.css("width", b + "%"); if (this._labels) { var j = this.handle.width() / this.slider.width() * 100, t = b && j + (100 - j) * b / 100, n = b === 100 ? 0 : Math.min(j + 100 - t, 100); this._labels.each(function () { var b = a(this).is(".ui-slider-label-a"); a(this).width((b ? t : n) + "%") }) } if (!e) e = false, f === "input" ? (e = g.val() !== l, g.val(l)) : (e = g[0].selectedIndex !== l, g[0].selectedIndex = l), !c && e && g.trigger("change")
                } 
            }, enable: function () {
                this.element.attr("disabled", false); this.slider.removeClass("ui-disabled").attr("aria-disabled",
false); return this._setOption("disabled", false)
            }, disable: function () { this.element.attr("disabled", true); this.slider.addClass("ui-disabled").attr("aria-disabled", true); return this._setOption("disabled", true) } 
        }); a(k).bind("pagecreate create", function (b) { a.mobile.slider.prototype.enhanceWithin(b.target, true) })
    })(l); (function (a) {
        a.widget("mobile.selectmenu", a.mobile.widget, { options: { theme: null, disabled: false, icon: "arrow-d", iconpos: "right", inline: false, corners: true, shadow: true, iconshadow: true, overlayTheme: "a",
            hidePlaceholderMenuItems: true, closeText: "Close", nativeMenu: true, preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1, initSelector: "select:not(:jqmData(role='slider'))", mini: false
        }, _button: function () { return a("<div/>") }, _setDisabled: function (a) { this.element.attr("disabled", a); this.button.attr("aria-disabled", a); return this._setOption("disabled", a) }, _focusButton: function () { var a = this; setTimeout(function () { a.button.focus() }, 40) }, _selectOptions: function () { return this.select.find("option") },
            _preExtension: function () { var c = ""; ~this.element[0].className.indexOf("ui-btn-left") && (c = " ui-btn-left"); ~this.element[0].className.indexOf("ui-btn-right") && (c = " ui-btn-right"); this.select = this.element.wrap("<div class='ui-select" + c + "'>"); this.selectID = this.select.attr("id"); this.label = a("label[for='" + this.selectID + "']").addClass("ui-select"); this.isMultiple = this.select[0].multiple; if (!this.options.theme) this.options.theme = a.mobile.getInheritedTheme(this.select, "c") }, _create: function () {
                this._preExtension();
                this._trigger("beforeCreate"); this.button = this._button(); var c = this, b = this.options, d = b.inline || this.select.jqmData("inline"), e = b.mini || this.select.jqmData("mini"), g = b.icon ? b.iconpos || this.select.jqmData("iconpos") : false, d = this.button.text(a(this.select[0].options.item(this.select[0].selectedIndex == -1 ? 0 : this.select[0].selectedIndex)).text()).insertBefore(this.select).buttonMarkup({ theme: b.theme, icon: b.icon, iconpos: g, inline: d, corners: b.corners, shadow: b.shadow, iconshadow: b.iconshadow, mini: e }); b.nativeMenu &&
t.opera && t.opera.version && d.addClass("ui-select-nativeonly"); if (this.isMultiple) this.buttonCount = a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(d.addClass("ui-li-has-count")); (b.disabled || this.element.attr("disabled")) && this.disable(); this.select.change(function () { c.refresh() }); this.build()
            }, build: function () {
                var c = this; this.select.appendTo(c.button).bind("vmousedown", function () { c.button.addClass(a.mobile.activeBtnClass) }).bind("focus", function () { c.button.addClass(a.mobile.focusClass) }).bind("blur",
function () { c.button.removeClass(a.mobile.focusClass) }).bind("focus vmouseover", function () { c.button.trigger("vmouseover") }).bind("vmousemove", function () { c.button.removeClass(a.mobile.activeBtnClass) }).bind("change blur vmouseout", function () { c.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass) }).bind("change blur", function () { c.button.removeClass("ui-btn-down-" + c.options.theme) }); c.button.bind("vmousedown", function () { c.options.preventFocusZoom && a.mobile.zoom.disable(true) }).bind("mouseup",
function () { c.options.preventFocusZoom && a.mobile.zoom.enable(true) })
            }, selected: function () { return this._selectOptions().filter(":selected") }, selectedIndices: function () { var a = this; return this.selected().map(function () { return a._selectOptions().index(this) }).get() }, setButtonText: function () { var c = this, b = this.selected(); this.button.find(".ui-btn-text").text(function () { return !c.isMultiple ? b.text() : b.length ? b.map(function () { return a(this).text() }).get().join(", ") : c.placeholder }) }, setButtonCount: function () {
                var a =
this.selected(); this.isMultiple && this.buttonCount[a.length > 1 ? "show" : "hide"]().text(a.length)
            }, refresh: function () { this.setButtonText(); this.setButtonCount() }, open: a.noop, close: a.noop, disable: function () { this._setDisabled(true); this.button.addClass("ui-disabled") }, enable: function () { this._setDisabled(false); this.button.removeClass("ui-disabled") } 
        }); a(k).bind("pagecreate create", function (c) { a.mobile.selectmenu.prototype.enhanceWithin(c.target, true) })
    })(l); (function (a) {
        var c = function (b) {
            var c = b.selectID,
e = b.label, g = b.select.closest(".ui-page"), f = a("<div>", { "class": "ui-selectmenu-screen ui-screen-hidden" }).appendTo(g), j = b._selectOptions(), h = b.isMultiple = b.select[0].multiple, l = c + "-button", o = c + "-menu", m = a("<div data-" + a.mobile.ns + "role='dialog' data-" + a.mobile.ns + "theme='" + b.options.theme + "' data-" + a.mobile.ns + "overlay-theme='" + b.options.overlayTheme + "'><div data-" + a.mobile.ns + "role='header'><div class='ui-title'>" + e.getEncodedText() + "</div></div><div data-" + a.mobile.ns + "role='content'></div></div>"),
v = a("<div>", { "class": "ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-" + b.options.overlayTheme + " " + a.mobile.defaultDialogTransition }).insertAfter(f), n = a("<ul>", { "class": "ui-selectmenu-list", id: o, role: "listbox", "aria-labelledby": l }).attr("data-" + a.mobile.ns + "theme", b.options.theme).appendTo(v), r = a("<div>", { "class": "ui-header ui-bar-" + b.options.theme }).prependTo(v), p = a("<h1>", { "class": "ui-title" }).appendTo(r), s; b.isMultiple && (s = a("<a>", { text: b.options.closeText, href: "#", "class": "ui-btn-left" }).attr("data-" +
a.mobile.ns + "iconpos", "notext").attr("data-" + a.mobile.ns + "icon", "delete").appendTo(r).buttonMarkup()); a.extend(b, { select: b.select, selectID: c, buttonId: l, menuId: o, thisPage: g, menuPage: m, label: e, screen: f, selectOptions: j, isMultiple: h, theme: b.options.theme, listbox: v, list: n, header: r, headerTitle: p, headerClose: s, menuPageContent: void 0, menuPageClose: void 0, placeholder: "", build: function () {
    var c = this; c.refresh(); c.select.attr("tabindex", "-1").focus(function () { a(this).blur(); c.button.focus() }); c.button.bind("vclick keydown",
function (b) { if (b.type == "vclick" || b.keyCode && (b.keyCode === a.mobile.keyCode.ENTER || b.keyCode === a.mobile.keyCode.SPACE)) c.open(), b.preventDefault() }); c.list.attr("role", "listbox").bind("focusin", function (b) { a(b.target).attr("tabindex", "0").trigger("vmouseover") }).bind("focusout", function (b) { a(b.target).attr("tabindex", "-1").trigger("vmouseout") }).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function (d) {
    var e = c.select[0].selectedIndex, f = c.list.find("li:not(.ui-li-divider)").index(this), h = c._selectOptions().eq(f)[0];
    h.selected = c.isMultiple ? !h.selected : true; c.isMultiple && a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", h.selected).toggleClass("ui-icon-checkbox-off", !h.selected); (c.isMultiple || e !== f) && c.select.trigger("change"); c.isMultiple ? c.list.find("li:not(.ui-li-divider)").eq(f).addClass("ui-btn-down-" + b.options.theme).find("a").first().focus() : c.close(); d.preventDefault()
}).keydown(function (c) {
    var d = a(c.target), e = d.closest("li"); switch (c.keyCode) {
        case 38: return c = e.prev().not(".ui-selectmenu-placeholder"),
c.is(".ui-li-divider") && (c = c.prev()), c.length && (d.blur().attr("tabindex", "-1"), c.addClass("ui-btn-down-" + b.options.theme).find("a").first().focus()), false; case 40: return c = e.next(), c.is(".ui-li-divider") && (c = c.next()), c.length && (d.blur().attr("tabindex", "-1"), c.addClass("ui-btn-down-" + b.options.theme).find("a").first().focus()), false; case 13: case 32: return d.trigger("click"), false
    } 
}); c.menuPage.bind("pagehide", function () { c.list.appendTo(c.listbox); c._focusButton(); a.mobile._bindPageRemove.call(c.thisPage) });
    c.screen.bind("vclick", function () { c.close() }); c.isMultiple && c.headerClose.click(function () { if (c.menuType == "overlay") return c.close(), false }); c.thisPage.addDependents(this.menuPage)
}, _isRebuildRequired: function () { var a = this.list.find("li"); return this._selectOptions().text() !== a.text() }, selected: function () { return this._selectOptions().filter(":selected:not(:jqmData(placeholder='true'))") }, refresh: function (b) {
    var c = this, d; (b || this._isRebuildRequired()) && c._buildList(); d = this.selectedIndices(); c.setButtonText();
    c.setButtonCount(); c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected", false).each(function (b) { a.inArray(b, d) > -1 && (b = a(this), b.attr("aria-selected", true), c.isMultiple ? b.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : b.is(".ui-selectmenu-placeholder") ? b.next().addClass(a.mobile.activeBtnClass) : b.addClass(a.mobile.activeBtnClass)) })
}, close: function () {
    if (!this.options.disabled && this.isOpen) this.menuType == "page" ? t.history.back() :
(this.screen.addClass("ui-screen-hidden"), this.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"), this.list.appendTo(this.listbox), this._focusButton()), this.isOpen = false
}, open: function () {
    function c() { var e = d.list.find("." + a.mobile.activeBtnClass + " a"); e.length === 0 && (e = d.list.find("li.ui-btn:not(:jqmData(placeholder='true')) a")); e.first().focus().closest("li").addClass("ui-btn-down-" + b.options.theme) } if (!this.options.disabled) {
        var d = this, e = a(t), f = d.list.parent(), h = f.outerHeight(),
f = f.outerWidth(); a(".ui-page-active"); var g = e.scrollTop(), j = d.button.offset().top, l = e.height(), e = e.width(); d.button.addClass(a.mobile.activeBtnClass); setTimeout(function () { d.button.removeClass(a.mobile.activeBtnClass) }, 300); if (h > l - 80 || !a.support.scrollTop) {
            d.menuPage.appendTo(a.mobile.pageContainer).page(); d.menuPageContent = m.find(".ui-content"); d.menuPageClose = m.find(".ui-header a"); d.thisPage.unbind("pagehide.remove"); if (g == 0 && j > l) d.thisPage.one("pagehide", function () {
                a(this).jqmData("lastScroll",
j)
            }); d.menuPage.one("pageshow", function () { c(); d.isOpen = true }); d.menuType = "page"; d.menuPageContent.append(d.list); d.menuPage.find("div .ui-title").text(d.label.text()); a.mobile.changePage(d.menuPage, { transition: a.mobile.defaultDialogTransition })
        } else {
            d.menuType = "overlay"; d.screen.height(a(k).height()).removeClass("ui-screen-hidden"); var n = j - g, o = g + l - j, q = h / 2, p = parseFloat(d.list.parent().css("max-width")), h = n > h / 2 && o > h / 2 ? j + d.button.outerHeight() / 2 - q : n > o ? g + l - h - 30 : g + 30; f < p ? g = (e - f) / 2 : (g = d.button.offset().left +
d.button.outerWidth() / 2 - f / 2, g < 30 ? g = 30 : g + f > e && (g = e - f - 30)); d.listbox.append(d.list).removeClass("ui-selectmenu-hidden").css({ top: h, left: g }).addClass("in"); c(); d.isOpen = true
        } 
    } 
}, _buildList: function () {
    var b = this.options, c = this.placeholder, d = true, e = this.isMultiple ? "checkbox-off" : "false"; this.list.empty().filter(".ui-listview").listview("destroy"); var f = this.select.find("option"), h = f.length, g = this.select[0], j = "data-" + a.mobile.ns, l = j + "option-index", m = j + "icon", n = j + "role"; j += "placeholder"; for (var o = k.createDocumentFragment(),
q = false, p, t = 0; t < h; t++, q = false) {
        var s = f[t], r = a(s), v = s.parentNode, E = r.text(), I = k.createElement("a"), L = []; I.setAttribute("href", "#"); I.appendChild(k.createTextNode(E)); v !== g && v.nodeName.toLowerCase() === "optgroup" && (v = v.getAttribute("label"), v != p && (p = k.createElement("li"), p.setAttribute(n, "list-divider"), p.setAttribute("role", "option"), p.setAttribute("tabindex", "-1"), p.appendChild(k.createTextNode(v)), o.appendChild(p), p = v)); if (d && (!s.getAttribute("value") || E.length == 0 || r.jqmData("placeholder"))) if (d =
false, q = true, s.setAttribute(j, true), b.hidePlaceholderMenuItems && L.push("ui-selectmenu-placeholder"), !c) c = this.placeholder = E; r = k.createElement("li"); s.disabled && (L.push("ui-disabled"), r.setAttribute("aria-disabled", true)); r.setAttribute(l, t); r.setAttribute(m, e); q && r.setAttribute(j, true); r.className = L.join(" "); r.setAttribute("role", "option"); I.setAttribute("tabindex", "-1"); r.appendChild(I); o.appendChild(r)
    } this.list[0].appendChild(o); !this.isMultiple && !c.length ? this.header.hide() : this.headerTitle.text(this.placeholder);
    this.list.listview()
}, _button: function () { return a("<a>", { href: "#", role: "button", id: this.buttonId, "aria-haspopup": "true", "aria-owns": this.menuId }) } 
})
        }; a(k).bind("selectmenubeforecreate", function (b) { b = a(b.target).data("selectmenu"); b.options.nativeMenu || c(b) })
    })(l); (function (a) {
        a.widget("mobile.fixedtoolbar", a.mobile.widget, { options: { visibleOnPageShow: true, disablePageZoom: true, transition: "slide", fullscreen: false, tapToggle: true, tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed",
            hideDuringFocus: "input, textarea, select", updatePagePadding: true, trackPersistentToolbars: true, supportBlacklist: function () {
                var a = navigator.userAgent, b = navigator.platform, d = a.match(/AppleWebKit\/([0-9]+)/), d = !!d && d[1], e = a.match(/Fennec\/([0-9]+)/), e = !!e && e[1], g = a.match(/Opera Mobi\/([0-9]+)/), f = !!g && g[1]; return (b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1 || b.indexOf("iPod") > -1) && d && d < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || g && f < 7458 || a.indexOf("Android") > -1 && d && d < 533 ||
e && e < 6 || "palmGetResource" in t && d && d < 534 || a.indexOf("MeeGo") > -1 && a.indexOf("NokiaBrowser/8.5.0") > -1 ? true : false
            }, initSelector: ":jqmData(position='fixed')"
        }, _create: function () {
            var a = this.options, b = this.element, d = b.is(":jqmData(role='header')") ? "header" : "footer", e = b.closest(".ui-page"); a.supportBlacklist() ? this.destroy() : (b.addClass("ui-" + d + "-fixed"), a.fullscreen ? (b.addClass("ui-" + d + "-fullscreen"), e.addClass("ui-page-" + d + "-fullscreen")) : e.addClass("ui-page-" + d + "-fixed"), this._addTransitionClass(), this._bindPageEvents(),
this._bindToggleHandlers())
        }, _addTransitionClass: function () { var a = this.options.transition; a && a !== "none" && (a === "slide" && (a = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(a)) }, _bindPageEvents: function () {
            var c = this, b = c.options; c.element.closest(".ui-page").bind("pagebeforeshow", function () { b.disablePageZoom && a.mobile.zoom.disable(true); b.visibleOnPageShow || c.hide(true) }).bind("webkitAnimationStart animationstart updatelayout", function () { b.updatePagePadding && c.updatePagePadding(this) }).bind("pageshow",
function () { var d = this; c.updatePagePadding(d); b.updatePagePadding && a(t).bind("throttledresize." + c.widgetName, function () { c.updatePagePadding(d) }) }).bind("pagebeforehide", function (d, e) {
    b.disablePageZoom && a.mobile.zoom.enable(true); b.updatePagePadding && a(t).unbind("throttledresize." + c.widgetName); if (b.trackPersistentToolbars) {
        var g = a(".ui-footer-fixed:jqmData(id)", this), f = a(".ui-header-fixed:jqmData(id)", this), j = g.length && e.nextPage && a(".ui-footer-fixed:jqmData(id='" + g.jqmData("id") + "')", e.nextPage),
h = f.length && e.nextPage && a(".ui-header-fixed:jqmData(id='" + f.jqmData("id") + "')", e.nextPage), j = j || a(); if (j.length || h.length) j.add(h).appendTo(a.mobile.pageContainer), e.nextPage.one("pageshow", function () { j.add(h).appendTo(this) })
    } 
})
        }, _visible: true, updatePagePadding: function (c) { var b = this.element, d = b.is(".ui-header"); this.options.fullscreen || (c = c || b.closest(".ui-page"), a(c).css("padding-" + (d ? "top" : "bottom"), b.outerHeight())) }, _useTransition: function (c) {
            var b = this.element, d = a(t).scrollTop(), e = b.height(),
g = b.closest(".ui-page").height(), f = a.mobile.getScreenHeight(), b = b.is(":jqmData(role='header')") ? "header" : "footer"; return !c && (this.options.transition && this.options.transition !== "none" && (b === "header" && !this.options.fullscreen && d > e || b === "footer" && !this.options.fullscreen && d + f < g - e) || this.options.fullscreen)
        }, show: function (a) { var b = this.element; this._useTransition(a) ? b.removeClass("out ui-fixed-hidden").addClass("in") : b.removeClass("ui-fixed-hidden"); this._visible = true }, hide: function (a) {
            var b = this.element,
d = "out" + (this.options.transition === "slide" ? " reverse" : ""); this._useTransition(a) ? b.addClass(d).removeClass("in").animationComplete(function () { b.addClass("ui-fixed-hidden").removeClass(d) }) : b.addClass("ui-fixed-hidden").removeClass(d); this._visible = false
        }, toggle: function () { this[this._visible ? "hide" : "show"]() }, _bindToggleHandlers: function () {
            var c = this, b = c.options; c.element.closest(".ui-page").bind("vclick", function (d) { b.tapToggle && !a(d.target).closest(b.tapToggleBlacklist).length && c.toggle() }).bind("focusin focusout",
function (d) { if (screen.width < 500 && a(d.target).is(b.hideDuringFocus) && !a(d.target).closest(".ui-header-fixed, .ui-footer-fixed").length) c[d.type === "focusin" && c._visible ? "hide" : "show"]() })
        }, destroy: function () { this.element.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"); this.element.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen") } 
        }); a(k).bind("pagecreate create",
function (c) { a(c.target).jqmData("fullscreen") && a(a.mobile.fixedtoolbar.prototype.options.initSelector, c.target).not(":jqmData(fullscreen)").jqmData("fullscreen", true); a.mobile.fixedtoolbar.prototype.enhanceWithin(c.target) })
    })(l); (function (a, c) {
        if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
            var b = a.mobile.zoom, d, e, g, f, j; a(c).bind("orientationchange.iosorientationfix", b.enable).bind("devicemotion.iosorientationfix", function (a) {
                d = a.originalEvent; j = d.accelerationIncludingGravity;
                e = Math.abs(j.x); g = Math.abs(j.y); f = Math.abs(j.z); !c.orientation && (e > 7 || (f > 6 && g < 8 || f < 8 && g > 6) && e > 5) ? b.enabled && b.disable() : b.enabled || b.enable()
            })
        } 
    })(l, this); (function (a, c) {
        function b() { var b = a("." + a.mobile.activeBtnClass).first(); j.css({ top: a.support.scrollTop && f.scrollTop() + f.height() / 2 || b.length && b.offset().top || 100 }) } function d() { var c = j.offset(), e = f.scrollTop(), g = a.mobile.getScreenHeight(); if (c.top < e || c.top - e > g) j.addClass("ui-loader-fakefix"), b(), f.unbind("scroll", d).bind("scroll", b) } function e() { g.removeClass("ui-mobile-rendering") }
        var g = a("html"); a("head"); var f = a(c); a(c.document).trigger("mobileinit"); if (a.mobile.gradeA()) {
            if (a.mobile.ajaxBlacklist) a.mobile.ajaxEnabled = false; g.addClass("ui-mobile ui-mobile-rendering"); setTimeout(e, 5E3); var j = a("<div class='ui-loader'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>"); a.extend(a.mobile, { showPageLoadingMsg: function (b, c, e) {
                g.addClass("ui-loading"); if (a.mobile.loadingMessage) {
                    var k = e || a.mobile.loadingMessageTextVisible; b = b || a.mobile.loadingMessageTheme; j.attr("class",
"ui-loader ui-corner-all ui-body-" + (b || "a") + " ui-loader-" + (k ? "verbose" : "default") + (e ? " ui-loader-textonly" : "")).find("h1").text(c || a.mobile.loadingMessage).end().appendTo(a.mobile.pageContainer); d(); f.bind("scroll", d)
                } 
            }, hidePageLoadingMsg: function () { g.removeClass("ui-loading"); a.mobile.loadingMessage && j.removeClass("ui-loader-fakefix"); a(c).unbind("scroll", b); a(c).unbind("scroll", d) }, initializePage: function () {
                var b = a(":jqmData(role='page'), :jqmData(role='dialog')"); b.length || (b = a("body").wrapInner("<div data-" +
a.mobile.ns + "role='page'></div>").children(0)); b.each(function () { var b = a(this); b.jqmData("url") || b.attr("data-" + a.mobile.ns + "url", b.attr("id") || location.pathname + location.search) }); a.mobile.firstPage = b.first(); a.mobile.pageContainer = b.first().parent().addClass("ui-mobile-viewport"); f.trigger("pagecontainercreate"); a.mobile.showPageLoadingMsg(); e(); !a.mobile.hashListeningEnabled || !a.mobile.path.isHashValid(location.hash) || !a(location.hash + ':jqmData(role="page")').length && !a.mobile.path.isPath(location.hash) ?
a.mobile.changePage(a.mobile.firstPage, { transition: "none", reverse: true, changeHash: false, fromHashChange: true }) : f.trigger("hashchange", [true])
            } 
            }); a.mobile.navreadyDeferred.resolve(); a(function () {
                c.scrollTo(0, 1); a.mobile.defaultHomeScroll = !a.support.scrollTop || a(c).scrollTop() === 1 ? 0 : 1; a.fn.controlgroup && a(k).bind("pagecreate create", function (b) { a(":jqmData(role='controlgroup')", b.target).jqmEnhanceable().controlgroup({ excludeInvisible: false }) }); a.mobile.autoInitializePage && a.mobile.initializePage();
                f.load(a.mobile.silentScroll); a.support.cssPointerEvents || a(k).delegate(".ui-disabled", "vclick", function (a) { a.preventDefault(); a.stopImmediatePropagation() })
            })
        } 
    })(l, this)
});