/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);


/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),title:a.title?a.title:void 0,children:0,disabled:a.disabled,classes:a.className}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,title:a.title?a.title:void 0,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,group_label:null!=b?this.parsed[b].label:null,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.choice_label=function(a){return this.include_group_label_in_selected&&null!=a.group_label?"<b class='group-name'>"+a.group_label+"</b>"+a.html:a.html},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(c)));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b,c;return a.search_match||a.group_match?a.active_options>0?(b=[],b.push("group-result"),a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.innerHTML=a.search_text,a.title&&(c.title=a.title),this.outerHTML(c)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),b.search_text=b.group?b.label:b.html,(!b.group||this.group_search)&&(b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b;return b=this.search_contains?"":"^",new RegExp(b+a,"i")},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d instanceof Chosen?d.destroy():d instanceof Chosen||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){return a.container_mousedown(b),b.preventDefault()}),this.container.bind("touchend.chosen",function(b){return a.container_mouseup(b),b.preventDefault()}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(b)+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),b.addClass("result-selected"),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(this.choice_label(c)),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,a.preventDefault(),this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}).call(this);

/**
 * @preserve jQuery selectspinner plugin v1.0.0
 * @homepage http://xdsoft.net/jqplugins/selectspinner/
 * (c) 2014, Chupurnov Valeriy <chupurnov@gmail.com>.
 */
/*global document,window,jQuery,setTimeout,clearTimeout,console*/
(function ($) {
	'use strict';
	var	ARROWUP = 38,
		ARROWDOWN = 40,
		ENTER = 13,
		TAB = 9,
		ESC = 27,
		default_options  = {
			classes: ['xdsoft_pretty'],
			dropDownMaxHeight: 200,
			autoopen: false,
			dropdown: true,
			wheel: true,
			dragAndDropSpin: true,
			longSpin: true
		};
	function isScalar(mixed_var) {
		return (/boolean|number|string/)
			.test(typeof mixed_var);
	}
	function selectSpinner() {
		var opened = false,
			inited = false,
			enteredString = '',
			enteredTimer = 0,
			me = {
				input: null,
				list: [],
				options: false,
				find: function (str) {
					if (str) {
						str = str.toLowerCase();
						var i, value, title;
						for (i = 0; i < me.list.length; i += 1) {
							value = (isScalar(me.list[i]) || !me.list[i].value) ? me.list[i]+'' : me.list[i].value+'';
							title = (isScalar(me.list[i]) || !me.list[i].title) ? value : me.list[i].title+'';
							if (title.toLowerCase().substr(0, str.length) === str) {
								me.dropdown.find('div.xdsoft_item').removeClass('active');
								me.dropdown.find('div.xdsoft_item').eq(i).addClass('active');
								me.val(value);
								me.dropdown.trigger('recalscroll.xdsoft');
								return false;
							}
						}
					}
				},
				next: function (nextfollow) {
					var next = nextfollow ? 'next' : 'prev', active;
					active = me.dropdown.find('div.xdsoft_item.active');
					if (active.length) {
						active.removeClass('active');
						if (active[next]().length) {
							active[next]().addClass('active');
						} else {
							me.dropdown.find('div.xdsoft_item').eq(nextfollow ? 0 : -1).addClass('active');
						}
					} else {
						me.dropdown.find('div.xdsoft_item').eq(nextfollow ? 0 : -1).addClass('active');
					}
					me.dropdown.trigger('recalscroll.xdsoft');
					active = me.dropdown.find('div.xdsoft_item.active').eq(0);
					me.val(active.data('value'));
				},
				val: function (value) {
					var i;
					if (value !== undefined) {
						$(me.input).val(value);
						me.selector.find('span').text($(me.input).find('option:selected').length ? $(me.input).find('option:selected').text() : $(me.input).find('option').eq(0).text());
						$(me.input).trigger('change');
					}
					return $(me.input).val();
				},
				toggle: function () {
					if (!opened) {
						this.open();
					} else {
						this.close();
					}
				},
				close: function () {
					if (!opened) {
						return;
					}
					me.dropdown.parents('.xdsoft_selectspinner').removeClass('active');
					me.dropdown
						.hide();
					opened = false;
					$([document.body, window]).off('mousedown.xdsoft');
				},
				open: function () {
					if (opened || !me.options.dropdown) {
						return;
					}
					me.dropdown.parents('.xdsoft_selectspinner').addClass('active');
					me.dropdown
						.show()
						.trigger('resize_scroll.xdsoft_scroller');
					opened = true;
					me.spins.eq(0).focus();
					me.spins.eq(0).trigger('focus');
					setTimeout(function () {
						$([document.body, window]).on('mousedown.xdsoft', function arguments_callee() {
							me.close();
							$([document.body, window]).off('mousedown.xdsoft', arguments_callee);
						});
					}, 10);
				},
				updateSelect: function () {
					var val = me.val(), i = 0, options = [], value, title;
					$(me.input).empty();
					for (i = 0; i < me.list.length; i += 1) {
						value = (isScalar(me.list[i]) || !me.list[i].value) ? me.list[i] : me.list[i].value;
						title = (isScalar(me.list[i]) || !me.list[i].title) ? value : me.list[i].title;
						options.push('<option value="' + value + '">' + title + '</option>');
					}
					$(me.input)
						.html(options.join(''));
					me.val(val);
				},
				updateList: function (list) {
					if (list && $.isArray(list)) {
						me.list = $.extend(true, [], list);
						me.updateSelect();
						return;
					}
					if ($(me.input).is('select')) {
						$(me.input).find('option').each(function () {
							me.list.push({
								value: $(this).attr('value') || $(this).html(),
								title: $(this).html()
							});
						});
					} else if (me.options.list && $.isArray(me.options.list)) {
						me.list = $.extend(true, [], me.options.list);
						me.updateSelect();
					} else {
						return;
					}
				},
				update: function (list) {
					if (list && $.isArray(list)) {
						me.updateList(list);
					}
					var i, items = [], value, title, val;
					val = me.val();
					for (i = 0; i < me.list.length; i += 1) {
						value = (isScalar(me.list[i]) || !me.list[i].value) ? me.list[i] : me.list[i].value;
						title = (isScalar(me.list[i]) || !me.list[i].title) ? value : me.list[i].title;
						items.push('<div class="xdsoft_item" data-value="' + encodeURIComponent(value) + '">' + title + '</div>');
					}
					me.dropdown.find('.xdsoft_list')
						.html(items.join(''));
					me.dropdown.trigger('resize_scroll.xdsoft_scroller');
					me.val(val);
				},
				destroy: function () {
					if (me.input && $(me.input).data('selectspinner')) {
						$(me.input)
							.data('selectspinner', null)
							.show();
						me.selectspinner
								.after($(me.input))
								.empty()
								.remove();
					}
				},
				setOptions: function (options) {
					me.options = $.extend(true, {}, me.options || default_options, options);
				},
				init:  function (options) {
					if (inited || !me.input) {
						return;
					}
					me.setOptions(options);
					inited = true;

					me.selectspinner = $('<div class="xdsoft_selectspinner"></div>');
					me.selector = $('<div class="xdsoft_selector"><span>value</span></div>');
					me.dropdown = $('<div class="xdsoft_chooser"><div class="xdsoft_list"></div></div>');
					me.spinner = $('<div class="xdsoft_spinner xdsoft_noselect"><button type="button"></button><button type="button" tabindex="-1"></button></div>');
					me.spins = me.spinner.find('button');
					me.selectspinner.addClass(me.options.classes.join(' '));
					me.updateList();
					me.update();
					me.dropdown
						.on('recalscroll.xdsoft', function () {
							var active = me.dropdown.find('div.xdsoft_item.active').eq(0),
								top,
								actHght,
								hght;
							if (opened) {
								top = active.position().top;
								actHght = active.outerHeight(true);
								hght = me.dropdown.height();

								if (top < 0 || top + actHght > me.dropdown.height()) {
									me.dropdown.trigger('scroll_element.xdsoft_scroller', [
										(active.index(0) * actHght) / active.parent().height()
									]);
								}
							}
						})
						.on('mousemove', 'div.xdsoft_item', function () {
							if ($(this).hasClass('active')) {
								return true;
							}
							me.dropdown.find('div.xdsoft_item').removeClass('active');
							$(this).addClass('active');
							// $('.children-one').show();
						})
						.on('mousedown', 'div.xdsoft_item', function (event) {
							me.dropdown.find('div.xdsoft_item').removeClass('active');
							$(this).addClass('active');
							me.val(decodeURIComponent($(this).data('value')));
							me.close();
							event.preventDefault();
							event.stopPropagation();
						});
					me.selectspinner
						.on('mousedown', function (event) {
							me.open();
							event.preventDefault();
							event.stopPropagation();
						});

					var btn,
						btnInterval,
						start = {x: 0, y: 0},
						second = {x: 0, y: 0},
						btnActive = false;

					function btnSpinner() {
						if (btnActive) {
							me.next($(btn).index());
							var delta = Math.abs(second.y - start.y);
							if (me.options.longSpin) {
								btnInterval = setTimeout(btnSpinner, (300 - delta) > 0 ? 300 - delta : 0);
							}
						} else {
							clearTimeout(btnInterval);
							btnActive = false;
						}
					}
					if (me.options.dragAndDropSpin) {
						$([window, document.body])
							.on('mousemove.xdsoftbutton', function (event) {
								if (btnActive) {
									second.y = event.clientY;
								}
							})
							.on('mouseup.xdsoftbutton', function (event) {
								btnActive = false;
							});
					}
					me.spins
						.on('mousedown', function (event) {
							clearTimeout(btnInterval);
							btn = this;
							$(btn).focus();
							second.y = start.y = event.clientY;
							btnActive = true;
							btnSpinner();
							event.preventDefault();
							event.stopPropagation();
						})
						.on('focus', function (event) {
							me.selectspinner.addClass('active');
							if (me.options.autoopen) {
								me.open();
							}
						})
						.on('blur', function (event) {
							me.selectspinner.removeClass('active');
						})
						.on('keydown', function (event) {
							var key = event.which, c;
							switch (key) {
							case ARROWUP:
							case ARROWDOWN:
								me.next(key === ARROWDOWN);
								break;
							case ENTER:
								me.toggle();
								break;
							case ESC:
							case TAB:
								me.close();
								break;
							default:
								c = String.fromCharCode(key);
								enteredString += c;
								clearTimeout(enteredTimer);
								me.find(enteredString);
								enteredTimer = setTimeout(function () {
									enteredString = '';
								}, 300);
							}
						});

					me.spinner.append([me.spin_up, me.spin_down]);
					me.selectspinner.append([me.dropdown, me.selector, me.spinner]);
					if (me.options.dropDownMaxHeight) {
						me.dropdown.css({
							maxHeight: me.options.dropDownMaxHeight + 'px'
						});
					}
					
					if (me.dropdown.xdsoftScroller) {
						me.dropdown.xdsoftScroller();
					}
					if (me.options.wheel) {
						me.selectspinner.on('mousewheel', function (event) {
							me.next(event.deltaY);
							return false;
						});
					}
					$(me.input)
						.after(me.selectspinner);
					me.selectspinner
						.append(me.input);
				}
			};
		return me;
	}
	$.fn.selectSpinner = $.fn.selectspinner = function (options, second) {
		return this.each(function () {
			var selectspinner = {};
			if (!$(this).data('selectspinner')) {
				selectspinner = selectSpinner();
				$(this).data('selectspinner', selectspinner);
				selectspinner.input = this;
			} else {
				selectspinner = $(this).data('selectspinner');
			}
			if ($.type(options) === 'string') {
				if (selectspinner[options]) {
					selectspinner[options](second);
				}
			} else {
				selectspinner.init(options);
			}
		});
	};
	$.fn.selectspinner.defaults = default_options;
}(jQuery));
/**
 * Query Scroller plugin v1.0.1
 * homepage https://github.com/xdan/xdsoftScroller
 * Licensed under the MIT License (LICENSE.txt).
 * Version: 1.0.1
 */
