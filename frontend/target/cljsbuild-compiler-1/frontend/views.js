// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.views');
goog.require('cljs.core');
goog.require('re_frame.core');
frontend.views.game_controls = (function frontend$views$game_controls(){
var mode = (function (){var G__13963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mode], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13963) : re_frame.core.subscribe.call(null,G__13963));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"20px",cljs.core.cst$kw$left,"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border,"1px solid black",cljs.core.cst$kw$width,"40px",cljs.core.cst$kw$height,"40px"], null),cljs.core.cst$kw$on_DASH_click,((function (mode){
return (function (){
var G__13964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inc_DASH_tile_DASH_size], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13964) : re_frame.core.dispatch.call(null,G__13964));
});})(mode))
], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border,"1px solid black",cljs.core.cst$kw$width,"40px",cljs.core.cst$kw$height,"40px"], null),cljs.core.cst$kw$on_DASH_click,((function (mode){
return (function (){
var G__13965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dec_DASH_tile_DASH_size], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13965) : re_frame.core.dispatch.call(null,G__13965));
});})(mode))
], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,"1px solid black",cljs.core.cst$kw$width,"40px",cljs.core.cst$kw$height,"40px",cljs.core.cst$kw$background_DASH_color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),cljs.core.cst$kw$build))?"green":"")], null),cljs.core.cst$kw$on_DASH_click,((function (mode){
return (function (){
var G__13966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$switch_DASH_mode,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode)),cljs.core.cst$kw$build))?cljs.core.cst$kw$view:cljs.core.cst$kw$build)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13966) : re_frame.core.dispatch.call(null,G__13966));
});})(mode))
], null),"build"], null)], null);
});
frontend.views.tile = (function frontend$views$tile(x_index,y_index,tile_size,mode){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(y_index * tile_size),cljs.core.cst$kw$left,(x_index * tile_size),cljs.core.cst$kw$width,tile_size,cljs.core.cst$kw$height,tile_size], null),cljs.core.cst$kw$on_DASH_mouse_DASH_down,(function (){
var G__13970 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,x_index,y_index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13970) : re_frame.core.dispatch.call(null,G__13970));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (){
var G__13971 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hover,x_index,y_index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13971) : re_frame.core.dispatch.call(null,G__13971));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function (){
var G__13972 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$de_DASH_select,x_index,y_index], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13972) : re_frame.core.dispatch.call(null,G__13972));
})], null)], null);
});
frontend.views.building_disp = (function frontend$views$building_disp(p__13973,type,color,tile_size){
var vec__13983 = p__13973;
var vec__13986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13983,(0),null);
var first_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13986,(0),null);
var first_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13986,(1),null);
var vec__13989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13983,(1),null);
var second_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(0),null);
var second_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13989,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,((first_y * tile_size) + (1)),cljs.core.cst$kw$left,((first_x * tile_size) + (1)),cljs.core.cst$kw$width,(((second_x - first_x) * tile_size) - (1)),cljs.core.cst$kw$height,(((second_y - first_y) * tile_size) - (1)),cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$background_DASH_color,color,cljs.core.cst$kw$border,"1px solid #bbb"], null)], null),type], null);
});
frontend.views.game = (function frontend$views$game(){
var game_dimensions = (function (){var G__14014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14014) : re_frame.core.subscribe.call(null,G__14014));
})();
var tile_size = (function (){var G__14015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tile_DASH_size], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14015) : re_frame.core.subscribe.call(null,G__14015));
})();
var x_dimension = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_dimensions) : cljs.core.deref.call(null,game_dimensions)));
var y_dimension = cljs.core.second((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_dimensions) : cljs.core.deref.call(null,game_dimensions)));
var buildings = (function (){var G__14016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$buildings], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14016) : re_frame.core.subscribe.call(null,G__14016));
})();
var new_building = (function (){var G__14017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$new_DASH_building], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14017) : re_frame.core.subscribe.call(null,G__14017));
})();
var mode = (function (){var G__14018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mode], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14018) : re_frame.core.subscribe.call(null,G__14018));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7031__auto__ = ((function (game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function frontend$views$game_$_iter__14019(s__14020){
return (new cljs.core.LazySeq(null,((function (game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function (){
var s__14020__$1 = s__14020;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14020__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first(xs__5205__auto__);
var iterys__7027__auto__ = ((function (s__14020__$1,x,xs__5205__auto__,temp__4657__auto__,game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function frontend$views$game_$_iter__14019_$_iter__14021(s__14022){
return (new cljs.core.LazySeq(null,((function (s__14020__$1,x,xs__5205__auto__,temp__4657__auto__,game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function (){
var s__14022__$1 = s__14022;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__14022__$1);
if(temp__4657__auto____$1){
var s__14022__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14022__$2)){
var c__7029__auto__ = cljs.core.chunk_first(s__14022__$2);
var size__7030__auto__ = cljs.core.count(c__7029__auto__);
var b__14024 = cljs.core.chunk_buffer(size__7030__auto__);
if((function (){var i__14023 = (0);
while(true){
if((i__14023 < size__7030__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7029__auto__,i__14023);
cljs.core.chunk_append(b__14024,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.tile,x,y,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tile_size) : cljs.core.deref.call(null,tile_size)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__14036 = (i__14023 + (1));
i__14023 = G__14036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14024),frontend$views$game_$_iter__14019_$_iter__14021(cljs.core.chunk_rest(s__14022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14024),null);
}
} else {
var y = cljs.core.first(s__14022__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.tile,x,y,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tile_size) : cljs.core.deref.call(null,tile_size)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mode) : cljs.core.deref.call(null,mode))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),frontend$views$game_$_iter__14019_$_iter__14021(cljs.core.rest(s__14022__$2)));
}
} else {
return null;
}
break;
}
});})(s__14020__$1,x,xs__5205__auto__,temp__4657__auto__,game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
,null,null));
});})(s__14020__$1,x,xs__5205__auto__,temp__4657__auto__,game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
;
var fs__7028__auto__ = cljs.core.seq(iterys__7027__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(y_dimension)));
if(fs__7028__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7028__auto__,frontend$views$game_$_iter__14019(cljs.core.rest(s__14020__$1)));
} else {
var G__14037 = cljs.core.rest(s__14020__$1);
s__14020__$1 = G__14037;
continue;
}
} else {
return null;
}
break;
}
});})(game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
,null,null));
});})(game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
;
return iter__7031__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x_dimension));
})()),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7031__auto__ = ((function (game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function frontend$views$game_$_iter__14030(s__14031){
return (new cljs.core.LazySeq(null,((function (game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode){
return (function (){
var s__14031__$1 = s__14031;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14031__$1);
if(temp__4657__auto__){
var s__14031__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14031__$2)){
var c__7029__auto__ = cljs.core.chunk_first(s__14031__$2);
var size__7030__auto__ = cljs.core.count(c__7029__auto__);
var b__14033 = cljs.core.chunk_buffer(size__7030__auto__);
if((function (){var i__14032 = (0);
while(true){
if((i__14032 < size__7030__auto__)){
var building_indexed = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7029__auto__,i__14032);
var index = cljs.core.first(building_indexed);
var building = cljs.core.second(building_indexed);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(building);
var corner_points = cljs.core.cst$kw$corner_DASH_points.cljs$core$IFn$_invoke$arity$1(building);
cljs.core.chunk_append(b__14033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.building_disp,corner_points,type,"",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tile_size) : cljs.core.deref.call(null,tile_size))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null)));

var G__14038 = (i__14032 + (1));
i__14032 = G__14038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14033),frontend$views$game_$_iter__14030(cljs.core.chunk_rest(s__14031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14033),null);
}
} else {
var building_indexed = cljs.core.first(s__14031__$2);
var index = cljs.core.first(building_indexed);
var building = cljs.core.second(building_indexed);
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(building);
var corner_points = cljs.core.cst$kw$corner_DASH_points.cljs$core$IFn$_invoke$arity$1(building);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.building_disp,corner_points,type,"",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tile_size) : cljs.core.deref.call(null,tile_size))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null)),frontend$views$game_$_iter__14030(cljs.core.rest(s__14031__$2)));
}
} else {
return null;
}
break;
}
});})(game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
,null,null));
});})(game_dimensions,tile_size,x_dimension,y_dimension,buildings,new_building,mode))
;
return iter__7031__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(buildings) : cljs.core.deref.call(null,buildings))));
})()),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.cst$kw$corner_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_building) : cljs.core.deref.call(null,new_building)))),(2)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.building_disp,cljs.core.cst$kw$corner_DASH_points.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_building) : cljs.core.deref.call(null,new_building))),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(new_building) : cljs.core.deref.call(null,new_building))),"gray",(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tile_size) : cljs.core.deref.call(null,tile_size))], null):null)], null);
});
frontend.views.home_panel = (function frontend$views$home_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.game], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.game_controls], null)], null);
});
frontend.views.about_panel = (function frontend$views$about_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"This is the About Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"go to Home Page"], null)], null)], null);
});
});
frontend.views.panels = (function frontend$views$panels(panel_name){
var G__14040 = (((panel_name instanceof cljs.core.Keyword))?panel_name.fqn:null);
switch (G__14040) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.about_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

}
});
frontend.views.show_panel = (function frontend$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.panels,panel_name], null);
});
frontend.views.main_panel = (function frontend$views$main_panel(){
var active_panel = (function (){var G__14043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_panel], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14043) : re_frame.core.subscribe.call(null,G__14043));
})();
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.show_panel,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(active_panel) : cljs.core.deref.call(null,active_panel))], null);
});
;})(active_panel))
});
