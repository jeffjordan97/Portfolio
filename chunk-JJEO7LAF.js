import{Ea as t,Fa as n,Ga as c,La as d,Ma as g,Na as p,Oa as i,Ra as h,U as m,h as l,jb as f}from"./chunk-7QAXJ3ZB.js";var u={welcome:"Hi there,",welcome_2:"I'm",firstName:"Jeffrey",lastName:"Jordan",roles:["Software Engineer","Web Developer","Backend Engineer","Problem Solver"],resumeLink:"",imagePath:"./assets/images/memoji.png"};var M=["typingText"],S=(()=>{class a{heroContent=u;textElement;destroy$=new l;typingSpeedMilliseconds=150;deletingSpeedMilliseconds=100;pauseBetweenWordsMilliseconds=1e3;wordIndex=0;isDeleting=!1;currentText="";loopTimeout;constructor(){}ngOnInit(){this.startAnimation()}startAnimation(){let r=this.heroContent.roles,e=r[this.wordIndex];this.isDeleting?this.currentText=e.substring(0,this.currentText.length-1):this.currentText=e.substring(0,this.currentText.length+1),this.textElement.nativeElement.innerHTML=this.currentText;let o=this.typingSpeedMilliseconds;!this.isDeleting&&this.currentText===e?(o=this.pauseBetweenWordsMilliseconds,this.isDeleting=!0):this.isDeleting&&this.currentText===""&&(this.isDeleting=!1,this.wordIndex=(this.wordIndex+1)%r.length,o=this.pauseBetweenWordsMilliseconds),this.loopTimeout=setTimeout(()=>this.startAnimation(),o)}ngOnDestroy(){this.loopTimeout&&clearTimeout(this.loopTimeout),this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=m({type:a,selectors:[["app-hero"]],viewQuery:function(e,o){if(e&1&&d(M,7),e&2){let s;g(s=p())&&(o.textElement=s.first)}},standalone:!0,features:[h],decls:19,vars:0,consts:[["id","hero",1,"section"],[1,"container"],[1,"memoji"],["src","./assets/images/memoji-hero.png"],[1,"hero-title"],[1,"wave-emoji"],[1,"primary"],[1,"hero-text"],["href","#contact",1,"primary-button"]],template:function(e,o){e&1&&(t(0,"section",0)(1,"div",1)(2,"div",2),c(3,"img",3),n(),t(4,"div",4)(5,"h2"),i(6,"Hi "),t(7,"span",5),i(8,"\u{1F44B}"),n(),i(9," I'm Jeff, The"),n(),t(10,"h1",6),i(11,"SOFTWARE"),n(),t(12,"h1"),i(13,"ENGINEER"),n()(),t(14,"div",7)(15,"p"),i(16," I specialize in designing, developing, and deploying high-quality software solutions. "),n()(),t(17,"a",8),i(18,"Let's Connect"),n()()())},dependencies:[f],styles:["section#hero[_ngcontent-%COMP%]{position:relative;height:auto;padding-top:10rem;display:flex;align-items:center}#hero[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--s-l);justify-content:center;align-items:center}.hero-title[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center}.hero-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:var(--s-m)}.hero-title[_ngcontent-%COMP%]   h1.primary[_ngcontent-%COMP%]{color:var(--primary)}.hero-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--s-m);max-width:650px;text-align:center}.memoji[_ngcontent-%COMP%]{background-color:var(--primary);border-radius:50%;padding:16px;box-shadow:0 0 20px 5px var(--primary)}.memoji[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:70px}.word-animator[_ngcontent-%COMP%]{display:flex;justify-content:center}.cursor[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_blink .8s infinite}.wave-emoji[_ngcontent-%COMP%]{animation-duration:1.8s;animation-iteration-count:infinite;animation-name:_ngcontent-%COMP%_wave;display:inline-block;transform-origin:70% 70%}@media (max-width: 767.98px){section#hero[_ngcontent-%COMP%]{padding-top:6rem}}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_wave{0%{transform:rotate(0)}10%{transform:rotate(-10deg)}20%{transform:rotate(12deg)}30%{transform:rotate(-10deg)}40%{transform:rotate(9deg)}50%{transform:rotate(0)}to{transform:rotate(0)}}"]})}return a})();export{S as a};
