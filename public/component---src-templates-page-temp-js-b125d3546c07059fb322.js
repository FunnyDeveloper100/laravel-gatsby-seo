(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a.n(o),r=a(0),l=a.n(r),c=a(161),s=(a(26),a(176)),i=a(167),m=a(168),u=a(191),p=a(169),d=a.n(p),f=a(184),g=a.n(f),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={location:""},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props.page,t=0,a=document.getElementsByClassName("project-layout")[0];window.scrollTo(0,0),g()(window).scroll(function(){var o=g()(this).scrollTop();o>t||0===o?a.classList.remove("nav_fixed"):(a.classList.add("nav_fixed"),g()(".project-layout--left").css({opacity:"1",background:e.backgroundColorPage})),t=o}),g()(".footer").css({opacity:"1"}),document.body.style.backgroundColor=e.backgroundColorPage,this.setState({location:window.location.pathname})},a.render=function(){var e=this.props,t=e.data_config,a=e.meta_data,o=e.style_primary_color,n=e.style_second_color,r=e.page;return l.a.createElement("div",{className:"page-screen"},l.a.createElement(i.a,Object.assign({},a,this.state)),l.a.createElement("div",{className:"project-layout display-table"},l.a.createElement("div",{className:"project-layout--content"},l.a.createElement("div",{className:"project-layout--left"},l.a.createElement("div",{className:"section-content--menu"},!s.isMobile&&l.a.createElement("span",null,l.a.createElement("ul",{className:"menu-second"},l.a.createElement("li",{className:"about-us"===r.slug?"active":""},l.a.createElement(c.a,{to:"/page/about-us",style:n},"information")),l.a.createElement("li",{className:"contact"===r.slug?"active":""},l.a.createElement(c.a,{to:"/page/contact",style:n},"contact"))),l.a.createElement("ul",{className:"menu-third only_desktop"},l.a.createElement("li",{className:"bio-in-japanese"===r.slug?"active":""},l.a.createElement(c.a,{to:"/page/bio-in-japanese",style:n},"日本語")))))),l.a.createElement("div",{className:"project-layout--right"},l.a.createElement("div",{className:"bio-in-japanese"===r.slug?"jpan m-b-35 main-content":"m-b-35 main-content"},r.content?d()(r.content.content):""),l.a.createElement(m.a,{japan:"bio-in-japanese"===r.slug?"jpan":"",color:r.footerTextColorPage?r.footerTextColorPage:t.footer_color,data_config:t})))),l.a.createElement(u.a,{className:"only_desktop",style:n}),s.isMobile?l.a.createElement("style",null,"\n                    .footer a , .project-layout--right a {color: "+n.color+"}\n                    .project-layout--right {color: "+o.color+"}\n                    "):l.a.createElement("style",null,"\n                  .section-content--menu > ul > li > a:hover {color: "+o.color+" !important}\n                  a.go-back:hover, .footer a:hover, .project-layout--right a:hover {color: "+o.color+" !important}\n                  .footer a , .project-layout--right a {color: "+n.color+"}\n                  .project-layout--right {color: "+o.color+"}\n                  "))},t}(l.a.Component),h=a(163);a.d(t,"pageQuery",function(){return b});var E=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPageContent,t=this.props.data.allContentfulGeneralOptions.edges[0].node,a={head_text:t.headerOptionGeneral.headerOptionGeneral?t.headerOptionGeneral.headerOptionGeneral:h.k,loading_bar_color:t.loadingBarColorGeneral?t.loadingBarColorGeneral:h.d,meta_title:t.metaTitleGeneral?t.metaTitleGeneral:h.h,meta_description:t.metaDescriptionGeneral.metaDescriptionGeneral?t.metaDescriptionGeneral.metaDescriptionGeneral:h.e,meta_keywords:t.metaKeywordsGeneral.metaKeywordsGeneral?t.metaKeywordsGeneral.metaKeywordsGeneral:h.f,meta_robots:t.metaRobotsGeneral?t.metaRobotsGeneral:h.g,primary_color:t.primaryColorGeneral?t.primaryColorGeneral:h.i,second_color:t.secondColorGeneral?t.secondColorGeneral:h.j,background_color:t.backgroundColorGeneral?t.backgroundColorGeneral:h.a,footer_color:t.footerTextColorGeneral?t.footerTextColorGeneral:h.b,footer_text:t.footerOptionGeneral.footerOptionGeneral?t.footerOptionGeneral.footerOptionGeneral:h.c},o={title:void 0!==e.metaTitlePage?e.metaTitlePage+" | "+a.meta_title:a.meta_title,description:null!=e.metaDescriptionPage.metaDescriptionPage?e.metaDescriptionPage.metaDescriptionPage:a.meta_description,keywords:e.metaKeywordsPage?e.metaKeywordsPage:a.meta_keywords,robots:e.metaRobotsPage?e.metaRobotsPage:a.meta_robots},n={color:e.primaryColorPage?e.primaryColorPage:a.primary_color},r={color:e.secondColorPage?e.secondColorPage:a.second_color};return l.a.createElement(y,{data_config:a,meta_data:o,style_primary_color:n,style_second_color:r,page:e})},t}(l.a.Component),b=(t.default=E,"1383437674")},161:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(4),l=a.n(r),c=a(35),s=a.n(c);a.d(t,"a",function(){return s.a});a(162),n.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},162:function(e,t,a){var o;e.exports=(o=a(165))&&o.default||o},163:function(e,t,a){"use strict";a.d(t,"k",function(){return o}),a.d(t,"l",function(){return n}),a.d(t,"i",function(){return r}),a.d(t,"j",function(){return l}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return s}),a.d(t,"h",function(){return i}),a.d(t,"g",function(){return m}),a.d(t,"e",function(){return u}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return d}),a.d(t,"b",function(){return f});var o="lost art",n="https://www.lost-art.com",r="#000",l="#9e9e9e",c="#f5f8fa",s="#9e9e9e",i="Lost art - Projects",m="INDEX,FOLLOW",u="Lost art - Projects",p="Lost art",d="Ⓒ footer is updatedable in cms <a href = 'http://lost-art.com/'>link</a> ip sum",f="#212529"},165:function(e,t,a){"use strict";a.r(t);a(26);var o=a(0),n=a.n(o),r=a(4),l=a.n(r),c=a(55),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},167:function(e,t,a){"use strict";var o=a(5),n=a.n(o),r=a(0),l=a.n(r),c=a(177),s=a(163),i=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){return l.a.createElement(c.Helmet,{script:[{type:"text/javascript",innerHTML:"\x3c!-- Google Tag Manager --\x3e\n        function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-WDN875T');\n        \x3c!-- End Google Tag Manager --\x3e"}]},l.a.createElement("title",null,this.props.title||""),l.a.createElement("meta",{name:"robots",content:this.props.robots||""}),l.a.createElement("meta",{name:"googlebot",content:this.props.robots||""}),l.a.createElement("meta",{name:"msnbot",content:this.props.robots||""}),l.a.createElement("meta",{name:"description",content:this.props.description||""}),l.a.createElement("meta",{name:"keywords",content:this.props.keywords||""}),l.a.createElement("meta",{name:"author",content:"Lost art"}),l.a.createElement("meta",{name:"revisit-after",content:"1 days"}),l.a.createElement("link",{rel:"canonical",href:s.l+(this.props.location||"")}))},t}(r.Component);t.a=i},168:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(161),l=a(169),c=a.n(l);t.a=function(e){var t=e.data_config,a=e.japan,o=e.color,l={color:o||t.footer_color};return a?n.a.createElement("div",{className:"footer",style:l},n.a.createElement("div",null,n.a.createElement("span",null,t.footer_text?c()(t.footer_text):""))):n.a.createElement("div",{className:"footer",style:l},n.a.createElement("div",null,n.a.createElement("span",{className:"only_mobile_inline m-r-10"},n.a.createElement(r.a,{to:"/page/bio-in-japanese"},"日本語")),n.a.createElement("span",null,t.footer_text?c()(t.footer_text):"")))}},182:function(e,t){},183:function(e,t){},191:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(161);t.a=function(e){var t="go-back "+e.className,a=e.style;return n.a.createElement(r.a,{to:"/projects",className:t,style:a},"back")}}}]);
//# sourceMappingURL=component---src-templates-page-temp-js-b125d3546c07059fb322.js.map