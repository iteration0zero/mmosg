// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('re_frisk.devtool');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('re_frisk.ui');
goog.require('reagent.core');
goog.require('re_frisk.data');
goog.require('datafrisk.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__4655__auto__ = (function (){try{return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),(function (){var G__13577 = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data)));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13577) : cljs.core.deref.call(null,G__13577));
})());
}catch (e13576){if((e13576 instanceof Object)){
var e = e13576;
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).alert(e);
} else {
throw e13576;

}
}})();
if(cljs.core.truth_(temp__4655__auto__)){
var str = temp__4655__auto__;
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"application/json"], null))),"app-db.json");
} else {
return null;
}
});
re_frisk.devtool.json_on_change = (function re_frisk$devtool$json_on_change(event){
var rdr = (new FileReader());
rdr.onload = ((function (rdr){
return (function (p1__13578_SHARP_){
var G__13582_13585 = re_frisk.data.re_frame_events;
var G__13583_13586 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13582_13585,G__13583_13586) : cljs.core.reset_BANG_.call(null,G__13582_13585,G__13583_13586));

var G__13584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db,cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),p1__13578_SHARP_.target.result)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13584) : re_frame.core.dispatch.call(null,G__13584));
});})(rdr))
;

return rdr.readAsText((event.target.files[(0)]));
});
re_frisk.devtool.debugger_messages = (function re_frisk$devtool$debugger_messages(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"debugger-messages",cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var n = reagent.core.dom_node(this$);
if(cljs.core.truth_(cljs.core.cst$kw$scroll_DASH_bottom_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var clrs = cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_messages,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_scroll,((function (clrs){
return (function (p1__13587_SHARP_){
var t = p1__13587_SHARP_.target;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$scroll_DASH_bottom_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t.scrollTop,(t.scrollHeight - t.offsetHeight)));
});})(clrs))
], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (clrs){
return (function (id,item){
var event = cljs.core.first((cljs.core.truth_(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item))?cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item):item));
var fx_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/-fx/,[cljs.core.str(event)].join('')));
var db_QMARK_ = cljs.core.boolean$(cljs.core.re_find(/-db/,[cljs.core.str(event)].join('')));
var clr = (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(clrs) : event.call(null,clrs));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$messages_DASH_entry,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (event,fx_QMARK_,db_QMARK_,clr,clrs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$event_DASH_data,item);
});})(event,fx_QMARK_,db_QMARK_,clr,clrs))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(clr)?clr:((fx_QMARK_)?"#FF0000":((db_QMARK_)?"#00FF00":"#3d3d3d"
))),cljs.core.cst$kw$opacity,0.5,cljs.core.cst$kw$width,"15px",cljs.core.cst$kw$height,"15px",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$padding_DASH_bottom,"4px"], null)], null),((fx_QMARK_)?"fx":((db_QMARK_)?"db":"  "
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$messages_DASH_entry_DASH_content,[cljs.core.str(event)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(clrs))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_events) : cljs.core.deref.call(null,re_frisk.data.re_frame_events)))], null);
})], null));
});
re_frisk.devtool.event_bar = (function re_frisk$devtool$event_bar(){
var evnt_key = reagent.ratom.make_reaction((function (){
return cljs.core.first((function (){var or__6251__auto__ = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)));
}
})());
}));
var clr = reagent.ratom.make_reaction(((function (evnt_key){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key)).call(null,cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$background_DASH_color,"#3d3d3d",cljs.core.cst$kw$color,"#ffffff",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Event"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,"50px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"60px"], null),cljs.core.cst$kw$placeholder,"#000000",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clr) : cljs.core.deref.call(null,clr)),cljs.core.cst$kw$max_DASH_length,"7",cljs.core.cst$kw$on_DASH_change,((function (evnt_key,clr){
return (function (p1__13588_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evnt_DASH_colors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(evnt_key) : cljs.core.deref.call(null,evnt_key))], null),p1__13588_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"0px",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (evnt_key,clr){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$event_DASH_data,null);
});})(evnt_key,clr))
], null),"X"], null)], null);
});
;})(evnt_key,clr))
});
re_frisk.devtool.debugger_shell = (function re_frisk$devtool$debugger_shell(){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13589_SHARP_,p2__13590_SHARP_){
return cljs.core.assoc_in(p1__13589_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__13590_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var expand_by_default2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (expand_by_default){
return (function (p1__13591_SHARP_,p2__13592_SHARP_){
return cljs.core.assoc_in(p1__13591_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__13592_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
});})(expand_by_default))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
var state_atom2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default2);
return ((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_debugger,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.debugger_messages], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_controls,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$debugger_DASH_sidebar_DASH_controls_DASH_import_DASH_export,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (){
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))).getElementById("json-file-field").click();
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
], null),"Import"], null)," / ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,re_frisk.devtool.export_json], null),"Export"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(cljs.core.truth_(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))?"60%":"100%")], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"40%",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))))?"block":"none")], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.event_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$height,"100%"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,expand_by_default2,state_atom,state_atom2){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,expand_by_default2,state_atom,state_atom2))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"20px"], null)], null)], null)], null)], null)], null)], null);
});
;})(expand_by_default,expand_by_default2,state_atom,state_atom2))
});
re_frisk.devtool.reagent_debugger_shell = (function re_frisk$devtool$reagent_debugger_shell(){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13593_SHARP_,p2__13594_SHARP_){
return cljs.core.assoc_in(p1__13593_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__13594_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,re_frisk.ui.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data))], null))], null)], null);
});
;})(expand_by_default,state_atom))
});
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node(cljs.core.cst$kw$app.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,true);
});
re_frisk.devtool.mount = (function re_frisk$devtool$mount(w,d){
var app = d.getElementById("app");
var re_frame_QMARK_ = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.re_frame_data) : cljs.core.deref.call(null,re_frisk.data.re_frame_data)));
(w["onunload"] = re_frisk.devtool.on_window_unload);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,false,cljs.core.array_seq([cljs.core.cst$kw$doc,d,cljs.core.cst$kw$win,w,cljs.core.cst$kw$app,app], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$id,"json-file-field",cljs.core.cst$kw$on_DASH_change,re_frisk.devtool.json_on_change,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null)], null),(cljs.core.truth_((function (){var and__6239__auto__ = re_frame_QMARK_;
if(cljs.core.truth_(and__6239__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prefs.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frisk.data.deb_data) : cljs.core.deref.call(null,re_frisk.data.deb_data)))),false);
} else {
return and__6239__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.debugger_shell], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.reagent_debugger_shell], null))], null),app);
});
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var w = window.open("","Debugger","width=800,height=400,resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no");
var d = w.document;
d.open();

d.write(re_frisk.ui.debugger_page);

(w["onload"] = ((function (w,d){
return (function (){
return re_frisk.devtool.mount(w,d);
});})(w,d))
);

return d.close();
});
