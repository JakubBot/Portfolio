(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{75:function(i,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return h}));var a=t(52),s=t(53),o=t(57),n=t(5),r=t(76);window.PIXI=o;var h=function(){function i(){Object(a.a)(this,i),this.DOM={image:".js-liquid-image"},this.options={bindTimelineToScroll:!1},this.images=document.querySelectorAll(this.DOM.image),this.app=null}return Object(s.a)(i,[{key:"init",value:function(){null!==this.images?this.liquidImages():console.error("".concat(this.DOM.image," does not exist in the DOM!"))}},{key:"liquidImages",value:function(){for(var i=0;i<this.images.length;i++){var e=this.images[i].clientWidth,t=this.images[i].clientHeight;this.app=new o.Application({width:e,height:t,transparent:!0,resolution:window.devicePixelRatio,resizeTo:this.images[i]}),this.images[i].appendChild(this.app.view);var a=this.images[i].getAttribute("data-image"),s=o.Sprite.from(a);s.name=a,s.width=e,s.height=t,s.anchor.set(.5),s.position.x=e/2,s.position.y=t/2,this.app.stage.addChild(s);var h=this.images[i].getAttribute("data-displacement-map"),p=o.Sprite.from(h),l=new o.filters.DisplacementFilter(p);this.app.stage.filterArea=this.app.screen,this.app.stage.filters=[l],this.app.stage.addChild(p),this.app.view.style.touchAction="pan-y",p.name=h,p.width=e,p.height=t,p.anchor.set(.5),p.position.y=t/2,p.position.x=e/2;var g=n.a.timeline({paused:!0}),m=this.images[i].querySelector("canvas");if(g.add("start").fromTo(m,{autoAlpha:0},{duration:.4,autoAlpha:1,ease:"power3.out"},"start").fromTo(m,{scale:1.5},{duration:1,scale:1,ease:"power3.out"},"start").fromTo(l.scale,{x:150,y:150},{duration:1.6,x:0,y:0,ease:"power3.out",onComplete:function(){}},"start"),!0===this.options.bindTimelineToScroll)new r.a({triggerElement:this.images[i],triggerHook:1,duration:"100%",gsap:{timeline:g}});else new r.a({triggerElement:this.images[i],triggerHook:.8,gsap:{timeline:g,reverseSpeed:2}})}}}]),i}()}}]);
//# sourceMappingURL=6.5d43d5c6.chunk.js.map