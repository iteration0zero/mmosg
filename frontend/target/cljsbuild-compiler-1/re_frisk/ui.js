// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('datafrisk.core');
goog.require('re_frisk.data');
goog.require('goog.events.EventType');
re_frisk.ui.frisk_style = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background_DASH_color,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$width,"100%"], null);
re_frisk.ui.re_frisk_button_style = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$cursor,cljs.core.cst$kw$border_DASH_bottom_DASH_left_DASH_radius,cljs.core.cst$kw$fontFamily,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$fontSize,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom_DASH_right_DASH_radius],["left","#CCCCCC","move","0px","Consolas,Monaco,Courier New,monospace","2rem","6px","inline-block","12px","2px","0px"]);
re_frisk.ui.arrow_style = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$margin_DASH_left,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$border_DASH_bottom_DASH_left_DASH_radius,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$border_DASH_bottom_DASH_right_DASH_radius],["center","5px","#CCCCCC","15px","pointer","0px","2rem","3px","inline-block","2px","0px"]);
if(typeof re_frisk.ui.draggable !== 'undefined'){
} else {
re_frisk.ui.draggable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk.ui.ua !== 'undefined'){
} else {
re_frisk.ui.ua = window.navigator.userAgent;
}
if(typeof re_frisk.ui.ie_QMARK_ !== 'undefined'){
} else {
re_frisk.ui.ie_QMARK_ = (function (){var or__6251__auto__ = cljs.core.re_find(/MSIE /,re_frisk.ui.ua);
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
var or__6251__auto____$1 = cljs.core.re_find(/Trident\//,re_frisk.ui.ua);
if(cljs.core.truth_(or__6251__auto____$1)){
return or__6251__auto____$1;
} else {
return cljs.core.re_find(/Edge\//,re_frisk.ui.ua);
}
}
})();
}
re_frisk.ui.get_client_rect = (function re_frisk$ui$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$top,r.top], null);
});
re_frisk.ui.mouse_move_handler = (function re_frisk$ui$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset));
var G__12990 = re_frisk.ui.draggable;
var G__12991 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12990,G__12991) : cljs.core.reset_BANG_.call(null,G__12990,G__12991));
});
});
re_frisk.ui.mouse_up_handler = (function re_frisk$ui$mouse_up_handler(on_move){
return (function re_frisk$ui$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk.ui.mouse_down_handler = (function re_frisk$ui$mouse_down_handler(e){
var map__12997 = re_frisk.ui.get_client_rect(e);
var map__12997__$1 = ((((!((map__12997 == null)))?((((map__12997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12997):map__12997);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12997__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = re_frisk.ui.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__12999 = window;
var G__13000 = goog.events.EventType.MOUSEUP;
var G__13001 = re_frisk.ui.mouse_up_handler(on_move);
return goog.events.listen(G__12999,G__13000,G__13001);
});
re_frisk.ui.visibility_button = (function re_frisk$ui$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"10px"], null),cljs.core.cst$kw$onClick,update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
re_frisk.ui.re_frisk_panel = (function re_frisk$ui$re_frisk_panel(var_args){
var args__7333__auto__ = [];
var len__7326__auto___13005 = arguments.length;
var i__7327__auto___13006 = (0);
while(true){
if((i__7327__auto___13006 < len__7326__auto___13005)){
args__7333__auto__.push((arguments[i__7327__auto___13006]));

var G__13007 = (i__7327__auto___13006 + (1));
i__7327__auto___13006 = G__13007;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13002_SHARP_,p2__13003_SHARP_){
return cljs.core.assoc_in(p1__13002_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__13003_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__13008__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__13008 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__13009__i = 0, G__13009__a = new Array(arguments.length -  0);
while (G__13009__i < G__13009__a.length) {G__13009__a[G__13009__i] = arguments[G__13009__i + 0]; ++G__13009__i;}
  data__$1 = new cljs.core.IndexedSeq(G__13009__a,0);
} 
return G__13008__delegate.call(this,data__$1);};
G__13008.cljs$lang$maxFixedArity = 0;
G__13008.cljs$lang$applyTo = (function (arglist__13010){
var data__$1 = cljs.core.seq(arglist__13010);
return G__13008__delegate(data__$1);
});
G__13008.cljs$core$IFn$_invoke$arity$variadic = G__13008__delegate;
return G__13008;
})()
;
;})(expand_by_default,state_atom))
});

re_frisk.ui.re_frisk_panel.cljs$lang$maxFixedArity = (0);

re_frisk.ui.re_frisk_panel.cljs$lang$applyTo = (function (seq13004){
return re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13004));
});

re_frisk.ui.re_frisk_shell = (function re_frisk$ui$re_frisk_shell(data,p__13011){
var map__13014 = p__13011;
var map__13014__$1 = ((((!((map__13014 == null)))?((((map__13014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13014):map__13014);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,cljs.core.cst$kw$on_DASH_click);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,cljs.core.cst$kw$height);
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$resize,"both",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$height,"200px"], null)], 0));
var height__$1 = (cljs.core.truth_((function (){var and__6239__auto__ = re_frisk.ui.ie_QMARK_;
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core.not(height);
} else {
return and__6239__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,height__$1,cljs.core.cst$kw$max_DASH_height,height__$1,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
var style__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$max_DASH_width,width,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.draggable,cljs.core.assoc,cljs.core.cst$kw$x,x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.draggable,cljs.core.assoc,cljs.core.cst$kw$y,y);
} else {
}

return ((function (style,height__$1,style__$1,style__$2,map__13014,map__13014__$1,on_click,x,y,width,height){
return (function (data__$1){
if(cljs.core.truth_(cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,[cljs.core.str(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.draggable) : cljs.core.deref.call(null,re_frisk.ui.draggable)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$top,[cljs.core.str(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.draggable) : cljs.core.deref.call(null,re_frisk.ui.draggable)))),cljs.core.str("px")].join(''),cljs.core.cst$kw$z_DASH_index,(999)], null),(cljs.core.truth_((function (){var or__6251__auto__ = re_frisk.ui.ie_QMARK_;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.draggable) : cljs.core.deref.call(null,re_frisk.ui.draggable))));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$right,"20px"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk.ui.re_frisk_button_style,cljs.core.cst$kw$on_DASH_mouse_DASH_down,re_frisk.ui.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.visibility_button,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)))),((function (style,height__$1,style__$1,style__$2,map__13014,map__13014__$1,on_click,x,y,width,height){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,cljs.core.cst$kw$visible_QMARK_], null),cljs.core.not(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))));
});})(style,height__$1,style__$1,style__$2,map__13014,map__13014__$1,on_click,x,y,width,height))
], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk.ui.arrow_style,cljs.core.cst$kw$on_DASH_click,on_click], null),"\u2197"], null),(cljs.core.truth_(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_panel,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data__$1) : cljs.core.deref.call(null,data__$1))], null)], null):null)], null);
} else {
return null;
}
});
;})(style,height__$1,style__$1,style__$2,map__13014,map__13014__$1,on_click,x,y,width,height))
});
re_frisk.ui.debugger_page = "<!DOCTYPE html>\n  <html>\n\n    <head>\n\n      <title>re-frisk debugger</title>\n      <meta charset=\"UTF-8\">\n\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    </head>\n\n    <body style=\"margin:0px;padding:0px\">\n\n      <script>var saveAs=saveAs||function(e){\"use strict\";if(typeof e===\"undefined\"||typeof navigator!==\"undefined\"&&/MSIE [1-9]\\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS(\"http://www.w3.org/1999/xhtml\",\"a\"),o=\"download\"in r,a=function(e){var t=new MouseEvent(\"click\");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=\"application/octet-stream\",d=1e3*40,c=function(e){var t=function(){if(typeof e===\"string\"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e[\"on\"+t[r]];if(typeof o===\"function\"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,\"writestart progress write writeend\".split(\" \"))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,\"data:attachment/file;\");var n=e.open(t,\"_blank\");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,\"_blank\");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||\"download\",n)};if(typeof navigator!==\"undefined\"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||\"download\";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!==\"undefined\"&&self||typeof window!==\"undefined\"&&window||this.content);if(typeof module!==\"undefined\"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!==\"undefined\"&&define!==null&&define.amd!==null){define(\"FileSaver.js\",function(){return saveAs})}</script>\n      <style>\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: 23ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n</style>\n      <div id=\"app\" style=\"height:100%;width:100%\">\n\n        <h2>re-frisk debugger</h2>\n\n        <p>ENJOY!</p>\n\n      </div>\n\n    </body>\n\n  </html>";