(function($){'use strict';$.fn.xdsoftScroller=function(g){return this.each(function(){var f=$(this),pointerEventToXY=function(e){var a={x:0,y:0},touch;if(e.type==='touchstart'||e.type==='touchmove'||e.type==='touchend'||e.type==='touchcancel'){touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];a.x=touch.clientX;a.y=touch.clientY}else if(e.type==='mousedown'||e.type==='mouseup'||e.type==='mousemove'||e.type==='mouseover'||e.type==='mouseout'||e.type==='mouseenter'||e.type==='mouseleave'){a.x=e.clientX;a.y=e.clientY}return a},move=0,timebox,parentHeight,height,scrollbar,scroller,maximumOffset=100,start=false,startY=0,startTop=0,h1=0,touchStart=false,startTopScroll=0,calcOffset=function(){};if(g==='hide'){f.find('.xdsoft_scrollbar').hide();return}if(!$(this).hasClass('xdsoft_scroller_box')){timebox=f.children().eq(0);parentHeight=f[0].clientHeight;height=timebox[0].offsetHeight;scrollbar=$('<div class="xdsoft_scrollbar"></div>');scroller=$('<div class="xdsoft_scroller"></div>');scrollbar.append(scroller);f.addClass('xdsoft_scroller_box').append(scrollbar);calcOffset=function calcOffset(a){var b=pointerEventToXY(a).y-startY+startTopScroll;if(b<0){b=0}if(b+scroller[0].offsetHeight>h1){b=h1-scroller[0].offsetHeight}f.trigger('scroll_element.xdsoft_scroller',[maximumOffset?b/maximumOffset:0])};scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller',function(a){if(!parentHeight){f.trigger('resize_scroll.xdsoft_scroller',[g])}startY=pointerEventToXY(a).y;startTopScroll=parseInt(scroller.css('margin-top'),10);h1=scrollbar[0].offsetHeight;if(a.type==='mousedown'){if(document){$(document.body).addClass('xdsoft_noselect')}$([document.body,window]).on('mouseup.xdsoft_scroller',function arguments_callee(){$([document.body,window]).off('mouseup.xdsoft_scroller',arguments_callee).off('mousemove.xdsoft_scroller',calcOffset).removeClass('xdsoft_noselect')});$(document.body).on('mousemove.xdsoft_scroller',calcOffset)}else{touchStart=true}a.stopPropagation();a.preventDefault()}).on('touchmove',function(a){if(touchStart){a.preventDefault();calcOffset(a)}}).on('touchend touchcancel',function(a){touchStart=false;startTopScroll=0});f.on('scroll_element.xdsoft_scroller',function(a,b){if(!parentHeight){f.trigger('resize_scroll.xdsoft_scroller',[b,true])}b=b>1?1:(b<0||isNaN(b))?0:b;scroller.css('margin-top',maximumOffset*b);setTimeout(function(){timebox.css('marginTop',-parseInt((timebox[0].offsetHeight-parentHeight)*b,10))},10)}).on('resize_scroll.xdsoft_scroller',function(a,b,c){var d,sh;parentHeight=f[0].clientHeight;height=timebox[0].offsetHeight;d=parentHeight/height;sh=d*scrollbar[0].offsetHeight;if(d>=1){scroller.hide()}else{scroller.show();scroller.css('height',parseInt(sh>10?sh:10,10));maximumOffset=scrollbar[0].offsetHeight-scroller[0].offsetHeight;if(c!==true){f.trigger('scroll_element.xdsoft_scroller',[b||Math.abs(parseInt(timebox.css('marginTop'),10))/(height-parentHeight)])}}});f.on('mousewheel',function(a){var b=Math.abs(parseInt(timebox.css('marginTop'),10));b=b-(a.deltaY*20);if(b<0){b=0}f.trigger('scroll_element.xdsoft_scroller',[b/(height-parentHeight)]);a.stopPropagation();return false});f.on('touchstart',function(a){start=pointerEventToXY(a);startTop=Math.abs(parseInt(timebox.css('marginTop'),10))});f.on('touchmove',function(a){if(start){a.preventDefault();var b=pointerEventToXY(a);f.trigger('scroll_element.xdsoft_scroller',[(startTop-(b.y-start.y))/(height-parentHeight)])}});f.on('touchend touchcancel',function(a){start=false;startTop=0})}f.trigger('resize_scroll.xdsoft_scroller',[g])})}}(jQuery));
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.5
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=!1,h=c.$slider.width(),i=window.innerWidth||a(window).width();if("window"===c.respondTo?f=i:"slider"===c.respondTo?f=h:"min"===c.respondTo&&(f=Math.min(i,h)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick(e):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b)),g=e):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick(e):(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b)),g=e):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh(b),g=e),b||g===!1||c.$slider.trigger("breakpoint",[c,g])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&"object"!=typeof c.options.prevArrow&&c.$prevArrow.remove(),c.$nextArrow&&"object"!=typeof c.options.nextArrow&&c.$nextArrow.remove(),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:1},200)},d.src=c,b.css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),c.$slides.eq(e).addClass("slick-active").attr("aria-hidden","false"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(e).addClass("slick-center")),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])
}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});



