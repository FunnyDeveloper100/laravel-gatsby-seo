(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,a){"use strict";a.r(t);var o=a(5),n=a.n(o),r=a(0),l=a.n(r),c=a(161),i=a(163),s=a(176),m=a(167),d=a(168),p=function(e){var t=e.project,a=e.data_config,o="",n=t.image.file,r=t.image.title;"image/jpeg"!=n.contentType&&"image/png"!=n.contentType||(o=l.a.createElement("div",{className:"card card-3x2"},l.a.createElement("div",{className:"card-content"},l.a.createElement("img",{src:n.url,alt:r})))),"video/mp4"==n.contentType&&(o=l.a.createElement("div",{className:"card card-3x2"},l.a.createElement("div",{className:"card-content mp4"},l.a.createElement("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0},l.a.createElement("source",{src:n.url,type:"video/mp4"}),"Your browser does not support the video tag."))));var i={color:a.primary_color},s={color:a.second_color};return l.a.createElement("div",{className:"project-item",key:t.id},l.a.createElement("div",{className:"project-item--right"},l.a.createElement(c.a,{to:"/project/"+t.slug},o)),l.a.createElement("div",{className:"project-item--left project-list project-list-"+t.id},l.a.createElement(c.a,{to:"/project/"+t.slug},l.a.createElement("h2",{style:i},t.title)),l.a.createElement("h3",{className:"desc"},l.a.createElement(c.a,{style:s,to:"/project/"+t.slug},t.description.description))))},u=a(184),f=a.n(u);a.d(t,"pageQuery",function(){return y});var g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={location:""},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.scrollTo(0,0);var e=this.props.data.allContentfulGeneralOptions.edges[0].node;if(!document.getElementById("body_gtag")){document.body.prepend('\x3c!-- Google Tag Manager (noscript) --\x3e            <noscript id="body_gtag"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN875T"            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>            \x3c!-- End Google Tag Manager (noscript) --\x3e')}var t=0,a=document.getElementsByClassName("project-layout")[0];f()(window).scroll(function(){var o=f()(this).scrollTop();o>t||0===o?a.classList.remove("nav_fixed"):(a.classList.add("nav_fixed"),f()(".project-layout--left").css({opacity:"1",background:e.backgroundColorOfListingProject})),t=o}),f()(".footer").css({opacity:"1"}),document.body.style.backgroundColor=e.backgroundColorOfListingProject,this.setState({location:window.location.pathname})},a.render=function(){var e,t=this.props.data.allContentfulProject.edges,a=this.props.data.allContentfulGeneralOptions.edges[0].node,o={head_text:a.headerOptionGeneral.headerOptionGeneral?a.headerOptionGeneral.headerOptionGeneral:i.k,loading_bar_color:a.loadingBarColorGeneral?a.loadingBarColorGeneral:i.d,meta_title:a.metaTitleGeneral?a.metaTitleGeneral:i.h,meta_description:a.metaDescriptionGeneral.metaDescriptionGeneral?a.metaDescriptionGeneral.metaDescriptionGeneral:i.e,meta_keywords:a.metaKeywordsGeneral.metaKeywordsGeneral?a.metaKeywordsGeneral.metaKeywordsGeneral:i.f,meta_robots:a.metaRobotsGeneral?a.metaRobotsGeneral:i.g,primary_color:a.primaryColorGeneral?a.primaryColorGeneral:i.i,second_color:a.secondColorGeneral?a.secondColorGeneral:i.j,background_color:a.backgroundColorGeneral?a.backgroundColorGeneral:i.a,footer_color:a.footerTextColorGeneral?a.footerTextColorGeneral:i.b,footer_text:a.footerOptionGeneral.footerOptionGeneral?a.footerOptionGeneral.footerOptionGeneral:i.c},n={title:void 0!==a.metaTitleOfListingProject?a.metaTitleOfListingProject+" | "+o.meta_title:o.meta_title,description:o.meta_description,keywords:o.meta_keywords,robots:o.meta_robots,location:this.state.location},r={color:o.primary_color},u=s.isMobile?"":o.primary_color,f=t.map(function(e,t){return l.a.createElement(p,{key:t,data_config:o,project:e.node})});return l.a.createElement("div",{className:"project-screen"},l.a.createElement(m.a,n),l.a.createElement("div",{className:"project-layout"},l.a.createElement("div",{className:"project-layout--content"},l.a.createElement("div",{className:"project-layout--left"},l.a.createElement("div",{className:"section-content--menu"},l.a.createElement("ul",{className:"menu-first"},l.a.createElement("li",{className:"active"},l.a.createElement("h2",null,l.a.createElement(c.a,((e={to:"/projects"}).to="/projects",e.style=r,e),o.head_text)))),l.a.createElement("ul",{className:"menu-second"},l.a.createElement("li",{className:"m-r-10"},l.a.createElement(c.a,{to:"/page/about-us",style:r},"information")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/page/contact",style:r},"contact"))),l.a.createElement("ul",{className:"menu-third only_desktop"},l.a.createElement("li",null,l.a.createElement(c.a,{to:"/page/bio-in-japanese",style:r},"日本語"))))),l.a.createElement("div",{className:"project-layout--right"},l.a.createElement("div",{className:"main-content"},f),l.a.createElement(d.a,{data_config:o,japan:!0,color:o.footer_color})))),l.a.createElement("style",null,"\n              .section-content--menu > ul > li > a:hover{color: "+u+" !important}\n              .footer a:hover {color: "+o.primary_color+" !important}\n              .footer a {color: "+o.second_color+"}\n              .project-layout--right {color: "+o.primary_color+"}\n              .project-list a:hover ~ .desc a{color: "+r.color+" !important}\n              .project-list .desc a:hover{color: "+o.primary_color+" !important}\n              "))},t}(l.a.Component),y=(t.default=g,"1056650302")},161:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(4),l=a.n(r),c=a(35),i=a.n(c);a.d(t,"a",function(){return i.a});a(162),n.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},162:function(e,t,a){var o;e.exports=(o=a(165))&&o.default||o},163:function(e,t,a){"use strict";a.d(t,"k",function(){return o}),a.d(t,"l",function(){return n}),a.d(t,"i",function(){return r}),a.d(t,"j",function(){return l}),a.d(t,"a",function(){return c}),a.d(t,"d",function(){return i}),a.d(t,"h",function(){return s}),a.d(t,"g",function(){return m}),a.d(t,"e",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return f});var o="lost art",n="https://www.lost-art.com",r="#000",l="#9e9e9e",c="#f5f8fa",i="#9e9e9e",s="Lost art - Projects",m="INDEX,FOLLOW",d="Lost art - Projects",p="Lost art",u="Ⓒ footer is updatedable in cms <a href = 'http://lost-art.com/'>link</a> ip sum",f="#212529"},165:function(e,t,a){"use strict";a.r(t);a(26);var o=a(0),n=a.n(o),r=a(4),l=a.n(r),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},167:function(e,t,a){"use strict";var o=a(5),n=a.n(o),r=a(0),l=a.n(r),c=a(177),i=a(163),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){return l.a.createElement(c.Helmet,{script:[{type:"text/javascript",innerHTML:"function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n                })(window,document,'script','dataLayer','GTM-WDN875T');"}]},l.a.createElement("title",null,this.props.title||""),l.a.createElement("meta",{name:"robots",content:this.props.robots||""}),l.a.createElement("meta",{name:"googlebot",content:this.props.robots||""}),l.a.createElement("meta",{name:"msnbot",content:this.props.robots||""}),l.a.createElement("meta",{name:"description",content:this.props.description||""}),l.a.createElement("meta",{name:"keywords",content:this.props.keywords||""}),l.a.createElement("meta",{name:"author",content:"Lost art"}),l.a.createElement("meta",{name:"revisit-after",content:"1 days"}),l.a.createElement("link",{rel:"canonical",href:i.l+(this.props.location||"")}))},t}(r.Component);t.a=s},168:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(161),l=a(171),c=a.n(l);t.a=function(e){var t=e.data_config,a=e.japan,o=e.color,l={color:o||t.footer_color};return a?n.a.createElement("div",{className:"footer",style:l},n.a.createElement("div",null,n.a.createElement("span",null,t.footer_text?c()(t.footer_text):""))):n.a.createElement("div",{className:"footer",style:l},n.a.createElement("div",null,n.a.createElement("span",{className:"only_mobile_inline m-r-10"},n.a.createElement(r.a,{to:"/page/bio-in-japanese"},"日本語")),n.a.createElement("span",null,t.footer_text?c()(t.footer_text):"")))}},182:function(e,t){},183:function(e,t){}}]);
//# sourceMappingURL=component---src-templates-projects-js-f40911b948c029f7bd8b.js.map