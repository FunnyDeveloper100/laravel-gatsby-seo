(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{216:function(e,t,a){"use strict";a.r(t);var r=a(5),o=a.n(r),n=a(0),i=a.n(n),l=a(222),c=a(240),s=(a(213),a(226)),m=a(227),d=a(224),p=a(233),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={scale:1},a}return o()(t,e),t.prototype.render=function(){var e=this.props.project,t=e.imageScale?e.imageScale:1,a="",r="";if("home-video"!=e.slug){if(e.medias.length>0){var o={backgroundImage:"url("+e.medias[0].file.url+")",transform:"scale("+t+")"},n={backgroundImage:"url("+e.medias[1].file.url+")",transform:"scale("+t+")"};switch(e.model){case"Screen":a=i.a.createElement("div",{className:"image image--fullpage landscape",style:o}),r=i.a.createElement("div",{className:"image image--fullpage portrait",style:n});break;case"Width":a=i.a.createElement("div",{className:"image image--width landscape",style:o}),r=i.a.createElement("div",{className:"image image--width portrait",style:n});break;case"Height":a=i.a.createElement("div",{className:"image image--height landscape",style:o}),r=i.a.createElement("div",{className:"image image--height portrait",style:n})}}}else{var c="swiper--video swiper--video-"+e.model;if(e.medias){var s=e.medias[0].file;a=i.a.createElement("div",{className:c},i.a.createElement("div",{className:"video video--iframe"},i.a.createElement("video",{className:"video-mp4",autoPlay:!0,loop:!0,playsInline:!0,muted:!0},i.a.createElement("source",{src:s.url,type:"video/mp4"}),"Your browser does not support the video tag.")))}else a=i.a.createElement("div",{className:c},i.a.createElement("div",{className:"video video--iframe vimeo"},i.a.createElement(p.a,{className:"video__wrap",video:e.embedVimeo,muted:!1,autoplay:!0,loop:!0,showTitle:!1,showByline:!1,showPortrait:!1})))}return i.a.createElement("div",{className:"swiper-slide"},i.a.createElement(l.a,{to:"/projects/"},a,r))},t}(n.Component),f=a(228),h=a(230),v=a.n(h);a(214);a.d(t,"query",function(){return g});var w=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props.data.allContentfulGeneralOptions.edges[0].node;if(e.hideHomepageGeneral)return window.location.pathname="/projects";f.isMobile||v()(".nano").length>0&&v()(".nano").nanoScroller(),setTimeout(function(){v()(".footer").css({opacity:"1"})},300),document.body.style.backgroundColor=e.backgroundColorGeneral?e.backgroundColorGeneral:d.a},a.componentDidUpdate=function(){this.buildSwiper()},a.buildSwiper=function(){this.swiper=new c.a(".swiper-container-",{direction:"vertical",initialSlide:0,speed:1400,slidesPerView:1,loop:!1,mousewheel:{invert:!0,forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!1}}),window.swiper=this.swiper},a.nextSwiper=function(){void 0!==window.swiper&&window.swiper.slideNext()},a.render=function(){var e=this,t=this.props.data.allContentfulGeneralOptions.edges[0].node,a=this.props.data.allContentfulSection.edges.map(function(t,a){return i.a.createElement(u,{key:a,index:a,project:t.node,nextSwiper:e.nextSwiper})}),r={head_text:t.headerOptionGeneral.headerOptionGeneral?t.headerOptionGeneral.headerOptionGeneral:d.k,loading_bar_color:t.loadingBarColorGeneral?t.loadingBarColorGeneral:d.d,meta_title:t.metaTitleGeneral?t.metaTitleGeneral:d.h,meta_description:t.metaDescriptionGeneral.metaDescriptionGeneral?t.metaDescriptionGeneral.metaDescriptionGeneral:d.e,meta_keywords:t.metaKeywordsGeneral.metaKeywordsGeneral?t.metaKeywordsGeneral.metaKeywordsGeneral:d.f,meta_robots:t.metaRobotsGeneral?t.metaRobotsGeneral:d.g,primary_color:t.primaryColorGeneral?t.primaryColorGeneral:d.i,second_color:t.secondColorGeneral?t.secondColorGeneral:d.j,background_color:t.backgroundColorGeneral?t.backgroundColorGeneral:d.a,footer_color:t.footerTextColorGeneral?t.footerTextColorGeneral:d.b,footer_text:t.footerOptionGeneral.footerOptionGeneral?t.footerOptionGeneral.footerOptionGeneral:d.c},o={title:r.meta_title,description:r.meta_description,keywords:r.meta_keywords,robots:r.meta_robots},n={color:r.primary_color},l=t.hideHeaderGeneral?"hideheader":"",c=t.hideFooterGeneral?"hidefooter":"";return i.a.createElement("div",{className:"home-screen"},i.a.createElement(s.a,o),i.a.createElement("div",{className:"section-content-menu "+l},i.a.createElement("ul",{className:"menu-first"},i.a.createElement("li",{className:"active"},i.a.createElement("h1",null,i.a.createElement("link",{herf:"https://www.completedentures.com.au",target:"_blanck",style:n},r.head_text))))),i.a.createElement("div",{className:"home-screen--slide"},i.a.createElement("div",{className:"swiper-container swiper-container-outer swiper-container-vertical"},i.a.createElement("div",{className:"swiper-wrapper"},a))),i.a.createElement("div",{className:"section-content--footer "+c},i.a.createElement(m.a,{data_config:r,color:r.footer_color})),i.a.createElement("style",null,"\n          .section-content--menu > ul > li > a:hover {color: "+r.color_hover+" !important}\n          .footer a:hover {color: "+r.color_hover+" !important}\n          .footer a {color: "+r.url_color+"}\n          .project-layout--right {color: "+r.primary_color+"}\n          .project-list a:hover ~ .desc a{color: "+n.color+" !important}\n          .project-list .desc a:hover{color: "+r.primary_color+" !important}\n          "))},t}(n.Component),g=(t.default=w,"2594881597")},222:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(4),i=a.n(n),l=a(48),c=a.n(l);a.d(t,"a",function(){return c.a});a(223),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},223:function(e,t,a){var r;e.exports=(r=a(225))&&r.default||r},224:function(e,t,a){"use strict";a.d(t,"k",function(){return r}),a.d(t,"l",function(){return o}),a.d(t,"i",function(){return n}),a.d(t,"j",function(){return i}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return c}),a.d(t,"h",function(){return s}),a.d(t,"g",function(){return m}),a.d(t,"e",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return f});var r="lost art",o="https://www.lost-art.com",n="#000",i="#9e9e9e",l="#f5f8fa",c="#9e9e9e",s="Lost art - Projects",m="INDEX,FOLLOW",d="Lost art - Projects",p="Lost art",u="Ⓒ footer is updatedable in cms <a href = 'http://lost-art.com/'>link</a> ip sum",f="#212529"},225:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),o=a.n(r),n=a(4),i=a.n(n),l=a(74),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},226:function(e,t,a){"use strict";var r=a(5),o=a.n(r),n=a(0),i=a.n(n),l=a(229),c=a(224),s=function(e){function t(t){return e.call(this,t)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement(l.Helmet,null,i.a.createElement("title",null,this.props.title||""),i.a.createElement("meta",{name:"robots",content:this.props.robots||""}),i.a.createElement("meta",{name:"googlebot",content:this.props.robots||""}),i.a.createElement("meta",{name:"msnbot",content:this.props.robots||""}),i.a.createElement("meta",{name:"description",content:this.props.description||""}),i.a.createElement("meta",{name:"keywords",content:this.props.keywords||""}),i.a.createElement("meta",{name:"author",content:"Lost art"}),i.a.createElement("meta",{name:"revisit-after",content:"1 days"}),i.a.createElement("link",{rel:"canonical",href:c.l+(this.props.location||"")}))},t}(n.Component);t.a=s},227:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(222),i=a(106),l=a.n(i);t.a=function(e){var t=e.data_config,a=e.japan,r=e.color,i={color:r||t.footer_color};return a?o.a.createElement("div",{className:"footer",style:i},o.a.createElement("div",null,o.a.createElement("span",null,t.footer_text?l()(t.footer_text):""))):o.a.createElement("div",{className:"footer",style:i},o.a.createElement("div",null,o.a.createElement("span",{className:"only_mobile_inline m-r-10"},o.a.createElement(n.a,{to:"/page/bio-in-japanese/"},"日本語")),o.a.createElement("span",null,t.footer_text?l()(t.footer_text):"")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-02196cb421184a5a5ff0.js.map