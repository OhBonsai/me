(this.webpackJsonpbonsaitoy1=this.webpackJsonpbonsaitoy1||[]).push([[0],{22:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var a=r(23),n=r.n(a),s=(r(22),r(2)),o=r(9),c=r(1),i=r(30),u=r(13),f=r(26),j=r(29),l=r(31),b=r(27),h=r(4);function O(){var e=Object(s.useRef)(),t=Object(o.d)(),r=t.scene,a=t.gl,n=t.size,i=t.camera,u=Object(s.useMemo)((function(){return new c.Vector2(n.width,n.height)}),[n]);return Object(s.useEffect)((function(){e.current.setSize(n.width,n.height)}),[n]),Object(o.c)((function(){return e.current.render()}),2),Object(h.jsxs)("effectComposer",{ref:e,args:[a],children:[Object(h.jsx)("renderPass",{attachArray:"passes",scene:r,camera:i}),Object(h.jsx)("sSAOPass",{attachArray:"passes",args:[r,i],kernelRadius:.4,maxDistance:.03}),Object(h.jsx)("unrealBloomPass",{attachArray:"passes",args:[u,1.25,1,.991]}),Object(h.jsx)("shaderPass",{attachArray:"passes",args:[b.a],"material-uniforms-resolution-value":[1/n.width,1/n.height],renderToScreen:!0})]})}Object(o.b)({EffectComposer:i.a,ShaderPass:u.a,RenderPass:f.a,SSAOPass:j.a,UnrealBloomPass:l.a});var d=r(6),x=r(28),m=new c.Object3D,p=new c.Color,g=new Array(1e3).fill().map((function(){return x[17][Math.floor(5*Math.random())]}));function y(){var e=Object(s.useState)(),t=Object(d.a)(e,2),r=t[0],a=t[1],n=Object(s.useMemo)((function(){return Float32Array.from(new Array(1e3).fill().flatMap((function(e,t){return p.set(g[t]).toArray()})))}),[]),i=Object(s.useRef)(),u=Object(s.useRef)();return Object(s.useEffect)((function(){u.current=r}),[r]),Object(o.c)((function(e){var t=e.clock.getElapsedTime();i.current.rotation.x=Math.sin(t/4),i.current.rotation.y=Math.sin(t/2);for(var a=0,s=0;s<10;s++)for(var o=0;o<10;o++)for(var c=0;c<10;c++){var f=a++;m.position.set(5-s,5-o,5-c),m.rotation.y=Math.sin(s/4+t)+Math.sin(o/4+t)+Math.sin(c/4+t),m.rotation.z=2*m.rotation.y,r!==u.Current&&(p.set(f===r?"white":g[f]).toArray(n,3*f),i.current.geometry.attributes.color.needsUpdate=!0);var j=f===r?2:1;m.scale.set(j,j,j),m.updateMatrix(),i.current.setMatrixAt(f,m.matrix)}i.current.instanceMatrix.needsUpdate=!0})),Object(h.jsxs)("instancedMesh",{ref:i,args:[null,null,1e3],onPointerMove:function(e){return a(e.instanceId)},onPointerOut:function(e){return a(void 0)},children:[Object(h.jsx)("boxGeometry",{args:[.7,.7,.7],children:Object(h.jsx)("instancedBufferAttribute",{attachObject:["attributes","color"],args:[n,3]})}),Object(h.jsx)("meshPhongMaterial",{vertexColors:c.VertexColors})]})}function M(){return Object(h.jsxs)(o.a,{flat:!0,gl:{antialias:!1,alpha:!1},camera:{position:[0,0,15],near:5,far:20},onCreated:function(e){return e.gl.setClearColor("#f0f0f0")},children:[Object(h.jsx)("ambientLight",{}),Object(h.jsx)("pointLight",{position:[150,150,150],intensity:.55}),Object(h.jsx)(y,{}),Object(h.jsx)(O,{})]})}n.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b28167f1.chunk.js.map