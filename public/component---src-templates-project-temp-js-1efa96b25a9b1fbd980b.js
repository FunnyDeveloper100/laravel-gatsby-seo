(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(e,t,a){"use strict";a.r(t);var o=a(5),r=a.n(o),n=a(0),c=a.n(n),l=a(222),i=a(224),s=a(106),m=a.n(s),d=a(228),p=a(226),u=function(e){var t=e.media,a=c.a.createElement("span",{className:"ajax-loader"},c.a.createElement("img",{src:"../img/ajax-loader.gif"})),o=t.title,r=""!=t.description?c.a.createElement("p",null,t.description):"";return"image/jpeg"!==t.file.contentType&&"image/png"!==t.file.contentType||(a=c.a.createElement("div",null,c.a.createElement("div",{className:"project-image"},c.a.createElement("img",{src:t.file.url,alt:o})),c.a.createElement("div",{className:"project-caption"},r))),"video/mp4"==t.file.contentType&&(a=c.a.createElement("div",null,c.a.createElement("div",{className:"card card-3x2"},c.a.createElement("div",{className:"card-content"},c.a.createElement("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0},c.a.createElement("source",{src:t.file.url,type:"video/mp4"}),"Your browser does not support the video tag."))),c.a.createElement("div",{className:"project-caption"},r))),c.a.createElement("div",{className:"project-info--media m-b-35",key:t.id},a)},v=a(227),E=a(231),f=a(233),j=a(230),h=a.n(j);a.d(t,"projectQuery",function(){return N});var y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={location:""},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.scrollTo(0,0);var e=this.props.data.contentfulProject,t=0,a=document.getElementsByClassName("project-layout")[0];h()(window).scroll(function(){var o=h()(this).scrollTop();o>t||0===o?a.classList.remove("nav_fixed"):(a.classList.add("nav_fixed"),h()(".project-layout--left").css({opacity:"1",background:e.backgroundColorProject})),t=o}),h()(".footer").css({opacity:"1"}),document.body.style.backgroundColor=e.backgroundColorProject,this.setState({location:window.location.pathname})},a.render=function(){var e=this.props.data.contentfulProject,t=this.props.data.allContentfulGeneralOptions.edges[0].node,a="";void 0!==e.medias&&(a=e.medias.map(function(e,t){return c.a.createElement(u,{media:e,key:t})}));var o={head_text:t.headerOptionGeneral.headerOptionGeneral?t.headerOptionGeneral.headerOptionGeneral:i.k,loading_bar_color:t.loadingBarColorGeneral?t.loadingBarColorGeneral:i.d,meta_title:t.metaTitleGeneral?t.metaTitleGeneral:i.h,meta_description:t.metaDescriptionGeneral.metaDescriptionGeneral?t.metaDescriptionGeneral.metaDescriptionGeneral:i.e,meta_keywords:t.metaKeywordsGeneral.metaKeywordsGeneral?t.metaKeywordsGeneral.metaKeywordsGeneral:i.f,meta_robots:t.metaRobotsGeneral?t.metaRobotsGeneral:i.g,primary_color:t.primaryColorGeneral?t.primaryColorGeneral:i.i,second_color:t.secondColorGeneral?t.secondColorGeneral:i.j,background_color:t.backgroundColorGeneral?t.backgroundColorGeneral:i.a,footer_color:t.footerTextColorGeneral?t.footerTextColorGeneral:i.b,footer_text:t.footerOptionGeneral.footerOptionGeneral?t.footerOptionGeneral.footerOptionGeneral:i.c},r={title:e.metaTitleProject?e.metaTitleProject+" | "+o.meta_title:o.meta_title,description:e.metaDescriptionProject.metaDescriptionProject?e.metaDescriptionProject.metaDescriptionProject:o.meta_title,keywords:e.metaKeywordsProject.metaKeywordsProject?e.metaKeywordsProject.metaKeywordsProject:o.meta_title,robots:e.metaRobotsProject?e.metaRobotsProject:o.meta_robots,location:this.state.location},n={color:e.primaryColorProject?e.primaryColorProject:o.primary_color},s={color:e.secondColorProject?e.secondColorProject:o.second_color},j="",h="",y="",N="",b={backgroundImage:void 0!==e.vimeoThumbnail1Project?"url("+e.vimeoThumbnail1Project.file.url+")":""},w={backgroundImage:void 0!==e.vimeoThumbnail2Project?"url("+e.vimeoThumbnail2Project.file.url+")":""},P={backgroundImage:void 0!==e.vimeoThumbnail3Project?"url("+e.vimeoThumbnail3Project.file.url+")":""},g={backgroundImage:void 0!==e.vimeoThumbnail4Project?"url("+e.vimeoThumbnail4Project.file.url+")":""};return e.vimeo1Project&&(j=d.isMobile?c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2"},c.a.createElement("div",{className:"card-content",style:b},c.a.createElement("div",{className:"video video--iframe vimeo"},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo1Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1,background:!1,style:b})))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption1Project))):c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2 card-vimeo"},c.a.createElement("div",{className:"card-content",style:b},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo1Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1,width:"651",background:!1}))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption1Project)))),e.vimeo2Project&&(h=d.isMobile?c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2"},c.a.createElement("div",{className:"card-content",style:w},c.a.createElement("div",{className:"video video--iframe vimeo"},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo2Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1})))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption2Project))):c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2 card-vimeo"},c.a.createElement("div",{className:"card-content",style:w},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo2Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1,width:"651"}))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption2Project)))),e.vimeo3Project&&(y=d.isMobile?c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2"},c.a.createElement("div",{className:"card-content",style:P},c.a.createElement("div",{className:"video video--iframe vimeo"},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo3Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1})))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption3Project))):c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2 card-vimeo"},c.a.createElement("div",{className:"card-content",style:P},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo3Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1,width:"651"}))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption3Project)))),e.vimeo4Project&&(N=d.isMobile?c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2"},c.a.createElement("div",{className:"card-content",style:g},c.a.createElement("div",{className:"video video--iframe vimeo"},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo4Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1})))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption4Project))):c.a.createElement("div",{className:"project-info--media m-b-35"},c.a.createElement("div",{className:"card card-3x2 card-vimeo"},c.a.createElement("div",{className:"card-content",style:g},c.a.createElement(f.a,{className:"vimeo_wrap",video:e.vimeo4Project,muted:!1,autoplay:!1,loop:!1,showTitle:!1,showByline:!1,showPortrait:!1,width:"651"}))),c.a.createElement("div",{className:"project-caption"},c.a.createElement("p",null,e.vimeoCaption4Project)))),c.a.createElement("div",{className:"project-screen"},c.a.createElement(p.a,r),c.a.createElement("div",{className:"project-layout"},c.a.createElement("div",{className:"project-layout--content"},c.a.createElement("div",{className:"project-layout--left"},c.a.createElement("div",{className:"section-content--menu"},c.a.createElement("ul",{className:"menu-first"},c.a.createElement("li",{className:"active"},c.a.createElement("h1",null,c.a.createElement("a",{href:"https://www.completedentures.com.au",target:"_blank",style:n},o.head_text)))),!d.isMobile&&c.a.createElement("span",null,c.a.createElement("ul",{className:"menu-second"},c.a.createElement("li",{className:"about-us"===e.slug?"active":""},c.a.createElement(l.a,{to:"/page/about-us/",style:s},"information")),c.a.createElement("li",{className:"contact"===e.slug?"active":""},c.a.createElement(l.a,{to:"/page/contact/",style:s},"contact"))),c.a.createElement("ul",{className:"menu-third only_desktop"},c.a.createElement("li",{className:"bio-in-japanese"===e.slug?"active":""},c.a.createElement(l.a,{to:"/page/bio-in-japanese/",style:s},"日本語")))))),c.a.createElement("div",{className:"project-layout--right"},c.a.createElement("div",{className:"main-content"},j,h,y,N,a,c.a.createElement("h1",{className:"ttile",style:n},e.title),c.a.createElement("h2",{className:"sub-ttile desc m-b-35",style:s},e.description.description),c.a.createElement("div",{className:"m-b-35 content-project"},e.content.content?m()(e.content.content):"")),c.a.createElement(v.a,{data_config:o,color:e.footerTextColorProject?e.footerTextColorProject:o.footer_color})))),c.a.createElement(E.a,{className:"only_desktop",style:s}),d.isMobile?c.a.createElement("style",null,"\n                    .footer a , .project-layout--right a {color: "+s.color+"}\n                    .project-layout--right {color: "+n.color+"}\n                    "):c.a.createElement("style",null,"\n                  .section-content--menu > ul > li > a:hover {color: "+n.color+" !important}\n                  a.go-back:hover, .footer a:hover, .project-layout--right a:hover {color: "+n.color+" !important}\n                  .footer a , .project-layout--right a {color: "+s.color+"}\n                  .project-layout--right {color: "+n.color+"}\n                  "))},t}(c.a.Component),N=(t.default=y,"2419416903")},222:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(4),c=a.n(n),l=a(48),i=a.n(l);a.d(t,"a",function(){return i.a});a(223),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},223:function(e,t,a){var o;e.exports=(o=a(225))&&o.default||o},224:function(e,t,a){"use strict";a.d(t,"k",function(){return o}),a.d(t,"l",function(){return r}),a.d(t,"i",function(){return n}),a.d(t,"j",function(){return c}),a.d(t,"a",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"h",function(){return s}),a.d(t,"g",function(){return m}),a.d(t,"e",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return v});var o="lost art",r="https://www.lost-art.com",n="#000",c="#9e9e9e",l="#f5f8fa",i="#9e9e9e",s="Lost art - Projects",m="INDEX,FOLLOW",d="Lost art - Projects",p="Lost art",u="Ⓒ footer is updatedable in cms <a href = 'http://lost-art.com/'>link</a> ip sum",v="#212529"},225:function(e,t,a){"use strict";a.r(t);a(35);var o=a(0),r=a.n(o),n=a(4),c=a.n(n),l=a(74),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},226:function(e,t,a){"use strict";var o=a(5),r=a.n(o),n=a(0),c=a.n(n),l=a(229),i=a(224),s=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(l.Helmet,null,c.a.createElement("title",null,this.props.title||""),c.a.createElement("meta",{name:"robots",content:this.props.robots||""}),c.a.createElement("meta",{name:"googlebot",content:this.props.robots||""}),c.a.createElement("meta",{name:"msnbot",content:this.props.robots||""}),c.a.createElement("meta",{name:"description",content:this.props.description||""}),c.a.createElement("meta",{name:"keywords",content:this.props.keywords||""}),c.a.createElement("meta",{name:"author",content:"Lost art"}),c.a.createElement("meta",{name:"revisit-after",content:"1 days"}),c.a.createElement("link",{rel:"canonical",href:i.l+(this.props.location||"")}))},t}(n.Component);t.a=s},227:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(222),c=a(106),l=a.n(c);t.a=function(e){var t=e.data_config,a=e.japan,o=e.color,c={color:o||t.footer_color};return a?r.a.createElement("div",{className:"footer",style:c},r.a.createElement("div",null,r.a.createElement("span",null,t.footer_text?l()(t.footer_text):""))):r.a.createElement("div",{className:"footer",style:c},r.a.createElement("div",null,r.a.createElement("span",{className:"only_mobile_inline m-r-10"},r.a.createElement(n.a,{to:"/page/bio-in-japanese/"},"日本語")),r.a.createElement("span",null,t.footer_text?l()(t.footer_text):"")))}},231:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(222);t.a=function(e){var t="go-back "+e.className,a=e.style;return r.a.createElement(n.a,{to:"/projects/",className:t,style:a},"back")}}}]);
//# sourceMappingURL=component---src-templates-project-temp-js-1efa96b25a9b1fbd980b.js.map