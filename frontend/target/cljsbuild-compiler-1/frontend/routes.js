// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
frontend.routes.hook_browser_navigation_BANG_ = (function frontend$routes$hook_browser_navigation_BANG_(){
var G__13804 = (new goog.History());
var G__13805_13808 = G__13804;
var G__13806_13809 = goog.history.EventType.NAVIGATE;
var G__13807_13810 = ((function (G__13805_13808,G__13806_13809,G__13804){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__13805_13808,G__13806_13809,G__13804))
;
goog.events.listen(G__13805_13808,G__13806_13809,G__13807_13810);

G__13804.setEnabled(true);

return G__13804;
});
frontend.routes.app_routes = (function frontend$routes$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__13606__auto___13839 = (function (params__13607__auto__){
if(cljs.core.map_QMARK_(params__13607__auto__)){
var map__13825 = params__13607__auto__;
var map__13825__$1 = ((((!((map__13825 == null)))?((((map__13825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13825):map__13825);
var G__13827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13827) : re_frame.core.dispatch.call(null,G__13827));
} else {
if(cljs.core.vector_QMARK_(params__13607__auto__)){
var vec__13828 = params__13607__auto__;
var G__13831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13831) : re_frame.core.dispatch.call(null,G__13831));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13606__auto___13839);


var action__13606__auto___13840 = (function (params__13607__auto__){
if(cljs.core.map_QMARK_(params__13607__auto__)){
var map__13832 = params__13607__auto__;
var map__13832__$1 = ((((!((map__13832 == null)))?((((map__13832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13832):map__13832);
var G__13834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13834) : re_frame.core.dispatch.call(null,G__13834));
} else {
if(cljs.core.vector_QMARK_(params__13607__auto__)){
var vec__13835 = params__13607__auto__;
var G__13838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13838) : re_frame.core.dispatch.call(null,G__13838));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__13606__auto___13840);


return frontend.routes.hook_browser_navigation_BANG_();
});
