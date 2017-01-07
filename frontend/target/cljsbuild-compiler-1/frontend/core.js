// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('frontend.routes');
goog.require('frontend.views');
goog.require('frontend.config');
goog.require('frontend.subs');
goog.require('re_frisk.core');
goog.require('frontend.events');
goog.require('re_frame.core');
frontend.core.dev_setup = (function frontend$core$dev_setup(){
if(cljs.core.truth_(frontend.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dev mode"], 0));
} else {
return null;
}
});
frontend.core.mount_root = (function frontend$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.main_panel], null),document.getElementById("app"));
});
frontend.core.init = (function frontend$core$init(){
frontend.routes.app_routes();

var G__14141_14142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__14141_14142) : re_frame.core.dispatch_sync.call(null,G__14141_14142));

re_frisk.core.enable_re_frisk_BANG_();

frontend.core.dev_setup();

return frontend.core.mount_root();
});
goog.exportSymbol('frontend.core.init', frontend.core.init);
