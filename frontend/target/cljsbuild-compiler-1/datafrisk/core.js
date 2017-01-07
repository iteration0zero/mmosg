// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('datafrisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
datafrisk.core.ExpandButton = (function datafrisk$core$ExpandButton(p__12839){
var map__12844 = p__12839;
var map__12844__$1 = ((((!((map__12844 == null)))?((((map__12844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12844):map__12844);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12844__$1,cljs.core.cst$kw$expanded_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12844__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12844__$1,cljs.core.cst$kw$emit_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"20px"], null),cljs.core.cst$kw$onClick,((function (map__12844,map__12844__$1,expanded_QMARK_,path,emit_fn){
return (function (){
var G__12846 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.cst$kw$contract:cljs.core.cst$kw$expand);
var G__12847 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__12846,G__12847) : emit_fn.call(null,G__12846,G__12847));
});})(map__12844,map__12844__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
datafrisk.core.styles = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$shell,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$backgroundColor,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$z_DASH_index,(9999)], null),cljs.core.cst$kw$strings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4Ebb4E"], null),cljs.core.cst$kw$keywords,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"purple"], null),cljs.core.cst$kw$numbers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),cljs.core.cst$kw$nil,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$shell_DASH_visible_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"#4EE24E"], null)], null);
datafrisk.core.ExpandAllButton = (function datafrisk$core$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expand_DASH_all,data) : emit_fn.call(null,cljs.core.cst$kw$expand_DASH_all,data));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"3px",cljs.core.cst$kw$borderTopLeftRadius,"2px",cljs.core.cst$kw$borderBottomLeftRadius,"2px",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$border,"1px solid darkgray",cljs.core.cst$kw$backgroundColor,"white"], null)], null),"Expand all"], null);
});
datafrisk.core.CollapseAllButton = (function datafrisk$core$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,(function (){
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$collapse_DASH_all) : emit_fn.call(null,cljs.core.cst$kw$collapse_DASH_all));
}),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$borderBottomRightRadius,cljs.core.cst$kw$borderTop,cljs.core.cst$kw$cursor,cljs.core.cst$kw$borderBottom,cljs.core.cst$kw$borderTopRightRadius,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRight,cljs.core.cst$kw$borderLeft,cljs.core.cst$kw$backgroundColor],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","3px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
datafrisk.core.NilText = (function datafrisk$core$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$nil.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))], null);
});
datafrisk.core.StringText = (function datafrisk$core$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$strings.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0))], null);
});
datafrisk.core.KeywordText = (function datafrisk$core$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$keywords.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),[cljs.core.str(data)].join('')], null);
});
datafrisk.core.NumberText = (function datafrisk$core$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$numbers.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], null),data], null);
});
datafrisk.core.Node = (function datafrisk$core$Node(p__12848){
var map__12873 = p__12848;
var map__12873__$1 = ((((!((map__12873 == null)))?((((map__12873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12873):map__12873);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$swappable);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,[cljs.core.str(data)].join(''),cljs.core.cst$kw$on_DASH_change,((function (map__12873,map__12873__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_string_changed(e){
var G__12878 = cljs.core.cst$kw$changed;
var G__12879 = path;
var G__12880 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__12878,G__12879,G__12880) : emit_fn.call(null,G__12878,G__12879,G__12880));
});})(map__12873,map__12873__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,cljs.core.name(data),cljs.core.cst$kw$on_DASH_change,((function (map__12873,map__12873__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_keyword_changed(e){
var G__12884 = cljs.core.cst$kw$changed;
var G__12885 = path;
var G__12886 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__12884,G__12885,G__12886) : emit_fn.call(null,G__12884,G__12885,G__12886));
});})(map__12873,map__12873__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?[cljs.core.str(data),cljs.core.str(" "),cljs.core.str(JSON.stringify(data))].join(''):((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$default_DASH_value,data,cljs.core.cst$kw$on_DASH_change,((function (map__12873,map__12873__$1,data,path,emit_fn,swappable){
return (function datafrisk$core$Node_$_number_changed(e){
var G__12893 = cljs.core.cst$kw$changed;
var G__12894 = path;
var G__12895 = (function (){var G__12896 = e.target.value;
return Number(G__12896);
})();
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__12893,G__12894,G__12895) : emit_fn.call(null,G__12893,G__12894,G__12895));
});})(map__12873,map__12873__$1,data,path,emit_fn,swappable))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null)):[cljs.core.str(data)].join('')
)))))], null);
});
datafrisk.core.KeyValNode = (function datafrisk$core$KeyValNode(p__12897){
var map__12903 = p__12897;
var map__12903__$1 = ((((!((map__12903 == null)))?((((map__12903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12903):map__12903);
var vec__12904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12903__$1,cljs.core.cst$kw$swappable);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,"0 0 auto",cljs.core.cst$kw$padding,"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,k], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,"1",cljs.core.cst$kw$padding,"2px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,v,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null)], null);
});
datafrisk.core.ListVecNode = (function datafrisk$core$ListVecNode(p__12908){
var map__12911 = p__12908;
var map__12911__$1 = ((((!((map__12911 == null)))?((((map__12911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12911):map__12911);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12911__$1,cljs.core.cst$kw$swappable);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),((cljs.core.empty_QMARK_(data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?"[":"(")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__12911,map__12911__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__12911,map__12911__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str(cljs.core.count(data)),cljs.core.str(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?"]":")")], null)], null)], null);
});
datafrisk.core.SetNode = (function datafrisk$core$SetNode(p__12913){
var map__12916 = p__12913;
var map__12916__$1 = ((((!((map__12916 == null)))?((((map__12916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12916):map__12916);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12916__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12916__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12916__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12916__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12916__$1,cljs.core.cst$kw$swappable);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),((cljs.core.empty_QMARK_(data))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"#{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__12916,map__12916__$1,data,path,expanded_paths,emit_fn,swappable){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__12916,map__12916__$1,data,path,expanded_paths,emit_fn,swappable))
,data):[cljs.core.str(cljs.core.count(data)),cljs.core.str(" items")].join('')),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null)], null)], null);
});
datafrisk.core.KeySet = (function datafrisk$core$KeySet(keyset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NilText], null):((typeof data === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.StringText,data], null):(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeywordText,data], null):((typeof data === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.NumberText,data], null):[cljs.core.str(data)].join('')
))))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}),keyset))], null);
});
datafrisk.core.MapNode = (function datafrisk$core$MapNode(p__12918){
var map__12921 = p__12918;
var map__12921__$1 = ((((!((map__12921 == null)))?((((map__12921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12921):map__12921);
var all = map__12921__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921__$1,cljs.core.cst$kw$expanded_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12921__$1,cljs.core.cst$kw$emit_DASH_fn);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"{"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__12921,map__12921__$1,all,data,path,expanded_paths,emit_fn){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,x)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__12921,map__12921__$1,all,data,path,expanded_paths,emit_fn))
,data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.KeySet,cljs.core.keys(data)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null)], null)], null);
});
datafrisk.core.DataFrisk = (function datafrisk$core$DataFrisk(p__12923){
var map__12927 = p__12923;
var map__12927__$1 = ((((!((map__12927 == null)))?((((map__12927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12927):map__12927);
var all = map__12927__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12927__$1,cljs.core.cst$kw$data);
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || (data.cljs$core$IDeref$))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk$core$DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.deref.call(null,data)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Node,all], null);

}
}
}
}
});
datafrisk.core.conj_to_set = (function datafrisk$core$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__6251__auto__ = coll;
if(cljs.core.truth_(or__6251__auto__)){
return or__6251__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
datafrisk.core.expand_all_paths = (function datafrisk$core$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$node,root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__12939 = remaining;
var seq__12940 = cljs.core.seq(vec__12939);
var first__12941 = cljs.core.first(seq__12940);
var seq__12940__$1 = cljs.core.next(seq__12940);
var current = first__12941;
var rest = seq__12940__$1;
var current_node = (((function (){var G__12942 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
if(!((G__12942 == null))){
if(((G__12942.cljs$lang$protocol_mask$partition0$ & (32768))) || (G__12942.cljs$core$IDeref$)){
return true;
} else {
if((!G__12942.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__12942);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__12942);
}
})())?(function (){var G__12943 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12943) : cljs.core.deref.call(null,G__12943));
})():cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__12948 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__12939,seq__12940,first__12941,seq__12940__$1,current,rest,current_node){
return (function (p__12944){
var vec__12945 = p__12944;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12945,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12945,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),k),cljs.core.cst$kw$node,v], null);
});})(remaining,expanded_paths,vec__12939,seq__12940,first__12941,seq__12940__$1,current,rest,current_node))
,current_node));
var G__12949 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__12948;
expanded_paths = G__12949;
continue;
} else {
if((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node))){
var G__12950 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__12939,seq__12940,first__12941,seq__12940__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),i),cljs.core.cst$kw$node,node], null);
});})(remaining,expanded_paths,vec__12939,seq__12940,first__12941,seq__12940__$1,current,rest,current_node))
,current_node));
var G__12951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__12950;
expanded_paths = G__12951;
continue;
} else {
var G__12952 = rest;
var G__12953 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__12952;
expanded_paths = G__12953;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
datafrisk.core.emit_fn_factory = (function datafrisk$core$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__12962__delegate = function (event,args){
var G__12958 = (((event instanceof cljs.core.Keyword))?event.fqn:null);
switch (G__12958) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),datafrisk.core.conj_to_set,cljs.core.array_seq([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),datafrisk.core.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.disj,cljs.core.array_seq([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "changed":
var vec__12959 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(swappable,value) : cljs.core.reset_BANG_.call(null,swappable,value));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(event)].join('')));

}
};
var G__12962 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__12964__i = 0, G__12964__a = new Array(arguments.length -  1);
while (G__12964__i < G__12964__a.length) {G__12964__a[G__12964__i] = arguments[G__12964__i + 1]; ++G__12964__i;}
  args = new cljs.core.IndexedSeq(G__12964__a,0);
} 
return G__12962__delegate.call(this,event,args);};
G__12962.cljs$lang$maxFixedArity = 1;
G__12962.cljs$lang$applyTo = (function (arglist__12965){
var event = cljs.core.first(arglist__12965);
var args = cljs.core.rest(arglist__12965);
return G__12962__delegate(event,args);
});
G__12962.cljs$core$IFn$_invoke$arity$variadic = G__12962__delegate;
return G__12962;
})()
;
});
datafrisk.core.Root = (function datafrisk$core$Root(data,id,state_atom){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var emit_fn = datafrisk.core.emit_fn_factory(state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"4px 2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.CollapseAllButton,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFrisk,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$expanded_DASH_paths,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$expanded_DASH_paths], null)),cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
datafrisk.core.DataFriskShellVisibleButton = (function datafrisk$core$DataFriskShellVisibleButton(visible_QMARK_,toggle_visible_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onClick,toggle_visible_fn,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$font,"inherit",cljs.core.cst$kw$padding,"12px",cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$right,(0),cljs.core.cst$kw$width,"80px",cljs.core.cst$kw$text_DASH_align,"center"], null),cljs.core.cst$kw$shell_DASH_visible_DASH_button.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bottom,(0)], null))], 0))], null),(cljs.core.truth_(visible_QMARK_)?"Hide":"Data frisk")], null);
});
datafrisk.core.DataFriskShell = (function datafrisk$core$DataFriskShell(var_args){
var args__7333__auto__ = [];
var len__7326__auto___12971 = arguments.length;
var i__7327__auto___12972 = (0);
while(true){
if((i__7327__auto___12972 < len__7326__auto___12971)){
args__7333__auto__.push((arguments[i__7327__auto___12972]));

var G__12973 = (i__7327__auto___12972 + (1));
i__7327__auto___12972 = G__12973;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12968_SHARP_,p2__12969_SHARP_){
return cljs.core.assoc_in(p1__12968_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__12969_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__12974__delegate = function (data__$1){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)));
var visible_QMARK_ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$right,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"50%",cljs.core.cst$kw$max_DASH_height,(cljs.core.truth_(visible_QMARK_)?"50%":(0)),cljs.core.cst$kw$transition,"all 0.3s ease-out",cljs.core.cst$kw$padding,(0)], null),cljs.core.cst$kw$shell.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.DataFriskShellVisibleButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,cljs.core.cst$kw$visible_QMARK_], null),cljs.core.not(visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$overflow_DASH_y,"scroll"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null)], null);
};
var G__12974 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__12975__i = 0, G__12975__a = new Array(arguments.length -  0);
while (G__12975__i < G__12975__a.length) {G__12975__a[G__12975__i] = arguments[G__12975__i + 0]; ++G__12975__i;}
  data__$1 = new cljs.core.IndexedSeq(G__12975__a,0);
} 
return G__12974__delegate.call(this,data__$1);};
G__12974.cljs$lang$maxFixedArity = 0;
G__12974.cljs$lang$applyTo = (function (arglist__12976){
var data__$1 = cljs.core.seq(arglist__12976);
return G__12974__delegate(data__$1);
});
G__12974.cljs$core$IFn$_invoke$arity$variadic = G__12974__delegate;
return G__12974;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.DataFriskShell.cljs$lang$maxFixedArity = (0);

