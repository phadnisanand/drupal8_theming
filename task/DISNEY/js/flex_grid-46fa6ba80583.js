Whiskers("partials.flex_inline_videoplayer",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('<div class="flex-inline-videoplayer video-container"> <div id="'),o.b(o.v(o.f("playerId",t,e,0))),o.b('" class="video-player"></div> <div class="video-controls-container"> <button type="button" aria-label="'),o.b(o.v(o.d("translations.play_clip",t,e,0))),o.b('" class="button ada-el-focus transparent video-playback-control '),o.s(o.d("data.video_options",t,e,1),t,e,0,291,379,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("button_background_overlay",t,e,1),t,e,0,322,332,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("overlayed-")}),t.pop()),s.b(s.v(s.f("button_theme",t,e,0))),s.b(" ")}),t.pop()),o.b('" >'),o.b(o.v(o.d("translations.play",t,e,0))),o.b("</button> </div> </div>"),o.fl()},partials:{},subs:{}}),function(t){"use strict";var e=t.Disney,s=t.Backbone,o=t.Grill,i=t.Whiskers,a=t.Modernizr,r=t._;o.FlexInlineVideoPlayer=s.View.extend({template:i.partials.flex_inline_videoplayer,initialize:function(t){this.options=t||{},this.render()},render:function(){this.$el.html(this.template.render(this.model)),this.initVideo()},initVideo:function(){this.$videoParent=this.model.get("$videoParent"),this.status={};var t=this.model.get("data");if(!r.isEmpty(t&&t.video_options)){var s,o=t.video,i=t.video_options,n=!i.show_controls,l=!a.touch&&i.autoplay,b={autoPlay:l,autoPlay_mute:i.start_muted,loop:i.loop_video,video:o,skinUrl:{kalturaCssOverrides:"https://static-mh.content.disney.io/matterhorn/assets/videoplayer/skins/flex_inline_videoplayer-bd5e73b6c1b6.css"},hideControlBarContainer:n,hideTopBarContainer:!0,hideLargePlayBtn:!0};b.video.ads={context:{noAds:function(){return!0}},enabled:!1,targeting:this.getAdPosition()},b.video.hideLogo===undefined&&(b.video.hideLogo=!0),s=new e.MatterhornVideoPlayer(this.model.get("playerId"),b),s.messageBus.addMessageListener("played",this.onPlayVideo.bind(this)),s.messageBus.addMessageListener("paused",this.onPauseVideo.bind(this)),s.messageBus.addMessageListener("playComplete",this.onPlayComplete.bind(this)),s.messageBus.addMessageListener("playing",this.onPlaying.bind(this)),this.$(".video-container").addClass("media-not-ready"),s.messageBus.addMessageListener("mediaReady",this.onMediaReady.bind(this)),l&&(this.status.active=!0,this.$videoParent.addClass("video-active video-autoplay")),i.hide_text_on_play&&this.$videoParent.addClass("hide-text-on-play"),s.controls.hide(),this.player=s}},onMediaReady:function(){this.status.mediaReady=!0,this.$(".video-container").removeClass("media-not-ready"),r.isFunction(this.onMediaReadyCallback)&&this.onMediaReadyCallback()},startVideo:function(){this.$videoParent.addClass("video-active video-playing"),this.status.ended=!1,this.status.active=!0,this.status.mediaReady?(this.player.controls.show(),this.player.controls.play()):this.onMediaReadyCallback=this.startVideo},clearOnMediaReadyCallback:function(){this.onMediaReadyCallback=undefined},getAspectPadding:function(){var t;if("resize"===this.model.get("data").video_options.display_type)return t=this.model.get("data").video.externals[0].data,t.height/t.width*100+"%"},onPlayVideo:function(){this.trigger("video:playing"),this.$videoParent.addClass("video-playing").removeClass("video-ended"),this.player.controls.show(),this.status.ended=!1},onPauseVideo:function(){this.trigger("video:paused"),this.$videoParent.removeClass("video-playing")},onPlayComplete:function(){var t=this.model.get("data").video_options;this.trigger("video:playComplete",t),t.loop_video||(t.hide_on_complete?(this.$videoParent.removeClass("video-active video-playing video-autoplay"),this.player.controls.hide(),this.status.active=!1,this.status.ended=!0):(this.status.ended=!0,this.$videoParent.addClass("video-ended").removeClass("video-autoplay video-playing")))},getAdPosition:function(){if(!this.options.cds)return this.adPosition?this.adPosition:(this.adPosition=this.options.ads&&this.options.ads.setAdPosition&&this.options.ads.setAdPosition(this.model),this.adPosition)},onPlaying:function(){this.trigger("video:playing")}})}(this),Whiskers("modules.flex_grid",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('<style type="text/css"> .flex-grid-view[id="ref-'),o.b(o.v(o.f("ref",t,e,0))),o.b('"] .wrapper{ -ms-grid-columns: (1fr)['),o.b(o.v(o.d("data.length",t,e,0))),o.b("]; grid-template-columns: repeat("),o.b(o.v(o.d("data.length",t,e,0))),o.b(', 1fr); } </style> <div class="bound'),o.s(o.f("header_data",t,e,1),t,e,0,207,225,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" has-module-header")}),t.pop()),o.b('"> '),o.s(o.f("header_data",t,e,1),t,e,0,260,278,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(s.rp("<module_header0",t,e,""))}),t.pop()),o.b(' <ul class="wrapper" data-content-count="'),o.b(o.v(o.d("data.length",t,e,0))),o.b('"> '),o.s(o.f("data",t,e,1),t,e,0,362,10762,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("content_config",t,e,1),t,e,0,382,10742,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <li data-title="'),s.b(s.v(s.f("title",t,e,0))),s.b('" '),s.s(s.f("cto_attrs",t,e,1),t,e,0,424,457,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(s.rp("<partials/cto_link_attributes1",t,e,""))}),t.pop()),s.b(' data-link_cta_index="'),s.b(s.v(s.f("title",t,e,0))),s.b('"> <div class="item-container '),s.s(s.d("content_config.text_settings",t,e,1),t,e,0,565,652,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("position",t,e,1),t,e,0,579,596,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("text-"),s.b(s.v(s.f("position",t,e,0)))}),t.pop()),s.b(" "),s.s(s.f("alignment",t,e,1),t,e,0,624,637,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(s.v(s.f("alignment",t,e,0)))}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.d("content_config.styles",t,e,1),t,e,0,712,813,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||s.s(s.f("gradient_overlay",t,e,1),t,e,0,745,761,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("gradient-overlay")}),t.pop()),s.b(" "),s.b(s.v(s.f("text_lightness",t,e,0))),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("desktop_background_square",t,e,1),t,e,0,870,883,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("aspect-square")}),t.pop()),s.b('" '),s.s(s.d("content_config.styles.text_lightness",t,e,1),t,e,0,956,969,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("data-ui-light")}),t.pop()),s.b('> <div class="item entity-box"> <div class="aspect-container"> <div class="aspect placeholder" '),s.s(s.d("image_assets.background",t,e,1),t,e,0,1133,1220,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("image_asset_src",t,e,1),t,e,0,1154,1199,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' style="padding-bottom:'),s.b(s.v(s.f("aspect_ratio_pct",t,e,0))),s.b(';"')}),t.pop()),s.b(" ")}),t.pop()),s.b("> "),s.s(s.f("href",t,e,1),t,e,0,1259,1593,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<a href="'),s.b(s.v(s.f("href",t,e,0))),s.b('"'),s.s(s.f("new_tab",t,e,1),t,e,0,1289,1307,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target2",t,e,"")),s.b(" ")}),t.pop()),s.b(" "),s.s(s.d("image_assets.background",t,e,1),t,e,0,1348,1397,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.d("image_assets.background.alt_text",t,e,0))),s.b('"')}),t.pop()),s.s(s.d("image_assets.background",t,e,1),t,e,0,1453,1475,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.f("title",t,e,0))),s.b('"')}),t.pop()),s.b(' title="'),s.b(s.v(s.f("title",t,e,0))),s.b('" class="ada-el-focus" '),s.s(s.f("age_gate",t,e,1),t,e,0,1556,1579,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b(">")}),t.pop()),s.b(" "),s.s(s.d("image_assets.background",t,e,1),t,e,0,1631,1975,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("image_asset_src",t,e,1),t,e,0,1652,1954,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="background-image"> '),s.s(s.f("noscript",t,e,1),t,e,1,0,0,"")||(s.b('<img class="no-src" data-src="'),s.b(s.v(s.f("src",t,e,0))),s.b('" alt="'),s.b(s.v(s.d("image_assets.background.alt_text",t,e,0))),s.b('" '),s.b(s.rp("<image_attributes3",t,e,"")),s.b(">")),s.b(" "),s.s(s.f("noscript",t,e,1),t,e,0,1828,1933,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<noscript><img src="'),s.b(s.v(s.f("src",t,e,0))),s.b('" alt="'),s.b(s.v(s.d("image_assets.background.alt_text",t,e,0))),s.b('" '),s.b(s.rp("<image_attributes4",t,e,"")),s.b("></noscript>")}),t.pop()),s.b(" </div> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("href",t,e,1),t,e,0,2013,2017,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("</a>")}),t.pop()),s.b(" "),s.s(s.f("video_options",t,e,1),t,e,0,2045,2093,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<div id="player-'),s.b(s.v(s.f("ref",t,e,0))),s.b("-"),s.b(s.v(s.f("id",t,e,0))),s.b('-container"></div>')}),t.pop()),s.b(" </div> "),s.s(s.d("image_assets.age_classification",t,e,1),t,e,0,2155,2194,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<partials/age_classification_icon5",t,e,"")),s.b(" ")}),t.pop()),s.b(' </div> <div class="details-container'),s.s(s.d("image_assets.logo_title",t,e,1),t,e,0,2295,2304,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" has-logo")}),t.pop()),s.b('" style="'),s.s(s.d("text_settings.width",t,e,1),t,e,0,2365,2489,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||(s.b("max-width: "),s.b(s.v(s.d("text_settings.width",t,e,0))),s.b(";")),s.b(" "),s.s(s.f("mobile",t,e,1),t,e,0,2435,2477,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("max-width: "),s.b(s.v(s.d("text_settings.mobile_width",t,e,0))),s.b(";")}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.d("styles.background_color",t,e,1),t,e,0,2542,2588,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("background-color: "),s.b(s.v(s.d("styles.background_color",t,e,0))),s.b(";")}),t.pop()),s.b('" > '),s.s(s.f("content_config",t,e,1),t,e,0,2639,2951,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("styles",t,e,1),t,e,0,2651,2939,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("display_category_top",t,e,1),t,e,0,2677,2913,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("category_label",t,e,1),t,e,0,2697,2893,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<div class="category"><p class="category-text category-text-top" '),s.s(s.d("styles.description_color",t,e,1),t,e,0,2791,2835,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="color: '),s.b(s.v(s.d("styles.description_color",t,e,0))),s.b(';"')}),t.pop()),s.b(">"),s.b(s.v(s.f("category_label",t,e,0))),s.b("</p></div>")}),t.pop()),s.b(" ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("href",t,e,1),t,e,0,2980,3146,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<a class="skip-link-style ada-el-focus" href="'),s.b(s.v(s.f("href",t,e,0))),s.b('"'),s.s(s.f("new_tab",t,e,1),t,e,0,3047,3065,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target6",t,e,"")),s.b(" ")}),t.pop()),s.b(' title="'),s.b(s.v(s.f("title",t,e,0))),s.b('" '),s.s(s.f("age_gate",t,e,1),t,e,0,3109,3132,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b(">")}),t.pop()),s.b(' <div class="title"'),s.s(s.d("styles.title_color",t,e,1),t,e,0,3197,3235,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' style="color: '),s.b(s.v(s.d("styles.title_color",t,e,0))),s.b('"')}),t.pop()),s.b("> "),s.s(s.d("image_assets.logo_title",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.f("rich_title",t,e,1),t,e,0,3304,3320,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(s.t(s.f("rich_title",t,e,0)))}),t.pop()),s.b(" ")),s.b(" "),s.s(s.d("image_assets.logo_title",t,e,1),t,e,0,3393,4057,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("logo_title_src",t,e,1),t,e,0,3413,4037,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.d("image_assets.logo_title_tag",t,e,1),t,e,0,3446,3479,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("<"),s.b(s.v(s.d("image_assets.logo_title_tag",t,e,0))),s.b(">")}),t.pop()),s.b(" "),s.s(s.f("noscript",t,e,1),t,e,1,0,0,"")||(s.b('<img class="no-src logo-title" data-src="'),s.b(s.v(s.f("src",t,e,0))),s.b('" alt="'),s.b(s.v(s.d("image_assets.logo_title.alt_text",t,e,0))),s.b('" tabindex=0 '),s.s(s.f("half_width",t,e,1),t,e,0,3644,3674,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="width:'),s.b(s.v(s.f("half_width",t,e,0))),s.b('px"')}),t.pop()),s.b(" "),s.b(s.rp("<image_attributes7",t,e,"")),s.b(">")),s.b(" "),s.s(s.f("noscript",t,e,1),t,e,0,3739,3924,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<noscript><img src="'),s.b(s.v(s.f("src",t,e,0))),s.b('" alt="'),s.b(s.v(s.d("image_assets.logo_title.alt_text",t,e,0))),s.b('" class="logo-title" '),s.s(s.f("half_width",t,e,1),t,e,0,3845,3875,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="width:'),s.b(s.v(s.f("half_width",t,e,0))),s.b('px"')}),t.pop()),s.b(" "),s.b(s.rp("<image_attributes8",t,e,"")),s.b("></noscript>")}),t.pop()),s.b(" "),s.s(s.d("image_assets.logo_title_tag",t,e,1),t,e,0,3970,4004,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("</"),s.b(s.v(s.d("image_assets.logo_title_tag",t,e,0))),s.b(">")}),t.pop()),s.b(" ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" </div> "),s.s(s.f("href",t,e,1),t,e,0,4102,4106,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("</a>")}),t.pop()),s.b(" "),s.s(s.f("description",t,e,1),t,e,0,4132,4348,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="desc"'),s.s(s.d("styles.description_color",t,e,1),t,e,0,4179,4222,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="color: '),s.b(s.v(s.d("styles.description_color",t,e,0))),s.b('"')}),t.pop()),s.b("> "),s.s(s.f("rich_desc",t,e,1),t,e,0,4267,4282,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(s.t(s.f("rich_desc",t,e,0)))}),t.pop()),s.b(" "),s.s(s.f("rich_desc",t,e,1),t,e,1,0,0,"")||s.b(s.v(s.f("description",t,e,0))),s.b(" </div> ")}),t.pop()),s.b(" "),s.s(s.d("buttons.length",t,e,1),t,e,0,4384,4880,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<ul class="link-container"> '),s.s(s.f("buttons",t,e,1),t,e,0,4424,4862,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("<li> "),s.s(s.f("href",t,e,1),t,e,0,4438,4683,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <a class="link ada-el-focus skip-link-style'),s.s(s.d("config.styles.button_link_style",t,e,1),t,e,0,4518,4536,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" button blue large")}),t.pop()),s.b('" href="'),s.b(s.v(s.f("href",t,e,0))),s.b('"'),s.s(s.f("new_tab",t,e,1),t,e,0,4601,4619,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target9",t,e,"")),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("age_gate",t,e,1),t,e,0,4645,4668,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b("> ")}),t.pop()),s.b(" <span"),s.s(s.f("href",t,e,1),t,e,1,0,0,"")||s.b(' class="link"'),s.s(s.f("text_color_override",t,e,1),t,e,0,4753,4792,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' style="color: '),s.b(s.v(s.f("text_color_override",t,e,0))),s.b('"')}),t.pop()),s.b(">"),s.b(s.v(s.f("title",t,e,0))),s.b("</span> "),s.s(s.f("href",t,e,1),t,e,0,4843,4847,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("</a>")}),t.pop()),s.b(" </li>")}),t.pop()),s.b(" </ul>")}),t.pop()),s.b(" "),s.s(s.f("cta_links_present",t,e,1),t,e,0,4922,9361,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("cta_links",t,e,1),t,e,0,4937,9346,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="cta-items-container"> '),s.s(s.f("cta_is_text",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.d("primary_button.cta_present",t,e,1),t,e,0,5020,7089,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("primary_button",t,e,1),t,e,0,5040,7069,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="cta-button"> <span class="cta-item btn-container"> '),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,5153,5195,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<span class="btn-override primary"></span>')}),t.pop()),s.b(' <a href="'),s.b(s.v(s.f("href",t,e,0))),s.b('" class="button large blue cta-link ada-el-focus '),s.b(s.v(s.f("button_style",t,e,0))),s.b(" "),s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,5366,5376,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("center-btn")}),t.pop()),s.b('" style="'),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||(s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,5472,5578,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("background-color:"),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b(";border-color:"),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b(";")}),t.pop()),s.s(s.f("desktop_text_color",t,e,1),t,e,0,5639,5668,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("color:"),s.b(s.v(s.f("desktop_text_color",t,e,0))),s.b(";")}),t.pop())),s.b(" "),s.s(s.f("mobile",t,e,1),t,e,0,5714,5964,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.f("computed_mobile_background_color",t,e,1),t,e,0,5751,5855,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("background-color:"),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b(";border-color:"),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b(";")}),t.pop()),s.s(s.f("mobile_text_color",t,e,1),t,e,0,5914,5942,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("color:"),s.b(s.v(s.f("mobile_text_color",t,e,0))),s.b(";")}),t.pop())}),t.pop()),s.b('" '),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,6027,6089,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-color="'),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("desktop_background_hover_color",t,e,1),t,e,0,6163,6228,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-hover-color="'),s.b(s.v(s.f("desktop_background_hover_color",t,e,0))),s.b('"')}),t.pop()),s.b(" ")),s.b(" "),s.s(s.f("mobile",t,e,1),t,e,0,6287,6557,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("computed_mobile_background_color",t,e,1),t,e,0,6325,6386,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-color="'),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("mobile_background_hover_color",t,e,1),t,e,0,6458,6522,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-hover-color="'),s.b(s.v(s.f("mobile_background_hover_color",t,e,0))),s.b('"')}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("new_tab",t,e,1),t,e,0,6581,6599,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target10",t,e,"")),s.b(" ")}),t.pop()),s.b(' role="button" '),s.s(s.f("screenreader_title",t,e,1),t,e,0,6649,6684,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.f("screenreader_title",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("age_gate",t,e,1),t,e,0,6721,6744,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b("> "),s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,6797,6918,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<span class="btn-text" '),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||s.s(s.f("desktop_text_color",t,e,1),t,e,0,6854,6883,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("color:"),s.b(s.v(s.f("desktop_text_color",t,e,0))),s.b(";")}),t.pop()),s.b(">")}),t.pop()),s.b(" "),s.b(s.v(s.f("text",t,e,0))),s.b(" "),s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,7004,7011,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("</span>")}),t.pop()),s.b("</a> </span> </div> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.d("secondary_button.cta_present",t,e,1),t,e,0,7154,8702,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("secondary_button",t,e,1),t,e,0,7176,8680,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="cta-button"> <span class="cta-item"> <a href="'),s.b(s.v(s.f("href",t,e,0))),s.b('" class="button large blue cta-link ada-el-focus '),s.b(s.v(s.f("button_style",t,e,0))),s.b('" style="'),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||(s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,7366,7472,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("background-color:"),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b(";border-color:"),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b(";")}),t.pop()),s.s(s.f("desktop_text_color",t,e,1),t,e,0,7533,7562,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("color:"),s.b(s.v(s.f("desktop_text_color",t,e,0))),s.b(";")}),t.pop())),s.b(" "),s.s(s.f("mobile",t,e,1),t,e,0,7608,7858,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.f("computed_mobile_background_color",t,e,1),t,e,0,7645,7749,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("background-color:"),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b(";border-color:"),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b(";")}),t.pop()),s.s(s.f("mobile_text_color",t,e,1),t,e,0,7808,7836,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("color:"),s.b(s.v(s.f("mobile_text_color",t,e,0))),s.b(";")}),t.pop())}),t.pop()),s.b('" '),s.s(s.f("mobile",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.f("computed_desktop_background_color",t,e,1),t,e,0,7921,7983,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-color="'),s.b(s.v(s.f("computed_desktop_background_color",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("desktop_background_hover_color",t,e,1),t,e,0,8057,8122,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-hover-color="'),s.b(s.v(s.f("desktop_background_hover_color",t,e,0))),s.b('"')}),t.pop()),s.b(" ")),s.b(" "),s.s(s.f("mobile",t,e,1),t,e,0,8181,8451,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("computed_mobile_background_color",t,e,1),t,e,0,8219,8280,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-color="'),s.b(s.v(s.f("computed_mobile_background_color",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("mobile_background_hover_color",t,e,1),t,e,0,8352,8416,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' data-background-hover-color="'),s.b(s.v(s.f("mobile_background_hover_color",t,e,0))),s.b('"')}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("new_tab",t,e,1),t,e,0,8475,8493,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target11",t,e,"")),s.b(" ")}),t.pop()),s.b(' role="button" '),s.s(s.f("screenreader_title",t,e,1),t,e,0,8543,8578,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.f("screenreader_title",t,e,0))),s.b('"')}),t.pop()),s.b(" "),s.s(s.f("age_gate",t,e,1),t,e,0,8615,8638,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b(">"),s.b(s.v(s.f("text",t,e,0))),s.b("</a> </span> </div> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" ")),s.b(" "),s.s(s.f("cta_is_text",t,e,1),t,e,0,8769,9322,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.d("links.length",t,e,1),t,e,0,8787,9304,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <ul class="link-container"> '),s.s(s.f("links",t,e,1),t,e,0,8826,9287,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <li class="border-separator"> '),s.s(s.f("href",t,e,1),t,e,0,8866,9111,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <a href="'),s.b(s.v(s.f("href",t,e,0))),s.b('" class="link ada-el-focus skip-link-style" '),s.s(s.d("cta_links.link_color",t,e,1),t,e,0,8953,8993,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="color: '),s.b(s.v(s.d("cta_links.link_color",t,e,0))),s.b(';"')}),t.pop()),s.b(" "),s.s(s.f("new_tab",t,e,1),t,e,0,9031,9047,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(s.rp("<href_target12",t,e,""))}),t.pop()),s.b(" "),s.s(s.f("age_gate",t,e,1),t,e,0,9073,9096,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')}),t.pop()),s.b("> ")}),t.pop()),s.b(" <span"),s.s(s.f("href",t,e,1),t,e,1,0,0,"")||s.b(' class="link"'),s.b(" "),s.s(s.f("screenreader_title",t,e,1),t,e,0,9181,9216,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.f("screenreader_title",t,e,0))),s.b('"')}),t.pop()),s.b(">"),s.b(s.v(s.f("text",t,e,0))),s.b("</span> "),s.s(s.f("href",t,e,1),t,e,0,9265,9271,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" </a> ")}),t.pop()),s.b(" </li> ")}),t.pop()),s.b(" </ul> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" </div> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" "),s.s(s.f("show_retailers_cta",t,e,1),t,e,0,9407,9896,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <ul class="retailers-cta-container link-container"> '),s.s(s.f("retailers_configs",t,e,1),t,e,0,9482,9867,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <li class="retailers-cta-item border-separator'),s.s(s.f("collapse_links_on_mobile",t,e,1),t,e,1,0,0,"")||s.b(" display-expanded"),s.b('"> <span class="retailers-cta-link ada-el-focus" data-index="'),s.b(s.v(s.f("index",t,e,0))),s.b('" tabindex="0" role="button"> <span>'),s.b(s.v(s.f("cta_text",t,e,0))),s.b('</span> <span class="retailer-cta-arrow"></span> </span> <div class="retailers-cta-details"> '),s.b(s.rp("<partials/flex_grid_retailers_list13",t,e,"")),s.b(" </div> </li> ")}),t.pop()),s.b(" </ul> ")}),t.pop()),s.b(" "),s.b(s.rp("<partials/terms_and_conditions14",t,e,"")),s.b(" "),s.s(s.f("content_config",t,e,1),t,e,0,9974,10290,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("styles",t,e,1),t,e,0,9986,10278,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("display_category_top",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.f("category_label",t,e,1),t,e,0,10032,10232,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('<div class="category"><p class="category-text category-text-default" '),s.s(s.d("styles.description_color",t,e,1),t,e,0,10130,10174,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('style="color: '),s.b(s.v(s.d("styles.description_color",t,e,0))),s.b(';"')}),t.pop()),s.b(">"),s.b(s.v(s.f("category_label",t,e,0))),s.b("</p></div>")}),t.pop()),s.b(" ")),s.b(" ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" </div> "),s.s(s.f("show_retailers_overlay",t,e,1),t,e,0,10344,10694,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("retailers_configs",t,e,1),t,e,0,10367,10671,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class=" retailers-overlay '),s.b(s.v(s.f("overlay_text_alignment",t,e,0))),s.b(" "),s.s(s.f("hide_overlay_separator",t,e,1),t,e,0,10453,10475,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b("hide-overlay-separator")}),t.pop()),s.b('" data-index="'),s.b(s.v(s.f("index",t,e,0))),s.b('"> <button class="close-icon ada-el-focus" aria-label="'),s.b(s.v(s.d("translations.close_icon_label",t,e,0))),s.b('"></button> '),s.b(s.rp("<partials/flex_grid_retailers_list15",t,e,"")),s.b(" </div> ")}),t.pop()),s.b(" ")}),t.pop()),s.b(" </div> </div> </li> ")}),t.pop()),s.b(" ")}),t.pop()),o.b(" </ul> </div>"),o.fl()},partials:{"<module_header0":{name:"module_header",partials:{},subs:{}},"<partials/cto_link_attributes1":{name:"partials/cto_link_attributes",partials:{},subs:{}},"<href_target2":{name:"href_target",partials:{},subs:{}},"<image_attributes3":{name:"image_attributes",partials:{},subs:{}},"<image_attributes4":{name:"image_attributes",partials:{},subs:{}},"<partials/age_classification_icon5":{name:"partials/age_classification_icon",partials:{},subs:{}},"<href_target6":{name:"href_target",partials:{},subs:{}},"<image_attributes7":{name:"image_attributes",partials:{},subs:{}},"<image_attributes8":{name:"image_attributes",partials:{},subs:{}},"<href_target9":{name:"href_target",partials:{},subs:{}},"<href_target10":{name:"href_target",partials:{},subs:{}},"<href_target11":{name:"href_target",partials:{},subs:{}},"<href_target12":{name:"href_target",partials:{},subs:{}},"<partials/flex_grid_retailers_list13":{name:"partials/flex_grid_retailers_list",partials:{},subs:{}},"<partials/terms_and_conditions14":{name:"partials/terms_and_conditions",partials:{},subs:{}},"<partials/flex_grid_retailers_list15":{name:"partials/flex_grid_retailers_list",partials:{},subs:{}}},subs:{}}),Whiskers("partials.cto_link_attributes",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('data-cto-title="'),o.b(o.v(o.d("cto_attrs.title",t,e,0))),o.b('"'),o.s(o.d("cto_attrs.category_label",t,e,1),t,e,0,65,114,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(' data-cto-category="'),s.b(s.v(s.d("cto_attrs.category_label",t,e,0))),s.b('"')}),t.pop()),o.fl()},partials:{},subs:{}}),Whiskers("partials.flex_grid_retailers_list",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('<ul class="retailers-group-container" data-index="'),o.b(o.v(o.f("index",t,e,0))),o.b('"> '),o.s(o.f("retailer_links",t,e,1),t,e,0,81,502,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(' <li class="retailers-group-item"> '),s.s(s.f("link_group_title",t,e,1),t,e,0,137,198,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <h2 class="retailers-group-title">'),s.b(s.v(s.f("link_group_title",t,e,0))),s.b("</h2> ")}),t.pop()),s.b(' <ul class="retailers-group-links link-container"> '),s.s(s.f("link_group_links",t,e,1),t,e,0,291,468,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <li class="retailers-group-link border-separator"> <a class="link ada-el-focus skip-link-style" href="'),s.b(s.v(s.f("link",t,e,0))),s.b('"'),s.s(s.f("new_tab",t,e,1),t,e,0,415,433,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" "),s.b(s.rp("<href_target0",t,e,"")),s.b(" ")}),t.pop()),s.b("> "),s.b(s.v(s.f("title",t,e,0))),s.b(" </a> </li> ")}),t.pop()),s.b(" </ul> </li> ")}),t.pop()),o.b(" </ul>"),o.fl()},partials:{"<href_target0":{name:"href_target",partials:{},subs:{}}},subs:{}}),Whiskers("partials.terms_and_conditions",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.s(o.d("terms_conditions_link.title",t,e,1),t,e,0,32,274,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("terms_conditions_link",t,e,1),t,e,0,59,247,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(' <div class="content-footer '),s.s(s.f("bottom_position",t,e,1),t,e,0,107,136,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" content-"),s.b(s.v(s.f("bottom_position",t,e,0))),s.b(" ")}),t.pop()),s.b('"> <p class="cta-links-container" data-cta-type="link"> '),s.b(s.rp("<partials/cta_link0",t,e,"")),s.b(" </p> </div> ")}),t.pop()),s.b(" ")}),t.pop()),o.fl()},partials:{"<partials/cta_link0":{name:"partials/cta_link",partials:{},subs:{}}},subs:{}}),Whiskers("partials.cta_link",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('<span class="cta-item" '),o.s(o.d("link_style_overrides.hover_color",t,e,1),t,e,0,60,169,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(' style="color:'),s.b(s.v(s.d("link_style_overrides.hover_color",t,e,0))),s.b(";border-bottom-color:"),s.b(s.v(s.d("link_style_overrides.hover_color",t,e,0))),s.b('" ')}),t.pop()),o.b("> <span "),o.s(o.d("link_style_overrides.text_color",t,e,1),t,e,0,250,357,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(' style="color:'),s.b(s.v(s.d("link_style_overrides.text_color",t,e,0))),s.b(";border-bottom-color:"),s.b(s.v(s.d("link_style_overrides.text_color",t,e,0))),s.b('" ')}),t.pop()),o.b('> <a href="'),o.b(o.v(o.f("href",t,e,0))),o.b('" class="cta-link '),o.s(o.d("config_options.open_youtube_lightbox",t,e,1),t,e,0,471,513,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.s(s.f("youtube_id",t,e,1),t,e,0,486,498,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" youtube-url")}),t.pop())}),t.pop()),o.b(" "),o.s(o.d("config_options.open_native_video_lightbox",t,e,1),t,e,0,601,644,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.s(s.f("video_page",t,e,1),t,e,0,616,629,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b(" native-video")}),t.pop())}),t.pop()),o.b(' " '),o.s(o.f("new_tab",t,e,1),t,e,0,705,1051,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("youtube_id",t,e,1),t,e,0,721,819,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.d("config_options.open_youtube_lightbox",t,e,1),t,e,1,0,0,"")||s.b(s.rp("<href_target0",t,e,""))}),t.pop()),s.b(" "),s.s(s.f("video_page",t,e,1),t,e,0,850,958,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.d("config_options.open_native_video_lightbox",t,e,1),t,e,1,0,0,"")||s.b(s.rp("<href_target1",t,e,""))}),t.pop()),s.b(" "),s.s(s.f("youtube_id",t,e,1),t,e,1,0,0,"")||s.s(s.f("video_page",t,e,1),t,e,1,0,0,"")||s.b(s.rp("<href_target2",t,e,"")),s.b(" ")}),t.pop()),o.b(" "),o.s(o.f("screenreader_title",t,e,1),t,e,0,1087,1122,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b('aria-label="'),s.b(s.v(s.f("screenreader_title",t,e,0))),s.b('"')}),t.pop()),o.b(" "),o.s(o.f("age_gate",t,e,1),t,e,0,1159,1568,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(" "),s.s(s.f("retailers_group",t,e,1),t,e,1,0,0,"")||(s.b(" "),s.s(s.f("youtube_id",t,e,1),t,e,0,1196,1301,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.d("config_options.open_youtube_lightbox",t,e,1),t,e,1,0,0,"")||(s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"'))}),t.pop()),s.b(" "),s.s(s.f("video_page",t,e,1),t,e,0,1332,1447,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.s(s.d("config_options.open_native_video_lightbox",t,e,1),t,e,1,0,0,"")||(s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"'))}),t.pop()),s.b(" "),s.s(s.f("youtube_id",t,e,1),t,e,1,0,0,"")||s.s(s.f("video_page",t,e,1),t,e,1,0,0,"")||(s.b('data-age="'),s.b(s.v(s.f("age_gate",t,e,0))),s.b('"')),s.b(" ")),s.b(" ")}),t.pop()),o.b(" "),o.s(o.d("config_options.open_youtube_lightbox",t,e,1),t,e,0,1623,1685,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.s(s.f("youtube_id",t,e,1),t,e,0,1638,1670,"{{ }}")&&(s.rs(t,e,function(t,e,s){s.b('data-youtube-id="'),s.b(s.v(s.f("youtube_id",t,e,0))),s.b('"')}),t.pop())}),t.pop()),o.b(" >"),o.b(o.v(o.f("title",t,e,0))),
o.b("</a> </span> </span>"),o.fl()},partials:{"<href_target0":{name:"href_target",partials:{},subs:{}},"<href_target1":{name:"href_target",partials:{},subs:{}},"<href_target2":{name:"href_target",partials:{},subs:{}}},subs:{}}),Whiskers("partials.age_classification_icon",{code:function(t,e,s){"use strict";var o=this;return o.b(s=s||""),o.b('<div class="age-classification-icon badge '),o.s(o.f("image_assets",t,e,1),t,e,0,59,195,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b(s.v(s.f("age_classification_position",t,e,0))),s.b(" "),s.s(s.f("display_age_classification_on_playback",t,e,1),t,e,1,0,0,"")||s.b("hide-on-video-play")}),t.pop()),o.b('"> <img '),o.s(o.f("noscript",t,e,1),t,e,1,0,0,"")||(o.b('data-src="'),o.b(o.v(o.d("image_assets.age_classification.icon.src",t,e,0))),o.b('"')),o.b(" "),o.s(o.f("noscript",t,e,1),t,e,0,315,365,"{{ }}")&&(o.rs(t,e,function(t,e,s){s.b('src="'),s.b(s.v(s.d("image_assets.age_classification.icon.src",t,e,0))),s.b('"')}),t.pop()),o.b(' class="'),o.s(o.f("noscript",t,e,1),t,e,1,0,0,"")||o.b("no-src"),o.b('" alt="'),o.b(o.v(o.d("image_assets.age_classification.icon.alt_text",t,e,0))),o.b('"/> </div>'),o.fl()},partials:{},subs:{}}),function(t){"use strict";function e(t,e){return t&&(t[e]||d.first(d.values(t)))}function s(){return a.Resize.width()>=l.midHigh?"desktop":"mobile"}function o(t){return function(e){var s=this.$(e.currentTarget),o=s.data("backgroundColor"),i=s.data("backgroundHoverColor");if(o&&i){var a={backgroundColor:o,backgroundHoverColor:i};s.css({backgroundColor:a[t]})}}}var i=t.Disney,a=t.Backbone,r=t.Grill,n=t.Whiskers,l=i.Style.breakpoints,b=l.midHigh.toString(),c=t.jQuery,d=t._,p=13,f=27,u=o("backgroundColor"),_=o("backgroundHoverColor"),g=r.ModuleView.extend({breakpoints:b,template:n.modules.flex_grid,style_classes:["flex-grid-view","skip-bottom-border","skip-top-border"],required_template_sets:["module_header","images","links"],included_components:{"partials/cto_link_attributes":n.partials.cto_link_attributes,"partials/flex_grid_retailers_list":n.partials.flex_grid_retailers_list,"partials/cta_link":n.partials.cta_link,"partials/terms_and_conditions":n.partials.terms_and_conditions,"partials/age_classification_icon":n.partials.age_classification_icon},events:{"click .item .video-controls-container":function(t){t.stopPropagation(),t.preventDefault();var e=this.$(t.target).closest("li").index(),s=this.model.get("data");if(s&&s[e]){var o=this.videoPlayers[this.getPlayerId(s[e].id)];o&&o.startVideo()}},"mouseover .cta-button .button":_,"mouseout .cta-button .button":u,"focus .cta-button .button":_,"focusout .cta-button .button":u,"click .retailers-cta-link":function(t){this.openOverlay(t.currentTarget)},"click .close-icon":function(t){this.closeOverlay(t.currentTarget)},"keyup .retailers-cta-link":function(t){if(t.keyCode===p){var e=c(t.currentTarget),s=e.data("index"),o=e.closest(".item-container"),i=o.find(".retailers-overlay[data-index="+s+"]"),a=i.find(".close-icon"),r=this.$el.find(".retailers-cta-link.active"),n=this.$el.find(".retailers-overlay.active"),l=this.$el.find(".item-container.retailers-overlay-active");e[0]!==r[0]&&(r.removeClass("active"),n.removeClass("active"),l.removeClass("retailers-overlay-active")),this.openOverlay(t.currentTarget),a.trigger("focus")}},"keyup .close-icon":function(t){if(t.keyCode===p){var e=c(t.currentTarget),s=e.closest(".item").find(".retailers-cta-link").first();this.closeOverlay(t.currentTarget),s.trigger("focus")}},"keyup .retailers-overlay":function(t){if(t.keyCode===f){var e=c(t.currentTarget),s=e.closest(".item").find(".retailers-cta-link").first();this.closeOverlay(t.currentTarget),s.trigger("focus")}}},openOverlay:function(e){var s=c(e),o=s.data("index");if(s.addClass("active"),this.showRetailersOverlay()){var i=c(e).closest(".item-container"),a=i.find(".retailers-overlay[data-index="+o+"]");a.addClass("active"),i.addClass("retailers-overlay-active");var r=function(e){var n=c(e.target).closest(".retailers-cta-link"),l=n&&n[0]===s[0],b=c(e.target).closest(".item").find(".retailers-overlay[data-index="+o+"]"),d=b&&b[0]===a[0];l||d||!a.hasClass("active")||(s.hasClass("active")&&s.removeClass("active"),a.removeClass("active"),i.removeClass("retailers-overlay-active"),t.removeEventListener("click",r))};t.addEventListener("click",r)}else{c(e).closest(".retailers-cta-item").toggleClass("active")}},closeOverlay:function(t){var e=c(t).closest(".retailers-overlay"),s=c(t).closest(".item-container");e.removeClass("active"),s.removeClass("retailers-overlay-active")},showRetailersOverlay:function(){return"mobile"!==s()},initialize:function(e){this.options=e||{},this.model.get("data").some(function(t){return t.video})&&(this.assets={scripts:["https://static-mh.content.disney.io/matterhorn/assets/videoplayer-ff11179f50e4.js"]}),c(t).on("resize",d.debounce(this.adjustCTALinkSeparators.bind(this),100))},resize:function(){this.videoPlayerIsActive||(this.render(),i.LazyLoad.resetModule(this))},render:function(){this.$el.loadLazyImages();var t=s(),o=d.extend(this.model,{image_asset_src:function(){return e(this,t)},logo_title_src:function(){var s=e(this,t);return d.extend(s,{src:i.LumiereHelpers.imgSrc(s,{exact_size:!0})})},translations:this.model.get("translations"),mobile:"mobile"===t,show_retailers_overlay:this.showRetailersOverlay()});this.$el.html(this.template.render(o,this.ctx_additions())),this.initVideoPlayer(),this.adjustCTALinkSeparators()},adjustCTALinkSeparators:function(){this.$el.find(".link-container").each(function(){var t;c(this).find("li").each(function(){var e=c(this),s=e.offset().top;(t&&t.offset().top)<s?t.removeClass("border-separator"):t&&t.length>0&&t.addClass("border-separator"),t=e}),c(this).find("li").last().removeClass("border-separator")})},videoPlayers:{},getPlayerId:function(t){return"player-"+this.model.get("ref")+"-"+t},initVideoPlayer:function(){var t=this.$(".item");d.each(this.model.get("data"),function(e,s){if(!d.isEmpty(e&&e.video_options)){var o=t.eq(s),i=this.getPlayerId(e.id),n=new r.FlexInlineVideoPlayer({el:this.$("#"+i+"-container"),model:new a.Model({data:e,playerId:i,$videoParent:o,translations:this.model.get("translations")})});if(this.videoPlayers[i]=n,n.player){var l=this;this.listenTo(n,"video:playing",function(){l.videoPlayerIsActive=!0}),this.listenTo(n,"video:playComplete",function(){l.videoPlayerIsActive=!1})}}}.bind(this))}});g.register("flex_grid",{initialize:function(t){this.model.attributes.name="EMEA Feature Grid",g.prototype.initialize.call(this,t)}}),g.register("flex_grid_card",{style_classes:["flex-grid-view","skip-bottom-border","skip-top-border","item-titles-below"],showRetailersOverlay:function(){return!0},initialize:function(t){this.model.attributes.name="EMEA Card Grid",g.prototype.initialize.call(this,t)}})}(this);