/* ===========================================================
 * bootstrap-checkbox - v.1.0.1
 * ===========================================================
 * Copyright 2014 Roberto Montresor
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function($) {
    var Checkbox = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.button = null;
        this.label = null;
        this.labelPrepend = null;
        this.options = $.extend({}, $.fn.checkbox.defaults, this.$element.data(), typeof options == 'object' && options);
        this.init();
    };

    Checkbox.prototype = {

        constructor: Checkbox,

        init: function (e) {
            this.$element.hide();
            this.$element.attr('autocomplete', 'off');
            
            this._createButtons();
        },
        
        _createButtons: function(){
        	var classList = this.$element.attr('class') !== undefined ? this.$element.attr('class').split(/\s+/) : '';
			var template = this.getTemplate();
        	this.$element.after(template);
			this.$newElement = this.$element.next('.bootstrap-checkbox');
			this.button = this.$newElement.find('button');
			this.label = this.$newElement.find('span.label-checkbox');
			this.labelPrepend = this.$newElement.find('span.label-prepend-checkbox');
			for (var i = 0; i < classList.length; i++) {
			    if(classList[i] != 'checkbox') {
			        this.$newElement.addClass(classList[i]);
			    }
			}
			this.button.addClass(this.options.buttonStyle);
			
			if (this.$element.data('default-state') != undefined){
				this.options.defaultState = this.$element.data('default-state');
			}
			if (this.$element.data('default-enabled') != undefined){
				this.options.defaultEnabled = this.$element.data('default-enabled');
			}
			if (this.$element.data('display-as-button') != undefined){
				this.options.displayAsButton = this.$element.data('display-as-button');
			}
			
			if (this.options.indeterminate)
				this.$element.prop('indeterminate', true);
			
			this.checkEnabled();
			this.checkChecked();
			this.checkTabIndex();
			this.clickListener();
        },
        
        getTemplate: function() {
            var additionalButtonStyle = this.options.displayAsButton ? ' displayAsButton' : '',
            	label = this.$element.data('label') ? '<span class="label-checkbox">'+this.$element.data('label')+'</span>' : '',
            	labelPrepend = this.$element.data('label-prepend') ? '<span class="label-prepend-checkbox">'+this.$element.data('label-prepend')+'</span>' : '';
            	
            var template = 
            	'<span class="button-checkbox bootstrap-checkbox">' +
            		'<button type="button" class="btn clearfix'+additionalButtonStyle+'">' +
            			((this.$element.data('label-prepend') && this.options.displayAsButton) ? labelPrepend : '')+
	                    '<span class="icon '+this.options.checkedClass+'" style="display:none;"></span>' +
	                    '<span class="icon '+this.options.uncheckedClass+'"></span>' +
	                    '<span class="icon '+this.options.indeterminateClass+'" style="display:none;"></span>' +
	                    ((this.$element.data('label') && this.options.displayAsButton) ? label : '')+
	                '</button>' +
	            '</span>';
            
            if (!this.options.displayAsButton && (this.$element.data('label') || this.$element.data('label-prepend'))) {
            	template =
            		'<label class="'+this.options.labelClass+'">' +
            			labelPrepend + template + label+
		            '</label>';
            }
            return template;
        },

        checkEnabled: function() {
        	this.button.attr('disabled', this.$element.is(':disabled'));
        	this.$newElement.toggleClass('disabled', this.$element.is(':disabled'));
        },
		
		checkTabIndex: function() {
			if (this.$element.is('[tabindex]')) {
				var tabindex = this.$element.attr("tabindex");
				this.button.attr('tabindex', tabindex);
			}
		},
		
		checkChecked: function() {
			var whitePattern = /\s/g, replaceChar = '.';
			if (this.$element.prop('indeterminate') == true){
				this.button.find('span.'+this.options.checkedClass.replace(whitePattern, replaceChar)).hide();
				this.button.find('span.'+this.options.uncheckedClass.replace(whitePattern, replaceChar)).hide();
				this.button.find('span.'+this.options.indeterminateClass.replace(whitePattern, replaceChar)).show();
			} else {
				if (this.$element.is(':checked')) {
					this.button.find('span.'+this.options.checkedClass.replace(whitePattern, replaceChar)).show();
					this.button.find('span.'+this.options.uncheckedClass.replace(whitePattern, replaceChar)).hide();
				} else {
					this.button.find('span.'+this.options.checkedClass.replace(whitePattern, replaceChar)).hide();
					this.button.find('span.'+this.options.uncheckedClass.replace(whitePattern, replaceChar)).show();
				}
				this.button.find('span.'+this.options.indeterminateClass.replace(whitePattern, replaceChar)).hide();
			}
			
			if (this.$element.is(':checked')) {
				if (this.options.buttonStyleChecked){
					this.button.removeClass(this.options.buttonStyle);
					this.button.addClass(this.options.buttonStyleChecked);
				}
			} else {
				if (this.options.buttonStyleChecked){
					this.button.removeClass(this.options.buttonStyleChecked);
					this.button.addClass(this.options.buttonStyle);
				}
			}
			
			if (this.$element.is(':checked')) {
				if (this.options.labelClassChecked){
					$(this.$element).next("label").addClass(this.options.labelClassChecked);
				}
			} else {
				if (this.options.labelClassChecked){
					$(this.$element).next("label").removeClass(this.options.labelClassChecked);
				}
			}
		},

        clickListener: function() {
        	var _this = this;
        	this.button.on('click', function(e){
				e.preventDefault();
				_this.$element.prop("indeterminate", false);
				_this.$element[0].click();
				_this.checkChecked();
        	});
			this.$element.on('change', function(e) {
				_this.checkChecked();
			});
			this.$element.parents('form').on('reset', function(e) {
		        if (_this.options.defaultState == null){
		        	_this.$element.prop('indeterminate', true);
		        } else {
		        	_this.$element.prop('checked', _this.options.defaultState);
		        }
	        	_this.$element.prop('disabled', !_this.options.defaultEnabled);
	        	_this.checkEnabled();
	        	_this.checkChecked();
	        	e.preventDefault();
			});
        },
        
        setOptions: function(option, event){
	        if (option.checked != undefined) {
	        	this.setChecked(option.checked);
	        }
	        if (option.enabled != undefined) {
	        	this.setEnabled(option.enabled);
	        }
	        if (option.indeterminate != undefined) {
	        	this.setIndeterminate(option.indeterminate);
	        }
        },
        
        setChecked: function(checked){
        	this.$element.prop("checked", checked);
        	this.$element.prop("indeterminate", false);
        	this.checkChecked();
        },
        
        setIndeterminate: function(indeterminate){
        	this.$element.prop("indeterminate", indeterminate);
        	this.checkChecked();
        },
        
        
        click: function(event){
        	this.$element.prop("indeterminate", false);
        	this.$element[0].click();
        	this.checkChecked();
        },
        
        change: function(event){
        	this.$element.change();
        },
        
        setEnabled: function(enabled){
        	this.$element.attr('disabled', !enabled);
        	this.checkEnabled();
        },
        
        toggleEnabled: function(event){
        	this.$element.attr('disabled', !this.$element.is(':disabled'));
        	this.checkEnabled();
        },
        
        refresh: function(event){
        	this.checkEnabled();
        	this.checkChecked();
        },
        
        update: function(options){
        	if (!this.$element.next().find('.bootstrap-checkbox'))
        		return;
        	
        	this.options = $.extend({}, this.options, options);
        	this.$element.next().remove();
        	this._createButtons();
       }
    };

    $.fn.checkbox = function(option, event) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('checkbox'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('checkbox', (data = new Checkbox(this, options, event)));
                if (data.options.constructorCallback != undefined){
                	data.options.constructorCallback(data.$element, data.button, data.label, data.labelPrepend);
                }
            } else {
            	if (typeof option == 'string') {
                    data[option](event);
                } else if (typeof option != 'undefined') {
                	data.setOptions(option, event);
                }
            }
        });
    };

    $.fn.checkbox.defaults = {
    	displayAsButton: false,
    	indeterminate: false,
    	buttonStyle: 'btn-link',
        buttonStyleChecked: null,
        checkedClass: 'cb-icon-check',
        uncheckedClass: 'cb-icon-check-empty',
        indeterminateClass: 'cb-icon-check-indeterminate',
        defaultState: false,
        defaultEnabled: true,
        constructorCallback: null,
	labelClass: "checkbox bootstrap-checkbox",
	labelClassChecked: "active"
    };

}(window.jQuery);

function preventSelection(element) {
    $(element).attr('onselectstart', 'return false');
    $(element).css({
        '-moz-user-select': 'none',
        '-khtml-user-select': 'none',
        'user-select': 'none'
    });
}


$(document).ready(function(){

    preventSelection($('.month-cont-opt').get(0));

	// Выбор волюты
	$('.currency-select span').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).next().slideDown(200);
			$(this).addClass('active');
		} else {
			$(this).next().slideUp(200);
			$(this).removeClass('active');
		};
	});
	$('.currency-select li').click(function(){
		$('.currency-select li').removeClass('active');
		$(this).addClass('active');
		clickCurrency = $(this).html();
		$(this).parents('.currency-select').find('span').html(clickCurrency);
		$(this).parents('.currency-select').find('span').removeClass('active');
		$(this).parents('ul').slideUp(200);
	});

	// Выбор языка
	$('.language-select span').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).next().slideDown(200);
			$(this).addClass('active');
		} else {
			$(this).next().slideUp(200);
			$(this).removeClass('active');
		};
	});
	$('.language-select li').click(function(){
		$('.language-select li').removeClass('active');
		$(this).addClass('active');
		clickCurrency = $(this).html();
		$(this).parents('.language-select').find('span').html(clickCurrency);
		$(this).parents('.language-select').find('span').removeClass('active');
		$(this).parents('ul').slideUp(200);
	});

	// Количество взрослых
	$('.adults-add').click(function(){
		adultsBox = $(this).parent('div');
		adultsInp = adultsBox.find('input');
		adults = adultsInp.val();
		adults = ++adults;
		adultsInp.val(adults);
		if(adults == 2) {
			adultsBox.find('.adults-two').show();
			adultsBox.find('.adults-big').hide();
		};
		if(adults > 2) {
			adultsBox.find('.adults-two, .adults-one').hide();
			adultsBox.find('.adults-big').show();
			adultsBox.find('.adults-big span').text(adults);
		}
		return false;
	});
	$('.search-adults .ico-close').click(function(){
		adultsBox = $(this).parents('.search-adults');
		adultsInp = adultsBox.find('input');
		adults = adultsInp.val();
		adults = --adults;
		adultsInp.val(adults);
		if(adults == 1) {
			adultsBox.find('.adults-big, .adults-two').hide();
		};
		if(adults == 2) {
			adultsBox.find('.adults-two, .adults-one').show();
			adultsBox.find('.adults-big').hide();
		};
		if(adults > 2) {
			adultsBox.find('.adults-two, .adults-one').hide();
			adultsBox.find('.adults-big').show();
			adultsBox.find('.adults-big span').text(adults);
		}
		return false;
	});

	$('.select').selectspinner();

	// Количество детей
	$('.children-box-select').hide();
	$('.children-add').click(function(){
		console.log('da')
		adultsBox = $(this).parent('div');
		adultsBox.find('.children-box-select').show();
		selectInp = $('.search-children input').val();
		$('.search-children .children-add').hide();
		return false;
	});

	$('.search-children .ico-close').click(function(){
		$(this).parents('.children-ico').remove();
		$('.search-children .children-add').show();
		childrenNamber = $('.children-ico').length;
		$('.search-children input').val(childrenNamber);
		return false;
	});

	// $('.children-box-select .select').change(function(){
	// 	$('.children-box-select').hide();
	// 	selectInp = $('.search-children input').val();
	// 	selected = $(this).find('option:selected').text();
	// 	selectInp = ++selectInp;
	// 	$('.search-children input').val(selectInp);
	// 	$(".children-box-select").before('<div class="children-ico">Age<span>'+ selected +'</span><a href="" class="ico-close"></a></div>');
	// 	$('.search-children .ico-close').click(function(){
	// 		$(this).parents('.children-ico').remove();
	// 		$('.search-children .children-add').show();
	// 		childrenNamber = $('.children-ico').length;
	// 		$('.search-children input').val(childrenNamber);
	// 		return false;
	// 	});
	// });


	$('.select-ok').click(function(){
		$('.children-box-select').hide();
		selectInp = $('.search-children input').val();
		selected = $(this).parents('.children-box-select').find('.select').find('option:selected').text();
		selectInp = ++selectInp;
		$('.search-children input').val(selectInp);
		$(".children-box-select").before('<div class="children-ico">Age<span>'+ selected +'</span><a href="" class="ico-close"></a></div>');
		$('.search-children .ico-close').click(function(){
			$(this).parents('.children-ico').remove();
			$('.search-children .children-add').show();
			childrenNamber = $('.children-ico').length;
			$('.search-children input').val(childrenNamber);
			return false;
		});
		if(selectInp < 3) {$('.search-children .children-add').show();}
		return false;
	});

	$('.select-close').click(function(){
		adultsBox = $(this).parents('.children-box');
		adultsBox.find('.children-box-select').hide();
		selectInp = $('.search-children input').val();
		$('.search-children .children-add').show();
		return false;
	})

	// slider

    $.fn.separation = function(){
        var target = this.text();
        var re = /(?=\B(?:\d{6})+(?!\d))/g;
        this.html(target.replace( re, ' ' ));
    };
    $.fn.separationInput = function(){
        var target = this.val();
        var re = /(?=\B(?:\d{6})+(?!\d))/g;
        this.val(target.replace( re, ' ' ));
    };
    $('#slider-range').each(function(){
        var parents_block = $(this).parents('.total'),
            range = $(this),
            min_value = parseInt( $(this).attr('data-min') ),
            max_value = parseInt( $(this).attr('data-max') ),
            step = 1,
            inputs = parents_block.find('.range_inputs'),
            input_min = parents_block.find('#amount'),
            input_max = parents_block.find('#amount2');
        if( range.attr('data-step') ) step = parseInt( range.attr('data-step') );
        range.slider({
            range: true,
            min: min_value,
            max: max_value,
            step: step,
            values: [min_value, max_value],
            slide: function(e, ui) {
                input_min.val(ui.values[ 0 ]).separationInput();
                input_max.val(ui.values[ 1 ]).separationInput();
            }
        });
        input_min.val( range.slider("values", 0) ).separationInput();
        input_max.val( range.slider("values", 1) ).separationInput();

        //Проверка ввода только цифр
        inputs.bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        //Ограничение максимумом и минимумом
        inputs.bind("change blur", function() {
            var val = $(this).val().replace(' ', ' ');
            if ($(this).hasClass('range-min_input')) {
                if (val == '') val = min_value;
                val = parseInt(val);
                if (val > max_value) val = max_value;
                if (val < min_value) val = min_value;
                $(this).val(val);
                range.slider("values", 0, val);
            } else if ($(this).hasClass('range-max_input')) {
                if (val == '') val = max_value;
                val = parseInt(val);
                if (val > max_value) val = max_value;
                if (val < min_value) val = min_value;
                $(this).val(val);
                range.slider("values", 1, val);
            }
        });
        inputs.blur(function() {
            $(this).separationInput();
        });
    });

	// Дополнительный поиск


    $('.s_d-slider').each(function(){
        var parents_block = $(this).parents('.s_d-inp'),
            range = $(this),
            min_value = parseInt( $(this).attr('data-min') ),
            max_value = parseInt( $(this).attr('data-max') ),
            step = 1,
            inputs = parents_block.find('.range_inputs'),
            input_min = parents_block.find('.amount'),
            input_max = parents_block.find('.amount2');
        if( range.attr('data-step') ) step = parseInt( range.attr('data-step') );
        range.slider({
            range: true,
            min: min_value,
            max: max_value,
            step: step,
            values: [min_value, max_value],
            slide: function(e, ui) {
                input_min.val(ui.values[ 0 ]).separationInput();
                input_max.val(ui.values[ 1 ]).separationInput();
            }
        });
        input_min.val( range.slider("values", 0) ).separationInput();
        input_max.val( range.slider("values", 1) ).separationInput();

        //Проверка ввода только цифр
        inputs.bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        //Ограничение максимумом и минимумом
        inputs.bind("change blur", function() {

            var val = $(this).val().replace(' ', ' ');
            if ($(this).hasClass('amount')) {
                if (val == '') val = min_value;
                val = parseInt(val);
                if (val > max_value) val = max_value;
                if (val < min_value) val = min_value;
                $(this).val(val);
                range.slider("values", 0, val);
            } else if ($(this).hasClass('amount2')) {
                if (val == '') val = max_value;
                val = parseInt(val);
                if (val > max_value) val = max_value;
                if (val < min_value) val = min_value;
                $(this).val(val);
                range.slider("values", 1, val);
            }
        });
        inputs.blur(function() {
            $(this).separationInput();
        });
    });

	$('.s_d-slid').each(function(){
        var parents_block = $(this).parents('.s_d-inp'),
            rangebox = $(this),
            min_value = parseInt( $(this).attr('data-min') ),
            max_value = parseInt( $(this).attr('data-max') ),
            step = 1,
            inputs = parents_block.find('.range_input'),
            input_min = parents_block.find('.range_input-one')
        if( rangebox.attr('data-step') ) step = parseInt( rangebox.attr('data-step') );
        rangebox.slider({
        	range: "max",
            min: min_value,
            max: max_value,
            value: min_value,
            slide: function( event, ui ) {
		        input_min.val( ui.value );
		    }
        });
        input_min.val( rangebox.slider("values", 0) ).separationInput();

        //Проверка ввода только цифр
        inputs.bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
        //Ограничение максимумом и минимумом
        inputs.bind("change blur", function() {
            var val = $(this).val().replace(' ', ' ');
            if (val == '') val = min_value;
            val = parseInt(val);
            if (val > max_value) val = max_value;
            if (val < min_value) val = min_value;
            $(this).val(val);
            rangebox.slider("value", val);
        });
        inputs.blur(function() {
            $(this).separationInput();
        });
    });


	//checkbox
	$('input[type="checkbox"]').checkbox();

	//datepicker
	$( ".range-date input" ).datepicker({
		dateFormat: "yy.mm.dd",
		buttonImage: "img/ico-col.png",
		buttonImageOnly: true,
		showOn: "both"
	});

    // Выбор валюты слайдера
    $('.currency-sl span').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).next().slideDown(200);
			$(this).addClass('active');
		} else {
			$(this).next().slideUp(200);
			$(this).removeClass('active');
		};
	});
	$('.currency-sl li').click(function(){
		$('.currency-sl li').removeClass('active');
		$(this).addClass('active');
		clickCurrency = $(this).html();
		$(this).parents('.currency-sl').find('span').html(clickCurrency);
		$(this).parents('.currency-sl').find('span').removeClass('active');
		$(this).parents('ul').slideUp(200);
	});

	// Календарь
	dayN = 0;
	$('.month-day').each(function(){
		dayClass = 'day-' + dayN;
		$(this).addClass(dayClass);
		$(this).attr('date-namber', dayN);
		dayN = ++dayN;
	});
	$('.date-header input').click(function(){
		if($(this).prop("checked")) {
			$('.calendar').slideUp();
			$('.calendar-button a').fadeOut();
			$('.date-header-cont, .total_nights, .total .h3, .check-mob').fadeOut();
		} else {
			$('.calendar').slideDown();
			$('.calendar-button a').fadeIn();
			$('.date-header-cont, .total_nights, .total .h3, .check-mob').fadeIn();
		}
	});
	// Слайдер календаря
	calendarSl();
	calendar();
	
	$('.calendar-prev').addClass('no-active');
	monthLeft = -1 * $('.month').eq(0).width();
	$('.month-cont-opt').css({'left' : monthLeft});
	$('.calendar-next').text($('.month.active').next().attr('date-month'));
	$('.calendar-prev').text($('.month.active').prev().attr('date-month'));

	// Сброс поиска
	$('.lnk-reset').click(function(){
		formReset();
		return false;
	})
	

	// Карусель
	$('.carousel').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 760,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	// Туры masonry
	$('.corusel-dest').slick({
		dots: true,
		infinite: true,
		speed: 500,
		// autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: true,
		centerMode: true
	});

	// Зыкрытие попапа куков
	$('.popup-cookie .ico-close').click(function(){
		$('.popup-cookie').fadeOut();
		return false;
	})

	// Открытие дополнительного поиска
	$('.s_d-open').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.search-detals').addClass('active');
			$('.s_d-box').slideDown();
		} else {
			$(this).removeClass('active');
			$('.s_d-cont').slideDown();
			$('.search-detals').removeClass('active');
			$('.s_d-box').slideUp();
		}
		return false;
	});

	$('.s_d-box').hide();

	// Выбор range
	$('.range-lnk a').click(function(){
		$('.range-lnk').removeClass('active');
		$(this).parent('div').addClass('active');
		return false;
	});

	// Селект линк
	$('.s_d-popup span a').click(function(){
		if(!$(this).parents('.s_d-popup').hasClass('active')) {
			$(this).parents('.s_d-popup').addClass('active');
			$(this).parents('.s_d-popup').find('ul').slideDown();
		} else {
			$(this).parents('.s_d-popup').removeClass('active');
			$(this).parents('.s_d-popup').find('ul').slideUp();
		};
		return false;
	});

	// Фото галерея в товаре
	$('.cat-img-in a').click(function(){
		var imgHref = $(this).attr('href');
		$(this).parents('.catalog-item').find('.cat-img-big img').attr('src', imgHref);
		if($(this).parents('.catalog-item').find('.cat-img-big').is(":hidden")) {
			$(this).parents('.catalog-item').find('.cat-img-big').fadeIn();
		};
		return false;
	});
	$('.cat-img-min a').click(function(){
		return false;
	});
	$('.cat-img-min a').hover(function(){
		var imgHref = $(this).attr('href');
		$(this).parents('.catalog-item').find('.cat-img-big img').attr('src', imgHref);
		$(this).parents('.catalog-item').find('.cat-img-big').stop().fadeIn();
		return false;
	}, function(){
		$(this).parents('.catalog-item').find('.cat-img-big').stop().fadeOut();
	});
	$('.cat-img-all a').click(function(){
		$(this).parents('.cat-img').find('.img-hide').slideDown();
		$('.cat-img-all').hide();
		return false;
	})

	$('.more_sites a').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).parents('.cat-cont').find('.pay-item-box').slideDown();
		} else {
			$(this).removeClass('active');
			$(this).parents('.cat-cont').find('.pay-item-box').slideUp();
		};
		return false;
	});

	// Табы в отеле
	$('.tabs-lnk a.js-tab').click(function(){
		$('.tabs-lnk li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).parents('.tabs-page').find('.tabs-item').hide();
		var clickIndex = $(this).parent('li').index();
		$(this).parents('.tabs-page').find('.tabs-cont').find('.tabs-item').eq(clickIndex).show();

		if(!$(this).parents('.catalog-item').hasClass('active')) {
			$(this).parents('.catalog-item').addClass('active');
		};
		return false;
	});

	// открытие подробно отель
	$('.catalog-item').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).find('.tabs-item').slideUp();
			$(this).find('.tabs-item:first').slideDown();
			$(this).find('.tabs-lnk li').removeClass('active');
			$(this).find('.tabs-lnk li:first').addClass('active');
			$(this).find('.tabs-lnk').removeClass('active');
			$(this).find('.tabs-lnk.first').addClass('active');
		};
	});
	$('.cat-close a').click(function(){
		$(this).parents('.catalog-item').removeClass('active');
		$(this).parents('.catalog-item').find('.tabs-item').slideUp();
		$(this).parents('.catalog-item').find('.tabs-lnk').removeClass('active');
		$(this).parents('.catalog-item').find('.tabs-lnk').removeClass('active');
		$(this).parents('.catalog-item').find('.tabs-lnk li').removeClass('active');
		return false;
	});

	// Сортировка
	$('.sort-item span a').click(function(){
		if(!$(this).hasClass('active')) {
			$('.sort-item a.active').parent('span').next('ul').slideUp();
			$('.sort-item a.active').removeClass('active');
			$(this).parents('.sort-item').find('ul').slideDown();
			$(this).addClass('active');
		} else {
			$(this).parents('.sort-item').find('ul').slideUp();
			$(this).removeClass('active');
		};
		return false;
	});
	$('.sort-item ul a').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).parents('.sort-item').find('li').removeClass('active');
			$(this).parents('ul').slideUp();
			var sortRel = $(this).attr('rel');
			$(this).parents('.sort-item').find('span a').removeClass('active');
			$(this).parent('li').addClass('active');
		} else {
			$(this).parents('ul').slideUp();
		};
		return false;
	});

	$('.s_d-popup .button-stl').click(function(){
		var checked = $(this).parents('.s_d-popup').find("input:checked").length;
		if(checked > 0) {
			$(this).parents('.s_d-popup').find("i").text(checked);
			$(this).parents('.s_d-popup').find("strong").show();
		} else {
			$(this).parents('.s_d-popup').find("strong").hide();
		};
		$(this).parents('.s_d-popup').removeClass('active');
		$(this).parents('.s_d-popup').find('ul').slideUp();
		return false;
	})




	// Чистим форму
	$('.s_d-inp .close-box').click(function(){
		if($(this).parents('.s_d-inp').find('.amount2').length) {
			min_value = $(this).parents('.s_d-inp').find('.s_d-slider').attr('data-min');
		    max_value = $(this).parents('.s_d-inp').find('.s_d-slider').attr('data-max');
			$(this).parents('.s_d-inp').find('.s_d-slider').slider( "values", [ min_value, max_value ] );
			$(this).parents('.s_d-inp').find('.amount').val(min_value);
			$(this).parents('.s_d-inp').find('.amount2').val(max_value);
		} else {
			n_value = $(this).parents('.s_d-inp').find('.s_d-slid').attr('data-min');
			$(this).parents('.s_d-inp').find('.s_d-slid').slider( "value", n_value);
			$(this).parents('.s_d-inp').find('.range_input').val(n_value);
		};
		return false;
	});

	// Авторизация
	$('.popup-cont:not(:first)').hide();
	$('.popup-tabs a').click(function(){
		if(!$(this).parents('.popup-tabs').hasClass('active')) {
			$(this).parents('.popup-tabs').addClass('active');
			$(this).parents('.popup-tabs').find('li').removeClass('active');
			$(this).parent().addClass('active');
			$('.popup-cont').hide();
			$('.popup-cont').eq(1).show();
		} else {
			$(this).parents('.popup-tabs').removeClass('active');
			$(this).parents('.popup-tabs').find('li').removeClass('active');
			$(this).parent().addClass('active');
			$('.popup-cont').hide();
			$('.popup-cont').eq(0).show();
		};
		return false;
	});

	$('.check-in .ico-close').click(function(){
		$('.check-out').removeClass('check-ok').hide();
		$('.check-in').removeClass('check-ok');
		$('.month-day').removeClass('check-ok ok-left ok-right active-two active-one active ok-two');
		dayClick = 0;
		$('.month-day').unbind( "click" );
		$('.month-day').each(function(){
			if(!$(this).hasClass('no-act')) {
				$(this).addClass('act');
			}
		});
		$('.month').removeClass('default');
		$('.total_nights').hide();
		$('.month-day.act').unbind( "click" );
		$('.month-day .day-tooltip').remove();
		$('.total .h3 span').text(0);
		$('.total .h3').slideUp();
		$('.date-today').slideDown();
		$('.day-tooltip-present').fadeIn();
		calendar();
		return false;
	});

	$('.check-out .ico-close').click(function(){
		if($('.ok-two').hasClass('active')) {
			var checkIn = $('.ok-two').attr('date-namber');
		} else {
			if($('.ok-two-left').hasClass('active')) {
				var checkIn = $('.ok-two-left').attr('date-namber') - 1;
			} else {
				var checkIn = $('.ok-left').attr('date-namber');
			};
		};
		$('.check-out').removeClass('check-ok').hide();
		$('.check-in').removeClass('check-ok');
		$('.month-day').removeClass('check-ok ok-left ok-right active-two active-one active ok-two ok-two-left');
		$('.total .h3 span').text(0);
		dayClick = 0;
		$('.month-day').unbind( "click" );
		$('.month-day').each(function(){
			if(!$(this).hasClass('no-act')) {
				$(this).addClass('act');
			}
		});
		$('.month').removeClass('default');
		$('.total_nights').hide();
		$('.month-day.act').unbind( "click" );
		$('.month-day .day-tooltip').remove();
		$('.month-day').eq(checkIn).click();
		calendar();
		var montDay = '.day-' + checkIn;
		$(montDay).click();
		return false;
	});

	$('.menu-open').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.menu-mob, .menu-mob-bg').fadeIn();
		} else {
			$(this).removeClass('active');
			$('.menu-mob, .menu-mob-bg').fadeOut();
		}
		return false;
	});
	$('.menu-mob-search').click(function(){
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.mob-search-box, .menu-mob-bg').fadeIn();
		} else {
			$(this).removeClass('active');
			$('.mob-search-box, .menu-mob-bg').fadeOut();
		}
		return false;
	});
	$('.menu-mob-bg').click(function(){
		$('.menu-open, .menu-mob-search').removeClass('active');
		$('.menu-mob, .menu-mob-bg, .mob-search-box').fadeOut();
		return false;
	});

	$('.check-mob .select').change(function(){
		var date_1 =  $('.sel-day-1').find('option:selected').val();
		var month_1 =  $('.sel-month-1').find('option:selected').val();
		var date_2 =  $('.sel-day-2').find('option:selected').val();
		var month_2 =  $('.sel-month-2').find('option:selected').val();
		Date1 = month_1 + date_1;
		Date2 = month_2 + date_2;
		var Date1 = new Date (Date1);
		var Date2 = new Date (Date2);
		// Сколько целых дней между датами
		var Days = Math.floor((Date2.getTime() - Date1.getTime())/(1000*60*60*24));
		if(Days > 0) {
			$('.total_nights-main span').text(Days);
			if(Days == 1) {
				$('.total_nights-main em').hide();
			} else {
				$('.total_nights-main em').show();
			}
		} else {
			$('.total_nights-main span').text(0);
			$('.total_nights-main em').show();
		};
		$('.total_nights-main').show();

	});
	$('.total_nights-main .ico-close').click(function(){
		$('.check-mob .select').selectspinner('val', 1).selectspinner('update');
		$('.total_nights-main').hide();
		return false;
	});

	// Показываем фильтор для мобильного
	$('.filter-show').click(function(){
		$('.search-detals-hide').slideDown();
		$('.filter-show').hide();
		$('.filter-hide').show();
		return false;
	});
	$('.filter-hide').click(function(){
		$('.search-detals-hide').slideUp();
		$('.filter-show').show();
		$('.filter-hide').hide();
		return false;
	});


	$('.cities_around-ok').click(function(){
		$('.search_around-one').hide();
		$('.search_around-two').show();
	});
	$('.search_around-two .ico-close').click(function(){
		$('.search_around-one').show();
		$('.search_around-two').hide();
		return false;
	});


});

// Блокирует передачу события к родителю
function stopBubble(oEvent) {
	if (oEvent && oEvent.stopPropagation)
		oEvent.stopPropagation(); // для DOM-совместимых браузеров
	else
		window.event.cancelBubble = true; //для IE
}

var dayClick = 0;
var dayClickLa = 0;
var dayClickLengHist;
var calendarOffset, calendarWidth;
var markerDrag = '';
var cssCursor = '';
function calendar(){
	
	$('.month-day.act').on("click", function(e) { calendar_act_click(e, this); });

	$('.month-day').bind("click", function(e) {
		if(!$(this).hasClass('no-act')) {
			if(!$(this).hasClass('active')) {

				$('.check-out').removeClass('check-ok').hide();
				$('.check-in').removeClass('check-ok');
				$('.month-day').removeClass('check-ok ok-left ok-right active-two active-one active ok-two');
				dayClick = 0;
				$('.month-day').unbind( "click" );
				$('.month-day').each(function(){
					if(!$(this).hasClass('no-act')) {
						$(this).addClass('act');
					}
				});
				$('.month').removeClass('default');
				$('.total_nights').hide();
				$('.month-day.act').unbind( "click" );
				$('.month-day .day-tooltip').remove();
				calendar();

				if(dayClick == 0) {
					var offset = $(this).parents('.calendar').offset();
			  		calendarOffset = (e.pageX - offset.left);
			  		calendarWidth = $('.calendar').width() - 100;
			  		if(calendarOffset > calendarWidth) {
						$('.calendar-next').click();
					}
					var dayTooltip = $('.day-tooltip-box').html();
					dayClick = 1;
					$(this).addClass('active');
					$('.month-day').find('.day-tooltip').remove();
					$(this).append(dayTooltip);
					$(this).find('.day-tooltip').fadeIn();
					$(this).addClass('active-one');
					$('.month-day.act').removeClass('act');
					dayClickLeng = $(this).attr('date-namber');
					dayClickLeng = ++dayClickLeng;
					dayClickLengHist = dayClickLeng;
					var i1 = dayClickLeng - 31;
					dayDef = $('.month-day.no-act').length;
					if(i1 <= dayDef) {i1 = dayDef};
					var i2 = dayClickLeng + 30;
					for (i1; i1 < i2; i1++) { 
						className = '.day-' + i1;
						$(className).addClass('active');
					};
					$('.check-in').addClass('check-ok');
					$('.check-in span').text($(this).attr('rel'));
					$('.check-out').fadeIn(300);
				};
				$('.month-day').unbind( "click" );
				calendar();
				$('.total .h3 span').text(0);
			}
		}
	});
	
    $('.month-day.active').bind("click", function() {
		if(!$(this).hasClass('active-one')) {
			if (dayClick == 1) {
				dayClick = 2;
				$('.month-day .day-tooltip').remove();
				$('.month-day').removeClass('active');
				dayClickLengTwo = $(this).attr('date-namber');
				$('.check-out span').text($(this).attr('rel'));
				if(dayClickLeng <= dayClickLengTwo) {
					if((dayClickLeng - dayClickLengTwo) == 0) {
						$('.month-day.active-one').addClass('ok-two active');
						$('.active-one').addClass('active');
						$(this).addClass('active');
						$('.total .h3 em, .total_nights em').hide();
					} else {
						$(this).addClass('active-two');
						$('.month-day.active-one').addClass('ok-left active');
						$('.month-day.active-two').addClass('ok-right');
						for(dayClickLeng; dayClickLeng <= dayClickLengTwo; dayClickLeng++) {
							className = '.day-' + dayClickLeng;
							$(className).addClass('active');
						};
						$('.total .h3 em, .total_nights em').show();
					}
				} else {
					if((dayClickLeng - dayClickLengTwo) == 2) {
						$('.month-day.active-one').addClass('ok-two-left active');
						$('.active-one').addClass('active');
						$(this).addClass('active');
					} else {
						$(this).addClass('active-two');
						$('.month-day.active-one').addClass('ok-right');
						$('.month-day.active-two').addClass('ok-left active');
						dayOne = $('.ok-right').attr('rel');
						dayTwe = $('.ok-left').attr('rel');
						$('.check-in span').text(dayTwe);
						$('.check-out span').text(dayOne);
						for(dayClickLengTwo; dayClickLengTwo < dayClickLeng; dayClickLengTwo++) {
							className = '.day-' + dayClickLengTwo;
							$(className).addClass('active')
						};
					}
				};
				$('.check-out').addClass('check-ok');
				$('.month').addClass('default');
			};
			var nights = $('.month-day.active').length - 1;
			$('.total_nights').fadeIn();
			$('.total_nights span, .total .h3 span').text(nights);
			$('.month-day').unbind( "click" );
			calendar();
			$('.total .h3').slideDown();
			$('.date-today').slideUp();
		};
	});

	$('.total_nights .ico-close').click(function(){
		$('.check-out').removeClass('check-ok').hide();
		$('.check-in').removeClass('check-ok');
		$('.month-day').removeClass('check-ok ok-left ok-right active-two active-one active ok-two');
		dayClick = 0;
		$('.month-day').unbind( "click" );
		$('.month-day').each(function(){
			if(!$(this).hasClass('no-act')) {
				$(this).addClass('act');
			}
		});
		$('.month').removeClass('default');
		$('.total_nights').hide();
		$('.month-day.act').unbind( "click" );
		$('.month-day .day-tooltip').remove();
		calendar();
		return false;
	});

	$('.total_nights-main .ico-close').click(function(){
		$('.check-mob select').selectspinner('val', 1).selectspinner('update');
		return false;
	});

	$('#widget').draggable();

    $('.month-day').off('mousedown touchstart', calendar_onDrag).on('mousedown touchstart', calendar_onDrag);
    $('.month-day').off('mousemove touchmove', calendar_onMove).on('mousemove touchmove', calendar_onMove);
    $('body').off('mouseup touchend', calendar_onDrop).on('mouseup touchend', calendar_onDrop);
    
};

function calendar_act_click(e, that) {

    var offset = $(that).parents('.calendar').offset();
  	calendarOffset = (e.pageX - offset.left);
  	calendarWidth = $('.calendar').width() - 100;

	if (dayClick == 0) { // Проверяем что маркеров ещё нет
		dayClick = 1;       
        calendar_setActiveOne(that);
	};

	if (calendarOffset > calendarWidth) {
		$('.calendar-next').click();
	};

	$('.day-tooltip-present').fadeOut();
	$('.month-day').unbind( "click" );
	calendar();

}

// Задаем первый маркер
function calendar_setActiveOne(that) {
    var dayTooltip = $('.day-tooltip-box').html();	
	$(that).addClass('active');
	$('.month-day').find('.day-tooltip').remove();
	$(that).append(dayTooltip);
	$(that).find('.day-tooltip').fadeIn();
    $('.month-day.active-one').removeClass('active-one');
	$(that).addClass('active-one');
	$('.month-day.act').removeClass('act');
	dayClickLeng = $(that).attr('date-namber');
	dayClickLeng = ++dayClickLeng;
	dayClickLengHist = dayClickLeng;
	var i1 = dayClickLeng - 31;
	dayDef = $('.month-day.no-act').length;
	if(i1 <= dayDef) {i1 = dayDef};
	var i2 = dayClickLeng + 30;
	for (i1; i1 < i2; i1++) { 
		className = '.day-' + i1;
		$(className).addClass('active');
	};
	$('.check-in').addClass('check-ok');
	$('.check-in span').text($(that).attr('rel'));
	$('.check-out').fadeIn(300);

}

function calendar_setActiveTwo(that) {

	$('.month-day .day-tooltip').remove();
	$('.month-day').removeClass('active');
	dayClickLengTwo = $(that).attr('date-namber');
	$('.check-out span').text($(that).attr('rel'));
	if(dayClickLeng <= dayClickLengTwo) {
		if((dayClickLeng - dayClickLengTwo) == 0) {
            $('.month-day.active-two').removeClass('active-two'); //----
            $('.month-day.active-one').addClass('ok-two active');
			$('.active-one').addClass('active');
			$(that).addClass('active');
			$('.total .h3 em, .total_nights em').hide();
            markerDrag = '';
		} else {
            $('.month-day.active-two').removeClass('active-two');
			$(that).addClass('active-two');
			$('.month-day.active-one').addClass('ok-left active');
			$('.month-day.active-two').addClass('ok-right');
			for(dayClickLeng; dayClickLeng <= dayClickLengTwo; dayClickLeng++) {
				className = '.day-' + dayClickLeng;
				$(className).addClass('active');
			};
			$('.total .h3 em, .total_nights em').show();
		}
	} else {
		if ((dayClickLeng - dayClickLengTwo) == 2) {
			$('.month-day.active-one').addClass('ok-two-left active');
			$('.active-one').addClass('active');
			$(that).addClass('active');
            markerDrag = '';
            $('.month-day.active-two').removeClass('active-two'); //--
		} else {
            $('.month-day.active-two').removeClass('active-two'); //----
			$(that).addClass('active-two');
			$('.month-day.active-one').addClass('ok-right');
			$('.month-day.active-two').addClass('ok-left active');
			dayOne = $('.ok-right').attr('rel');
			dayTwe = $('.ok-left').attr('rel');
			$('.check-in span').text(dayTwe);
			$('.check-out span').text(dayOne);
			for(dayClickLengTwo; dayClickLengTwo < dayClickLeng; dayClickLengTwo++) {
				className = '.day-' + dayClickLengTwo;
				$(className).addClass('active')
			};
		}
	};
	$('.check-out').addClass('check-ok');
	$('.month').addClass('default');

	var nights = $('.month-day.active').length - 1;
	$('.total_nights').fadeIn();
	$('.total_nights span, .total .h3 span').text(nights);
	$('.month-day').unbind( "click" );
	calendar();
	$('.total .h3').slideDown();
	$('.date-today').slideUp();
}

// Обработчик начала перетаскивания
function calendar_onDrag(e) { 
    if ($(e.currentTarget).hasClass('active-one')) {
        markerDrag = 'active-one';
        //$('.active-one').css('cursor', 'pointer');
    }
    else if ($(e.currentTarget).hasClass('active-two')) {
        markerDrag = 'active-two';
        //$('.active-two').css('cursor', 'pointer');
    }
    else  {
        markerDrag = $(e.currentTarget).attr('date-namber');  
    }
    stopBubble(e);
}

// Обработчик перемещения захваченого элемента
function calendar_onMove(e, el) {
    
    if ((el == null) || (typeof el == 'undefined')) {
        el = e.currentTarget;
        if (e.type == 'touchmove') {
            var x = e.originalEvent.changedTouches[0].clientX;
            var y = e.originalEvent.changedTouches[0].clientY;
            el = document.elementFromPoint(x, y)
            el = $(el).parent().get(0);
        }
    }

    //console.log('move');

    if (!$(el).hasClass('month-day')) return;

    //console.log(el, markerDrag); //--

    if (markerDrag == '') return;

    stopBubble(e);

    if ($(el).hasClass('no-act')) {
        markerDrag = '';
        return;
    }
    if (markerDrag == 'active-one') {
        if ($(el).hasClass('active') && ($('.active-one.ok-two, .active-one.ok-two-left').size() > 0)) return;
        if ($('.active-one.ok-two').size() > 0) {
            $('.active-one.ok-two').removeClass('ok-two');
            $('.active-one').next().addClass('active-two');
            if ($(el).attr('date-namber') > $('.active-one').attr('date-namber')) {
                markerDrag = 'active-two';
                calendar_onMove(e, $('.active-two').get(0));
                return;
            }
        }
        if ($('.active-one.ok-two-left').size() > 0) {
            $('.active-one.ok-two-left').removeClass('ok-two-left');
            $('.active-one').prev().addClass('active-two');
            if ($(el).attr('date-namber') < $('.active-two').attr('date-namber')) {
                markerDrag = 'active-two';
                calendar_onMove(e, $('.active-two').get(0));
                return;
            }
        }     
        if ($(el).attr('date-namber') != $('.month-day.active-one').attr('date-namber')) {
            calendar_setActiveOne(el);
            if (dayClick == 2) {
                $(".month-day.ok-left").removeClass('ok-left');
                $(".month-day.ok-right").removeClass('ok-right');
                calendar_setActiveTwo($('.month-day.active-two').get(0));
            }
        }
        return;
    }
    if (markerDrag == 'active-two') {
        if ($(el).attr('date-namber') != $('.month-day.active-two').attr('date-namber')) {
            calendar_setActiveOne($('.month-day.active-one').get(0));
            $(".month-day.ok-left").removeClass('ok-left');
            $(".month-day.ok-right").removeClass('ok-right');
            calendar_setActiveTwo(el);
        }
        return;
    }
    if ($(el).attr('date-namber') == null) return;
    if ($(el).attr('date-namber') < markerDrag) {
        markerDrag = '';
        if ($('a.calendar-next').is(":visible")) $('a.calendar-next').click();
    }
    else if ($(el).attr('date-namber') > markerDrag) {
        markerDrag = '';
        if ($('a.calendar-prev').is(":visible")) $('a.calendar-prev').click();
    }
}

// Обработчик остановки перетаскивания
function calendar_onDrop(e) {
    markerDrag = '';
}

var monthLeft;
function calendarSl(){
	$('.calendar-next').bind("click", function() {
		calendarIndex = $('.month').length - 1;
		if($('.month.active').index() < calendarIndex) {
			monthWidth = $('.month.active').width();
			monthLeft = monthLeft - monthWidth;
			$('.month-cont-opt').animate({'left' : monthLeft}, 1000);
			$('.month.active').next().addClass('active-next');
			$('.month.active').removeClass('active');
			$('.active-next').addClass('active');
			$('.active-next').removeClass('active-next');
			$('.calendar-prev').removeClass('no-active');
			if($('.month.active').index() == (calendarIndex -1) ) {$('.calendar-next').hide()};
			$('.calendar-next').text($('.month.active').next().attr('date-month'));
			$('.calendar-prev').text($('.month.active').prev().attr('date-month'));
			$('.calendar-next').unbind( "click" );
			$('.calendar-prev').unbind( "click" );
			calendarSl();
		};
		return false;
	});
	$('.calendar-prev').bind("click", function() {
		if(!$('.calendar-prev').hasClass('no-active')) {
			if($('.month.active').index() > 0) {
				$('.month.active').prev().addClass('active-next');
				$('.month.active').removeClass('active');
				$('.active-next').addClass('active');
				$('.active-next').removeClass('active-next');
				$('.calendar-next').show();
				monthWidth = $('.month.active').width();
				monthLeft = monthLeft + monthWidth;
				$('.month-cont-opt').animate({'left' : monthLeft}, 1000);
				calendarIndex = ++calendarIndex;
				if($('.month.active').index() == 1) {$('.calendar-prev').addClass('no-active')};
				$('.calendar-next').text($('.month.active').next().attr('date-month'));
				$('.calendar-prev').text($('.month.active').prev().attr('date-month'));
				$('.calendar-next').unbind( "click" );
				$('.calendar-prev').unbind( "click" );
				calendarSl();
			};
		};
		return false;
	});
}

function formReset(){
	console.log('up');
	$('.total .h3').slideUp();
	$('.date-today').slideDown();
	console.log('da');
	$('.search-rooms').find('select').selectspinner('val', 1).selectspinner('update');
	$('.search-adults').find('input').val(1);
	$('.check-mob select').selectspinner('val', 1).selectspinner('update');
	$('.adults-big, .adults-two').hide();
	$('.adults-one').show();
	$('.children-box').find('.children-ico').remove();
	$('.children-box').find('.children-box-select').hide();
	$('.children-box').find('input').val(0);
	$('.search-children').find('.children-add').show();
	$('.check-out').removeClass('check-ok').hide();
	$('.check-in').removeClass('check-ok');
	$('.month-day').removeClass('check-ok ok-left ok-right active-two active-one active ok-two');
	dayClick = 0;
	$('.month-day').unbind( "click" );
	$('.month-day').each(function(){
		if(!$(this).hasClass('no-act')) {
			$(this).addClass('act');
		}
	});
	$('.month').removeClass('default');
	$('.month-day.act').unbind( "click" );
	$('.month-day .day-tooltip').remove();
	$('.day-tooltip-present').fadeIn();
	calendar();

	min_value = $("#slider-range").attr('data-min'),
    max_value = $("#slider-range").attr('data-max'),
	$( "#slider-range" ).slider( "values", [ min_value, max_value ] );
	$('.range-min_input').val(min_value);
	$('.range-max_input').val(max_value);
	

}


$(document).mouseup(function (e){
  	var container = $(".currency-select"); 
  		if (!container.is(e.target) && container.has(e.target).length === 0){
   		$('.currency-select ul').slideUp(200);
		$('.currency-select span').removeClass('active');
  	};
  	var container2 = $(".language-select"); 
  		if (!container2.is(e.target) && container2.has(e.target).length === 0){
   		$('.language-select ul').slideUp(200);
		$('.language-select span').removeClass('active');
  	};
  	var container3 = $(".popup-cookie"); 
  		if (!container3.is(e.target) && container3.has(e.target).length === 0){
   		$('.popup-cookie').fadeOut();
  	};
  	var container4 = $(".cat-img-big, .cat-img-in, .cat-img"); 
  		if (!container4.is(e.target) && container4.has(e.target).length === 0){
   		$('.cat-img-big').fadeOut();
  	};
  	var container5 = $(".sort-item"); 
  		if (!container5.is(e.target) && container5.has(e.target).length === 0){
   		$('.sort-item').parents('.sort-item').find('ul').slideUp();
		$('.sort-item span a').removeClass('active');
		$('.sort-item ul').slideUp();
  	};

  	var container6 = $(".s_d-popup.active"); 
  		if (!container6.is(e.target) && container6.has(e.target).length === 0){
  		$('.s_d-popup.active').find('ul').slideUp();
   		$('.s_d-popup.active').removeClass('active');
  	};

  	var container7 = $(".currency-sl"); 
  		if (!container7.is(e.target) && container7.has(e.target).length === 0){
  		$('.currency-sl ul').slideUp();
   		$('.currency-sl span').removeClass('active');
  	};

});


