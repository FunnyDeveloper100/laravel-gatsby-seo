(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(0),i=a.n(o),l=a(161),s=a(240),c=(a(152),a(167)),m=a(168),d=a(163),p=a(207),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={scale:1},a}return r()(t,e),t.prototype.render=function(){var e=this.props.project,t=e.imageScale?e.imageScale:1,a="",n="";if("home-video"!=e.slug){if(e.medias.length>0){var r={backgroundImage:"url("+e.medias[0].file.url+")",transform:"scale("+t+")"},o={backgroundImage:"url("+e.medias[1].file.url+")",transform:"scale("+t+")"};switch(e.model){case"Screen":a=i.a.createElement("div",{className:"image image--fullpage landscape",style:r}),n=i.a.createElement("div",{className:"image image--fullpage portrait",style:o});break;case"Width":a=i.a.createElement("div",{className:"image image--width landscape",style:r}),n=i.a.createElement("div",{className:"image image--width portrait",style:o});break;case"Height":a=i.a.createElement("div",{className:"image image--height landscape",style:r}),n=i.a.createElement("div",{className:"image image--height portrait",style:o})}}}else{var s="swiper--video swiper--video-"+e.model;if(e.medias){var c=e.medias[0].file;a=i.a.createElement("div",{className:s},i.a.createElement("div",{className:"video video--iframe"},i.a.createElement("video",{className:"video-mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0},i.a.createElement("source",{src:c.url,type:"video/mp4"}),"Your browser does not support the video tag.")))}else a=i.a.createElement("div",{className:s},i.a.createElement("div",{className:"video video--iframe vimeo"},i.a.createElement(p.a,{className:"video__wrap",video:e.embedVimeo,muted:!1,autoplay:!0,loop:!0,showTitle:!1,showByline:!1,showPortrait:!1})))}return i.a.createElement("div",{className:"swiper-slide"},i.a.createElement(l.a,{to:"/projects"},a,n))},t}(o.Component),f=a(176),g=a(184),h=a.n(g);a(153);a.d(t,"query",function(){return v});var w=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props.data.allContentfulGeneralOptions.edges[0].node;if(e.hideHomepageGeneral)return window.location.pathname="/projects";f.isMobile||h()(".nano").length>0&&h()(".nano").nanoScroller(),setTimeout(function(){h()(".footer").css({opacity:"1"})},300),h()(document).ready(function(){h()("head").append("\x3c!-- Google Tag Manager --\x3e\n            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-WDN875T');<\/script>\n            \x3c!-- End Google Tag Manager --\x3e"),h()(document.body).prepend('\x3c!-- Google Tag Manager (noscript) --\x3e\n            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN875T"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n            \x3c!-- End Google Tag Manager (noscript) --\x3e')}),document.body.style.backgroundColor=e.backgroundColorGeneral?e.backgroundColorGeneral:d.a},a.componentDidUpdate=function(){this.buildSwiper()},a.buildSwiper=function(){this.swiper=new s.a(".swiper-container-",{direction:"vertical",initialSlide:0,speed:1400,slidesPerView:1,loop:!1,mousewheel:{invert:!0,forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!1}}),window.swiper=this.swiper},a.nextSwiper=function(){void 0!==window.swiper&&window.swiper.slideNext()},a.render=function(){var e=this,t=this.props.data.allContentfulGeneralOptions.edges[0].node,a=this.props.data.allContentfulSection.edges.map(function(t,a){return i.a.createElement(u,{key:a,index:a,project:t.node,nextSwiper:e.nextSwiper})}),n={head_text:t.headerOptionGeneral.headerOptionGeneral?t.headerOptionGeneral.headerOptionGeneral:d.k,loading_bar_color:t.loadingBarColorGeneral?t.loadingBarColorGeneral:d.d,meta_title:t.metaTitleGeneral?t.metaTitleGeneral:d.h,meta_description:t.metaDescriptionGeneral.metaDescriptionGeneral?t.metaDescriptionGeneral.metaDescriptionGeneral:d.e,meta_keywords:t.metaKeywordsGeneral.metaKeywordsGeneral?t.metaKeywordsGeneral.metaKeywordsGeneral:d.f,meta_robots:t.metaRobotsGeneral?t.metaRobotsGeneral:d.g,primary_color:t.primaryColorGeneral?t.primaryColorGeneral:d.i,second_color:t.secondColorGeneral?t.secondColorGeneral:d.j,background_color:t.backgroundColorGeneral?t.backgroundColorGeneral:d.a,footer_color:t.footerTextColorGeneral?t.footerTextColorGeneral:d.b,footer_text:t.footerOptionGeneral.footerOptionGeneral?t.footerOptionGeneral.footerOptionGeneral:d.c},r={title:n.meta_title,description:n.meta_description,keywords:n.meta_keywords,robots:n.meta_robots},o={color:n.primary_color},s=t.hideHeaderGeneral?"hideheader":"",p=t.hideFooterGeneral?"hidefooter":"";return i.a.createElement("div",{className:"home-screen"},i.a.createElement(c.a,r),i.a.createElement("div",{className:"section-content-menu "+s},i.a.createElement("ul",{className:"menu-first"},i.a.createElement("li",{className:"active"},i.a.createElement("h1",null,i.a.createElement(l.a,{to:"/projects",style:o},n.head_text))))),i.a.createElement("div",{className:"home-screen--slide"},i.a.createElement("div",{className:"swiper-container swiper-container-outer swiper-container-vertical"},i.a.createElement("div",{className:"swiper-wrapper"},a))),i.a.createElement("div",{className:"section-content--footer "+p},i.a.createElement(m.a,{data_config:n,color:n.footer_color})),i.a.createElement("style",null,"\n          .section-content--menu > ul > li > a:hover {color: "+n.color_hover+" !important}\n          .footer a:hover {color: "+n.color_hover+" !important}\n          .footer a {color: "+n.url_color+"}\n          .project-layout--right {color: "+n.primary_color+"}\n          .project-list a:hover ~ .desc a{color: "+o.color+" !important}\n          .project-list .desc a:hover{color: "+n.primary_color+" !important}\n          "))},t}(o.Component),v=(t.default=w,"2594881597")},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(35),s=a.n(l);a.d(t,"a",function(){return s.a});a(162),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},162:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},163:function(e,t,a){"use strict";a.d(t,"k",function(){return n}),a.d(t,"l",function(){return r}),a.d(t,"i",function(){return o}),a.d(t,"j",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return s}),a.d(t,"h",function(){return c}),a.d(t,"g",function(){return m}),a.d(t,"e",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return f});var n="lost art",r="https://www.lost-art.com",o="#000",i="#9e9e9e",l="#f5f8fa",s="#9e9e9e",c="Lost art - Projects",m="INDEX,FOLLOW",d="Lost art - Projects",p="Lost art",u="Ⓒ footer is updatedable in cms <a href = 'http://lost-art.com/'>link</a> ip sum",f="#212529"},165:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},167:function(e,t,a){"use strict";var n=a(5),r=a.n(n),o=a(0),i=a.n(o),l=a(177),s=a(163),c=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l.Helmet,{script:[{type:"text/javascript",innerHTML:"\x3c!-- Google Tag Manager --\x3e\n        function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-WDN875T');\n        \x3c!-- End Google Tag Manager --\x3e"}]},i.a.createElement("title",null,this.props.title||""),i.a.createElement("meta",{name:"robots",content:this.props.robots||""}),i.a.createElement("meta",{name:"googlebot",content:this.props.robots||""}),i.a.createElement("meta",{name:"msnbot",content:this.props.robots||""}),i.a.createElement("meta",{name:"description",content:this.props.description||""}),i.a.createElement("meta",{name:"keywords",content:this.props.keywords||""}),i.a.createElement("meta",{name:"author",content:"Lost art"}),i.a.createElement("meta",{name:"revisit-after",content:"1 days"}),i.a.createElement("link",{rel:"canonical",href:s.l+(this.props.location||"")}))},t}(o.Component);t.a=c},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(161),i=a(169),l=a.n(i);t.a=function(e){var t=e.data_config,a=e.japan,n=e.color,i={color:n||t.footer_color};return a?r.a.createElement("div",{className:"footer",style:i},r.a.createElement("div",null,r.a.createElement("span",null,t.footer_text?l()(t.footer_text):""))):r.a.createElement("div",{className:"footer",style:i},r.a.createElement("div",null,r.a.createElement("span",{className:"only_mobile_inline m-r-10"},r.a.createElement(o.a,{to:"/page/bio-in-japanese"},"日本語")),r.a.createElement("span",null,t.footer_text?l()(t.footer_text):"")))}},182:function(e,t){},183:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-a555db173344e05bd69c.js.map