(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[1],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/displacement-liquid.56f91b11.png"},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/work-01-small.126fe3fd.jpg"},function(e,a,t){e.exports=t.p+"static/media/work-02-small.b1fd09a1.jpg"},function(e,a,t){e.exports=t.p+"static/media/work-03-small.3c7155a7.jpg"},function(e,a,t){e.exports=t.p+"static/media/work-04-small.dfb90c54.jpg"},function(e,a,t){e.exports=t.p+"static/media/work-05-small.a37111cb.jpg"},,function(e,a,t){e.exports=t.p+"static/media/chess.dc3b8d7f.jpg"},function(e,a,t){e.exports=t.p+"static/media/onlineShop.fa4689f5.jpg"},function(e,a,t){e.exports=t.p+"static/media/portfolio.6aa00efe.jpg"},,,,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(16),r=t.n(s),c=t(27),i=t(1),m=(t(36),function(){return l.a.createElement("div",{className:"marquee"},l.a.createElement("div",{className:"marquee__item"},l.a.createElement("div",{className:"marquee__item__inner","aria-hidden":"true"},l.a.createElement("span",null,"Style"),l.a.createElement("span",null,"Style"),l.a.createElement("span",null,"Style"),l.a.createElement("span",null,"Style"))))}),o=t(29),u=t(5),_=t(22),p=null;var E=function(e){return(p=u.b.timeline({paused:!0,onStart:function(){e.classList.add("noscroll")},onReverseComplete:function(){e.classList.remove("noscroll")}})).set(".menu__images__canvas",{autoAlpha:0}).to(".menu__informations",{scaleX:1,duration:1.2,ease:"Expo.easeInOut",transformOrigin:"left center"}).fromTo(".menu__images",{width:0},{width:"40%",duration:1.5,ease:"Expo.easeInOut",transformOrigin:"left center"}).from(".menu__links ul li",{autoAlpha:0,ease:"Expo.easeInOut",duration:2,stagger:.1,y:20},"<-.3").to(".menu__images__canvas",{autoAlpha:1,duration:1},">-1"),u.b.set(".menu",{autoAlpha:1}),p},d=t(17),f=t.n(d),g=t(18),N=t.n(g),h=t(19),v=t.n(h),b=t(20),k=t.n(b),j=t(21),w=t.n(j),x=t(9),y=t.n(x),S={Work1:f.a,Work2:N.a,Work3:v.a,Work4:k.a,Work5:w.a,DisplacementEffect:y.a};t(37);u.b.registerPlugin(_.a);var O=null,A=null,W=function(){var e=Object(n.useRef)(null),a=Object(n.useState)(!1),s=Object(o.a)(a,2),r=s[0],c=s[1];Object(n.useEffect)((function(){var a=document.querySelectorAll(".menu__scroller ul li a"),n=document.querySelector("body");A=E(n),a.forEach((function(a){a.addEventListener("click",(function(){c(!1);var t=a.getAttribute("href");A.reverse().then((function(){u.b.to(window,{duration:2.2,scrollTo:t,ease:"expo.inOut"})})),e.current.setAttribute("aria-expanded","false")}))})),Promise.all([t.e(0),t.e(5)]).then(t.bind(null,70)).then((function(e){(O=new e.default).init()}))}),[]),Object(n.useEffect)((function(){O&&O.updateNavStatus(r)}),[r]);return l.a.createElement("div",{className:"wrapper"},l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav__hamburger"},l.a.createElement("ion-icon",{ref:e,onClick:function(e){"false"===e.target.getAttribute("aria-expanded")?(c(!0),u.b.to(window,{duration:.5,scrollTo:0}).then((function(){A.play()})),e.target.setAttribute("aria-expanded","true")):(c(!1),A.reverse(),e.target.setAttribute("aria-expanded","false"))},"aria-expanded":"false",className:"hamburger",style:{fontSize:"3em"},name:"menu-outline"},"A"))),l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"container__header"},"Minimal Design"),l.a.createElement("header",{className:"container__name"},"Jakub | Bot"),l.a.createElement("h4",{className:"container__hello"},l.a.createElement("span",null,"Hel"),l.a.createElement("span",null,"lo")),l.a.createElement("ul",{className:"socials"},l.a.createElement("a",{href:"#a",className:"socials__link"},l.a.createElement("li",{className:"socials__link__item"},l.a.createElement("ion-icon",{name:"logo-facebook",className:"socials__link__icon"}))),l.a.createElement("a",{href:"#a",className:"socials__link"},l.a.createElement("li",{className:"socials__link__item"},l.a.createElement("ion-icon",{name:"logo-instagram",className:"socials__link__icon"}))),l.a.createElement("a",{href:"#a",className:"socials__link"},l.a.createElement("li",{className:"socials__link__item"},l.a.createElement("ion-icon",{name:"logo-twitter",className:"socials__link__icon"})))),l.a.createElement("ul",{className:"menu js-portfolio"},l.a.createElement("div",{className:"menu__informations"},l.a.createElement("div",{className:"menu__links menu__scroller"},l.a.createElement("ul",{className:"menu__links__list"},l.a.createElement("li",{className:"js-portfolio-item menu__links__list__item"},l.a.createElement("a",{href:"#content"},l.a.createElement("span",{className:"number"},"01. "),l.a.createElement("span",{className:"destination"},"Home /"),l.a.createElement("span",{className:"describe"},"intro"))),l.a.createElement("li",{className:"js-portfolio-item menu__links__list__item"},l.a.createElement("a",{href:"#projects"},l.a.createElement("span",{className:"number"},"02. "),l.a.createElement("span",{className:"destination"},"Portfolio /"),l.a.createElement("span",{className:"describe"},"my work"))),l.a.createElement("li",{className:"js-portfolio-item menu__links__list__item"},l.a.createElement("a",{href:"#content"},l.a.createElement("span",{className:"number"},"03. "),l.a.createElement("span",{className:"destination"},"About me/"),l.a.createElement("span",{className:"describe"},"history"))),l.a.createElement("li",{className:"js-portfolio-item menu__links__list__item"},l.a.createElement("a",{href:"#content"},l.a.createElement("span",{className:"number"},"04. "),l.a.createElement("span",{className:"destination"},"Contact /"),l.a.createElement("span",{className:"describe"},"say hello")))),l.a.createElement("div",{className:"text"},l.a.createElement("span",null,"Hard"),l.a.createElement("span",null,"work"))),l.a.createElement("div",{className:"menu__social-icons menu__links"},l.a.createElement("ul",{className:"menu__links__list"},l.a.createElement("li",{className:"menu__links__list__item"},l.a.createElement("a",{href:"#a"},l.a.createElement("ion-icon",{name:"logo-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#a"},l.a.createElement("ion-icon",{name:"logo-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#a"},l.a.createElement("ion-icon",{name:"logo-twitter"})))))),l.a.createElement("div",{className:"menu__images"},l.a.createElement("div",{className:"menu__images__canvas js-portfolio-canvas","data-displacement-map":S.DisplacementEffect}),l.a.createElement("ul",{className:"menu__images__list js-portfolio-preview-list"},l.a.createElement("li",{className:"menu__images__item js-portfolio-preview-item","data-portfolio-preview":S.Work1}),l.a.createElement("li",{className:"menu__images__item js-portfolio-preview-item","data-portfolio-preview":S.Work2}),l.a.createElement("li",{className:"menu__images__item js-portfolio-preview-item","data-portfolio-preview":S.Work3}),l.a.createElement("li",{className:"menu__images__item js-portfolio-preview-item","data-portfolio-preview":S.Work4}),l.a.createElement("li",{className:"menu__images__item js-portfolio-preview-item","data-portfolio-preview":S.Work5}))))))},q=t(23),P=t.n(q),D=t(24),C=t.n(D),I=t(25),J=t.n(I),M={Chess:P.a,Portfolio:J.a,OnlineShop:C.a,DisplacementEffect:y.a},T=(t(38),function(){return Object(n.useEffect)((function(){Promise.all([t.e(0),t.e(4),t.e(6)]).then(t.bind(null,71)).then((function(e){(new e.default).init()}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects",id:"projects"},l.a.createElement("header",{className:"projects__header"},"My Work"),l.a.createElement("div",{className:"projects__images"},l.a.createElement("div",{className:"projects__images__image js-liquid-image","data-displacement-map":M.DisplacementEffect,"data-image":M.Chess},l.a.createElement("div",{className:"projects__images__scroller"})),l.a.createElement("p",{className:"projects__images__description"},"Chess app")),l.a.createElement("div",{className:"projects__images--right"},l.a.createElement("div",{className:"projects__images__image js-liquid-image","data-displacement-map":M.DisplacementEffect,"data-image":M.OnlineShop}),l.a.createElement("p",{className:"projects__images__description"},"Shop app")),l.a.createElement("div",{className:"projects__images"},l.a.createElement("div",{className:"projects__images__image js-liquid-image","data-displacement-map":M.DisplacementEffect,"data-image":M.Portfolio}),l.a.createElement("p",{className:"projects__images__description"},"Portfolio"))))}),H=t(26);t(39);u.b.registerPlugin(H.a);var L=function(){return Object(n.useEffect)((function(){var e=document.querySelector(".background__wrapper");u.b.timeline({scrollTrigger:{trigger:".about",start:"top-=150 top",end:"+=100",scrub:2,toggleActions:"play none none reverse"}}).to(e,{background:"#000",duration:1}).to(".about__header",{color:"#efefef",duration:.3},"-=0.5")}),[]),l.a.createElement("div",{className:"about"},l.a.createElement("h3",{className:"about__header"},"About me"),l.a.createElement("p",{className:"about__description"},"My name is ",l.a.createElement("span",{className:"green"},"Jakub")),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"),l.a.createElement("h1",null,"s"))},B=(t(40),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null),l.a.createElement("div",{className:"cos"},"s"),l.a.createElement("div",{className:"background__wrapper"},l.a.createElement(m,null),l.a.createElement(T,null),l.a.createElement(L,null)))});t(41);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,{basename:"/Portfolio"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:B})))),document.getElementById("root"))}],[[31,2,3]]]);
//# sourceMappingURL=main.923d4fde.chunk.js.map