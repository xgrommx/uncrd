uncrd.define(["knockout"],function(e){var t=function(t){this.requiresLoading=!0,this.loading=e.observable(!0),this.stringFromServer=e.observable(null)};return t.prototype.domInit=function(e,t,n){setTimeout(function(){e.stringFromServer("Полученные с сервера данные"),e.loading(!1),e.emit("ready")},1e3)},t});