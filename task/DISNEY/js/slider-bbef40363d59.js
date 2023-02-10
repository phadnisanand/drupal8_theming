!function(t){"use strict";var e,i=t.jQuery,s=t._,n=t.Backbone,r=t.Disney.LazyLoad,o=s.sortedIndex,a=n.Events,l=n.View,d=l.prototype.remove,h="breakpoints",c=function(t,e,i){var s=o(i,t+1),n=o(i,e+1);return s!==n?i.slice(Math.min(s,n),Math.max(s,n)):[]},u=n.Resize={trigger:a.trigger,width:function(){return e||t.innerWidth}};u[h]=[],s.each(["on","off","bind","unbind"],function(e){u[e]=function(i,n,r){a[e].call(this,i,n,r),this[h]=s.compact(s.map(s.keys(this._events||{}),function(e){return t.parseInt(e)})).sort(function(t,e){return t-e})}}),n.View=l.extend({constructor:function(t){l.call(this,t),this[h]&&u.on(this[h],this.resize,this)},resize:function(){this.render(),r.resetModule(this)},remove:function(){return this[h]&&u.off(this[h],this.resize,this),d.call(this)}}),i(function(){var s;e=s=u.width(),i(t).on("resize",function(){e=null;var t,i=u.width();i!==s&&(t=c(s,i,u[h]),t.length&&u.trigger(t.join(" "),i,s<i?"up":"down"),s=i)})})}(this),function(t){"use strict";var e=t.Grill,i=t.Disney,s=t.$;e.VideoModalView=e.ModalView.extend({required_template_sets:["links"],initialize:function(t){this.options=t||{}},ready:function(){this.options.playerId&&(this.options.data.ads={context:{noAds:function(){return!0}},enabled:!1,targeting:this.getAdPosition()},this.player=new i.MatterhornVideoPlayer(this.options.playerId,{video:this.options.data,autoPlay:!0,autoPlay_mute:!1,showEndCard:!1,showPauseCard:!0,hideLargePlayBtn:!0,clickToPlay:!0,ads:{enabled:!1},parentView:this.$(".video-wrapper")}))},getAdPosition:function(){if(!this.options.cds)return this.adPosition?this.adPosition:(this.adPosition=this.options.ads&&this.options.ads.setAdPosition&&this.options.ads.setAdPosition(this.model),this.adPosition)},render:function(){var t={playerId:this.options.playerId,videoEmbedUrl:this.options.videoEmbedUrl};return this.options.template.render(t,this.options.ctx_additions)},events:{"click #modal-close":function(){this.closeVideoModal()}},hide:function(){this.closeVideoModal()},closeVideoModal:function(){this.$(".modal-info").remove(),s("#modal-window").removeClass("show")},show:function(t){e.ModalView.prototype.show.apply(this,t)}})}(this),Whiskers("modules.slider",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.b(' <div class="bound '),s.b(s.v(s.f("type",t,e,0))),s.b(" "),s.b(s.v(s.f("entity_type",t,e,0))),s.s(s.f("peeking",t,e,1),t,e,1,0,0,"")||s.b(" no-peek"),s.s(s.f("showDetails",t,e,1),t,e,0,168,191,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" show_details_container")}),t.pop()),s.b('"> '),s.s(s.d("style_options.overlay_styles",t,e,1),t,e,0,243,277,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b('<div class="module_overlay"></div>')}),t.pop()),s.b(" "),s.s(s.f("header_data",t,e,1),t,e,0,327,345,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(i.rp("<module_header0",t,e,""))}),t.pop()),s.b(" "),s.b(' <div class="slides peek-'),s.b(s.v(s.f("rpp",t,e,0))),s.s(s.d("header_data.icon_type",t,e,1),t,e,0,438,469,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" icon-"),i.b(i.v(i.d("header_data.icon_type",t,e,0)))}),t.pop()),s.s(s.f("show_episode_info",t,e,1),t,e,0,517,524,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" series")}),t.pop()),s.b('"> <ol class="slider-list peek-'),s.b(s.v(s.f("rpp",t,e,0))),s.b('"> '),s.s(s.f("pages",t,e,1),t,e,0,597,716,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <li class="slider-page"> <ul class="col-container cols-'),i.b(i.v(i.f("cols",t,e,0))),i.b(" rows-"),i.b(i.v(i.f("rows",t,e,0))),i.b('"> '),i.b(i.rp("<partials/slider_page1",t,e,"")),i.b(" </ul> </li> ")}),t.pop()),s.b(' </ol> <div class="peek"></div> '),s.b(" </div> "),s.s(s.f("showDetails",t,e,1),t,e,0,817,1211,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <div class="slider-details-container"> <div class="aspect"> <img class="thumb" alt="'),i.b(i.v(i.f("alt_text",t,e,0))),i.b('" data-src="'),i.b(i.v(i.d("thumb_data.src",t,e,0))),i.b('" src="'),i.b(i.v(i.d("thumb_data.src",t,e,0))),i.b('"> </div> <div class="details-text" tabindex=-1> <h1 class="title">'),i.b(i.v(i.f("title",t,e,0))),i.b('</h1> <p class="alt-display-name '),i.s(i.f("alt_display_name",t,e,1),t,e,1,0,0,"")||i.b("no-name"),i.b('">'),i.b(i.v(i.f("alt_display_name",t,e,0))),i.b('</p> <p class="description">'),i.b(i.v(i.f("description",t,e,0))),i.b("</p> </div> </div> ")}),t.pop()),s.b(" "),s.s(s.f("seeAll",t,e,1),t,e,0,1239,1364,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <div class="see-all-below"> <div class="see-all-container"> <a href="'),i.b(i.v(i.f("seeAll",t,e,0))),i.b('">'),i.b(i.v(i.d("translations.see_all",t,e,0))),i.b("</a> </div> </div> ")}),t.pop()),s.b(" </div>"),s.fl()},partials:{"<module_header0":{name:"module_header",partials:{},subs:{}},"<partials/slider_page1":{name:"partials/slider_page",partials:{},subs:{}}},subs:{}}),Whiskers("partials.slider_page",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.b('<ul class="col-container cols-'),s.b(s.v(s.f("cols",t,e,0))),s.b(" rows-"),s.b(s.v(s.f("rows",t,e,0))),s.b('"> '),s.s(s.f("models",t,e,1),t,e,0,66,293,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <li class="col item'),i.s(i.f("widthClass",t,e,1),t,e,0,101,116,"{{ }}")&&(i.rs(t,e,function(t,e,i){i.b(" "),i.b(i.v(i.f("widthClass",t,e,0)))}),t.pop()),i.s(i.f("hidden",t,e,1),t,e,0,142,156,"{{ }}")&&(i.rs(t,e,function(t,e,i){i.b(" lazy-deferred")}),t.pop()),i.b('"> '),i.b(" "),i.b(i.rp("<partials/slider_item0",t,e,"")),i.b(" </li> ")}),t.pop()),s.b(" </ul>"),s.fl()},partials:{"<partials/slider_item0":{name:"partials/slider_item",partials:{},subs:{}}},subs:{}}),Whiskers("partials.slider_item",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.s(s.f("is_ad",t,e,1),t,e,1,0,0,"")||s.b(s.rp("<entity_container0",t,e,"")),s.b(" "),s.s(s.f("is_ad",t,e,1),t,e,0,52,66,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(i.t(i.f("adMarkup",t,e,0)))}),t.pop()),s.fl()},partials:{"<entity_container0":{name:"entity_container",partials:{},subs:{}}},subs:{}}),Whiskers("entities.entity_overlay_video",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.b('<a class="overlay-link '),s.s(s.f("is_playlist",t,e,1),t,e,0,39,57,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" overlay-link-mask")}),t.pop()),s.b('" href="'),s.s(s.f("is_playlist",t,e,1),t,e,0,97,113,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(i.v(i.f("content_path",t,e,0)))}),t.pop()),s.b(" "),s.s(s.f("is_playlist",t,e,1),t,e,1,0,0,"")||s.b(s.v(s.d("video.href",t,e,0))),s.b('"> <div class="overlay-video '),s.s(s.f("is_playlist",t,e,1),t,e,0,221,238,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" overlay-playlist")}),t.pop()),s.b('"> '),s.s(s.d("video.thumb_data",t,e,1),t,e,0,278,412,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" "),i.s(i.d("video.thumb_data.src",t,e,1),t,e,0,304,386,"{{ }}")&&(i.rs(t,e,function(t,e,i){i.b(' <img src="'),i.b(i.v(i.d("video.thumb_data.src",t,e,0))),i.b('" class="overlay-bg" alt="'),i.b(i.v(i.d("video.alt_text",t,e,0))),i.b('"> ')}),t.pop()),i.b(" ")}),t.pop()),s.b(" "),s.s(s.f("is_playlist",t,e,1),t,e,0,450,524,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <div class="video-collection-count"> <span>'),i.b(i.v(i.f("video_count",t,e,0))),i.b("</span> </div> ")}),t.pop()),s.b(" </div> </a>"),s.fl()},partials:{},subs:{}}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs=e()}(this,function(){"use strict";var t="millisecond",e="second",i="minute",s="hour",n="day",r="week",o="month",a="quarter",l="year",d="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},p={s:u,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+u(s,2,"0")+":"+u(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var s=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(s,o),r=i-n<0,a=e.clone().add(s+(r?-1:1),o);return+(-(s+(i-n)/(r?n-a:a-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:o,y:l,w:r,d:n,D:d,h:s,m:i,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",g={};g[m]=f;var _=function(t){return t instanceof w},v=function(t,e,i){var s;if(!t)return m;if("string"==typeof t)g[t]&&(s=t),e&&(g[t]=e,s=t);else{var n=t.name;g[n]=t,s=n}return!i&&s&&(m=s),s||!i&&m},b=function(t,e){if(_(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new w(i)},y=p;y.l=v,y.i=_,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function u(t){this.$L=this.$L||v(t.locale,null,!0),this.parse(t)}var p=u.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(h);if(s){var n=s[2]-1||0,r=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var i=b(t);return this.startOf(e)<=i&&i<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,a){var h=this,c=!!y.u(a)||a,u=y.p(t),p=function(t,e){var i=y.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?i:i.endOf(n)},f=function(t,e){return y.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,g=this.$M,_=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case l:return c?p(1,0):p(31,11);case o:return c?p(1,g):p(0,g+1);case r:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(c?_-w:_+(6-w),g);case n:case d:return f(v+"Hours",0);case s:return f(v+"Minutes",1);case i:return f(v+"Seconds",2);case e:return f(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(r,a){var h,c=y.p(r),u="set"+(this.$u?"UTC":""),p=(h={},h[n]=u+"Date",h[d]=u+"Date",h[o]=u+"Month",h[l]=u+"FullYear",h[s]=u+"Hours",h[i]=u+"Minutes",h[e]=u+"Seconds",h[t]=u+"Milliseconds",h)[c],f=c===n?this.$D+(a-this.$W):a;if(c===o||c===l){var m=this.clone().set(d,1);m.$d[p](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[y.p(t)]()},p.add=function(t,a){var d,h=this;t=Number(t);var c=y.p(a),u=function(e){var i=b(h);return y.w(i.date(i.date()+Math.round(e*t)),h)};if(c===o)return this.set(o,this.$M+t);if(c===l)return this.set(l,this.$y+t);if(c===n)return u(1);if(c===r)return u(7);var p=(d={},d[i]=6e4,d[s]=36e5,d[e]=1e3,d)[c]||1,f=this.$d.getTime()+t*p;return y.w(f,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),n=this.$locale(),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,h=function(t,s,n,r){return t&&(t[s]||t(e,i))||n[s].substr(0,r)},u=function(t){return y.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:h(n.monthsShort,a,d,3),MMMM:h(d,a),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,l,2),ddd:h(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:y.s(r,2,"0"),h:u(1),hh:u(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:y.s(o,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return i.replace(c,function(t,e){return e||f[t]||s.replace(":","")})},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,d,h){var c,u=y.p(d),p=b(t),f=6e4*(p.utcOffset()-this.utcOffset()),m=this-p,g=y.m(this,p);return g=(c={},c[l]=g/12,c[o]=g,c[a]=g/3,c[r]=(m-f)/6048e5,c[n]=(m-f)/864e5,c[s]=m/36e5,c[i]=m/6e4,c[e]=m/1e3,c)[u]||m,h?g:y.a(g)},p.daysInMonth=function(){return this.endOf(o).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),s=v(t,e,!0);return s&&(i.$L=s),i},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},u}(),$=w.prototype;return b.prototype=$,[["$ms",t],["$s",e],["$m",i],["$H",s],["$W",n],["$M",o],["$y",l],["$D",d]].forEach(function(t){$[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),b.extend=function(t,e){return t(e,w,b),b},b.locale=v,b.isDayjs=_,b.unix=function(t){return b(1e3*t)},b.en=g[m],b.Ls=g,b}),function(t){"use strict";var e=function(e,i,s,n,r,o,a){var l=t.dayjs,d=i||{},h=s||{},c=d.streaming_now||"Streaming Now",u=d.streaming||"Streaming",p=d.on_blu_ray_dvd_digital||"On Blu-Ray, DVD, Digital",f=d.now_on_digital||"Now on Digital",m=d.on_digital||"On Digital",g=d.available_to_pre_order||"Available to Preorder",_=d.in_theaters_now||"In Theaters Now",v=d.in_theaters||"In Theaters",b=d.coming_soon||"Coming Soon",y=parseInt(h.coming_soon,10)||200,w=parseInt(h.available_to_preorder,10)||30,$=parseInt(h.on_digital,10)||15,k=parseInt(h.streaming,10)||14,S="MMMM D, YYYY",x=l(n,S),M=r?l(r,S):null,D=o?l(o,S):null,A=a?l(a,S):null;return l().isSame(D,"day")?c:l().isAfter(D)?c:l().add(k,"d").isAfter(D,"day")?u+" "+o:l().isSame(A,"day")?p:l().isSame(M,"day")?f:!l().isAfter(M)||A||D?l().isAfter(M)&&A&&l().isAfter(A)?p:l().add($,"d").isAfter(M)?m+" "+r:l().add(w,"d").isAfter(M)?g:l().isSame(x,"day")?_:l().isAfter(x)?_:x.isAfter(l())&&l().add(y,"d").isAfter(x)?v+" "+n:x.isAfter(l().add(200,"d"))?b:!n&&b:f};t.MovieDate={formatReleaseDate:e}}(this),Whiskers("partials.href_target",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.b('target="_blank" rel="noopener noreferrer"'),s.fl()},partials:{},subs:{}}),Whiskers("modals.video",{code:function(t,e,i){"use strict";var s=this;return s.b(i=i||""),s.b('<div class="modal-info'),s.s(s.f("playerId",t,e,1),t,e,0,35,49,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(" native-player")}),t.pop()),s.b('"> <button id="modal-close" class="top-right hidden ada-el-focus" aria-label="Close"></button> <div class="modal-content"> <div class="video-wrapper"> '),s.s(s.f("videoEmbedUrl",t,e,1),t,e,0,231,372,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b(' <iframe class="video-iframe" width="100%" height="100%" src="'),i.b(i.v(i.f("videoEmbedUrl",t,e,0))),i.b('" frameborder="0" allow="autoplay" allowfullscreen> </iframe> ')}),t.pop()),s.b(" "),s.s(s.f("playerId",t,e,1),t,e,0,404,472,"{{ }}")&&(s.rs(t,e,function(t,e,i){i.b('<div id="'),i.b(i.v(i.f("playerId",t,e,0))),i.b('-container"><div id="'),i.b(i.v(i.f("playerId",t,e,0))),i.b('"></div></div>')}),t.pop()),s.b(" </div> </div> </div>"),s.fl()},partials:{},subs:{}}),function(t){"use strict";var e=t.Grill,i=t.Disney,s=t.Backbone,n=s.View,r=t.Whiskers,o=t.Tracker,a=t.jQuery,l=t._,d=t.MovieDate,h=i.Style.breakpoints,c=i.Style.custom_breakpoints,u=l.values(h),p=s.Resize.width,f=i.Ads||{},m=f.ShareThroughAds,g=function(t){return null!=t&&(t=a.trim(t).toLowerCase().replace(/[^a-z0-9_:, \-]/gi,"").replace(/\s+/g,"_")),t},_=t.SwipeView=e.ModuleView.extend({style_classes:["slider-view","pagination-styles"],required_template_sets:["module_header","entities"],breakpoints:u.join(" "),template:r.modules.slider,events:{slide:function(t,e,i){t.preventDefault(),this.$(".slides").toggleClass("peeking",e!==this.collection.lastIndex(this.rpp()));var s=this.rpp()*(e+1),n=this.cols(),r=s+n,o=this.collection.first(r);if(this.$pages&&e>0){var d=a(this.$pages[e]).find(".item"),h=a(this.$pages[e+1]).find(".item").slice(0,this.rows());d.add(h).enableLazyLoad().loadLazyImages()}e>i?this.trackSlide("next",t):e<i&&this.trackSlide("prev",t),l.each(o,function(t){t.set({hidden:!1})}),this.currentPage=e,this.$(".entity-link.title-link").attr("tabindex",-1)},"click .youtube-url":function(t){if(!(this.model.get("config_options")||{}).open_youtube_lightbox)return!0;t.preventDefault();var e=a(t.currentTarget),i=e[0].getAttribute("data-youtube-id"),s=["https://www.youtube.com/embed/",i,"?rel=0&autohide=1&showinfo=0&color=white&wmode=opaque&autoplay=1;enablejsapi=1&rel=0"].join("");this.launchVideoModal({videoEmbedUrl:s})},"click .entity-type-video":function(t){var e=this.model.get("config_options");if(e&&e.open_native_video_lightbox){t.preventDefault();var i=a(t.currentTarget.parentNode).index(),s=this.currentPage*this.rppVal+i;this.launchVideoModal({data:this.model.get("data")[s],playerId:["player",this.model.get("ref"),this.currentPage,i,s].join("-")})}}},launchVideoModal:function(t){new e.VideoModalView({template:r.modals.video,name:"video-modal",ctx_additions:this.ctx_additions(),videoEmbedUrl:t.videoEmbedUrl,data:t.data,playerId:t.playerId}).show()},trackSlide:function(t){if(o){var e="arrow_"+t,i=this.$el.data("module"),s=a(".module").index(this.$el),n=this.ctoTitle();o.event({engagementType:e,engagementMeta:n+"/"+i+"/mod"+(s+1)})}},ctoTitle:function(){var t=this.model.get("title");return g(t)},initialize:function(t){this.options=t||{};var e=this.model.get("config_options"),n=this.model.get("style_options");this.model.data.set(this.model.data.models.filter(function(t){return"Recommendation"!==t.get("type")})),this.collection=new s.LazySliderCollection(this.model.data.models),e&&e.native_ads&&m&&!this.options.cds&&(this.shareThrough=new m,this.shareThrough.loadScriptError||(this.shareThrough.insertModel(this.collection,0),this.shareThrough.scriptElem.addEventListener("scriptLoadError",function(){this.hasEmptyAdSlot=!0,this.removeEmptyAdSlot()}.bind(this))));var r=l.chain(this.collection.pluck("entity_type")).compact().uniq().first().value();if(l.extend(this,{entity_type:r||this.model.get("type"),lastPage:0,startingCount:this.index=this.collection.startingIndex,slideTime:500,init:!1,translations:this.model.get("translations")||{}}),this.collection.on("remove",function(){this.resize()},this),this.needsGuestContext()&&i.guest.retain(),this.configureData&&this.configureData(),this.stylePack=this.model.collection&&this.model.collection.style,this.customSliderStyles=this.stylePack&&this.stylePack.custom_slider_styles,this.customSliderStyles){this.sliderLeftPeek=this.customSliderStyles.slider_left_peek;var o=this&&this.customSliderStyles,a=o&&o.left_arrow_svg||"",d=a&&a.indexOf("?");this.leftArrowSvg=d>=1?a.split("?")[0]:a}(this.sliderLeftPeek?this.align_arrows_vert="thumbnail":this.customSliderStyles&&this.customSliderStyles.align_arrows_vert?this.align_arrows_vert=this.customSliderStyles.align_arrows_vert:n&&n.custom_arrow_options&&n.custom_arrow_options.align_arrows_vert?this.align_arrows_vert=n.custom_arrow_options.align_arrows_vert:this.align_arrows_vert||(this.align_arrows_vert="content"),e&&e.open_native_video_lightbox)&&((this.model.get("data")||[]).some(function(t){return t.flavors})&&(this.assets={scripts:["https://static-mh.content.disney.io/matterhorn/assets/videoplayer-ff11179f50e4.js"]}))},destroy:function(){this.needsGuestContext()&&i.guest&&i.guest.release()},peekAmount:function(){return.25/Math.sqrt(this.cols()/.3)},wide:function(){return p()>=h.midHigh},getItemsPerRow:function(t){var e=p();return t&&e<=h.max?Math.min(t,4):t&&e<=h.midHigh?Math.min(t,2):t},render:function(){var t=this,e=t.model,i=t.cols(),s=t.rows(),n=t.rpp(),o=t.details;t.pages=this.collection.page(this.index,n,s,i),this.formatFeatured&&this.formatFeatured();var a=this.getDeviceSize(),d=l.extend({rpp:n,cols:i,rows:s,peeking:this.peeking(n),entity_type:t.entity_type,seeAll:e.get("seeAll"),showDetails:o,href_target:r.partials.href_target,image_asset_src:function(){return this.getSizedImage(this,a)}},this.options.ads.helpers(this.model.toJSON(),this.getAdPosition()),this.model);t.length=t.pages.length,t.$el.html(t.template.render(d,this.ctx_additions())),this.renderPages(),this.adListeners()},renderPages:function(){var t=this,e=t.cols(),i=t.rows(),s=t.rpp();t.rppVal=s,t.pageViews=[],t.itemViews=[],t.pages&&(t.itemViews=t.createItemViews(),t.pages.forEach(function(n,r){var o=t.createPageView(e,i);t.pageViews.push(o),t.appendPageView(o),t.itemViews.slice(r*s,(r+1)*s).forEach(function(t){o.appendItemView(t)})}))},ready:function(){var e=t.window.innerWidth>h.midLow,s=e&&this.$(".slider-page").length>1,n=!(!s||!this.sliderLeftPeek),r=this.peekAmount(),o=this&&this.transformAmount&&this.transformAmount()||0,a=this.translations||{};if(this.$(".dots").remove(),this.init=!0,this.$(".slides ol").swipeasaurus({arrows:!0,prevLabel:a.previous_slide||"Previous",nextLabel:a.next_slide||"Next",loop:!1,right:r,left:n?r:0,index:this.index,speed:this.slideTime,rtl:i.rtl,dots:this.show_dots,transformAmount:o}),this.init=!1,this.$pages=this.$(".slides ol > li"),n){var l=100*r+"%";this.alignArrowsHoriz(l),this.alignHeaderLeft(l)}this.leftArrowSvg&&e&&this.injectLeftArrowSvg(),"thumbnail"===this.align_arrows_vert&&this.rows()<2&&this.alignArrowsVert(),this.$(".entity-link.title-link").attr("tabindex",-1),this.hasEmptyAdSlot&&this.removeEmptyAdSlot()},resize:function(){var t=this,e=t.pages,i=t.cols(),s=t.rows(),n=t.rpp(),r=t.peeking(),o=t.peekAmount(),d=t.rppVal||n,h=0,c=0;t.rppVal=n,t.pages=t.collection.page(t.index,n,s,i),t.$slides=a(".slides, .slides ol"),h=Math.max(0,t.pages.length-e.length),c=Math.max(0,e.length-t.pages.length),h&&l.times(h,function(){var e=t.createPageView(i,s);t.appendPageView(e),t.pageViews.push(e)}),t.pages.forEach(function(e,r){t.itemViews.slice(r*n,(r+1)*n).forEach(function(e){t.pageViews[r].appendItemView(e).updateColRows(i,s)})}),c&&l.times(c,function(){t.pageViews.pop().remove()}),n&&d&&n!==d&&t.$slides.removeClass("peek-"+d).addClass("peek-"+n),r&&o>0?(t.$slides.removeClass("peek-"+d),t.$slides.addClass("peek-"+n),t.$(".bound").removeClass("no-peek")):t.$(".bound").addClass("no-peek"),t.ready()},peeking:function(t){return!!this.collection.peeking&&this.collection.peeking(t)},rows:function(){return(this.model.get("config_options")||{}).num_rows||1},rpp:function(){return this.cols()*this.rows()},cols:function(){var t=p(),e=this.wide(),i=this.collection.first(),s=i&&i.get("entity_config"),n=s&&s.aspect_ratio,r=this.model.get("style_options").items_per_row_override;if(r&&e)return this.getItemsPerRow(r);switch(n){case"poster":case"dvd_case":case"letter":return e?4:t>=h.midLow?3:2;case"baseball_card":return t>=h.max?5:e?4:t>=h.midLow?3:2;case"square":return t>=h.max?4:e?3:2;case"16x9":case"4x3":case"poster_landscape":return e?3:t>=h.midLow?2:1;case"widescreen":return t>=h.midHigh?2:1;default:return e?3:2}},createPageView:function(t,e){return new b({cols:t,rows:e})},appendPageView:function(t){this.$(".slides ol").append(t.$el)},createItemViews:function(){var t=this,e=t.model&&t.model.get("config_options"),i=t.collection&&t.collection.first().get("entity_config"),s=t.model&&t.model.get("translations"),n=t.model&&t.model.get("data")&&t.model.get("data")[0].item_titles_below,r=e&&e.display_movie_release_date,o=e&&e.phase_message_below,a=i&&i.display_actor_name;return t.collection.map(function(e){var i={model:e,translations:t.translations};if(i.hide_slider_titles=!n,t.shareThrough&&t.shareThrough.shouldRenderSlot(e,t.model)){var h=t.shareThrough.getPlacementKey(t.model);h&&(i.adMarkup=t.options.ads.tagWithTargeting("native",{strnativekey:h}))}if(r){var c=e.get("release"),u=e.get("digital_released_on"),p=e.get("streaming_released_on"),f=e.get("physical_released_on"),m=l.extend(s,t.model.collection.translations),g=t.model.collection.movie_date_config;i.movie_release_date_formatted=d.formatReleaseDate(e.get("title"),m,g,c,u,p,f)}if(o){i.display_phase_message=o;var _=e.get("phase_message");_&&(i.phase_message_output=_)}if(a){var b=e.get("alt_display_name");b&&(i.actor_name=b)}if("flexgrid"===e.get("entity_type")){var y=t.getDeviceSize(),w=e.get("image_assets"),$=w&&w.background;i.image_asset_src=t.getSizedImage($,y)}return new v(i)})},getSizedImage:function(t,e){return t&&(t[e]||l.first(l.values(t)))},getDeviceSize:function(){return s.Resize.width()>=h.midHigh?"desktop":"mobile"},adListeners:function(){var t=this,e=this.$(".gpt");if(e.length){var i=this.options.ads.findSlotById(e.attr("id"));i&&i.events.on("slotRenderEnded",function(e){e.isEmpty&&t.removeEmptyAdSlot()})}else t.removeEmptyAdSlot()},getAdPosition:function(){if(!this.options.cds)return this.options.ads&&this.options.ads.setAdPosition&&this.options.ads.setAdPosition(this.model)},removeEmptyAdSlot:function(){var t=l.find(this.itemViews,function(t){return!0===t.model.get("is_ad")});if(t){var e=this.itemViews.indexOf(t);if(e>=0&&this.itemViews.splice(e,1),this.collection.remove(t.model),this.hasEmptyAdSlot=!1,this.$pages&&this.$pages.length>1){a(this.$pages[1]).find(".item").slice(0,this.rows()).enableLazyLoad().loadLazyImages()}}},alignArrowsHoriz:function(t){var e=this.$(".next"),s=this.$(".prev");this.model.get("data")[0].item_titles_below&&this.$(".entity-details").addClass("visible"),i.rtl?(e.css("left",t),s.css("right",t)):(e.css("right",t),s.css("left",t))},alignArrowsVert:function(){var t=this.$(".next"),e=this.$(".prev"),i=this.$(".slider-page").first(),s=i.outerHeight(),n=parseInt(i.css("padding-top"),10),r=this.$(".slider-page img").first().outerHeight(),o=s-r;t.add(e).css("margin-top",n-o/2)},alignHeaderLeft:function(t){this.$(".module_header").closest(".slider-view").hasClass("header-center")||this.$(".module_header").css("left",t)},injectLeftArrowSvg:function(){if(!this.leftArrowInjected){var t,e=a("button.prev, button.next",this.el),i=this.customSliderStyles.slider_color_theme,s=this.customSliderStyles.button_color_override,n=this.customSliderStyles.arrow_color_override;if(i&&e.addClass(i),e.addClass("inject-left-arrow-svg"),n)t=n;else if("main-background"===i){var r=this.stylePack.page_background_styles&&this.stylePack.page_background_styles.bg_color;t=r||"#1938ce"}s&&(e.removeClass(i),e.css("background-color",s)),a.get(this.leftArrowSvg,function(i){var s=a(i).find("svg")[0];s&&(t?a(s).find("[fill]").attr("fill",t):a(s).find("[fill]").prop("fill",!1),e.html(s)),e.html(s),e.css("background-image","none")},"xml"),this.leftArrowInjected=!0}}}),v=n.extend({template:r.partials.slider_item,tagName:"li",className:"col item",initialize:function(t){this.options=t||{},this.model=this.options.model,this.model.on("remove",function(){this.remove()},this),this.render(),this.addCssClasses()},render:function(){var t={item:r.entities.item,entity_container:r.entities.entity_container,"entities/entity_play_icon":r.entities.entity_play_icon,"entities/entity_overlay_video":r.entities.entity_overlay_video,"entities/entity_item_count":r.entities.entity_item_count,image_attributes:r.partials.image_attributes,href_attributes:r.partials.href_attributes,href_target:r.partials.href_target},e=l.extend(this.model.toJSON(),this.options),i=e.href||"",s=["https://youtu.be","https://youtube.com","https://www.youtube.com"],n=l.find(s,function(t){return i.startsWith(t)});e.is_youtube=n,e.aria_label=this.model.get("title"),this.$el.html(this.template.render(e,t))},addCssClasses:function(){var t=[];this.model.get("hidden")&&t.push("lazy-deferred"),this.model.get("widthClass")&&t.push(this.model.get("widthClass")),t.length&&this.$el.addClass(t.join(" "))}}),b=n.extend({template:r.partials.slider_page,tagName:"li",className:"slider-page",initialize:function(t){this.options=t||{},l.defaults(this.options,{cols:1,rows:1}),this.render()},updateColRows:function(t,e){t&&t!==this.options.cols&&(this.updateClass("cols",this.options.cols,t),this.options.cols=t),e&&e!==this.options.rows&&(this.updateClass("rows",this.options.rows,e),this.options.rows=e)},updateClass:function(t,e,i){this.$el.children("ul").removeClass(t+"-"+e).addClass(t+"-"+i)},appendItemView:function(t){return this.$("ul").append(t.$el),this},render:function(){this.$el.html(this.template.render(this.options))}});_.register("slider",{}),_.register("seo_link_slider",{}),_.register("grid",{peeking:function(){return!1},rows:function(){return 2}}),_.register("characters",{cols:function(){var t=p(),e=this.wide();return t>=h.max?5:e?4:t>=h.midLow?3:2}}),_.register("slider_rfy",{cols:function(){var t=this.wide(),e=this.model.get("style_options").items_per_row_override;return e&&t?this.getItemsPerRow(e):t?3:2},initialize:function(t){this.options=t||{},l.extend(this,{entityType:"video",index:0,lastPage:0,startingCount:this.loadedPages=1,slideTime:500,init:!1}),this.$el.addClass("temp-hidden"),this.collection=this.model.data,this.fetchData()},fetchData:function(){var t=this,e=i.Recommender,s=this.collection.first(),n=s&&s.toJSON()||{};l.extend(n,{entity_overrides:{title_overlay:!1}}),e.getRecommendations(n).done(function(e){t.renderFetchedData(e)}).fail(function(){var e=t.model.get("data").slice(1);e.length&&t.renderFetchedData(e)})},renderFetchedData:function(t){var e=new s.Collection(t);this.collection=new s.LazySliderCollection(e.models),this.render(),this.ready(),this.$el.removeClass("temp-hidden").loadLazyImages()}}),_.register("featured_promo_slider",{numFeatured:1,configureData:function(){var t=this;i.geo(function(e,i,n){var r=t.numFeatured,o=t.placeholders=[];if(n){var a=t.collection.where({location:n});t.collection.remove(a),t.collection.add(a,{at:0})}if(r)for(var l={widthClass:"featured",featured:!0},d=new s.Model({widthClass:"empty_placeholder"}),h=0;h<r;h++)o.push(d),t.collection.at(h).set(l)})},formatFeatured:function(){var t=this.wide();this.collection.each(function(e){if(e.get("featured")&&t){var i=e.get("promo_featured");e.set("thumb_data",{src:i})}else{var s=e.get("promo");e.set("thumb_data",{src:s})}}),t?this.collection.add(this.placeholders,{at:1}):this.collection.remove(this.placeholders)},cols:function(){return this.wide()?4:2},render:function(){_.prototype.render.call(this),this.resize()}}),_.register("junior_nav_slider",{breakpoints:[h.max,h.midHigh,c.juniorNavMin].join(" "),cols:function(){var t=p();return t>=h.max?6:t>=h.midHigh?5:t>=c.juniorNavMin?4:3},peekAmount:function(){return.25/Math.sqrt(this.rpp()/.2)}}),_.register("incredibles_slider",{show_dots:!0,align_arrows_vert:"thumbnail",peeking:function(){return!!this.model.get("style_options").show_peeking_content},peekAmount:function(){var t=p(),e=this.model.get("style_options"),i=e.show_peeking_content,s=!1,n=!1;return i&&(i.includes("desktop"),s=i.includes("tablet"),n=i.includes("mobile")),t<=h.midLow&&n?.65/Math.sqrt(this.rpp()/.2):t<=h.midUltraHigh&&s?.25/Math.sqrt(this.rpp()/.2):0},transformAmount:function(){var t=p(),e=this.model.get("style_options"),i=e&&e.show_peeking_content,s=!1,n=!1;return i&&(s=i.includes("tablet"),n=i.includes("mobile")),t<=h.midLow&&n?10:t<=h.midUltraHigh&&s?5:0},wide:function(){return p()>=h.max},cols:function(){var t=p(),e=this.wide(),i=this.model.get("style_options"),s=i.items_per_row_override,n=i.items_per_slide_page,r=4,o=2,a=1;return n&&(r=n.desktop||r,o=n.tablet||o,a=n.mobile||a),s&&e?s:e?r:t>=h.midHigh?o:a}}),_.register("featured_playlist_slider",{show_dots:!0,align_arrows_vert:"thumbnail",peeking:function(){return(this.model.get("config_options")||{}).show_peek},peekAmount:function(){return.25/Math.sqrt(this.cols()/.3)},wide:function(){return p()>=h.max},cols:function(){var t=p(),e=this.wide(),i=this.model.get("style_options"),s=i.items_per_row_override,n=this.model.get("config_options"),r=n.items_per_slide_page.mobile;return s&&e?s:e?n.items_per_slide_page.desktop||4:t>=h.midHigh?n.items_per_slide_page.tablet||2:r?parseInt(r,10):1},initialize:function(t){this.model.attributes.data=this.configureItems(),this.model.attributes.see_all_featured=!!this.model.attributes.seeAll,_.prototype.initialize.call(this,t)},configureItems:function(){var t=this.model.data.models,e=this.model.get("config_options"),i=e&&e.image_ratio;return t.forEach(function(t){var e=t.get("images");if(e&&e.desktop){var s=e.desktop.desktop_2x3
;"ratio_16x9"===i?s=e.desktop.desktop_16x9:"ratio_1x1"===i&&(s=e.desktop.desktop_1x1),t.set({image_asset:s,image_ratio:i,show_title:!0})}}),t}}),_.register("details_slider",{events:{slide:_.prototype.events.slide,"click .show_details_container .item":function(t){var e=a(t.currentTarget),i=a(e.closest(".details_slider")),s=e.find(".thumb-border")[0],n=a(i).find(".selected")[0],r=a(i).find(".show-outline");if(t.preventDefault(),i.is(this.$el)){var o=e.index()+this.currentPage*this.rppVal;a(n).removeClass("selected");for(var l=0;l<r.length;l++)a(r[0]).removeClass("show-outline");a(s).addClass("selected"),this.setDetails(this.model.data.models[o])}},"keyup .show_details_container .item":function(t){var e=a(t.currentTarget),i=a(e.closest(".details_slider"));if(9===t.keyCode){var s=e.find(".entity-link")[0];a(s).addClass("show-outline")}else if(13===t.keyCode){var n=i.find(".details-text");a(n[0]).focus()}},"keydown .show_details_container .item":function(t){if(9===t.keyCode){var e=a(t.currentTarget),i=a(e.closest(".details_slider")),s=i.find(".show-outline")[0];a(s).removeClass("show-outline")}},"keydown .show_details_container .details-text":function(t){if(9===t.keyCode){var e,i=a(t.currentTarget),s=a(i.closest(".details_slider")),n=s.find(".selected")[0],r=a(n).closest(".item");e=t.shiftKey?r.prev(".item"):r.next(".item");var o=a(e).find(".entity-link");t.preventDefault(),o[0].focus()}}},breakpoints:[c.detailsSliderMax,h.midUltraHigh,c.detailsSliderLow].join(" "),show_dots:!0,align_arrows_vert:"thumbnail",peeking:function(){return p()<=h.midUltraHigh},peekAmount:function(){var t=p();return t>h.midUltraHigh?0:t>=c.detailsSliderLow?.25/Math.sqrt(this.cols()/.3):.5/Math.sqrt(this.cols()/.3)},wide:function(){return p()>c.detailsSliderMax},cols:function(){var t=p(),e=this.wide(),i=this.model.get("style_options"),s=i.items_per_row_override,n=i.mobile_columns;return s&&e?s:e?6:t>h.midUltraHigh?5:t>=c.detailsSliderLow?4:n?parseInt(n,10):2},initialize:function(e){this.model.attributes.data=this.configureDetailsOnLoad(),_.prototype.initialize.call(this,e),t.window.addEventListener("resize",function(){this.verticalAlign()}.bind(this))},configureDetailsOnLoad:function(){var t=this.model.data.models[0];this.setDetails(t),t.set({selected:!0})},setDetails:function(t){var e=t.get("alt_text"),i=t.get("thumb_data"),s=t.get("title"),n=t.get("description"),r=t.get("alt_display_name"),o=this.$el.find(".slider-details-container"),l=o.find(".thumb"),d=o.find(".title"),h=o.find(".alt-display-name"),c=o.find(".description");l.attr("alt",e),l.attr("data-src",i.src),l.attr("src",i.src),d.text(s),r?(h.text(r),a(h).removeClass("no-name")):a(h).addClass("no-name"),c.text(n);var u={alt_text:e,thumb_data:i,title:s,alt_display_name:r,description:n};return this.details=u,o},verticalAlign:function(){var t=a(this.$el).find(".slider-details-container .details-text"),e=a(this.$el).find(".slider-details-container .aspect");t.height()>e.height()?a(e).css("vertical-align","top"):a(e).css("vertical-align","")}})}(this);