(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),a=n.n(s),o=n(31),r=n.n(o),i=(n(62),n(63),n(11)),l=n.n(i),j=n(16),d=n(4),u=(n(25),n(37),n(5)),b=n(6),m=n(22),h=n.n(m),p=(n(107),n(108),n(8)),O=n.n(p),x="http://drokt.com/wordpress",f=n(122),v=n(123),g=n(124),N=n(125),y=n(126),w=n(127),C=n(128),k=n(129),E=n(56);n(109);function S(e){var t,n=Object(s.useState)([]);Object(s.useEffect)((function(){n=e.current.getElementsByTagName("img");for(var t=function(e){var t=n[e];t.style="cursor:pointer;",t.addEventListener("click",(function(t){a(t,e),e}))},c=0;c<n.length;c++)t(c);return function(){o()}}),[]);var a=function(e,s){!function(e,n){void 0==t&&((t=document.createElement("div")).addEventListener("click",o),document.body.append(t));for(var s=[],a=0;a<e.length;a++)s.push(Object(c.jsx)("img",{src:e[a].src}));console.log(e[n].src),r.a.render(Object(c.jsx)("div",{className:"lightbox",children:Object(c.jsx)("div",{className:"s-image",children:s[n]})}),t)}(n,s)};function o(){void 0!=t&&(document.body.removeChild(t),t=void 0)}}function M(e){var t=Object(s.useState)(null),n=Object(d.a)(t,2),a=(n[0],n[1]),o=Object(s.useState)(!1),r=Object(d.a)(o,2),i=(r[0],r[1]),l=Object(s.useState)([]),j=Object(d.a)(l,2),u=j[0],m=j[1],h=Object(s.useState)(!1),p=Object(d.a)(h,2),O=p[0],f=p[1],v=Object(b.d)();Object(s.useEffect)((function(){fetch(x+"/wp-json/wp/v2/posts?categories="+e.category+"&_embed").then((function(e){return e.json()})).then((function(e){m(e),i(!0)}),(function(e){i(!0),a(e),console.log("error",e)}))}),[e.category]),Object(s.useEffect)((function(){void 0!=v.location.pathname.split("/")[2]?f(!1):f(!0)}),[v.location.pathname]);var g=Object(s.useRef)();return Object(s.useEffect)((function(){var e=document.createElement("link");return e.href="http://drokt.com/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.6",e.async=!0,e.rel="stylesheet",document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(c.jsx)("div",{className:"contentContainer",ref:g,children:Object(c.jsx)("div",{className:"postsContainer",style:{marginTop:O?"10%":"60px"},children:u.map((function(t){var n=v.location.pathname.split("/"),s=t._embedded["wp:featuredmedia"],a=void 0!=s?s[0].source_url:"https://lh3.googleusercontent.com/proxy/5WERPyHoo0ZN0eGoCicwboGUuZ5xm1l9Yyicdx_IJJed68Wi6oDPM8eFe-0NBwhfltGw0gGM4PcV7lPLTJ61xmxYLkKkmBmNDKSGkn8hce-AXq6puvCxcJ-vv9KYTCuq";return t.id==n[2]?Object(c.jsx)(P,{value:t,posts:u,header:a},t.id):O&&Object(c.jsx)(I,{header:a,path:e.path,value:t},t.id)}))})})}function I(e){var t=Object(s.useState)(!1),n=Object(d.a)(t,2),a=n[0],o=n[1],r=e.value,i=Object(b.d)(),l=a?0:100,j=Object(u.c)({transform:"translate(0,"+l+"%)"}),m=void 0!==e.header?e.header:"";return Object(c.jsxs)("div",{className:"postStyle button",onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,i.push(e.path+"/"+r.id)},children:[Object(c.jsx)("img",{className:"flayer-image",alt:"Imagen",src:m}),Object(c.jsxs)(u.a.div,{className:"flayer-info",style:j,children:[Object(c.jsx)("p",{children:h()(e.value.title.rendered)}),Object(c.jsxs)("p",{className:"author",children:["Escrito por ",e.value._embedded.author[0].name]})]})]})}function T(e){var t=e.size;return Object(c.jsxs)("div",{className:"share",children:[Object(c.jsx)(f.a,{url:window.location.href,children:Object(c.jsx)(v.a,{size:t,round:!0})}),Object(c.jsx)(g.a,{url:window.location.href,children:Object(c.jsx)(N.a,{size:t,round:!0})}),Object(c.jsx)(y.a,{url:window.location.href,children:Object(c.jsx)(w.a,{size:t,round:!0})}),Object(c.jsx)(C.a,{url:window.location.href,children:Object(c.jsx)(k.a,{size:t,round:!0})})]})}function P(e){var t=new Date(e.value.date),n=(Object(b.e)(),a.a.createRef());return S(n),Object(c.jsx)("main",{id:"site-content",className:"openPost",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("div",{className:"image-header",children:Object(c.jsx)("div",{className:"entry-title-bg",style:{backgroundImage:"url("+e.header+")"}})}),Object(c.jsxs)("header",{className:"entry-header",children:[Object(c.jsx)("h3",{className:"entry-title",children:h()(e.value.title.rendered)}),Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"author-date",children:[Object(c.jsxs)("div",{className:"author",children:["Escrito por ",Object(c.jsx)("span",{children:e.value._embedded.author[0].name})]}),Object(c.jsxs)("div",{className:"date",children:[Object(c.jsx)(E.a,{style:{marginRight:"3px"}}),t.getDay()+"/"+t.getMonth()+"/"+t.getFullYear()]})]}),Object(c.jsx)(T,{size:30})]})]}),Object(c.jsx)("div",{className:"entry-content post-inner thin",ref:n,children:h()(e.value.content.rendered)}),Object(c.jsx)(L,{posts:e.posts})]})},e.value.id)}function z(e,t){return Math.random()*(t-e)+e}function L(e){var t=parseInt(z(0,e.posts.length)),n=parseInt(z(0,e.posts.length)),s=parseInt(z(0,e.posts.length));return Object(c.jsxs)("div",{className:"more-posts",children:[Object(c.jsx)("div",{className:"title-more-posts",children:"Otras publicaciones"}),Object(c.jsxs)("div",{className:"re-post-container",children:[Object(c.jsx)(F,{value:e.posts[t]}),Object(c.jsx)(F,{value:e.posts[n]}),Object(c.jsx)(F,{value:e.posts[s]})]})]})}function F(e){var t=Object(b.d)();return Object(c.jsx)("div",{className:"recomended-post",onClick:function(){t.push(t.location.pathname.split("/")[0]+e.value.id)},children:h()(e.value.title.rendered)},e.value.id)}function R(e){var t=Object(s.useState)(!1),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(b.e)();return Object(s.useEffect)((function(){o.pathname.includes(e.path)?(a(!0),e.open()):a(!1)}),[o.pathname,e.path,e]),c&&e.showContent?e.child:null}var H=n(15),_=n(13),q=(n(114),n(21));function A(e){var t=Object(s.useState)([]),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),l=(i[0],i[1],Object(s.useState)(null)),j=Object(d.a)(l,2),u=(j[0],j[1]),b=Object(s.useState)(!1),m=Object(d.a)(b,2),h=(m[0],m[1]);return Object(s.useEffect)((function(){fetch("http://drokt.com/wordpress/wp-json/wp/v2/posts?categories="+e.category+"&_embed").then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(t){t.categories.includes(5)&&5!=e.category||n.push(t)})),o(n),h(!0)}),(function(e){h(!0),u(e),console.log("error",e)}))}),[e.category]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"titlePrograma",children:Object(c.jsx)("span",{children:e.type})}),Object(c.jsx)("div",{className:"infoPrograma",children:Object(c.jsx)("div",{className:"activos-moto",children:Object(c.jsx)("span",{className:"moto",children:"Intercuraduria ofrece programas educativos para dialogar, debatir y compartir conocimientos e inquietudes entorno a la pr\xe1ctica curatorial y art\xedstica desde diferentes posicionamientos actuales."})})}),Object(c.jsx)("div",{className:"category",children:a.length>0?a.map((function(t){return Object(c.jsx)(D,{inactivo:5==e.category,type:e.type.toLowerCase(),item:t},t.id)})):Object(c.jsxs)("div",{className:"no-items",children:["Por el momento no contamos con ning\xfan programa activo ",Object(c.jsx)(q.d,{}),"."]})})]})}function D(e){var t=Object(s.useState)(!1),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)(!1),i=Object(d.a)(r,2),l=i[0],j=i[1],u=Object(b.d)(),m=function(){l||(o(!a),a?u.push("/"+e.type):u.push("/"+e.type+"/"+e.item.id))},p=Object(b.e)().pathname.split("/");Object(s.useEffect)((function(){p[2]==e.item.id?(o(!0),console.log(p),"suscribe"==p[3]&&1==e.inactivo&&j(!0)):(o(!1),j(!1))}),[p,o,e.item.id,e.inactivo]);var O=function(){j(!1),o(!1),u.push("/"+e.type)},x=a?"600px":e.inactivo?"200px":"300px",f=a?"1800px":"300px",v=a?"blur(0px)":"blur(4px)";return Object(c.jsxs)("div",{className:e.inactivo?"programaItem inactivo":"programaItem ",style:{maxWidth:x,maxHeight:f},children:[Object(c.jsxs)("div",{className:"itemTitle",onClick:m,children:[e.item.title.rendered,e.inactivo&&Object(c.jsx)("small",{children:" [Finalizado] "})]}),Object(c.jsx)("div",{className:"itemContent",id:l?"":"site-content",style:{filter:v},onClick:m,children:l?Object(c.jsx)(W,{close:O,item:e.item}):h()(e.item.content.rendered)}),Object(c.jsxs)("div",{className:"itemButtons",children:[Object(c.jsx)("div",{className:"buttonMore",onClick:function(){l&&O(),o(!a)},children:Object(c.jsx)("span",{onClick:m,children:a?"Menos informaci\xf3n":"M\xe1s informaci\xf3n"})}),!e.inactivo&&Object(c.jsx)("div",{className:"buttonRegister",onClick:function(){o(!0),j(!0),u.push("/"+e.type+"/"+e.item.id+"/suscribe")},children:Object(c.jsx)("span",{children:"\xa1Inscr\xedbete!"})})]})]},e.item.id)}function W(e){console.log(e.item.title);var t=Object(s.useState)(0),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)({nombre:"",mail:"",telefono:"",comentarios:"",curso:void 0!==e.item.title?e.item.title.rendered:"Error"}),i=Object(d.a)(r,2),l=i[0],j=i[1],u=function(e){j(Object(_.a)(Object(_.a)({},l),{},Object(H.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"registerContainer",children:[2===a&&Object(c.jsxs)("div",{className:"error",onClick:function(e){o(0)},children:["Por favor agrega tu nombre completo y una forma de contacto ",Object(c.jsx)("i",{children:"(Correo o tel\xe9fono)"}),"."]}),1===a&&Object(c.jsx)("div",{className:"enviado",children:"Gracias, nos pondremos en contacto contigo lo m\xe1s pronto posible."}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("h3",{children:["Registrate en ",e.item.title.rendered]}),Object(c.jsx)("div",{className:"aclaracion",children:"Despu\xe9s de darte de alta en este registro, nosotras te contactaremos v\xeda mail \xf3 WhatsApp."}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"nombre",placeholder:"Nombre completo",onChange:u})}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"mail",placeholder:"Email",onChange:u})}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{name:"telefono",placeholder:"N\xfamero telef\xf3nico",onChange:u})}),Object(c.jsx)("div",{className:"textarea",children:Object(c.jsx)("textarea",{name:"comentarios",placeholder:"Comentarios...",onChange:u})})]}),Object(c.jsxs)("div",{className:"registerButtonsContainer",children:[Object(c.jsx)("button",{className:"send",onClick:function(){if(""===l.nombre||""===l.mail&&""===l.telefono)o(2);else{o(1);var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};fetch("http://drokt.com:3080/api/register",e).then((function(e){return e.json()})).then((function(e){return console.log(e)})),console.log("Enviado formulario")}},children:"Enviar"}),Object(c.jsx)("button",{className:"cancel",onClick:e.close,children:"Cancelar"})]})]})}var B=n(28);n(115);n(116);function J(e){return Object(c.jsxs)("div",{className:"menu",children:["center"==e.logo&&Object(c.jsx)(G,{}),Object(c.jsxs)("div",{className:"menuContainer",children:["left"==e.logo&&Object(c.jsx)(G,{}),Object(c.jsx)(K,{top:e.top,submenu:[{name:"Cursos",link:"/cursos"},{name:"Talleres",link:"/talleres"},{name:"PROAC",link:"/proac"}],children:"Programas"}),Object(c.jsx)(K,{top:e.top,link:"/textos",children:"Textos"}),Object(c.jsx)(K,{top:e.top,link:"/proyectos",children:"Proyectos"}),Object(c.jsx)(K,{top:e.top,children:"Laboratorio"}),Object(c.jsx)(K,{top:e.top,children:Object(c.jsx)("a",{href:"http://drokt.com/wordpress",target:"_blank",children:"Tienda"})})]})]})}function G(){var e=Object(b.d)();return Object(c.jsxs)("div",{className:"logo",onClick:function(){e.push("/")},children:[Object(c.jsx)("span",{children:"INTER"}),Object(c.jsx)("span",{children:"CURADURIA"})]})}function Y(e){return Object(c.jsxs)("div",{className:"social-icons",children:[e.hasOwnProperty("followus")&&Object(c.jsx)("p",{children:"\xa1S\xedguenos en nuestras redes!"}),Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)("a",{href:"https://www.facebook.com/Intercuraduria-101411698614498",target:"_blank",children:Object(c.jsx)(q.b,{})}),Object(c.jsx)("a",{href:"https://www.instagram.com/intercuraduria",target:"_blank",children:Object(c.jsx)(q.c,{})})]})]})}function K(e){var t=Object(s.useState)(!1),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)(!1),i=Object(d.a)(r,2),m=i[0],h=i[1],p=(O.a.subMenuFontSize,Object(b.d)()),x=Object(b.e)(),f=Object(u.c)({to:function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0!==e.submenu?e.submenu.length:0,t.next=3,n({opacity:a?1:0,width:a?"100%":"0%",fontColor:a?O.a.mainColor:O.a.secondaryColor,submenuHeight:"scale(1,0)"});case 3:return t.next=5,n({submenuHeight:a?"scale(1,1)":"scale(1,0)"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});Object(s.useEffect)((function(){if(void 0!=e.link){var t=x.pathname.split("/")[1];t==e.link.replace("/","")?(console.log("In page ",t),h(!0)):h(!1)}}));var v=e.top?{backgroundColor:m?O.a.mainColor:"transparent",maxHeight:m?"40px":"",marginTop:"-3px"}:void 0;return Object(c.jsxs)(u.a.div,{className:void 0!==e.submenu?"menuItem has-submenu":"menuItem",style:v,onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},onClick:function(){void 0!==e.link&&(p.push("/"),p.push(e.link)),void 0!==e.link&&(p.push("/"),p.push(e.link))},children:[Object(c.jsx)(u.a.button,{style:{color:m?"white":""},children:e.children}),void 0!==e.submenu&&Object(c.jsx)(B.a,{size:"25px",style:{marginLeft:5}}),Object(c.jsx)(u.a.div,{className:"menuItemLine",style:f}),void 0!==e.submenu&&Object(c.jsx)(u.a.div,{className:"subMenu",style:{transform:f.submenuHeight},children:Object(c.jsx)(u.a.ul,{children:void 0!==e.submenu&&e.submenu.map((function(e){return Object(c.jsx)("li",{onClick:function(){void 0!==e.link&&p.push(e.link)},children:e.name},e.name)}))})})]})}function U(e){var t=Object(b.d)();return Object(c.jsx)("div",{className:"sideMenuItem",onClick:function(){t.push(e.path)},children:e.children})}var Z=function(e){return Object(c.jsxs)("div",{className:"homeContainer",children:[Object(c.jsxs)("div",{className:"sideMenu",children:[Object(c.jsx)(U,{path:"/nosotras",children:"Nosotras"}),Object(c.jsx)(U,{path:"/contacto",children:"Contacto"})]}),Object(c.jsx)(J,{top:!1,logo:"center"}),Object(c.jsx)(Y,{followus:!0})]})};n(117);function Q(e){return Object(c.jsxs)("div",{className:"proac-container",children:[Object(c.jsx)("div",{className:"imagen"}),Object(c.jsxs)("div",{className:"presentacion",children:[Object(c.jsxs)("p",{children:["Te presentamos ",Object(c.jsx)("span",{children:"PROAC"}),", nuestro programa de acompan\u0303amientos creativos que permiten la comunicaci\xf3n entre artistas, curadores o alg\xfan otro agente cultural."]}),Object(c.jsxs)("p",{children:[" Intercuraduria ofrece asesor\xedas creativas para que tus proyectos tengan un mejor desarrollo.",Object(c.jsx)("br",{}),"Ten la confianza de platicar de alguna pieza que se te haya ocurrido en un espacio seguro."]}),Object(c.jsxs)("p",{children:["\xbfQuieres saber m\xe1s de este programa?",Object(c.jsx)("br",{}),"Manda un mensaje a ",Object(c.jsx)("a",{className:"correo",href:"mailto: intercuraduriaproac@gmail.com",children:"intercuraduriaproac@gmail.com"})]})]})]})}function V(e){var t=Object(b.e)(),n=Object(s.useState)(!1),a=Object(d.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(!1),m=Object(d.a)(i,2),h=m[0],p=m[1];Object(s.useEffect)((function(){"/"===t.pathname&&v()}),[t.pathname]);var O=Object(b.d)();Object(s.useEffect)((function(){return O.listen((function(e){console.log("You changed the page to: ".concat(e.pathname))}))}),[O]);var x=Object(u.c)({to:function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h?"0%":"50%",e.next=3,t({minHeight:h?"100%":"0%"});case 3:return e.next=5,t({transform:"translate(0px,"+n+")"});case 5:r(h);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),f=function(){p(!0)},v=function(){p(!1),r(!1)};return Object(c.jsxs)(u.a.div,{className:"content",style:x,children:[h&&Object(c.jsxs)("div",{className:"black-on-top",children:[Object(c.jsx)("div",{className:"closeContent",onClick:function(){O.push("/")},children:Object(c.jsx)(B.b,{})}),Object(c.jsx)(J,{logo:"left",top:!0})]}),Object(c.jsx)(R,{open:f,showContent:o,path:"/textos",child:Object(c.jsx)(M,{path:"/textos",category:"6"})}),Object(c.jsx)(R,{open:f,showContent:o,path:"/proyectos",child:Object(c.jsx)(M,{path:"/proyectos",category:"21"})}),Object(c.jsx)(R,{open:f,showContent:o,path:"/cursos",child:Object(c.jsx)(A,{category:"2",type:"Cursos"})}),Object(c.jsx)(R,{open:f,showContent:o,path:"/talleres",child:Object(c.jsx)(A,{category:"3",type:"Talleres"})}),Object(c.jsx)(R,{open:f,showContent:o,path:"/seminarios",child:Object(c.jsx)(A,{category:"4",type:"Seminarios"})}),Object(c.jsx)(R,{open:f,showContent:o,path:"/proac",child:Object(c.jsx)(Q,{})}),h&&Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer-logo",children:[Object(c.jsx)(G,{}),Object(c.jsx)("span",{className:"name",children:"Intercuraduria 2021"})]}),Object(c.jsx)(Y,{})]})]})}function X(e,t){return Math.random()*(t-e)+e}function $(){var e=[O.a.blue1,O.a.blue2,O.a.blue3,O.a.purple1,O.a.purple2,O.a.purple3],t=X(0,e.length);return e[parseInt(t)]}var ee=function(e){var t=e.importance*window.innerWidth/100,n=X(6e3,1e4),s=Object(u.c)({to:function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=X(-120,window.innerWidth),c=X(-100,window.innerHeight),e.next=5,t({left:n,top:c});case 5:e.next=0;break;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),from:{top:X(-120,window.innerHeight),left:X(-100,window.innerWidth),border:"3px solid "+$()},config:{duration:n,mass:1,tension:180,friction:12}});return Object(c.jsx)(u.a.div,{className:"circle",style:Object(_.a)({width:t,height:t},s)})};function te(e,t){return Math.random()*(t-e)+e}var ne=function(e){for(var t={},n=0;n<6;n++){var a=te(0,window.innerWidth),o=te(0,window.innerHeight);t[n]={key:n,importance:te(10,30),position:{x:a,y:o},isEmpty:te(0,10)>=5}}return Object(s.useEffect)((function(){return function(){t={}}})),Object(c.jsx)("div",{className:"circleManager",children:Object.keys(t).map((function(e){return Object(c.jsx)(ee,{importance:t[e].importance,position:t[e].position,isEmpty:t[e].isEmpty},e)}))})},ce=n(14);n(118);function se(e){return Object(c.jsxs)("div",{className:"nosotras",children:[Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("p",{className:"title",children:"Nosotras"}),Object(c.jsx)("p",{children:"Somos un grupo de curadoras interesadas en abordar la Curadur\xeda desde diferentes escenarios, enfoques y circunstancias contempor\xe1neas, tanto en M\xe9xico como en diferentes latitudes de Latinoam\xe9rica."}),Object(c.jsx)("p",{children:"Intercuradur\xeda se establece como una plataforma digital y laboratorio curatorial para dialogar, debatir y compartir conocimientos e inquietudes entorno a la pr\xe1ctica curatorial desde diferentes posicionamientos actuales. A partir de nuestro programa compuesto de cursos y talleres, elaborados desde diversos imaginarios y realidades de la cultura contempor\xe1nea, evidenciamos la dimensi\xf3n curatorial desde diferentes campos de acci\xf3n."})]}),Object(c.jsx)(ae,{})]})}function ae(){return Object(c.jsxs)("div",{className:"integrantes",children:[Object(c.jsx)("div",{className:"integrante",children:Object(c.jsx)("span",{children:"Emlya Rendon"})}),Object(c.jsx)("div",{className:"integrante",children:Object(c.jsx)("span",{children:"Adriana Flores"})})]})}n(119);function oe(){return Object(c.jsxs)("div",{className:"contacto",children:[Object(c.jsxs)("div",{className:"formulario",children:[Object(c.jsx)("h2",{children:"\xa1\xdanete a nuestra comunidad!"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{name:"nombre",placeholder:"Nombre"}),Object(c.jsx)("input",{name:"correo",placeholder:"Correo"}),Object(c.jsx)("textarea",{placeholder:"D\xe9janos un comentario..."}),Object(c.jsx)("div",{className:"button",children:"Enviar"})]})]}),Object(c.jsxs)("div",{className:"mandanos-un-mail",children:[Object(c.jsx)("p",{children:"\xbfTienes alg\xfan taller que te gustar\xeda proponernos?"}),Object(c.jsx)("p",{children:"M\xe1ndanos un correo a intercuraduriaprogramas@gmail.com"})]})]})}function re(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(u.c)({width:n?"100%":"0%",config:u.b.stiff}),r=Object(b.e)(),i=Object(b.d)();Object(s.useEffect)((function(){"/"===r.pathname&&j()}),[r.pathname]);var l=function(){a(!0)},j=function(){a(!1),i.push("/"),console.log("close")};return Object(c.jsxs)(u.a.div,{id:"sideContentManager",style:o,children:[Object(c.jsx)("div",{className:"side-close-content",onClick:j,children:Object(c.jsx)(q.a,{})}),Object(c.jsxs)("div",{className:"side-content",children:[Object(c.jsx)(R,{path:"/nosotras",showContent:!0,open:l,child:Object(c.jsx)(se,{})}),Object(c.jsx)(R,{path:"/contacto",showContent:!0,open:l,child:Object(c.jsx)(oe,{})})]})]})}var ie=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(ce.a,{children:[Object(c.jsx)(Z,{}),Object(c.jsx)(V,{}),Object(c.jsx)(re,{})]}),Object(c.jsx)(ne,{})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,130)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ie,{})}),document.getElementById("root")),le()},25:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},8:function(e,t,n){e.exports={mainColor:"#4c56ac",secondaryColor:"#7f7eaa",subMenuFontSize:"3",subMenuFontSizeHover:"3.3",subMenuFontSizeClick:"3.5",darkenColor:"#2a2357",blue1:"#193d7e",blue2:"#121672",blue3:"#10129e",purple1:"#402f88",purple2:"#393fc0",purple3:"#434394"}},89:function(e,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.0495f539.chunk.js.map