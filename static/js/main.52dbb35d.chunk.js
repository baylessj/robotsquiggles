(this["webpackJsonpweb-react"]=this["webpackJsonpweb-react"]||[]).push([[0],{107:function(e,t,n){"use strict";var r=n(15);n.d(t,"selectPaths",(function(){return r.i}));n(88)},133:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),i=n(10),o=n.n(i),s=n(38),l=(n(133),n(78)),u=n.n(l),d=n(52),h=n(90),p=n(13),f=n(14),j=n(3),b=n(178),v=n(199),O=n(197),m=n(189),g=n(179),y=n(190),x=n(143),k=n(182),C=n(108),w=n.n(C),S=n(188),A=n(191),_=n(20),M=n(23),E=3.6576,P=n(15),T=function(e){var t="rgb(70, 70, 255)",n="rgb(255, 40, 40)",c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),s=e.two,l=e.startWidth,u=e.mount,d=e.savedBoundingRect,h=e.capSize,p=e.resize,f=e.field;return Object(a.useEffect)((function(){var e=function(){var e=15*Math.random()+80;return"#"+(e<<16|e<<8|e).toString(16)},t=u.current.getBoundingClientRect().width;l.current=h(t),s.current||(s.current=new M.a({width:l.current,height:l.current,autostart:!0}).appendTo(u.current),s.current.makeGroup()),function(){var t=s.current.width/6,n=3*t,r=6*t,a=6*t,c=t/5,i=t/8,o=t/8,l=t/12,u=s.current.makeGroup([]);!function(t,n,r){for(var a=0;a<6;a++)for(var c=r*(a+.5),i=0;i<6;i++){var o=r*(i+.5),s=t.current.makeRectangle(c,o,r,r);s.fill=e(),n.add(s)}}(s,u,t);var d=s.current.makeLine(n-o,0,n-o,r),h=s.current.makeLine(n+o,0,n+o,r),p=s.current.makeLine(t,0,t,r),f=s.current.makeLine(5*t,0,5*t,r),j=s.current.makeLine(0,n-o,t,n-o),b=s.current.makeLine(0,n+o,t,n+o),v=s.current.makeLine(5*t,n-o,6*t,n-o),O=s.current.makeLine(5*t,n+o,6*t,n+o),m=s.current.makeGroup([d,h,p,f,j,b,O,v]);m.linewidth=l,m.stroke="#fff";var g=s.current.makeCircle(n,c+i/2,c),y=s.current.makeCircle(c+i/2,c+i/2,c),x=s.current.makeCircle(a-c-i/2,c+i/2,c),k=s.current.makeCircle(c+i/2,n,c),C=s.current.makeCircle(n,n,c),w=s.current.makeCircle(a-c-i/2,n,c),S=s.current.makeCircle(c+i/2,r-c-i/2,c),A=s.current.makeCircle(n,r-c-i/2,c),_=s.current.makeCircle(a-c-i/2,r-c-i/2,c),M=s.current.makeGroup([y,g,x,k,C,w,S,A,_]);M.fill="none",M.stroke="rgb(0, 0, 0)",M.linewidth=i}(),window.addEventListener("resize",(function(){d.current=u.current.getBoundingClientRect();var e=d.current.width;p(e)}))}),[]),Object(a.useEffect)((function(){var e,r;if(f!==o.current){switch(null===(e=c.current)||void 0===e||e.remove(),null===(r=i.current)||void 0===r||r.remove(),f){case"COMP":!function(){var e=l.current/6,r=3*e,a=6*e,o=6*e,u=e/5,d=e/8,h=u-d/2,p=s.current.makeCircle(r-u-d-h,r,h),f=s.current.makeCircle(r,r+u+d+h,h),j=s.current.makeCircle(r,4.5*e,h),b=s.current.makeCircle(r,a-d-h,h),v=s.current.makeCircle(d+h,a-d-h,h),O=s.current.makeCircle(d+h,r,h),m=s.current.makeCircle(d+h,d+h,h),g=s.current.makeCircle(o-2*d-h-u,u+2*d+h,h),y=s.current.makeCircle(o-2*d-h-u,a-u-2*d-h,h);c.current=s.current.makeGroup(p,f,j,b,v,O,m,g,y),c.current.fill=t;var x=s.current.makeCircle(r+u+d+h,r,h),k=s.current.makeCircle(r,r-u-d-h,h),C=s.current.makeCircle(r,1.5*e,h),w=s.current.makeCircle(r,0+d+h,h),S=s.current.makeCircle(o-d-h,d+h,h),A=s.current.makeCircle(o-d-h,r,h),_=s.current.makeCircle(o-d-h,a-d-h,h),M=s.current.makeCircle(2*d+h+u,u+2*d+h,h),E=s.current.makeCircle(2*d+h+u,a-u-2*d-h,h);i.current=s.current.makeGroup(x,k,C,w,S,A,S,_,M,E),i.current.fill=n}();break;case"SKILLS":!function(){var e=l.current/6,r=3*e,a=6*e,o=6*e,u=e/8,d=e/5-u/2,h=s.current.makeCircle(r,r,d),p=s.current.makeCircle(r,a-u-d,d),f=s.current.makeCircle(r,0+u+d,d),j=s.current.makeCircle(u+d,a-u-d,d),b=s.current.makeCircle(u+d,r,d),v=s.current.makeCircle(u+d,u+d,d),O=s.current.makeCircle(o-u-d,u+d,d),m=s.current.makeCircle(o-u-d,a-u-d,d),g=s.current.makeCircle(o-u-d,r,d);c.current=s.current.makeGroup(h,p,f,j,b,v,O,m,g),c.current.fill=t;var y=s.current.makeCircle(4*e,r,d),x=s.current.makeCircle(2*e,r,d),k=s.current.makeCircle(r,2*e,d),C=s.current.makeCircle(r,1*e,d),w=s.current.makeCircle(r,4*e,d),S=s.current.makeCircle(r,5*e,d),A=s.current.makeCircle(1.5*e,d,d),_=s.current.makeCircle(1.5*e,a-d,d),M=s.current.makeCircle(4.5*e,d,d),E=s.current.makeCircle(4.5*e,a-d,d),P=s.current.makeCircle(e,1.5*e,d),T=s.current.makeCircle(e,4.5*e,d),I=s.current.makeCircle(5*e,1.5*e,d),R=s.current.makeCircle(5*e,4.5*e,d);i.current=s.current.makeGroup(y,k,C,A,_,M,E,w,S,x,P,T,I,R),i.current.fill=n}()}o.current=f}})),Object(r.jsx)(r.Fragment,{})},I=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),d=Object(a.useRef)(null),h=Object(a.useRef)([]),f=Object(_.a)(),j="#333",b=f.palette.primary.main,v=f.palette.primary.light,O="rgb(255, 40, 40)",m=Object(a.useRef)(null),g=e.drawerWidth,y=e.open,x=e.mode,k=e.setMode,C=e.field,w=e.setCanvasDims,S=e.latch,A=e.trackWidth,I=e.badPaths,R=Object(s.b)(),D=Object(s.c)(P.i),L=Object(s.c)(P.j),H=function(e){var t,r=e.clientX+window.pageXOffset,a=e.clientY+window.pageYOffset,c=null!==(t=o.current.left+l.current)&&void 0!==t?t:0,i=o.current.top;return{x:(r-c)/n.current.scene.scale,y:(a-i)/n.current.scene.scale}},K=function(e){var t=c.current.translation,r=function(n){n.preventDefault();var r=H(n),a=r.x-t.x,c=r.y-t.y;e.translation.set(a,c)},a=function(e){e.preventDefault();var t=e.originalEvent.changedTouches[0];return r({preventDefault:function(){},clientX:t.pageX,clientY:t.pageY}),!1},i=function t(a){a.preventDefault(),S&&Object.entries(D).forEach((function(t){var r=Object(p.a)(t,2),a=r[0],c=r[1];c.vectors.forEach((function(t){var r=n.current.scene.getById(t.p.id);if(t.p.id===e.id&&Object.entries(D).forEach((function(e){var t=Object(p.a)(e,2)[1];c.path===t.path&&c.path||t.vectors.forEach((function(e){var t=n.current.scene.getById(e.p),c=Math.sqrt(Math.pow(r.translation.x-t.translation.x,2)+Math.pow(r.translation.y-t.translation.y,2));if(c>.01&&c<40){r.translation.set(t.translation.x,t.translation.y);var i={id:r.id,x:r.translation.x,y:r.translation.y};R(Object(P.l)({pathKey:a,point:i}))}}))})),t.r.id===e.id)if(Math.abs(e.rotation)<.1||Math.abs(e.rotation-Math.PI)<.1){e.translation.set(r.translation.x,e.translation.y);var i={id:e.id,x:e.translation.x,y:e.translation.y,yaw:e.rotation};R(Object(P.m)({pathKey:a,point:i}))}else if(Math.abs(Math.abs(e.rotation)-Math.PI/2)<.1||Math.abs(e.rotation-3*Math.PI/2)<.1){e.translation.set(e.translation.x,r.translation.y);var o={id:e.id,x:e.translation.x,y:e.translation.y,yaw:e.rotation};R(Object(P.m)({pathKey:a,point:o}))}}))})),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",t)},o=function e(t){return t.preventDefault(),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",e),!1};V(e._renderer.elem,"mousedown",(function(e){console.log(e),e.preventDefault(),window.addEventListener("mousemove",r),window.addEventListener("mouseup",i)})),V(e._renderer.elem,"touchstart",(function(e){return e.preventDefault(),window.addEventListener("touchmove",a),window.addEventListener("touchend",o),!1}))},B=Object(a.useCallback)((function(e,t,r,a){"A"===r&&e===t._collection[0]&&(m.current=n.current.makeRectangle(e.x,e.y,n.current.width/E*A,n.current.width/E*A),m.current.noFill().stroke=v,m.current.linewidth=2,c.current.add(m.current));var i=n.current.makeCircle(0,0,10),o=n.current.makePolygon(0,0,10);o.rotation=Math.atan2(e.controls.right.y,e.controls.right.x)+Math.PI/2,i.translation.copy(e),o.translation.copy(e.controls.right).addSelf(e),i.noStroke().fill=o.noStroke().fill=b;var s=new M.a.Path([(new M.a.Anchor).copy(i.translation),(new M.a.Anchor).copy(o.translation)]);s.noFill().stroke=b;var l=n.current.makeGroup(s,i,o);l.translation.addSelf(t.translation),c.current.add(l),i.translation.bind(M.a.Events.change,(function(){e.copy(this),o.translation.copy(e.controls.right).addSelf(this),s.vertices[0].copy(this),s.vertices[1].copy(o.translation),m.current&&m.current.translation.copy(this);var t={id:i.id,x:i.translation.x,y:i.translation.y};R(Object(P.l)({pathKey:r,point:t}))})),o.translation.bind(M.a.Events.change,(function(){e.controls.right.copy(this).subSelf(e),s.vertices[1].copy(this);var t=-1*(e.controls.right.x-e.x),n=-1*(e.controls.right.y-e.y),a=new M.a.Vector(t,n);e.controls.left.copy(a).subSelf(e);var c=Math.atan2(e.controls.right.y,e.controls.right.x)+Math.PI/2;o.rotation=c;var i={id:o.id,x:o.translation.x,y:o.translation.y,yaw:o.rotation};R(Object(P.m)({pathKey:r,point:i}))})),n.current.update();var u={id:l.id,x:l.translation.x,y:l.translation.y},d={id:i.id,x:i.translation.x,y:i.translation.y},h={id:o.id,x:o.translation.x,y:o.translation.y,yaw:o.rotation};return{s:m.current.id,g:u,p:d,r:h}}),[R,b,v,A]),N=function(e){var t=new M.a.Path(e,!1,!0,!0);return t.cap=t.join="round",t.noFill().stroke=j,t.linewidth=5,c.current.add(t),t},F=Object(a.useCallback)((function(e){for(var t=[],r=D[e].waypoints.length-1,a=r;a>=0;--a){var i=n.current.scene.getById(D[e].waypoints[a].id),o=void 0;a===r?(o=new M.a.Anchor(i.translation.x,i.translation.y,0,100,0,-100,"M"),t.push(o)):(o=new M.a.Anchor(i.translation.x,i.translation.y,0,100,0,-100,"C"),t.push(o)),n.current.remove(i),n.current.update()}c.current=n.current.makeGroup();var s=N(t),l=[];s.vertices.forEach((function(t){l.push(B(t,s,e))})),R(Object(P.a)({pathKey:e,vectors:l,path:s.id}))}),[n,D,B,R]);Object(a.useEffect)((function(){if("CREATE_PATH"===L){var e=Object(P.c)({paths:D});F(e),R(Object(P.g)({pathKey:Object(P.h)(e)})),k("EDIT")}}),[L,F,R,k,D]);var W=function(e){e.preventDefault();var t=H(e),r=n.current.makeCircle(t.x,t.y,10);r.fill=b;var a={id:r.id,x:r.translation.x,y:r.translation.y};R(Object(P.b)({point:a}))},V=function(e,t,n){for(var r={node:e,event:t,handler:n},a=0;a<h.current.length;++a)if(h.current[a]===r)return;e.addEventListener(t,n),h.current.push(r)},G=function(){for(var e=0;e<h.current.length;++e){var t,n=h.current[e];null===n||void 0===n||null===(t=n.node)||void 0===t||t.removeEventListener(n.event,n.handler)}h.current=[]},q=function(e){return Math.max(100,Math.min(e,800))},X=Object(a.useCallback)((function(e){e=q(e),n.current.scene.scale=e/i.current,n.current.renderer.setSize(e,e),w({x:i.current,y:i.current})}),[n,w,i]);return Object(a.useEffect)((function(){null===o.current&&(o.current=t.current.getBoundingClientRect());var e=o.current.width;y?(l.current=g,X(e-g)):(l.current=0,X(e))}),[y,g,X]),Object(a.useEffect)((function(){if(x!==u.current||S!==d.current){switch(x){case"ADD_PATH":G(),Object.entries(D).forEach((function(e){var t=Object(p.a)(e,2)[1],r=n.current.scene.getById(t.path);r&&(r.stroke=j,t.vectors.forEach((function(e){var t=n.current.scene.getById(e.p.id),r=n.current.scene.getById(e.r.id);t.fill=j,r.fill=j})))})),V(t.current,"click",W);break;case"EDIT":G(),Object.entries(D).forEach((function(e){var t=Object(p.a)(e,2)[1],r=n.current.scene.getById(t.path);t.vectors&&(t.path&&(r.stroke=r.stroke===O?O:j),t.vectors.forEach((function(e){var t=n.current.scene.getById(e.p.id),r=n.current.scene.getById(e.r.id);K(t),K(r),t.fill=b,r.fill=b})))}));break;case"ADD_POINTS":G(),Object.entries(D).forEach((function(e){var t=Object(p.a)(e,2),r=t[0],a=t[1],c=n.current.scene.getById(a.path);c&&(a.vectors.forEach((function(e){var t=n.current.scene.getById(e.p.id),r=n.current.scene.getById(e.r.id);t.fill=j,r.fill=j})),c.stroke=b,V(c._renderer.elem,"click",(function(e){var t=c.getPointAt(.5),n=Math.atan2(t.controls.right.y,t.controls.right.x)+Math.PI/2,a=new M.a.Anchor(t.x,t.y,100*Math.cos(n+Math.PI/2),100*Math.sin(n+Math.PI/2),-100*Math.cos(n+Math.PI/2),-100*Math.sin(n+Math.PI/2),"C"),i=c.vertices;i.splice(1,0,a);var o=N(i),s=B(a,o,r,i.length);R(Object(P.k)({pathKey:r,vector:s,path:o.id})),k("EDIT")})))}));break;case"REMOVE_POINTS":G(),Object.entries(D).forEach((function(e){var t=Object(p.a)(e,2),r=t[0],a=t[1];if(a.path){var i=n.current.scene.getById(a.path);a.vectors.forEach((function(e){var t=n.current.scene.getById(e.p.id),r=n.current.scene.getById(e.r.id);t.fill=j,r.fill=j})),i.stroke=b,V(i._renderer.elem,"click",(function(e){var t=i.vertices;if(t.pop(),t.length<2)a.vectors.forEach((function(e){if(n.current.scene.getById(e.g.id).remove(),e.s){var t=n.current.scene.getById(e.s);c.current.remove(t)}})),n.current.remove(a.path),R(Object(P.e)({pathKey:r}));else{var o=a.vectors[a.vectors.length-1];n.current.scene.getById(o.g.id).remove(),i.remove();var s=N(t);n.current.update(),R(Object(P.f)({pathKey:r,path:s.id}))}}))}}))}d.current=S,u.current=x}})),Object(a.useEffect)((function(){Object.entries(D).forEach((function(e,t){1===I.get(e)?t.path.stroke=O:t.path&&(t.path.stroke=j)})),n.current.update()}),[D,I]),Object(a.useEffect)((function(){m.current&&(m.current.width=n.current.width/E*A,m.current.height=n.current.width/E*A)}),[A]),Object(r.jsx)("div",{ref:t,children:Object(r.jsx)(T,{two:n,startWidth:i,mount:t,savedBoundingRect:o,capSize:q,resize:X,field:C})})},R=n(112),D=n(194),L=n(181),H=n(193),K=n(57),B=function(e,t,n,r,a,c){return{x:n/e*E,y:(1-r/t)*E,yaw:-1*(a+Math.PI/2),vel:c?c/Math.sqrt(Math.pow(e,2)+Math.pow(t,2))*E:0}},N=function(e,t,n,r,a){return{x:(1-r/t)*E,y:n/e*E,yaw:a}};function F(e){var t=e.children,n=e.value,a=e.index,c=Object(R.a)(e,["children","value","index"]);return Object(r.jsx)("div",Object(f.a)(Object(f.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(r.jsx)(H.a,{pt:2,p:1,style:{backgroundColor:"#282c34"},children:t})}))}function W(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var V=Object(b.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,maxWidth:800}}}));function G(e){var t=V(),n=c.a.useState(0),a=Object(p.a)(n,2),i=a[0],o=a[1],s=e.paths,l=e.trackWidth,u=e.maxVel,d=e.maxAccel,h=e.maxJerk,j=e.canvasDims;return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(g.a,{position:"static",children:Object(r.jsxs)(D.a,{value:i,onChange:function(e,t){o(t)},"aria-label":"simple tabs example",children:[Object(r.jsx)(L.a,Object(f.a)({label:"Okapi"},W(0))),Object(r.jsx)(L.a,Object(f.a)({label:"Squiggles"},W(1)))]})}),Object(r.jsx)(F,{value:i,index:0,children:Object(r.jsx)(K.a,{text:function(){var e="// TODO: Fill in the info below for your robot\n";return e+="#define LEFT_CHASSIS_MOTOR_PORTS ({1, 2})\n",e+="#define RIGHT_CHASSIS_MOTOR_PORTS ({3, 4})\n",e+="#define WHEEL_DIAMETER (4_in)\n",e+="#define CHASSIS_MOTOR_CARTRIDGE (okapi::AbstractMotor::gearset::green)\n",e+="#define CHASSIS_CARTRIDGE_TICKS (imev5GreenTPR) // Should match above\n\n",e+="#define PATH_MAX_VEL        (".concat(u,")\n"),e+="#define PATH_MAX_ACCEL      (".concat(d,")\n"),e+="#define PATH_MAX_JERK       (".concat(h,")\n"),e+="#define CHASSIS_TRACK_WIDTH (".concat(l,"_m)\n\n"),e+="auto chassis = okapi::ChassisControllerBuilder()\n",e+="\t.withMotors(LEFT_CHASSIS_MOTOR_PORTS, RIGHT_CHASSIS_MOTOR_PORTS)\n",e+="\t.withDimensions(\n",e+="\t\tCHASSIS_MOTOR_CARTRIDGE,\n",e+="\t\t{{WHEEL_DIAMETER, CHASSIS_TRACK_WIDTH}, CHASSIS_CARTRIDGE_TICKS})\n",e+="\t.build();\n",e+="auto profileController = okapi::AsyncMotionProfileControllerBuilder()\n",e+="\t.withLimits({PATH_MAX_VEL, PATH_MAX_ACCEL, PATH_MAX_JERK})\n",e+="\t.withOutput(chassis)\n",e+="\t.buildMotionProfileController();\n\n",e+="/**\n",e+=" * The Coordinate System for Okapi Points is:\n",e+=" * ^\n",e+=" * | x\n",e+=" * |    \u21b7 yaw\n",e+=" * |   y\n",e+=" * ------\x3e\n",e+=" */\n",e+=Array.from(Object.entries(s)).slice(0,-1).map((function(e){for(var t=Object(p.a)(e,2),n=t[0],r=t[1],a="profileController->generatePath({\n",c=0;c<r.vectors.length;++c){var i=r.vectors[c],o=i.r.yaw,s=N(j.x,j.y,i.p.x,i.p.y,o),l=s.x,u=s.y;o=s.yaw,a+="\t{".concat(l.toFixed(3),"_m, ").concat(u.toFixed(3),"_m, ").concat(o.toFixed(3),"_rad},\n")}return a+='\t"'.concat(n,'"\n});\n')})).join("")}(),language:"cpp",showLineNumbers:!0,theme:K.b,codeBlock:!0})}),Object(r.jsx)(F,{value:i,index:1,children:Object(r.jsx)(K.a,{text:function(){var e="#define PATH_DT             (0.01)\n";return e+="#define PATH_MAX_VEL        (".concat(u,")\n"),e+="#define PATH_MAX_ACCEL      (".concat(d,")\n"),e+="#define PATH_MAX_JERK       (".concat(h,")\n"),e+="#define CHASSIS_TRACK_WIDTH (".concat(l,")\n\n"),e+="auto constraints = squiggles::Constraints(PATH_MAX_VEL, PATH_MAX_ACCEL, PATH_MAX_JERK);\n",e+="auto model = std::make_shared<squiggles::TankModel>(CHASSIS_TRACK_WIDTH, constraints);\n",e+="auto generator = squiggles::SplineGenerator(constraints, model, PATH_DT);\n\n",e+=Array.from(Object.entries(s)).slice(0,-1).map((function(e){for(var t=Object(p.a)(e,2),n=t[0],r=t[1],a="auto path".concat(n," = generator.generate({\n"),c=0;c<r.vectors.length;++c){var i=r.vectors[c],o=i.r.yaw,s=B(j.x,j.y,i.p.x,i.p.y,o),l=s.x,u=s.y;o=s.yaw,a+="\tsquiggles::ControlVector(squiggles::Pose(".concat(l.toFixed(3),", ").concat(u.toFixed(3),", ").concat(o.toFixed(3),")})"),c<r.vectors.length-1?a+=",\n":a+="\n"}return a+="});\n"})).join("")}(),language:"cpp",showLineNumbers:!0,theme:K.b,codeBlock:!0})})]})}var q=n(110),X="rgb(50, 168, 82)",J=Object(q.a)({palette:{primary:{light:"rgb(102, 204, 129)",main:X,dark:X}},overrides:{MuiToggleButton:{root:{"&$selected":{color:"#fff",backgroundColor:X}}}}}),z=n(183),Y=n(184),U=n(142),$=n(186),Q=n(196),Z=n(192),ee=n(187),te=n(200),ne=n(185),re=n(103),ae=n.n(re),ce=n(104),ie=n.n(ce),oe=Object(b.a)((function(e){return Object(v.a)({drawerHeader:Object(f.a)(Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})})})),se=function(e){var t=oe(),n=Object(_.a)(),a=["2020-2021 Change Up"];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:t.drawerHeader,children:Object(r.jsx)(k.a,{onClick:e.handleDrawerClose,children:"ltr"===n.direction?Object(r.jsx)(ae.a,{}):Object(r.jsx)(ie.a,{})})}),Object(r.jsx)(z.a,{}),Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(U.a,{children:Object(r.jsx)(x.a,{variant:"subtitle1",children:"Mode"})}),Object(r.jsx)(U.a,{children:Object(r.jsxs)(te.a,{value:e.mode,size:"small",exclusive:!0,onChange:function(t,n){null!==n&&e.setMode(n)},"aria-label":"path add/edit mode",children:[Object(r.jsx)(ne.a,{value:"ADD_PATH","aria-label":"left aligned",children:"ADD PATH"}),Object(r.jsx)(ne.a,{value:"EDIT","aria-label":"centered",children:"MOVE"}),Object(r.jsx)(ne.a,{value:"ADD_POINTS","aria-label":"centered",children:"ADD POINTS"}),Object(r.jsx)(ne.a,{value:"REMOVE_POINTS","aria-label":"centered",children:"REMOVE POINTS"})]})},"mode"),Object(r.jsx)(U.a,{children:Object(r.jsx)($.a,{control:Object(r.jsx)(Q.a,{checked:e.latch,onChange:function(t){return e.setLatch(t.target.checked)},name:"Latch",color:"primary"}),label:"Latch to Cardinal Directions and Other Points"})})]}),Object(r.jsx)(z.a,{}),Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(U.a,{children:Object(r.jsx)(x.a,{variant:"subtitle1",children:"Robot Specs"})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(Z.a,{variant:"outlined",required:!0,label:"Track Width (m)",value:e.trackWidth,onChange:function(t){return e.setTrackWidth(t.target.value)}})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(Z.a,{variant:"outlined",required:!0,label:"Max Velocity (m/s)",value:e.maxVel,onChange:function(t){return e.setMaxVel(t.target.value)}})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(Z.a,{variant:"outlined",label:"Max Acceleration (m/s/s)",value:e.maxAccel,onChange:function(t){return e.setMaxAccel(t.target.value)}})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(Z.a,{variant:"outlined",label:"Max Jerk (m/s/s/s)",value:e.maxJerk,onChange:function(t){return e.setMaxJerk(t.target.value)}})})]}),Object(r.jsx)(z.a,{}),Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(U.a,{children:Object(r.jsx)(x.a,{variant:"subtitle1",children:"Field Setup"})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(Z.a,{variant:"outlined",fullWidth:!0,id:"season-select",select:!0,label:"Comp Season",defaultValue:a[0],children:a.map((function(e){return Object(r.jsx)(ee.a,{value:e,children:e},e)}))})}),Object(r.jsx)(U.a,{children:Object(r.jsxs)(te.a,{value:e.field,exclusive:!0,onChange:function(t,n){null!==n&&e.setField(n)},"aria-label":"path add/edit mode",children:[Object(r.jsx)(ne.a,{value:"COMP","aria-label":"left aligned",children:"COMP"}),Object(r.jsx)(ne.a,{value:"SKILLS","aria-label":"centered",children:"AUTON"}),Object(r.jsx)(ne.a,{value:"NONE","aria-label":"centered",children:"NONE"})]})})]}),Object(r.jsx)(z.a,{}),Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(U.a,{children:Object(r.jsx)(x.a,{variant:"subtitle1",children:"Troubleshooting"})}),Object(r.jsx)(U.a,{children:Object(r.jsxs)(x.a,{variant:"body2",children:["Paths in red CANNOT be generated by Squiggles. ",Object(r.jsx)("br",{}),"If a path appears in red, try editing your Robot Specs."]})})]})]})},le=n(105),ue=n(106),de=new(function(){function e(){Object(le.a)(this,e)}return Object(ue.a)(e,[{key:"_dispatch",value:function(e){var t=this,n=e.msg;return this._status[n]=["loading"],this.worker.postMessage(e),new Promise((function(e,r){var a=setInterval((function(){var c=t._status[n];c&&("done"===c[0]&&e(c[1]),"error"===c[0]&&r(c[1]),"loading"!==c[0]&&(delete t._status[n],clearInterval(a)))}),50)}))}},{key:"load",value:function(){var e=this;return this._status={},this.worker=new Worker("robotsquiggles/js/squiggles.worker.js"),this.worker.onmessage=function(t){return e._status[t.data.msg]=["done",t]},this.worker.onerror=function(t){var n;return e._status[null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.msg]=["error",t]},this._dispatch({msg:"load"})}},{key:"test",value:function(){return console.log("service"),this._dispatch({msg:"asdfghjkl"})}},{key:"generate",value:function(e){return this._dispatch({msg:"generate",payload:e})}}]),e}()),he=n(107),pe=300,fe=Object(b.a)((function(e){return Object(v.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(pe,"px)"),marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},title:{flexGrow:1},docs:{fontWeight:600,letterSpacing:1.5},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:pe,flexShrink:0},drawerPaper:{width:pe},drawerHeader:Object(f.a)(Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-300,overflow:"hidden"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})})),je=function(e){var t=fe(),n=Object(a.useState)(!1),c=Object(p.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)("ADD_PATH"),f=Object(p.a)(l,2),b=f[0],v=f[1],C=Object(a.useState)(!0),_=Object(p.a)(C,2),M=_[0],E=_[1],P=Object(a.useState)("NONE"),T=Object(p.a)(P,2),R=T[0],D=T[1],L=Object(a.useState)("0.45"),H=Object(p.a)(L,2),K=H[0],N=H[1],F=Object(a.useState)("1.0"),W=Object(p.a)(F,2),V=W[0],q=W[1],X=Object(a.useState)("2.0"),z=Object(p.a)(X,2),Y=z[0],U=z[1],$=Object(a.useState)("10.0"),Q=Object(p.a)($,2),Z=Q[0],ee=Q[1],te=Object(a.useState)({x:window.innerWidth,y:window.innerHeight}),ne=Object(p.a)(te,2),re=ne[0],ae=ne[1],ce=Object(a.useState)(new Map),ie=Object(p.a)(ce,2),oe=ie[0],le=ie[1],ue=Object(s.c)(he.selectPaths);!function(e,t,n){var r=Object(a.useCallback)(e,n);Object(a.useEffect)((function(){var e=setTimeout((function(){r()}),t);return function(){clearTimeout(e)}}),[r,t])}((function(){Object.entries(ue).forEach((function(e){var t=Object(p.a)(e,2),n=t[0],r=t[1];if(r.waypoints[1]&&r.vectors[1]&&!(r.vectors.length>2)){for(var a=[],c=r.vectors.length-1;c>=0;--c){var i=r.vectors[c],o=i.r.yaw,s=Math.sqrt(Math.pow(i.r.x-i.p.x,2)+Math.pow(i.r.y-i.p.y,2)),l=B(re.x,re.y,i.p.x,i.p.y,o,s);a.push({x:l.x,y:l.y,yaw:l.yaw,vel:l.vel})}!function(e,t){je.apply(this,arguments)}(n,{sx:a[0].x,sy:a[0].y,syaw:a[0].yaw,sv:a[0].vel,gx:a[1].x,gy:a[1].y,gyaw:a[1].yaw,gv:a[1].vel,max_vel:parseFloat(V),max_accel:parseFloat(Y),max_jerk:parseFloat(Z),track_width:parseFloat(K)})}}))}),200,[ue,V,Y,Z,K]);function je(){return(je=Object(h.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.generate(n);case 2:r=e.sent,le(new Map(oe.set(t,r.data.payload)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){de.load()}),[]),Object(r.jsx)(S.a,{theme:J,children:Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(m.a,{}),Object(r.jsx)(g.a,{position:"fixed",className:Object(j.a)(t.appBar,Object(d.a)({},t.appBarShift,i)),children:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(k.a,{color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(j.a)(t.menuButton,i&&t.hide),children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(x.a,{variant:"h6",noWrap:!0,className:t.title,children:"Squiggles Drawing Board"}),Object(r.jsx)(A.a,{href:"https://squiggles.readthedocs.io",color:"inherit",size:"large",children:Object(r.jsx)(x.a,{variant:"h6",className:t.docs,children:"DOCS"})})]})}),Object(r.jsx)(O.a,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper},children:Object(r.jsx)(se,{handleDrawerClose:function(){o(!1)},mode:b,setMode:v,field:R,setField:D,trackWidth:K,setTrackWidth:N,maxVel:V,setMaxVel:q,maxAccel:Y,setMaxAccel:U,maxJerk:Z,setMaxJerk:ee,latch:M,setLatch:E})}),Object(r.jsxs)("main",{className:Object(j.a)(t.content,Object(d.a)({},t.contentShift,i)),children:[Object(r.jsx)("div",{className:t.drawerHeader}),Object(r.jsx)(I,{drawerWidth:pe,open:i,mode:b,setMode:v,field:R,setCanvasDims:ae,latch:M,trackWidth:K,badPaths:oe}),Object(r.jsx)(G,{paths:ue,trackWidth:K,maxVel:V,maxAccel:Y,maxJerk:Z,canvasDims:re})]})]})})},be=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,386)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},ve=n(56),Oe=n(109),me=n.n(Oe),ge=Object(ve.a)({reducer:{paths:P.d},middleware:Object(ve.c)({serializableCheck:{ignoredActionPaths:["payload"],ignoredPaths:["paths"]}}).concat(me.a)});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{store:ge,children:Object(r.jsx)(je,{})})}),document.getElementById("root")),be()},15:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return m}));var r=n(111),a=n(14),c=n(56),i=function(e){return e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+1)},o=function(e){for(var t="A",n=0,r=Object.keys(e.paths);n<r.length;n++){var a=r[n];a.charCodeAt(0)>t.charCodeAt(0)&&(t=a)}return t},s=Object(c.b)({name:"paths",initialState:{paths:{}},reducers:{updateVectorP:function(e,t){var n,r;e.paths[t.payload.pathKey]=Object(a.a)(Object(a.a)({},e.paths[t.payload.pathKey]),{},{vectors:null!==(n=null===(r=e.paths[t.payload.pathKey])||void 0===r?void 0:r.vectors.map((function(e){return e.p.id===t.payload.point.id?{s:e.s,g:e.g,p:t.payload.point,r:e.r}:e})))&&void 0!==n?n:[]})},updateVectorR:function(e,t){var n,r;e.paths[t.payload.pathKey]=Object(a.a)(Object(a.a)({},e.paths[t.payload.pathKey]),{},{vectors:null!==(n=null===(r=e.paths[t.payload.pathKey])||void 0===r?void 0:r.vectors.map((function(e){return e.r.id===t.payload.point.id?{s:e.s,g:e.g,p:e.p,r:t.payload.point}:e})))&&void 0!==n?n:[]})},createPath:function(e,t){e.paths[t.payload.pathKey]=Object(a.a)(Object(a.a)({},e.paths[t.payload.pathKey]),{},{vectors:t.payload.vectors,path:t.payload.path}),e.actionNeeded=void 0},initPath:function(e,t){e.paths[t.payload.pathKey]={waypoints:[],vectors:[],path:null}},initNextPath:function(e,t){var n=i(o(e));e.paths[n]={waypoints:[],vectors:[],path:null}},deletePoint:function(e,t){console.log(t.payload.path),e.paths[t.payload.pathKey].vectors.pop(),e.paths[t.payload.pathKey].path=t.payload.path},deletePath:function(e,t){delete e.paths[t.payload.pathKey]},createPoints:function(e,t){var n,c;0===Object.keys(e.paths).length&&function(e,t){e.paths[t]={waypoints:[],vectors:[],path:null}}(e,"A");var i=o(e);!function(e,t){e.paths[t.pathKey]=Object(a.a)(Object(a.a)({},e.paths[t.pathKey]),{},{waypoints:[t.point].concat(Object(r.a)(e.paths[t.pathKey].waypoints))})}(e,{pathKey:i,point:t.payload.point}),(null===(n=e.paths[i])||void 0===n||null===(c=n.waypoints)||void 0===c?void 0:c.length)>1&&(e.actionNeeded="CREATE_PATH")},splicePoint:function(e,t){e.paths[t.payload.pathKey].vectors.splice(1,0,t.payload.vector),e.paths[t.payload.pathKey]=Object(a.a)(Object(a.a)({},e.paths[t.payload.pathKey]),{},{path:t.payload.path})}}});t.d=s.reducer;var l=s.actions,u=l.updateVectorP,d=l.updateVectorR,h=l.createPath,p=l.initNextPath,f=l.deletePoint,j=l.deletePath,b=l.createPoints,v=l.splicePoint,O=function(e){return e.paths.paths},m=function(e){return e.paths.actionNeeded}},88:function(e,t){}},[[139,152,153]]]);
//# sourceMappingURL=main.52dbb35d.chunk.js.map