datafrisk.core.DataFriskShell.cljs$lang$applyTo = (function (seq12970){
return datafrisk.core.DataFriskShell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12970));
});

datafrisk.core.FriskInlineVisibilityButton = (function datafrisk$core$FriskInlineVisibilityButton(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"20px"], null),cljs.core.cst$kw$onClick,update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
datafrisk.core.FriskInline = (function datafrisk$core$FriskInline(var_args){
var args__7333__auto__ = [];
var len__7326__auto___12980 = arguments.length;
var i__7327__auto___12981 = (0);
while(true){
if((i__7327__auto___12981 < len__7326__auto___12980)){
args__7333__auto__.push((arguments[i__7327__auto___12981]));

var G__12982 = (i__7327__auto___12981 + (1));
i__7327__auto___12981 = G__12982;
continue;
} else {
}
break;
}

var argseq__7334__auto__ = ((((0) < args__7333__auto__.length))?(new cljs.core.IndexedSeq(args__7333__auto__.slice((0)),(0),null)):null);
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(argseq__7334__auto__);
});

datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12977_SHARP_,p2__12978_SHARP_){
return cljs.core.assoc_in(p1__12977_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__12978_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.EMPTY], true));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__12983__delegate = function (data__$1){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom)));
var visible_QMARK_ = cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(data_frisk);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex_DASH_flow,"row nowrap",cljs.core.cst$kw$transition,"all 0.3s ease-out",cljs.core.cst$kw$z_DASH_index,"5"], null),(cljs.core.truth_(visible_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$overflow_DASH_x,"hide",cljs.core.cst$kw$overflow_DASH_y,"hide",cljs.core.cst$kw$max_DASH_height,"30px",cljs.core.cst$kw$max_DASH_width,"100px"], null)),cljs.core.cst$kw$shell.cljs$core$IFn$_invoke$arity$1(datafrisk.core.styles)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.FriskInlineVisibilityButton,visible_QMARK_,((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,cljs.core.cst$kw$visible_QMARK_], null),cljs.core.not(visible_QMARK_));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Data frisk"], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$resize,"both",cljs.core.cst$kw$box_DASH_sizing,"border-box",cljs.core.cst$kw$overflow_DASH_x,"auto",cljs.core.cst$kw$overflow_DASH_y,"auto"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (data_frisk,visible_QMARK_,expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(data_frisk,visible_QMARK_,expand_by_default,state_atom))
,data__$1)], null):null)], null);
};
var G__12983 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__12984__i = 0, G__12984__a = new Array(arguments.length -  0);
while (G__12984__i < G__12984__a.length) {G__12984__a[G__12984__i] = arguments[G__12984__i + 0]; ++G__12984__i;}
  data__$1 = new cljs.core.IndexedSeq(G__12984__a,0);
} 
return G__12983__delegate.call(this,data__$1);};
G__12983.cljs$lang$maxFixedArity = 0;
G__12983.cljs$lang$applyTo = (function (arglist__12985){
var data__$1 = cljs.core.seq(arglist__12985);
return G__12983__delegate(data__$1);
});
G__12983.cljs$core$IFn$_invoke$arity$variadic = G__12983__delegate;
return G__12983;
})()
;
;})(expand_by_default,state_atom))
});

datafrisk.core.FriskInline.cljs$lang$maxFixedArity = (0);

datafrisk.core.FriskInline.cljs$lang$applyTo = (function (seq12979){
return datafrisk.core.FriskInline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12979));
});

