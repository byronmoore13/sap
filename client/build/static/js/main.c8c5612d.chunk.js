(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{369:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(21),r=n.n(c),o=n(187),l=n(188),s=n(189),d=n(217),u=n(213),j=n(24),b=n(27),m=n(12),h=n(409),x=n(402),f=n(407),p=n(192),O=function(e){return Object(p.a)({root:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},title:{fontSize:32,fontWeight:600,color:e.palette.text.main,marginTop:36},desc:{fontSize:18,fontWeight:300,color:e.palette.text.main,marginTop:8},input:{marginTop:50,"& label.Mui-focused":{color:e.palette.text.main},"& .MuiInputBase-input":{color:e.palette.text.main},"& .MuiFormLabel-root":{color:e.palette.text.main},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.palette.text.main,borderRadius:25},"&:hover fieldset":{borderColor:e.palette.text.main},"&.Mui-focused fieldset":{borderColor:e.palette.text.main}}},field:{width:600},button:{marginLeft:10,marginTop:8},searchPane:{display:"flex",flexDirection:"row"},container:{height:600,width:600,display:"flex",flexDirection:"column",alignItems:"center",margin:"50px 20px 50px 100px",padding:"10px 0px 10px 0px",borderRadius:25,backgroundColor:e.palette.secondary.main},buttons:{display:"flex",flexDirection:"row",marginBottom:10},dataTable:{overflowY:"auto",marginLeft:30,marginRight:30,paddingRight:2}},"buttons",{width:400,display:"flex",flexDirection:"row",justifyContent:"space-around",marginBottom:10})},g=n(410),v=n(218),N=n(206),C=n(89),y=n(116),k=n(10),T=["#81C784","#29B6F6","#EF5350"],w=function(e){var t=e.data;return Object(k.jsx)("div",{style:{marginTop:110},children:Object(k.jsxs)(g.a,{width:400,height:600,children:[Object(k.jsx)(v.a,{data:t,cx:200,cy:200,innerRadius:90,outerRadius:170,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:t.map((function(e,t){return Object(k.jsx)(N.a,{fill:T[t%T.length]},"cell-".concat(t))}))}),Object(k.jsx)(C.a,{verticalAlign:"top",height:36}),Object(k.jsx)(y.a,{contentStyle:{backgroundColor:"#ECF0F1",border:"none",borderRadius:5},cursor:{stroke:"red",strokeWidth:2}})]})})},S=function(e){return{table:{},itemContainer:{backgroundColor:e.palette.primary.main,borderRadius:25,padding:10,marginBottom:10,display:"flex",flexDirection:"row",alignItems:"center"},itemText:{fontSize:16,fontWeight:300,color:e.palette.text.main},itemThresh:{fontSize:20,fontWeight:500,color:e.palette.text.main,marginRight:10}}},B=Object(m.a)(S)((function(e){var t=e.data,n=e.filterItem,i=e.classes,a=t.filter((function(e){return e.threshold==n})).map((function(e){return Object(k.jsxs)("div",{className:i.itemContainer,children:[Object(k.jsx)(x.a,{className:i.itemThresh,children:e.intensity.toFixed(2)}),Object(k.jsx)(x.a,{className:i.itemText,children:e.text})]})}));return Object(k.jsx)("div",{className:i.table,children:a})})),F=n(216),P={hidden:{opacity:0},visible:{opacity:1}},I=Object(m.a)(O)((function(e){var t=Object(i.useState)(""),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(""),o=Object(b.a)(r,2),l=o[0],s=o[1],d=Object(i.useState)([]),u=Object(b.a)(d,2),j=u[0],m=u[1],p=Object(i.useState)([]),O=Object(b.a)(p,2),g=O[0],v=O[1],N=Object(i.useState)(!1),C=Object(b.a)(N,2),y=C[0],T=C[1],S=Object(i.useState)("Positive"),I=Object(b.a)(S,2),R=I[0],D=I[1],W=e.classes,A=function(){fetch("/api/getTweets?query="+a).then((function(e){return e.json()})).then((function(e){console.log(e),T(!0),s(e[0]),m(e[1]),v(e[2])}))},E=function(){return"Positive"===R?Object(k.jsxs)("div",{className:W.buttons,children:[Object(k.jsx)(h.a,{variant:"outlined",className:W.btnActive,onClick:function(){return D("Positive")},children:"Positive"}),Object(k.jsx)(h.a,{onClick:function(){return D("Neutral")},children:"Neutral"}),Object(k.jsx)(h.a,{onClick:function(){return D("Negative")},children:"Negative"})]}):"Neutral"===R?Object(k.jsxs)("div",{className:W.buttons,children:[Object(k.jsx)(h.a,{onClick:function(){return D("Positive")},children:"Positive"}),Object(k.jsx)(h.a,{variant:"outlined",className:W.btnActive,onClick:function(){return D("Neutral")},children:"Neutral"}),Object(k.jsx)(h.a,{onClick:function(){return D("Negative")},children:"Negative"})]}):"Negative"===R?Object(k.jsxs)("div",{className:W.buttons,children:[Object(k.jsx)(h.a,{onClick:function(){return D("Positive")},children:"Positive"}),Object(k.jsx)(h.a,{onClick:function(){return D("Neutral")},children:"Neutral"}),Object(k.jsx)(h.a,{variant:"outlined",onClick:function(){return D("Negative")},children:"Negative"})]}):void 0};return Object(k.jsxs)("div",{className:W.root,children:[Object(k.jsx)(x.a,{className:W.title,children:"Welcome to the Twitter Sentiment Tool"}),Object(k.jsx)(x.a,{className:W.desc,children:"Enter a topic to find the overall sentiment on Twitter."}),Object(k.jsxs)("form",{className:W.input,noValidate:!0,autoComplete:"off",children:[Object(k.jsx)(f.a,{className:W.field,label:"Search",variant:"outlined",value:a,onChange:function(e){return c(e.target.value)}}),Object(k.jsx)(h.a,{className:W.button,onClick:function(){""!==a&&A()},variant:"contained",children:"Submit"})]}),y&&Object(k.jsxs)(F.a.div,{initial:"hidden",animate:"visible",variants:P,className:W.searchPane,children:[Object(k.jsx)(w,{data:j}),Object(k.jsxs)("div",{className:W.container,children:[Object(k.jsx)(E,{}),Object(k.jsx)("div",{className:W.dataTable,children:Object(k.jsx)(B,{data:g,filterItem:R})})]})]}),l]})})),R=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsx)("main",{children:Object(k.jsx)(u.a,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/",component:I}),Object(k.jsx)(j.a,{component:I})]})})})}}]),n}(a.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},W=n(406),A=n(214),E=Object(A.a)({typography:{useNextVariants:!0},palette:{primary:{main:"#212121"},secondary:{main:"#ABB2B9"},accent:{main:"#C39BD3"},text:{main:"#ECF0F1",alt:"#B3B6B7"}}});r.a.render(Object(k.jsx)(W.a,{theme:E,children:Object(k.jsx)(R,{})}),document.getElementById("root")),D()}},[[369,1,2]]]);
//# sourceMappingURL=main.c8c5612d.chunk.js.map