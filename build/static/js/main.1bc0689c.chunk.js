(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),s=n.n(a),i=n(31),r=n.n(i),o=(n(64),n(65),n(11)),l=n.n(o),d=n(16),j=n(4),u=(n(25),n(37),n(5)),b=n(6),m=n(22),p=n.n(m),h=(n(109),n(110),n(8)),O=n.n(h),x=n(123),f=n(124),v=n(125),g=n(126),y=n(127),N=n(128),C=n(129),w=n(130),k=n(56);n(111);function E(e){var t,n=Object(a.useState)([]);Object(a.useEffect)((function(){n=e.current.getElementsByTagName("img");for(var t=function(e){var t=n[e];t.style="cursor:pointer;",t.addEventListener("click",(function(t){s(t,e),e}))},c=0;c<n.length;c++)t(c);return function(){i()}}),[]);var s=function(e,a){!function(e,n){void 0==t&&((t=document.createElement("div")).addEventListener("click",i),document.body.append(t));for(var a=[],s=0;s<e.length;s++)a.push(Object(c.jsx)("img",{src:e[s].src}));console.log(e[n].src),r.a.render(Object(c.jsx)("div",{className:"lightbox",children:Object(c.jsx)("div",{className:"s-image",children:a[n]})}),t)}(n,a)};function i(){void 0!=t&&(document.body.removeChild(t),t=void 0)}}function S(e){var t=Object(a.useState)(null),n=Object(j.a)(t,2),s=(n[0],n[1]),i=Object(a.useState)(!1),r=Object(j.a)(i,2),o=(r[0],r[1]),l=Object(a.useState)([]),d=Object(j.a)(l,2),u=d[0],m=d[1],p=Object(a.useState)(!1),h=Object(j.a)(p,2),O=h[0],x=h[1],f=Object(b.d)();Object(a.useEffect)((function(){fetch("https://intercuraduria.com/tienda/wp-json/wp/v2/posts?categories="+e.category+"&_embed").then((function(e){return e.json()})).then((function(e){m(e),o(!0)}),(function(e){o(!0),s(e),console.log("error",e)}))}),[e.category]),Object(a.useEffect)((function(){void 0!=f.location.pathname.split("/")[2]?x(!1):x(!0)}),[f.location.pathname]);var v=Object(a.useRef)();return Object(a.useEffect)((function(){var e=document.createElement("link");return e.href="https://intercuraduria.com/tienda/wp-includes/css/dist/block-library/style.min.css?ver=5.6",e.async=!0,e.rel="stylesheet",document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(c.jsx)("div",{className:"contentContainer",ref:v,children:Object(c.jsx)("div",{className:"postsContainer",style:{marginTop:O?"3%":"60px"},children:u.map((function(t){var n=f.location.pathname.split("/"),a=t._embedded["wp:featuredmedia"],s=void 0!=a?a[0].source_url:"https://lh3.googleusercontent.com/proxy/5WERPyHoo0ZN0eGoCicwboGUuZ5xm1l9Yyicdx_IJJed68Wi6oDPM8eFe-0NBwhfltGw0gGM4PcV7lPLTJ61xmxYLkKkmBmNDKSGkn8hce-AXq6puvCxcJ-vv9KYTCuq";return t.id==n[2]?Object(c.jsx)(T,{value:t,posts:u,header:s},t.id):O&&Object(c.jsx)(M,{header:s,path:e.path,value:t},t.id)}))})})}function M(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),s=n[0],i=n[1],r=e.value,o=Object(b.d)(),l=s?0:100,d=Object(u.c)({transform:"translate(0,"+l+"%)"}),m=void 0!==e.header?e.header:"";return Object(c.jsxs)("div",{className:"postStyle button",onMouseOver:function(){i(!0)},onMouseLeave:function(){i(!1)},onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,o.push(e.path+"/"+r.id)},children:[Object(c.jsx)("div",{className:"flayer-image",children:Object(c.jsx)("img",{alt:"Imagen",src:m})}),Object(c.jsx)(u.a.div,{className:"flayer-info",style:d,children:Object(c.jsx)("p",{children:p()(e.value.title.rendered)})})]})}function I(e){var t=e.size;return Object(c.jsxs)("div",{className:"share",children:[Object(c.jsx)(x.a,{url:window.location.href,children:Object(c.jsx)(f.a,{size:t,round:!0})}),Object(c.jsx)(v.a,{url:window.location.href,children:Object(c.jsx)(g.a,{size:t,round:!0})}),Object(c.jsx)(y.a,{url:window.location.href,children:Object(c.jsx)(N.a,{size:t,round:!0})}),Object(c.jsx)(C.a,{url:window.location.href,children:Object(c.jsx)(w.a,{size:t,round:!0})})]})}function T(e){var t=new Date(e.value.date),n=(Object(b.e)(),s.a.createRef());return E(n),Object(c.jsx)("main",{id:"site-content",className:"openPost",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("div",{className:"entry-title",children:p()(e.value.title.rendered)}),Object(c.jsx)("div",{className:"info",children:Object(c.jsx)("div",{className:"author-date",children:Object(c.jsxs)("div",{className:"date",children:[Object(c.jsx)(k.a,{style:{marginRight:"3px"}}),t.getDay()+"/"+t.getMonth()+"/"+t.getFullYear()]})})}),Object(c.jsx)("div",{className:"entry-content post-inner thin",ref:n,children:p()(e.value.content.rendered)}),Object(c.jsx)(I,{size:30}),Object(c.jsx)(z,{posts:e.posts})]})},e.value.id)}function P(e,t){return Math.random()*(t-e)+e}function z(e){var t=parseInt(P(0,e.posts.length)),n=parseInt(P(0,e.posts.length)),a=parseInt(P(0,e.posts.length));return Object(c.jsxs)("div",{className:"more-posts",children:[Object(c.jsx)("div",{className:"title-more-posts",children:"Otras publicaciones"}),Object(c.jsxs)("div",{className:"re-post-container",children:[Object(c.jsx)(L,{value:e.posts[t]}),Object(c.jsx)(L,{value:e.posts[n]}),Object(c.jsx)(L,{value:e.posts[a]})]})]})}function L(e){var t=Object(b.d)();return Object(c.jsx)("div",{className:"recomended-post",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,t.push(t.location.pathname.split("/")[0]+e.value.id)},children:p()(e.value.title.rendered)},e.value.id)}function A(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],s=n[1],i=Object(b.e)();return Object(a.useEffect)((function(){i.pathname.includes(e.path)?(s(!0),e.open()):s(!1)}),[i.pathname,e.path,e]),c&&e.showContent?e.child:null}var H=n(15),R=n(13),F=(n(116),n(21));function q(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)([]),o=Object(j.a)(r,2),l=(o[0],o[1],Object(a.useState)(null)),d=Object(j.a)(l,2),u=(d[0],d[1]),b=Object(a.useState)(!1),m=Object(j.a)(b,2),p=(m[0],m[1]);return Object(a.useEffect)((function(){fetch("https://intercuraduria.com/tienda/wp-json/wp/v2/posts?categories="+e.category+"&_embed").then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(t){t.categories.includes(10)&&10!=e.category||n.push(t)})),i(n),p(!0)}),(function(e){p(!0),u(e),console.log("error",e)}))}),[e.category]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"titlePrograma",children:Object(c.jsx)("span",{children:e.type})}),Object(c.jsx)("div",{className:"infoPrograma",children:Object(c.jsx)("div",{className:"activos-moto",children:Object(c.jsx)("span",{className:"moto",children:"Intercuraduria ofrece programas educativos para dialogar, debatir y compartir conocimientos e inquietudes entorno a la pr\xe1ctica curatorial y art\xedstica desde diferentes posicionamientos actuales."})})}),Object(c.jsx)("div",{className:"category",children:s.length>0?s.map((function(t){return Object(c.jsx)(D,{inactivo:10==e.category,type:e.type.toLowerCase(),item:t},t.id)})):Object(c.jsxs)("div",{className:"no-items",children:["Por el momento no contamos con ning\xfan programa activo ",Object(c.jsx)(F.d,{}),"."]})})]})}function D(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(!1),o=Object(j.a)(r,2),l=o[0],d=o[1],u=Object(b.d)(),m=function(){l||(i(!s),s?u.push("/"+e.type):u.push("/"+e.type+"/"+e.item.id))},h=Object(b.e)().pathname.split("/");Object(a.useEffect)((function(){h[2]==e.item.id?(i(!0),console.log(h),"suscribe"==h[3]&&1==e.inactivo&&d(!0)):(i(!1),d(!1))}),[h,i,e.item.id,e.inactivo]);var O=function(){d(!1),i(!1),u.push("/"+e.type)},x=s?"600px":e.inactivo?"200px":"300px",f=s?"1800px":"300px",v=s?"blur(0px)":"blur(4px)";return Object(c.jsxs)("div",{className:e.inactivo?"programaItem inactivo":"programaItem ",style:{maxWidth:x,maxHeight:f},children:[Object(c.jsxs)("div",{className:"itemTitle",onClick:m,children:[e.item.title.rendered,e.inactivo&&Object(c.jsx)("small",{children:" [Finalizado] "})]}),Object(c.jsx)("div",{className:"itemContent",id:l?"":"site-content",style:{filter:v},onClick:m,children:l?Object(c.jsx)(W,{close:O,item:e.item}):p()(e.item.content.rendered)}),Object(c.jsxs)("div",{className:"itemButtons",children:[Object(c.jsx)("div",{className:"buttonMore",onClick:function(){l&&O(),i(!s)},children:Object(c.jsx)("span",{onClick:m,children:s?"Menos informaci\xf3n":"M\xe1s informaci\xf3n"})}),!e.inactivo&&Object(c.jsx)("div",{className:"buttonRegister",onClick:function(){i(!0),d(!0),u.push("/"+e.type+"/"+e.item.id+"/suscribe")},children:Object(c.jsx)("span",{children:"\xa1Inscr\xedbete!"})})]})]},e.item.id)}function W(e){console.log(e.item.title);var t=Object(a.useState)(0),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)({nombre:"",mail:"",telefono:"",comentarios:"",curso:void 0!==e.item.title?e.item.title.rendered:"Error"}),o=Object(j.a)(r,2),l=o[0],d=o[1],u=function(e){d(Object(R.a)(Object(R.a)({},l),{},Object(H.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"registerContainer",children:[2===s&&Object(c.jsxs)("div",{className:"error",onClick:function(e){i(0)},children:["Por favor agrega tu nombre completo y una forma de contacto ",Object(c.jsx)("i",{children:"(Correo o tel\xe9fono)"}),"."]}),1===s&&Object(c.jsx)("div",{className:"enviado",children:"Gracias, nos pondremos en contacto contigo lo m\xe1s pronto posible."}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("h3",{children:["Registrate en ",e.item.title.rendered]}),Object(c.jsx)("div",{className:"aclaracion",children:"Despu\xe9s de darte de alta en este registro, nosotras te contactaremos v\xeda mail \xf3 WhatsApp."}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"nombre",placeholder:"Nombre completo",onChange:u})}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"mail",placeholder:"Email",onChange:u})}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"telefono",placeholder:"N\xfamero telef\xf3nico",onChange:u})}),Object(c.jsx)("div",{className:"textarea",children:Object(c.jsx)("textarea",{name:"comentarios",placeholder:"Comentarios...",onChange:u})})]}),Object(c.jsxs)("div",{className:"registerButtonsContainer",children:[Object(c.jsx)("button",{className:"send",onClick:function(){if(""===l.nombre||""===l.mail&&""===l.telefono)i(2);else{i(1);var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};fetch("https://intercuraduria.com/api/register",e).then((function(e){return e.json()})).then((function(e){return console.log(e)})),console.log("Enviado formulario")}},children:"Enviar"}),Object(c.jsx)("button",{className:"cancel",onClick:e.close,children:"Cancelar"})]})]})}n(117);var _=n(30);function B(e){var t=void 0==e.visible||e.visible;return Object(c.jsxs)("div",{className:"menu",children:["center"==e.logo&&Object(c.jsx)(J,{}),Object(c.jsxs)("div",{className:"menuContainer",style:{visibility:t},children:["left"==e.logo&&Object(c.jsx)(J,{}),Object(c.jsx)(Y,{top:e.top,submenu:[{name:"Cursos",link:"/cursos"},{name:"Talleres",link:"/talleres"},{name:"PROAC",link:"/proac"}],children:"Programas"}),Object(c.jsx)(Y,{top:e.top,link:"/textos",children:"Textos"}),Object(c.jsx)(Y,{top:e.top,link:"/proyectos",children:"Proyectos"}),Object(c.jsx)(Y,{top:e.top,children:"Laboratorio"}),Object(c.jsx)(Y,{top:e.top,children:Object(c.jsx)("a",{href:"/tienda",target:"_blank",children:"Tienda"})})]})]})}function J(){var e=Object(b.d)();return Object(c.jsxs)("div",{className:"logo",onClick:function(){e.push("/")},children:[Object(c.jsx)("span",{children:"INTER"}),Object(c.jsx)("span",{children:"CURADURIA"})]})}function G(e){return Object(c.jsx)("div",{className:"social-icons",children:Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("a",{href:"https://www.facebook.com/Intercuraduria-101411698614498",target:"_blank",children:Object(c.jsx)(F.b,{})}),Object(c.jsx)("a",{href:"https://www.instagram.com/intercuraduria",target:"_blank",children:Object(c.jsx)(F.c,{})})]})})}function Y(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(!1),o=Object(j.a)(r,2),m=o[0],p=o[1],h=(O.a.subMenuFontSize,Object(b.d)()),x=Object(b.e)(),f=Object(u.c)({to:function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0!==e.submenu?e.submenu.length:0,t.next=3,n({opacity:s?1:0,width:s?"100%":"0%",fontColor:s?O.a.mainColor:O.a.secondaryColor,submenuHeight:"scale(1,0)"});case 3:return t.next=5,n({submenuHeight:s?"scale(1,1)":"scale(1,0)"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});Object(a.useEffect)((function(){if(void 0!=e.link){var t=x.pathname.split("/")[1];t==e.link.replace("/","")?(console.log("In page ",t),p(!0)):p(!1)}}));var v=e.top?{backgroundColor:m?O.a.mainColor:"transparent",maxHeight:m?"40px":"",marginTop:"-3px"}:void 0;return Object(c.jsxs)(u.a.div,{className:void 0!==e.submenu?"menuItem has-submenu":"menuItem",style:v,onMouseOver:function(){i(!0)},onMouseLeave:function(){i(!1)},onClick:function(){void 0!==e.link&&(h.push("/"),h.push(e.link)),void 0!==e.link&&(h.push("/"),h.push(e.link))},children:[Object(c.jsx)(u.a.button,{style:{color:m?"white":""},children:e.children}),void 0!==e.submenu&&Object(c.jsx)(_.a,{size:"25px",style:{marginLeft:5}}),Object(c.jsx)(u.a.div,{className:"menuItemLine",style:f}),void 0!==e.submenu&&Object(c.jsx)(u.a.div,{className:"subMenu",style:{transform:f.submenuHeight},children:Object(c.jsx)(u.a.ul,{children:void 0!==e.submenu&&e.submenu.map((function(e){return Object(c.jsx)("li",{onClick:function(){void 0!==e.link&&h.push(e.link)},children:e.name},e.name)}))})})]})}function K(e){var t=Object(b.d)();return Object(c.jsx)("div",{className:"sideMenuItem",onClick:function(){t.push(e.path)},children:e.children})}var U=function(e){return Object(c.jsxs)("div",{className:"homeContainer",children:[Object(c.jsxs)("div",{className:"sideMenu",children:[Object(c.jsx)(K,{path:"/nosotras",children:"Nosotras"}),Object(c.jsx)(K,{path:"/contacto",children:"Contacto"})]}),Object(c.jsx)(B,{top:!1,logo:"center"}),Object(c.jsx)(G,{followus:!0})]})};n(118);function Z(e){return Object(c.jsx)("div",{className:"proac-container",children:Object(c.jsxs)("div",{className:"proac-card",children:[Object(c.jsx)("div",{className:"imagen"}),Object(c.jsxs)("div",{className:"presentacion",children:[Object(c.jsx)("p",{children:"Programa de Acompa\xf1amiento Creativo"}),Object(c.jsxs)("p",{children:["Te presentamos ",Object(c.jsx)("span",{children:"PROAC"}),", nuestro programa de acompan\u0303amientos creativos que permiten la comunicaci\xf3n entre artistas, curadores o alg\xfan otrx agente cultural."]}),Object(c.jsx)("p",{children:" PROAC te ofrece un espacio seguro y privado de asesoramiento personalizado para potenciar tus proyectos."}),Object(c.jsx)("p",{children:"Todas las ideas son buenas por lo cual hay que cuidarlas, procurarlas y potenciarlas."}),Object(c.jsxs)("p",{children:["\xbfQuieres saber m\xe1s de este programa?",Object(c.jsx)("br",{}),"Manda un mensaje a ",Object(c.jsx)("a",{className:"correo",href:"mailto: intercuraduriaproac@gmail.com",children:"intercuraduriaproac@gmail.com"})]})]})]})})}var Q=n(57),V=n(58);function X(e){var t=Object(b.e)(),n=Object(Q.a)("screen and (max-width: 1000px)"),s=Object(a.useState)(!1),i=Object(j.a)(s,2),r=i[0],o=i[1],m=Object(a.useState)(!1),p=Object(j.a)(m,2),h=p[0],O=p[1];Object(a.useEffect)((function(){"/"===t.pathname&&C()}),[t.pathname]);Object(b.d)();Object(a.useEffect)((function(){0==n&&g("visible")}));var x=Object(a.useState)("hidden"),f=Object(j.a)(x,2),v=f[0],g=f[1],y=Object(u.c)({to:function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h?"0%":"50%",e.next=3,t({minHeight:h?"100%":"0%"});case 3:return e.next=5,t({transform:"translate(0px,"+n+")"});case 5:o(h);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),N=function(){O(!0)},C=function(){O(!1),o(!1)},w=function(){"hidden"==v&&g("visible"),"visible"==v&&g("hidden")},k=function(){return Object(c.jsx)("div",{className:"MenuIcon",onClick:w,children:Object(c.jsx)(V.a,{size:"2rem",color:"white"})})};return Object(c.jsxs)(u.a.div,{className:"content",style:y,children:[h&&Object(c.jsxs)("div",{className:"black-on-top",style:{maxHeight:"visible"==v?"none":"60px"},children:[n&&Object(c.jsx)(k,{}),"hidden"!=v&&Object(c.jsx)(B,{logo:n?"center":"left",visible:v,clickMenu:w,top:!0})]}),Object(c.jsx)(A,{open:N,showContent:r,path:"/textos",child:Object(c.jsx)(S,{path:"/textos",category:"2"})}),Object(c.jsx)(A,{open:N,showContent:r,path:"/proyectos",child:Object(c.jsx)(S,{path:"/proyectos",category:"3"})}),Object(c.jsx)(A,{open:N,showContent:r,path:"/cursos",child:Object(c.jsx)(q,{category:"4",type:"Cursos"})}),Object(c.jsx)(A,{open:N,showContent:r,path:"/talleres",child:Object(c.jsx)(q,{category:"5",type:"Talleres"})}),Object(c.jsx)(A,{open:N,showContent:r,path:"/proac",child:Object(c.jsx)(Z,{})}),h&&Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer-logo",children:[Object(c.jsx)(J,{}),Object(c.jsxs)("span",{className:"name",children:["Intercuraduria 2021",Object(c.jsx)("br",{}),"intercuraduria@gmail.com"]})]}),Object(c.jsx)(G,{})]})]})}function $(e,t){return Math.random()*(t-e)+e}function ee(){var e=[O.a.blue1,O.a.blue2,O.a.blue3,O.a.purple1,O.a.purple2,O.a.purple3],t=$(0,e.length);return e[parseInt(t)]}var te=function(e){var t=e.importance*window.innerWidth/100,n=$(6e3,1e4),a=Object(u.c)({to:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=$(-120,window.innerWidth),c=$(-100,window.innerHeight),e.next=5,t({left:n,top:c});case 5:e.next=0;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),from:{top:$(-120,window.innerHeight),left:$(-100,window.innerWidth),border:"3px solid "+ee()},config:{duration:n,mass:1,tension:180,friction:12}});return Object(c.jsx)(u.a.div,{className:"circle",style:Object(R.a)({width:t,height:t},a)})};function ne(e,t){return Math.random()*(t-e)+e}var ce=function(e){for(var t={},n=0;n<6;n++){var s=ne(0,window.innerWidth),i=ne(0,window.innerHeight);t[n]={key:n,importance:ne(10,30),position:{x:s,y:i},isEmpty:ne(0,10)>=5}}return Object(a.useEffect)((function(){return function(){t={}}})),Object(c.jsx)("div",{className:"circleManager",children:Object.keys(t).map((function(e){return Object(c.jsx)(te,{importance:t[e].importance,position:t[e].position,isEmpty:t[e].isEmpty},e)}))})},ae=n(14),se=(n(119),n.p+"static/media/Emi.98f50c6b.png"),ie=n.p+"static/media/Adriana.5a4ae077.png";n.p;function re(e){return Object(c.jsxs)("div",{className:"nosotras",children:[Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("p",{children:"Somos un grupo de curadoras interesadas en abordar la Curadur\xeda desde diferentes escenarios, enfoques y circunstancias contempor\xe1neas, tanto en M\xe9xico como en diferentes latitudes de Latinoam\xe9rica."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Intercuradur\xeda"})," se establece como una plataforma digital y laboratorio curatorial para dialogar, debatir y compartir conocimientos e inquietudes entorno a la pr\xe1ctica curatorial desde diferentes posicionamientos actuales. A partir de nuestro programa compuesto de cursos y talleres, elaborados desde diversos imaginarios y realidades de la cultura contempor\xe1nea, evidenciamos la dimensi\xf3n curatorial desde diferentes campos de acci\xf3n."]})]}),Object(c.jsx)(oe,{})]})}function oe(){return Object(c.jsxs)("div",{className:"integrantes",children:[Object(c.jsx)(le,{foto:se}),Object(c.jsx)(le,{foto:ie})]})}function le(e){return Object(c.jsxs)("div",{className:"integrante",children:[Object(c.jsx)("img",{src:e.foto}),Object(c.jsxs)("div",{className:"int-info",children:[Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"Artista y curadora independiente"})}),Object(c.jsx)("p",{children:Object(c.jsx)("i",{children:"Co fundadora de intercuraduria"})})]})]})}n(120);function de(){return Object(c.jsxs)("div",{className:"contacto",children:[Object(c.jsxs)("div",{className:"formulario",children:[Object(c.jsx)("h2",{children:"\xa1\xdanete a nuestra comunidad!"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{name:"nombre",placeholder:"Nombre"}),Object(c.jsx)("input",{name:"correo",placeholder:"Correo"}),Object(c.jsx)("textarea",{placeholder:"D\xe9janos un comentario..."}),Object(c.jsx)("div",{className:"button",children:"Enviar"})]})]}),Object(c.jsxs)("div",{className:"mandanos-un-mail",children:[Object(c.jsx)("p",{children:"\xbfTienes alg\xfan taller que te gustar\xeda proponernos?"}),Object(c.jsxs)("p",{children:["M\xe1ndanos un correo a ",Object(c.jsx)("b",{children:"contacto@intercuraduria.com"})]})]})]})}function je(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(u.c)({width:n?"100%":"0%",config:u.b.stiff}),r=Object(b.e)(),o=Object(b.d)();Object(a.useEffect)((function(){"/"===r.pathname&&d()}),[r.pathname]);var l=function(){s(!0)},d=function(){s(!1),o.push("/"),console.log("close")};return Object(c.jsxs)(u.a.div,{id:"sideContentManager",style:i,children:[Object(c.jsx)("div",{className:"side-close-content",onClick:d,children:Object(c.jsx)(F.a,{})}),Object(c.jsxs)("div",{className:"side-content",children:[Object(c.jsx)(A,{path:"/nosotras",showContent:!0,open:l,child:Object(c.jsx)(re,{})}),Object(c.jsx)(A,{path:"/contacto",showContent:!0,open:l,child:Object(c.jsx)(de,{})})]})]})}var ue=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(ae.a,{children:[Object(c.jsx)(U,{}),Object(c.jsx)(X,{}),Object(c.jsx)(je,{})]}),Object(c.jsx)(ce,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ue,{})}),document.getElementById("root")),be()},25:function(e,t,n){},37:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},8:function(e,t,n){e.exports={mainColor:"#4c56ac",secondaryColor:"#7f7eaa",subMenuFontSize:"3",subMenuFontSizeHover:"3.3",subMenuFontSizeClick:"3.5",darkenColor:"#2a2357",blue1:"#193d7e",blue2:"#121672",blue3:"#10129e",purple1:"#402f88",purple2:"#393fc0",purple3:"#434394"}},91:function(e,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.1bc0689c.chunk.js.map