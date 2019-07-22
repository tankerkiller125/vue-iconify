/**
 * vue-iconify v1.0.3
 * (c) 2019 Matthew Kilgore
 * @license MIT
 */
!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("@iconify/iconify")):"function"==typeof define&&define.amd?define(["@iconify/iconify"],i):n.vueIconify=i(n.Iconify)}(this,function(n){"use strict";n="default"in n?n.default:n,n.setConfig("defaultAPI","https://api.iconify.design/{prefix}.js?t="+Date.now()+"&icons={icons}");var i=["inline","width","height","rotate","flip","align"],t=[];document.addEventListener("IconifyAddedIcons",function(){t=t.filter(function(i){return!n.iconExists(i.icon)||(i.instance.iconLoaded(),!1)})});var e={name:"VIconify",render:function(t){var e=this;if(!n.iconExists(this.name))return t("span",{attrs:{style:"display: inline-block; width: 1em;"}});var o={};void 0!==this.color&&(o.style="color: "+this.color+";"),i.forEach(function(n){void 0!==e[n]&&(o["data-"+n]=e[n])});var s=n.getSVGObject(this.name,o);return t("svg",{attrs:s.attributes,domProps:{innerHTML:s.body}})},props:{name:{type:String,required:!0},width:String,height:String,inline:Boolean,color:String,rotate:String,flip:String,align:String},beforeMount:function(){this._loadingIcon=!1,this.loadIcon()},beforeUpdate:function(){this.loadIcon()},methods:{loadIcon:function(){this._loadingIcon===this.name||n.iconExists(this.name)||(!1!==this._loadingIcon&&this.removeListener(),this._loadingIcon=this.name,t.push({instance:this,icon:this._loadingIcon}),n.preloadImages([this.name]))},removeListener:function(){var n=this;t=t.filter(function(i){return i.instance!==n})},iconLoaded:function(){this._loadingIcon=!1,this.$forceUpdate()}},beforeDestroy:function(){!1!==this._loadingIcon&&this.removeListener()}},o={};return o.install=function(n,i){n.component(e.name,e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),o});
