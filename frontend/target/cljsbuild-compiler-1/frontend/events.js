// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('frontend.db');
goog.require('re_frisk.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return frontend.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_panel,(function (db,p__14046){
var vec__14047 = p__14046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14047,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14047,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,active_panel);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$inc_DASH_tile_DASH_size,(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$tile_DASH_size], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dec_DASH_tile_DASH_size,(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$tile_DASH_size], null),cljs.core.dec);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$switch_DASH_mode,(function (db,p__14050){
var vec__14051 = p__14050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var new_mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$modes.cljs$core$IFn$_invoke$arity$1(db).call(null,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(db)),new_mode)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$mode,new_mode);
} else {
return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_new_DASH_building_DASH_to_DASH_buildings,(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$buildings], null),(function (p1__14054_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14054_SHARP_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$new_DASH_building], null)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_new_DASH_building,(function (db,p__14055){
var vec__14056 = p__14055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(0),null);
var x_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(1),null);
var y_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14056,(2),null);
var corner_points_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$new_DASH_building,cljs.core.cst$kw$corner_DASH_points], null);
return cljs.core.assoc_in(db,cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(corner_points_vec,(function (){var x__6589__auto__ = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,corner_points_vec));
var y__6590__auto__ = (1);
return ((x__6589__auto__ < y__6590__auto__) ? x__6589__auto__ : y__6590__auto__);
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_index,y_index], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_new_DASH_building,(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game,cljs.core.cst$kw$new_DASH_building,cljs.core.cst$kw$corner_DASH_points], null),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hover,(function (db,p__14059){
var vec__14060 = p__14059;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(0),null);
var x_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(1),null);
var y_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$new_DASH_building)){
var G__14063_14064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_new_DASH_building,x_index,y_index], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14063_14064) : re_frame.core.dispatch.call(null,G__14063_14064));
} else {
}

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$select,(function (db,p__14065){
var vec__14066 = p__14065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(0),null);
var x_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(1),null);
var y_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$build)){
var G__14069_14071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$switch_DASH_mode,cljs.core.cst$kw$new_DASH_building], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14069_14071) : re_frame.core.dispatch.call(null,G__14069_14071));

var G__14070_14072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_new_DASH_building,x_index,y_index], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14070_14072) : re_frame.core.dispatch.call(null,G__14070_14072));
} else {
}

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$de_DASH_select,(function (db,p__14073){
var vec__14074 = p__14073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(0),null);
var x_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(1),null);
var y_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$new_DASH_building)){
var G__14077_14080 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_new_DASH_building_DASH_to_DASH_buildings], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14077_14080) : re_frame.core.dispatch.call(null,G__14077_14080));

var G__14078_14081 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_new_DASH_building], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14078_14081) : re_frame.core.dispatch.call(null,G__14078_14081));
} else {
var G__14079_14082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$switch_DASH_mode,cljs.core.cst$kw$view], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14079_14082) : re_frame.core.dispatch.call(null,G__14079_14082));
}

return db;
}));
