// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('reagent.ratom');
goog.require('reagent.core');
goog.require('re_frame.registrar');
goog.require('re_frisk.data');
goog.require('re_frame.core');
goog.require('re_frisk.help');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first(value).call(null,cljs.core.cst$kw$contexts.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cntx,cljs.core.cst$kw$event,value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

window.onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))){
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,re_frisk.devtool.open_debugger_window], null),params], 0))], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___13906 = arguments.length;
var i__7327__auto___13907 = (0);
while(true){
if((i__7327__auto___13907 < len__7326__auto___13906)){
args__7333__auto__.push((arguments[i__7327__auto___13907]));

var G__13908 = (i__7327__auto___13907 + (1));
i__7327__auto___13907 = G__13908;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.initialized) : cljs.core.deref.call(null,re_frisk.data.initialized)))){
return null;
} else {
var prefs = cljs.core.first(params);
var event = reagent.ratom.make_reaction(((function (prefs){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (prefs){
return (function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first(a)],[(function (){var intc = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (prefs){
return (function (p1__13889_SHARP_,p2__13890_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__13890_SHARP_,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$coeffects)))?cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__13890_SHARP_,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$do_DASH_fx)))?cljs.core.cst$kw$do_DASH_fx.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$db_DASH_handler))?cljs.core.cst$kw$db_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$fx_DASH_handler))?cljs.core.cst$kw$fx_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))], true, false),(cljs.core.truth_(cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$before,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__13890_SHARP_,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$coeffects)))?cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$db_DASH_handler))?cljs.core.cst$kw$db_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$fx_DASH_handler))?cljs.core.cst$kw$fx_DASH_handler.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(cljs.core.cst$kw$after.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$after,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__13890_SHARP_,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13889_SHARP_),cljs.core.cst$kw$do_DASH_fx)))?cljs.core.cst$kw$do_DASH_fx.cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null)], 0));
});})(prefs))
,cljs.core.second(a),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.second(a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str(cljs.core.count(intc)),cljs.core.str(" interceptors")].join('')],[intc]);
})()]);
});})(prefs))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (prefs){
return (function (p1__13891_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(p1__13891_SHARP_),cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db);
});})(prefs))
,(function (){var G__13897 = reagent.ratom.make_reaction(((function (prefs){
return (function (){
return cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)));
});})(prefs))
);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13897) : cljs.core.deref.call(null,G__13897));
})())));
});})(prefs))
);
var sub = reagent.ratom.make_reaction(((function (prefs,event){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (prefs,event){
return (function (p1__13892_SHARP_){
var k = cljs.core.first(p1__13892_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[(function (){var G__13898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13898) : re_frame.core.subscribe.call(null,G__13898));
})()]);
});})(prefs,event))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (prefs,event){
return (function (p1__13893_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__13893_SHARP_),cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db);
});})(prefs,event))
,(function (){var G__13899 = reagent.ratom.make_reaction(((function (prefs,event){
return (function (){
return cljs.core.cst$kw$sub.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)));
});})(prefs,event))
);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13899) : cljs.core.deref.call(null,G__13899));
})())));
});})(prefs,event))
);
var G__13900_13909 = cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db;
var G__13901_13910 = ((function (G__13900_13909,prefs,event,sub){
return (function (db,_){
return db;
});})(G__13900_13909,prefs,event,sub))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13900_13909,G__13901_13910) : re_frame.core.reg_sub.call(null,G__13900_13909,G__13901_13910));

