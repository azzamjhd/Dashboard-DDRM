(function(){"use strict";var e={4725:function(e,n,t){var o=t(5130),s=t(6768);const r={id:"app",class:"container mt-5 text-center"},i={class:"mb-3 input-group"};function a(e,n,t,a,u,c){return(0,s.uX)(),(0,s.CE)("div",r,[n[3]||(n[3]=(0,s.Lk)("h1",{class:"title mb-5"},"Vue.js Flask-SocketIO",-1)),(0,s.Lk)("div",i,[(0,s.bo)((0,s.Lk)("input",{class:"form-control",type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>u.message=e),placeholder:"Enter a message"},null,512),[[o.Jo,u.message]]),(0,s.Lk)("button",{class:"btn btn-outline-primary",type:"button",onClick:n[1]||(n[1]=(...e)=>c.sendMessage&&c.sendMessage(...e))},"Send message")]),(0,s.bo)((0,s.Lk)("textarea",{name:"responses",id:"resp",class:"form-control",rows:"5","onUpdate:modelValue":n[2]||(n[2]=e=>u.response=e),readonly:""},null,512),[[o.Jo,u.response]])])}var u=t(7910),c={data(){return{message:"",response:"",username:""}},mounted(){this.socket=(0,u.Ay)("http://localhost:5000"),this.username=Math.random().toString(36).substring(7),this.socket.on("message",(e=>{this.response=e.username+": "+e.message+"\n"+this.response})),this.socket.on("connect",(()=>{console.log("Connected to the server: ",this.socket.id)}))},methods:{sendMessage(){if(""!==this.message){const e={username:this.username,message:this.message};this.socket.emit("message",e)}this.message=""}},beforeUnmount(){this.socket.off("response")}},l=t(1241);const f=(0,l.A)(c,[["render",a]]);var p=f;(0,o.Ef)(p).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],r=e[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,r<i&&(i=r));if(a){e.splice(l--,1);var c=s();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,r,i=o[0],a=o[1],u=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(u)var l=u(t)}for(n&&n(o);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunkvue_socketio_app"]=self["webpackChunkvue_socketio_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4725)}));o=t.O(o)})();
//# sourceMappingURL=app.5c8a0c5b.js.map