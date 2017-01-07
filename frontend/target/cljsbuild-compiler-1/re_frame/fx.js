// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13283){
var vec__13284 = p__13283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13284,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13284,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13295_13305 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13296_13306 = ((function (G__13295_13305){
return (function (value){
var seq__13297 = cljs.core.seq(value);
var chunk__13298 = null;
var count__13299 = (0);
var i__13300 = (0);
while(true){
if((i__13300 < count__13299)){
var map__13301 = chunk__13298.cljs$core$IIndexed$_nth$arity$2(null,i__13300);
var map__13301__$1 = ((((!((map__13301 == null)))?((((map__13301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13301):map__13301);
var effect = map__13301__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13297,chunk__13298,count__13299,i__13300,map__13301,map__13301__$1,effect,ms,dispatch,G__13295_13305){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13297,chunk__13298,count__13299,i__13300,map__13301,map__13301__$1,effect,ms,dispatch,G__13295_13305))
,ms);
}

var G__13307 = seq__13297;
var G__13308 = chunk__13298;
var G__13309 = count__13299;
var G__13310 = (i__13300 + (1));
seq__13297 = G__13307;
chunk__13298 = G__13308;
count__13299 = G__13309;
i__13300 = G__13310;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13297);
if(temp__4657__auto__){
var seq__13297__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13297__$1)){
var c__7062__auto__ = cljs.core.chunk_first(seq__13297__$1);
var G__13311 = cljs.core.chunk_rest(seq__13297__$1);
var G__13312 = c__7062__auto__;
var G__13313 = cljs.core.count(c__7062__auto__);
var G__13314 = (0);
seq__13297 = G__13311;
chunk__13298 = G__13312;
count__13299 = G__13313;
i__13300 = G__13314;
continue;
} else {
var map__13303 = cljs.core.first(seq__13297__$1);
var map__13303__$1 = ((((!((map__13303 == null)))?((((map__13303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13303):map__13303);
var effect = map__13303__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13303__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13297,chunk__13298,count__13299,i__13300,map__13303,map__13303__$1,effect,ms,dispatch,seq__13297__$1,temp__4657__auto__,G__13295_13305){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13297,chunk__13298,count__13299,i__13300,map__13303,map__13303__$1,effect,ms,dispatch,seq__13297__$1,temp__4657__auto__,G__13295_13305))
,ms);
}

var G__13315 = cljs.core.next(seq__13297__$1);
var G__13316 = null;
var G__13317 = (0);
var G__13318 = (0);
seq__13297 = G__13315;
chunk__13298 = G__13316;
count__13299 = G__13317;
i__13300 = G__13318;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13295_13305))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13295_13305,G__13296_13306) : re_frame.fx.register.call(null,G__13295_13305,G__13296_13306));
var G__13319_13321 = cljs.core.cst$kw$dispatch;
var G__13320_13322 = ((function (G__13319_13321){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13319_13321))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13319_13321,G__13320_13322) : re_frame.fx.register.call(null,G__13319_13321,G__13320_13322));
var G__13327_13333 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13328_13334 = ((function (G__13327_13333){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13329 = cljs.core.seq(value);
var chunk__13330 = null;
var count__13331 = (0);
var i__13332 = (0);
while(true){
if((i__13332 < count__13331)){
var event = chunk__13330.cljs$core$IIndexed$_nth$arity$2(null,i__13332);
re_frame.router.dispatch(event);

var G__13335 = seq__13329;
var G__13336 = chunk__13330;
var G__13337 = count__13331;
var G__13338 = (i__13332 + (1));
seq__13329 = G__13335;
chunk__13330 = G__13336;
count__13331 = G__13337;
i__13332 = G__13338;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13329);
if(temp__4657__auto__){
var seq__13329__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13329__$1)){
var c__7062__auto__ = cljs.core.chunk_first(seq__13329__$1);
var G__13339 = cljs.core.chunk_rest(seq__13329__$1);
var G__13340 = c__7062__auto__;
var G__13341 = cljs.core.count(c__7062__auto__);
var G__13342 = (0);
seq__13329 = G__13339;
chunk__13330 = G__13340;
count__13331 = G__13341;
i__13332 = G__13342;
continue;
} else {
var event = cljs.core.first(seq__13329__$1);
re_frame.router.dispatch(event);

var G__13343 = cljs.core.next(seq__13329__$1);
var G__13344 = null;
var G__13345 = (0);
var G__13346 = (0);
seq__13329 = G__13343;
chunk__13330 = G__13344;
count__13331 = G__13345;
i__13332 = G__13346;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13327_13333))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13327_13333,G__13328_13334) : re_frame.fx.register.call(null,G__13327_13333,G__13328_13334));
var G__13347_13349 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13348_13350 = ((function (G__13347_13349){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13347_13349))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13347_13349,G__13348_13350) : re_frame.fx.register.call(null,G__13347_13349,G__13348_13350));
var G__13351_13353 = cljs.core.cst$kw$db;
var G__13352_13354 = ((function (G__13351_13353){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13351_13353))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13351_13353,G__13352_13354) : re_frame.fx.register.call(null,G__13351_13353,G__13352_13354));
