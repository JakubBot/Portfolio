(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{69:function(i,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return h}));var a=e(46),s=e(47),o=e(51),n=e(6),r=e(70);window.PIXI=o;var h=function(){function i(){Object(a.a)(this,i),this.DOM={image:".js-liquid-image"},this.options={bindTimelineToScroll:!1},this.images=document.querySelectorAll(this.DOM.image),this.app=null}return Object(s.a)(i,[{key:"init",value:function(){null!==this.images?this.liquidImages():console.error("".concat(this.DOM.image," does not exist in the DOM!"))}},{key:"liquidImages",value:function(){for(var i=0;i<this.images.length;i++){var t=this.images[i].clientWidth,e=this.images[i].clientHeight;this.app=new o.Application({width:t,height:e,transparent:!0,resolution:window.devicePixelRatio,resizeTo:this.images[i]}),this.images[i].appendChild(this.app.view);var a=this.images[i].getAttribute("data-image"),s=o.Sprite.from(a);s.name=a,s.width=t,s.height=e,s.anchor.set(.5),s.position.x=t/2,s.position.y=e/2,this.app.stage.addChild(s);var h=this.images[i].getAttribute("data-displacement-map"),l=o.Sprite.from(h),p=new o.filters.DisplacementFilter(l);this.app.stage.filterArea=this.app.screen,this.app.stage.filters=[p],this.app.stage.addChild(l),this.app.view.style.touchAction="auto",l.name=h,l.width=t,l.height=e,l.anchor.set(.5),l.position.y=e/2,l.position.x=t/2;var g=n.a.timeline({paused:!0}),m=this.images[i].querySelector("canvas");if(g.add("start").fromTo(m,{autoAlpha:0},{duration:.4,autoAlpha:1,ease:"power3.out"},"start").fromTo(m,{scale:1.5},{duration:1,scale:1,ease:"power3.out"},"start").fromTo(p.scale,{x:150,y:150},{duration:1.6,x:0,y:0,ease:"power3.out",onComplete:function(){}},"start"),!0===this.options.bindTimelineToScroll)new r.a({triggerElement:this.images[i],triggerHook:1,duration:"100%",gsap:{timeline:g}});else new r.a({triggerElement:this.images[i],triggerHook:.8,gsap:{timeline:g,reverseSpeed:2}})}}}]),i}()}}]);
//# sourceMappingURL=6.683c6a87.chunk.js.map