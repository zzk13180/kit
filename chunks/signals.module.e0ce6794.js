import{l as O,_ as z}from"./preact.module.7b1ff8cf.js";import{_ as U,h as E,y as B}from"./hooks.module.72ab33da.js";function $(){throw new Error("Cycle detected")}function b(){if(v>1)v--;else{for(var t,i=!1;d!==void 0;){var n=d;for(d=void 0,m++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&P(n))try{n.c()}catch(e){i||(t=e,i=!0)}n=r}}if(m=0,v--,i)throw t}}function L(t){if(v>0)return t();v++;try{return t()}finally{b()}}var f=void 0,d=void 0,v=0,m=0,y=0;function C(t){if(f!==void 0){var i=t.n;if(i===void 0||i.t!==f)return i={i:0,S:t,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:i},f.s!==void 0&&(f.s.n=i),f.s=i,t.n=i,32&f.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=f.s,i.n=void 0,f.s.n=i,f.s=i),i}}function u(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}u.prototype.h=function(){return!0};u.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};u.prototype.U=function(t){if(this.t!==void 0){var i=t.e,n=t.x;i!==void 0&&(i.x=n,t.e=void 0),n!==void 0&&(n.e=i,t.x=void 0),t===this.t&&(this.t=n)}};u.prototype.subscribe=function(t){var i=this;return w(function(){var n=i.value,r=32&this.f;this.f&=-33;try{t(n)}finally{this.f|=r}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){return this.v};Object.defineProperty(u.prototype,"value",{get:function(){var t=C(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(f instanceof h&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){m>100&&$(),this.v=t,this.i++,y++,v++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{b()}}}});function j(t){return new u(t)}function P(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function A(t){for(var i=t.s;i!==void 0;i=i.n){var n=i.S.n;if(n!==void 0&&(i.r=n),i.S.n=i,i.i=-1,i.n===void 0){t.s=i;break}}}function G(t){for(var i=t.s,n=void 0;i!==void 0;){var r=i.p;i.i===-1?(i.S.U(i),r!==void 0&&(r.n=i.n),i.n!==void 0&&(i.n.p=r)):n=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=r}t.s=n}function h(t){u.call(this,void 0),this.x=t,this.s=void 0,this.g=y-1,this.f=4}(h.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===y))return!0;if(this.g=y,this.f|=1,this.i>0&&!P(this))return this.f&=-2,!0;var t=f;try{A(this),f=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return f=t,G(this),this.f&=-2,!0};h.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}u.prototype.S.call(this,t)};h.prototype.U=function(t){if(this.t!==void 0&&(u.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};h.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};h.prototype.peek=function(){if(this.h()||$(),16&this.f)throw this.v;return this.v};Object.defineProperty(h.prototype,"value",{get:function(){1&this.f&&$();var t=C(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function J(t){return new h(t)}function V(t){var i=t.u;if(t.u=void 0,typeof i=="function"){v++;var n=f;f=void 0;try{i()}catch(r){throw t.f&=-2,t.f|=8,k(t),r}finally{f=n,b()}}}function k(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,V(t)}function D(t){if(f!==this)throw new Error("Out-of-order effect");G(this),f=t,this.f&=-2,8&this.f&&k(this),b()}function p(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}p.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{t()}};p.prototype.S=function(){1&this.f&&$(),this.f|=1,this.f&=-9,V(this),A(this),v++;var t=f;return f=this,D.bind(this,t)};p.prototype.N=function(){2&this.f||(this.f|=2,this.o=d,d=this)};p.prototype.d=function(){this.f|=8,1&this.f||k(this)};function w(t){var i=new p(t);try{i.c()}catch(n){throw i.d(),n}return i.d.bind(i)}var g,x;function c(t,i){O[t]=i.bind(null,O[t]||function(){})}function S(t){x&&x(),x=t&&t.S()}function q(t){var i=this,n=t.data,r=H(n);r.value=n;var e=U(function(){for(var o=i.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return i.__$u.c=function(){i.base.data=e.peek()},J(function(){var s=r.value.value;return s===0?0:s===!0?"":s||""})},[]);return e.value}q.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:q},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});c("__b",function(t,i){if(typeof i.type=="string"){var n,r=i.props;for(var e in r)if(e!=="children"){var o=r[e];o instanceof u&&(n||(i.__np=n={}),n[e]=o,r[e]=o.peek())}}t(i)});c("__r",function(t,i){S();var n,r=i.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e){var o;return w(function(){o=this}),o.c=function(){r.__$f|=1,r.setState({})},o}())),g=r,S(n),t(i)});c("__e",function(t,i,n,r){S(),g=void 0,t(i,n,r)});c("diffed",function(t,i){S(),g=void 0;var n;if(typeof i.type=="string"&&(n=i.__e)){var r=i.__np,e=i.props;if(r){var o=n.U;if(o)for(var s in o){var a=o[s];a!==void 0&&!(s in r)&&(a.d(),o[s]=void 0)}else n.U=o={};for(var l in r){var _=o[l],N=r[l];_===void 0?(_=F(n,l,N,e),o[l]=_):_.o(N,e)}}}t(i)});function F(t,i,n,r){var e=i in t&&t.ownerSVGElement===void 0,o=j(n);return{o:function(s,a){o.value=s,r=a},d:w(function(){var s=o.value.value;r[i]!==s&&(r[i]=s,e?t[i]=s:s?t.setAttribute(i,s):t.removeAttribute(i))})}}c("unmount",function(t,i){if(typeof i.type=="string"){var n=i.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var e in r){var o=r[e];o&&o.d()}}}}else{var s=i.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}t(i)});c("__h",function(t,i,n,r){r<3&&(i.__$f|=2),t(i,n,r)});z.prototype.shouldComponentUpdate=function(t,i){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in i)return!0;for(var e in t)if(e!=="__source"&&t[e]!==this.props[e])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};function H(t){return U(function(){return j(t)},[])}function M(t){var i=E(t);return i.current=t,g.__$f|=4,U(function(){return J(function(){return i.current()})},[])}function Q(t){var i=E(t);i.current=t,B(function(){return w(function(){return i.current()})},[])}export{u as Signal,L as batch,J as computed,w as effect,j as signal,M as useComputed,H as useSignal,Q as useSignalEffect};
