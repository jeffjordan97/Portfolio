import{a as g,b as w,c as k,d as S,e as f,f as b,g as E,h,i as I,j as F,k as D,l as R,m as B,n as z,o as u}from"./chunk-7ZU4QYPD.js";import{i as U}from"./chunk-6LEB2BVH.js";import{Ba as m,Ca as l,Ea as t,Fa as o,Ga as s,Ia as y,Oa as a,Pa as c,Ra as M,U as v,hb as P,ia as C,jb as O,oa as j,pa as _,sa as r,ta as x}from"./chunk-7QAXJ3ZB.js";var H=[{name:"WMS Platform Modernization",description:"Produced RESTful Java services as part of an agile team in supporting with a large-scale platform modernization of QVC UK's warehouse management system, a multi-million pound project.",technologies:[g,h,E,D,R,I,F,z,u],duration:"18 months"},{name:"Marketing Preferences Interface",description:"Curated a simple web application for CS support to update the marketing preferences of QVC UK\u2019s customers, leading architectural decisions and stakeholder discussions.",technologies:[f,w,k,S,b],duration:"4 months"},{name:"Dropship Management System",description:"Created Java services with an Angular UI as part of an agile team, utilizing CI/CD pipelines, to implement a dropshipping solution for QVC UK.",technologies:[g,h,f,B,u],duration:"12 months"}];function T(n,p){if(n&1&&(t(0,"div",14),s(1,"img",15),t(2,"p"),a(3),o()()),n&2){let e=p.$implicit;r(),l("src",e.image,j),r(2),c(e.name)}}function W(n,p){if(n&1&&(t(0,"div",5)(1,"div",6),s(2,"div",7),t(3,"h4"),a(4),o()(),t(5,"div",8),s(6,"i",9),t(7,"p",10),a(8),o()(),t(9,"div",11)(10,"p"),a(11),o()(),t(12,"div",12),m(13,T,4,2,"div",13),o()()),n&2){let e=p.$implicit;r(4),c(e.name),r(4),c(e.duration),r(3),c(e.description),r(2),l("ngForOf",e.technologies)}}var N=(()=>{class n{elementRef;projects=H;constructor(e){this.elementRef=e}projectCards;ngAfterViewInit(){this.projectCards=Array.from(this.elementRef.nativeElement.querySelectorAll(".project"))}onScroll(){this.projectCards.forEach(e=>{let i=e.getBoundingClientRect().top;window.innerHeight*.8>i&&e.classList.add("slideUpFadeIn")})}static \u0275fac=function(i){return new(i||n)(x(C))};static \u0275cmp=v({type:n,selectors:[["app-projects"]],hostBindings:function(i,d){i&1&&y("scroll",function(){return d.onScroll()},!1,_)},standalone:!0,features:[M],decls:11,vars:1,consts:[["id","work",1,"section"],[1,"container"],[1,"header"],[1,"projects"],["class","project box-shadow hover-shadow fadeInBefore",4,"ngFor","ngForOf"],[1,"project","box-shadow","hover-shadow","fadeInBefore"],[1,"project-title"],[1,"project-icon"],[1,"project-duration"],[1,"pi","pi-calendar"],[1,"bolder"],[1,"project-description"],[1,"project-skills"],["class","technology",4,"ngFor","ngForOf"],[1,"technology"],["loading","lazy",1,"technology-image",3,"src"]],template:function(i,d){i&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"p"),a(4,"WORK"),o(),t(5,"h2"),a(6,"My Recent Work"),o(),t(7,"p"),a(8," Whether working as part of an agile team \u{1F91D} or leading technical initiatives, here are a few standout projects that highlight my journey as a software engineer. \u2705 "),o()(),t(9,"div",3),m(10,W,14,4,"div",4),o()()()),i&2&&(r(10),l("ngForOf",d.projects))},dependencies:[O,P,U],styles:[".projects[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--s-l)}.project[_ngcontent-%COMP%]{background:var(--bg-secondary);border-radius:var(--s-m);padding:var(--s-l) var(--s-m);display:flex;flex-direction:column;gap:var(--s-m)}.project-skills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--s-m)}#work[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]{background-color:var(--bg)}.project-title[_ngcontent-%COMP%], .project-duration[_ngcontent-%COMP%]{display:flex;gap:var(--s-s);align-items:center}.project-description[_ngcontent-%COMP%]{flex-grow:1}.project-icon[_ngcontent-%COMP%]{background-image:url(/assets/images/git-pull-request.svg);height:16px;width:16px;background-repeat:no-repeat;flex-shrink:0;filter:var(--project-git-icon-style)}[_ngcontent-%COMP%]:root[data-theme=dark]   .project-icon[_ngcontent-%COMP%]{filter:invert(1)}.project-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:60px}.project-card[_ngcontent-%COMP%]{display:flex;align-content:space-between;flex-flow:wrap;transition:all .3s ease-out}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px) scale(1.005) translateZ(0)}.project-card-technologies[_ngcontent-%COMP%]{display:flex;text-wrap:nowrap;flex-wrap:wrap}.technology[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:1.25rem}.selected-technology-label[_ngcontent-%COMP%]{border:2px solid #007bff;border-radius:5px}.technology[_ngcontent-%COMP%]   .selected-technology[_ngcontent-%COMP%]{width:100%}.technology[_ngcontent-%COMP%]   .technology-btn[_ngcontent-%COMP%]:checked ~ .selected-technology[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){.projects[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.project[_ngcontent-%COMP%]:nth-child(3){grid-column:1/3}}@media (max-width: 767.98px){.projects[_ngcontent-%COMP%]{grid-template-columns:1fr}.project[_ngcontent-%COMP%]:nth-child(3){grid-column:1}}"]})}return n})();export{N as a};