var G__13903_13911 = re_frisk.data.re_frame_data;
var G__13904_13912 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handlers,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,cljs.core.PersistentArrayMap.fromArray([cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(event) : cljs.core.deref.call(null,event))),event], true, false),cljs.core.cst$kw$sub,cljs.core.PersistentArrayMap.fromArray([cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub))),sub], true, false),cljs.core.cst$kw$fx,reagent.ratom.make_reaction(((function (G__13903_13911,prefs,event,sub){
return (function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13903_13911,prefs,event,sub){
return (function (p1__13894_SHARP_){
if(cljs.core.truth_((p1__13894_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13894_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.fx) : p1__13894_SHARP_.call(null,re_frisk.help.fx)))){
return cljs.core.PersistentArrayMap.fromArray([p1__13894_SHARP_,(p1__13894_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13894_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.fx) : p1__13894_SHARP_.call(null,re_frisk.help.fx))], true, false);
} else {
return p1__13894_SHARP_;
}
});})(G__13903_13911,prefs,event,sub))
,cljs.core.keys(cljs.core.cst$kw$fx.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)))));
});})(G__13903_13911,prefs,event,sub))
),cljs.core.cst$kw$cofx,reagent.ratom.make_reaction(((function (G__13903_13911,prefs,event,sub){
return (function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13903_13911,prefs,event,sub){
return (function (p1__13895_SHARP_){
if(cljs.core.truth_((p1__13895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13895_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.cofx) : p1__13895_SHARP_.call(null,re_frisk.help.cofx)))){
return cljs.core.PersistentArrayMap.fromArray([p1__13895_SHARP_,(p1__13895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13895_SHARP_.cljs$core$IFn$_invoke$arity$1(re_frisk.help.cofx) : p1__13895_SHARP_.call(null,re_frisk.help.cofx))], true, false);
} else {
return p1__13895_SHARP_;
}
});})(G__13903_13911,prefs,event,sub))
,cljs.core.keys(cljs.core.cst$kw$cofx.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)))));
});})(G__13903_13911,prefs,event,sub))
)], null),cljs.core.cst$kw$app_DASH_db,(function (){var G__13905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13905) : re_frame.core.subscribe.call(null,G__13905));
})()], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13903_13911,G__13904_13912) : cljs.core.reset_BANG_.call(null,G__13903_13911,G__13904_13912));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.data.initialized,true) : cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$prefs,prefs);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(prefs),false)){
} else {
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),prefs);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq13896){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13896));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__7333__auto__ = [];
var len__7326__auto___13917 = arguments.length;
var i__7327__auto___13918 = (0);
while(true){
if((i__7327__auto___13918 < len__7326__auto___13917)){
args__7333__auto__.push((arguments[i__7327__auto___13918]));

var G__13919 = (i__7327__auto___13918 + (1));
i__7327__auto___13918 = G__13919;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.initialized) : cljs.core.deref.call(null,re_frisk.data.initialized)))){
return null;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frisk.data.initialized,true) : cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true));

var G__13914 = re_frisk.core.render_re_frisk;
var G__13915 = (100);
var G__13916 = cljs.core.first(params);
return setTimeout(G__13914,G__13915,G__13916);
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq13913){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13913));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = (function (){var G__13920 = cljs.core.cst$kw$id;
var G__13921 = cljs.core.cst$kw$re_DASH_frisk_DASH_watch_DASH_context;
var G__13922 = cljs.core.cst$kw$before;
var G__13923 = ((function (G__13920,G__13921,G__13922){
return (function (context){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contexts,cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context))),cljs.core.cst$kw$before], null),context);

return context;
});})(G__13920,G__13921,G__13922))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__13920,G__13921,G__13922,G__13923) : re_frame.core.__GT_interceptor.call(null,G__13920,G__13921,G__13922,G__13923));
})();
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$events], null),cljs.core.set(events));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$subs], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13924_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__13924_SHARP_],[(function (){var G__13932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13924_SHARP_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13932) : re_frame.core.subscribe.call(null,G__13932));
})()]);
}),subs)));

var seq__13933 = cljs.core.seq(subs);
var chunk__13934 = null;
var count__13935 = (0);
var i__13936 = (0);
while(true){
if((i__13936 < count__13935)){
var s = chunk__13934.cljs$core$IIndexed$_nth$arity$2(null,i__13936);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__13937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13937) : re_frame.core.subscribe.call(null,G__13937));
})());

var G__13939 = seq__13933;
var G__13940 = chunk__13934;
var G__13941 = count__13935;
var G__13942 = (i__13936 + (1));
seq__13933 = G__13939;
chunk__13934 = G__13940;
count__13935 = G__13941;
i__13936 = G__13942;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13933);
if(temp__4657__auto__){
var seq__13933__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13933__$1)){
var c__7062__auto__ = cljs.core.chunk_first(seq__13933__$1);
var G__13943 = cljs.core.chunk_rest(seq__13933__$1);
var G__13944 = c__7062__auto__;
var G__13945 = cljs.core.count(c__7062__auto__);
var G__13946 = (0);
seq__13933 = G__13943;
chunk__13934 = G__13944;
count__13935 = G__13945;
i__13936 = G__13946;
continue;
} else {
var s = cljs.core.first(seq__13933__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__13938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13938) : re_frame.core.subscribe.call(null,G__13938));
})());

var G__13947 = cljs.core.next(seq__13933__$1);
var G__13948 = null;
var G__13949 = (0);
var G__13950 = (0);
seq__13933 = G__13947;
chunk__13934 = G__13948;
count__13935 = G__13949;
i__13936 = G__13950;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views], null),cljs.core.dissoc,cljs.core.array_seq([view], 0));
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db,(function (db,p__13951){
var vec__13952 = p__13951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13952,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13952,(1),null);
return value;
}));
