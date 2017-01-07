// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register a subscription handler fucntion for an query id
 */
re_frame.subs.register_raw = (function re_frame$subs$register_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.subs.query__GT_reaction = (function (){var G__13425 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13425) : cljs.core.atom.call(null,G__13425));
})();
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

var G__13428 = re_frame.subs.query__GT_reaction;
var G__13429 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13428,G__13429) : cljs.core.reset_BANG_.call(null,G__13428,G__13429));
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args13430 = [];
var len__7326__auto___13433 = arguments.length;
var i__7327__auto___13434 = (0);
while(true){
if((i__7327__auto___13434 < len__7326__auto___13433)){
args13430.push((arguments[i__7327__auto___13434]));

var G__13435 = (i__7327__auto___13434 + (1));
i__7327__auto___13434 = G__13435;
continue;
} else {
}
break;
}

var G__13432 = args13430.length;
switch (G__13432) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13430.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args13437 = [];
var len__7326__auto___13444 = arguments.length;
var i__7327__auto___13445 = (0);
while(true){
if((i__7327__auto___13445 < len__7326__auto___13444)){
args13437.push((arguments[i__7327__auto___13445]));

var G__13446 = (i__7327__auto___13445 + (1));
i__7327__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var G__13439 = args13437.length;
switch (G__13439) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13437.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(cljs.core.not(handler_fn)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription."], 0));
} else {
}

return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___13448 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___13448)){
var not_reactive_13449 = temp__4657__auto___13448;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom: ",not_reactive_13449], 0));
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription."], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__13440 = re_frame.db.app_db;
var G__13441 = v;
var G__13442 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__13440,G__13441,G__13442) : handler_fn.call(null,G__13440,G__13441,G__13442));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__13443 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13443) : cljs.core.deref.call(null,G__13443));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7031__auto__ = (function re_frame$subs$map_vals_$_iter__13468(s__13469){
return (new cljs.core.LazySeq(null,(function (){
var s__13469__$1 = s__13469;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13469__$1);
if(temp__4657__auto__){
var s__13469__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13469__$2)){
var c__7029__auto__ = cljs.core.chunk_first(s__13469__$2);
var size__7030__auto__ = cljs.core.count(c__7029__auto__);
var b__13471 = cljs.core.chunk_buffer(size__7030__auto__);
if((function (){var i__13470 = (0);
while(true){
if((i__13470 < size__7030__auto__)){
var vec__13480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7029__auto__,i__13470);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13480,(1),null);
cljs.core.chunk_append(b__13471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__13486 = (i__13470 + (1));
i__13470 = G__13486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),re_frame$subs$map_vals_$_iter__13468(cljs.core.chunk_rest(s__13469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13471),null);
}
} else {
var vec__13483 = cljs.core.first(s__13469__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_frame$subs$map_vals_$_iter__13468(cljs.core.rest(s__13469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7031__auto__(m);
})());
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
if(cljs.core.sequential_QMARK_(signals)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_(signals)){
return re_frame.subs.map_vals(cljs.core.deref,signals);
} else {
if(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals));
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: the reg-sub for ",query_id,", must be wrong. Return value from input-signals function is: ",signals], 0));

}
}
}
});
/**
 * Register a given handler function for a given query id.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation fucntion, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__7333__auto__ = [];
var len__7326__auto___13500 = arguments.length;
var i__7327__auto___13501 = (0);
while(true){
if((i__7327__auto___13501 < len__7326__auto___13500)){
args__7333__auto__.push((arguments[i__7327__auto___13501]));

var G__13502 = (i__7327__auto___13501 + (1));
i__7327__auto___13501 = G__13502;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((1) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7334__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__13489 = cljs.core.count(input_args);
switch (G__13489) {
case (0):
return ((function (G__13489,computation_fn,input_args,err_header){
return (function() {
var G__13504 = null;
var G__13504__1 = (function (_){
return re_frame.db.app_db;
});
var G__13504__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__13504 = function(_,___$1){
switch(arguments.length){
case 1:
return G__13504__1.call(this,_);
case 2:
return G__13504__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13504.cljs$core$IFn$_invoke$arity$1 = G__13504__1;
G__13504.cljs$core$IFn$_invoke$arity$2 = G__13504__2;
return G__13504;
})()
;})(G__13489,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"2nd argument expected to be an inputs function, got: ",f], 0));
}

return f;

break;
case (2):
var ret_val = re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
return ((function (ret_val,G__13489,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(ret_val,G__13489,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
var ret_val = cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got: ",pairs], 0));
}

return ((function (pairs,vecs,ret_val,G__13489,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,ret_val,G__13489,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
return re_frame.interop.make_reaction(((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
var G__13495 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__13496 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__13495,G__13496) : computation_fn.call(null,G__13495,G__13496));
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
return re_frame.interop.make_reaction(((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
var G__13497 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__13498 = query_vec;
var G__13499 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__13497,G__13498,G__13499) : computation_fn.call(null,G__13497,G__13498,G__13499));
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq13487){
var G__13488 = cljs.core.first(seq13487);
var seq13487__$1 = cljs.core.next(seq13487);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__13488,seq13487__$1);
});

