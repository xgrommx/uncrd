uncrd.define([],function(){var e=function(){};return e.prototype.listeners=function(e){return!this._listeners||!this._listeners[e]?[]:this._listeners[e]},e.prototype.removeListener=function(e,t,n){if(!this._listeners||!this._listeners[e])return this;if(t===n)return delete this._listeners[e],this;var r=this._listeners[e],i=r.indexOf(t);return i!=-1&&r.splice(i,1),this},e.prototype.on=function(e,t){return this._listeners||(this._listeners={}),this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),this},e.prototype.off=function(e,t){return this.removeListener(e,t)},e.prototype.emit=function(e){if(this._listeners&&this._listeners[e]){var t=this._listeners[e],n=Array.prototype.slice.call(arguments,1);for(var r=0;r<t.length;r++)t[r].apply(this,n)}return this},e});