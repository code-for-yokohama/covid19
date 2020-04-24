(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("97e7ab7c",content,!0,{sourceMap:!1})},289:function(t,e,o){"use strict";var r=o(1),n=o(105),l=o(350),d=r.a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},loading:{type:Boolean,required:!1,default:!1}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,showDetails:!1,openDetails:!1}},computed:{formattedDate:function(){return Object(n.d)(this.date)},graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'+this.permalink(!0,!0)+'" frameborder="0"></iframe>';return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},mounted:function(){this.showDetails=!0},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/"+this.titleId;return embed&&(e+="?embed=true"),e=this.localePath(e),t&&(e=location.protocol+"//"+location.host+e),e},twitter:function(){var t="https://twitter.com/intent/tweet?text="+this.title+" / "+this.$t("横浜市")+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")+"&url="+this.permalink(!0)+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink(!0);window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink(!0);window.open(t)},toggleDetails:function(){this.openDetails=!this.openDetails,l.a.$emit(l.b,{dataView:this.$refs.dataView})}}}),c=(o(372),o(9)),w=o(38),_=o.n(w),h=o(478),v=o(479),f=o(480),x=o(481),m=o(482),N=o(494),W=o(274),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{ref:"dataView",staticClass:"DataView",attrs:{loading:t.loading}},[o("div",{staticClass:"DataView-Inner"},[o("div",{staticClass:"DataView-Header"},[o("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("infoPanel")],2),t._v(" "),o("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),o("div",[t._t("button")],2),t._v(" "),o("div",{staticClass:"DataView-CardText"},[t._t("default")],2),t._v(" "),this.$slots.dataTable?o("div",{staticClass:"DataView-Details"},[t.showDetails?o("v-expansion-panels",{attrs:{flat:""}},[o("v-expansion-panel",[o("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[[o("div",{staticClass:"v-expansion-panel-header__icon"},[o("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-right")])],1)],t._v(" "),o("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])],2),t._v(" "),o("v-expansion-panel-content",[t._t("dataTable")],2)],1)],1):[t._t("dataTable")]],2):t._e(),t._v(" "),o("div",{staticClass:"DataView-Description"},[t._t("footer-description")],2),t._v(" "),o("div",{staticClass:"DataView-Footer"},[o("div",{staticClass:"Footer-Left"},[t._t("footer"),t._v(" "),o("div",[o("a",{staticClass:"Permalink",attrs:{href:t.permalink()}},[o("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))])])])],2),t._v(" "),"true"!=this.$route.query.embed?o("div",{staticClass:"Footer-Right"},[o("button",{staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},[o("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])]),t._v(" "),t.displayShare?o("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[o("div",{staticClass:"Close-Button"},[o("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("mdi-close")])],1),t._v(" "),o("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),o("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?o("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v("mdi-clipboard-outline")]):t._e(),t._v("\n            "+t._s(t.graphEmbedValue)+"\n          ")],1),t._v(" "),o("div",{staticClass:"Buttons"},[o("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[o("picture",[o("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[o("picture",[o("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[o("picture",[o("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])])])]):t._e()]):t._e()])]),t._v(" "),t.showOverlay?o("div",{staticClass:"overlay"},[o("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")]),t._v(" "),o("v-footer",{staticClass:"DataView-Footer"},[o("time",{attrs:{datetime:t.date}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))]),t._v(" "),t._t("footer")],2)],1):t._e()])}),[],!1,null,null,null);e.a=component.exports;_()(component,{VCard:h.a,VExpansionPanel:v.a,VExpansionPanelContent:f.a,VExpansionPanelHeader:x.a,VExpansionPanels:m.a,VFooter:N.a,VIcon:W.a})},290:function(t,e,o){"use strict";o(102);var r=o(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),n=(o(291),o(9)),l=o(38),d=o.n(l),c=o(274),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize,"aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:c.a})},291:function(t,e,o){"use strict";var r=o(282);o.n(r).a},292:function(t,e,o){(e=o(16)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},322:function(t,e,o){var content=o(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("4d5720d6",content,!0,{sourceMap:!1})},325:function(t,e,o){var content=o(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("4b30e3a2",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=new(o(1).a),n="TOGGLE_DETAILS"},358:function(t,e,o){"use strict";var r=o(8),n=o.n(r),l=o(103),d=o(289),c=(o(59),o(60),o(5),o(102),o(1).a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"軽症中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}},methods:{getAdjustX:function(input){switch(input.toString(10).length){case 1:return 3;case 2:return 0;case 3:return-3;case 4:return-8;default:return 0}}}})),w=o(384),_=o(9);var h=Object(_.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{class:t.$style.container},[o("li",{class:[t.$style.box,t.$style.tall,t.$style.parent,t.$style.confirmed]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",[t._v("\n          "+t._s(t.$t("陽性者数"))+"\n          "),o("br"),t._v("("+t._s(t.$t("累計"))+")\n        ")]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),o("ul",{class:t.$style.group},[o("li",{class:[t.$style.box,t.$style.recovered]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("調査中")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.入院中.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),o("li",{class:[t.$style.box,t.$style.recovered]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",{domProps:{innerHTML:t._s(t.$t("無症状<br />軽症<br />中等症"))}}),t._v(" "),o("span",[o("strong",[t._v(t._s(t.軽症中等症.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),o("li",{class:[t.$style.box,t.$style.recovered]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),o("li",{class:[t.$style.box,t.$style.deceased]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),o("li",{class:[t.$style.box,t.$style.recovered]},[o("div",{class:t.$style.pillar},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("退院")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.退院.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])])}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null).exports,v={components:{DataView:d.a,ConfirmedCasesDetailsTable:h},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院中":data.children[0].children[0].value,"軽症中等症":data.children[0].children[0].children[0].value,"重症":data.children[0].children[0].children[1].value,"死亡":data.children[0].children[2].value,"退院":data.children[0].children[1].value}}(l.main_summary),e=n()(l.main_summary.children[0].date).format("YYYY/MM/DD HH:mm"),data={Data:l,confirmedCases:t,updatedAt:e};return data}},f=o(38),x=o.n(f),m=o(483),N=Object(_.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-view",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.updatedAt}},[e("confirmed-cases-details-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-details-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=N.exports;x()(N,{VCol:m.a})},372:function(t,e,o){"use strict";var r=o(322);o.n(r).a},373:function(t,e,o){(e=o(16)(!1)).push([t.i,".DataView{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;height:100%}.DataView .LegendStickyChart{margin:16px 0;position:relative;overflow:hidden}.DataView .LegendStickyChart .scrollable{overflow-x:scroll}.DataView .LegendStickyChart .scrollable::-webkit-scrollbar{height:4px;background-color:rgba(0,0,0,.01)}.DataView .LegendStickyChart .scrollable::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.07)}.DataView .LegendStickyChart .sticky-legend{position:absolute;top:0;pointer-events:none}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width: 769px){.DataView-Header{padding:0 5px}}@media screen and (min-width: 1171px){.DataView-Header{width:100%;flex-flow:row;flex-wrap:wrap;padding:0}}.DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:#707070;width:100%;display:inline-block}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;font-size:1.25rem;line-height:1.5;font-weight:normal;color:#4d4d4d}@media screen and (min-width: 1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{width:50%}}.DataView-CardText{margin:16px 0}.DataView-Description{margin:10px 0 0;font-size:12px;color:#707070}.DataView-Description ul,.DataView-Description ol{list-style-type:none;padding:0}.DataView-Details{margin:10px 0}.DataView-Details .v-data-table .text-end{text-align:right}.DataView-Footer{font-size:12px;font-size:0.75rem;padding:0 !important;display:flex;justify-content:space-between;margin-top:auto;color:#707070 !important;text-align:right;background-color:#fff !important}.DataView-Footer .Permalink{color:#707070 !important}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.DataView-Footer .Footer-Left{text-align:left}.DataView-Footer .Footer-Right{position:relative;display:flex;align-items:flex-end}.DataView-Footer .Footer-Right .DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Footer .Footer-Right .DataView-Share-Opener>svg{width:auto !important}.DataView-Footer .Footer-Right .DataView-Share-Opener:focus{outline:dotted #707070 1px}.DataView-Footer .Footer-Right .DataView-Share-Buttons{position:absolute;padding:8px;right:-4px;bottom:1.5em;width:240px;border:solid 1px #d9d9d9;background:#fff !important;border-radius:8px;text-align:left;font-size:1rem;z-index:2}.DataView-Footer .Footer-Right .DataView-Share-Buttons>*{padding:4px 0}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px;padding-right:30px;color:#030303;border:solid 1px #eee;border-radius:8px;font-size:12px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:solid 1px #eee}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%;font-size:30px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.DataView .overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.DataView .overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff !important}textarea{font:400 11px system-ui;width:100%;height:2.4rem}.v-expansion-panel-header__icon{margin-left:-5px !important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg) !important}.expansion-panel-text{color:#333}",""]),t.exports=e},384:function(t,e,o){"use strict";var r=o(325),n=o.n(r);e.default=n.a},385:function(t,e,o){(e=o(16)(!1)).push([t.i,'.container_1VuG7{width:100%;display:flex;justify-content:center;box-sizing:border-box;color:#003088;line-height:1.35;padding-left:0 !important}.container_1VuG7 *{box-sizing:border-box}.container_1VuG7 ul{padding-left:0}.pillar_328LX{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #003088}.group_MrdNH{display:flex;flex:0 0 auto;padding-left:0;padding-top:3px;border-top:3px solid #003088;border-left:3px solid #003088}.box_1NKW3{display:flex}.box_1NKW3.parent_2wZWB{border-top:3px solid #003088;border-left:3px solid #003088;position:relative;padding-top:29px}.box_1NKW3.parent_2wZWB::after{content:"";display:block;position:absolute;top:-1px;right:0;height:30px;border-left:3px solid #003088}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-29px;border-top:none;border-right:none;border-left:none}.box_1NKW3.confirmed_2YbZB{width:100%}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc((100% + 3px * 2) / 6 - 3px * 3)}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc((100% + 3px * 2) / 6 * 5 + 3px)}.box_1NKW3.hospitalized_Rqbmd{margin-left:3px;width:calc(100% / 5 * 3 - 3px)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc((100% + 3px * 2) / 3 - 3px * 3)}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc((100% + 3px * 2) / 3 * 2 + 3px)}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:3px;width:calc(100% / 2 - 3px)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:3px;width:calc(100% / 5 - 3px)}.content_TJIht{min-height:150px;padding:10px 2px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content_TJIht>span{display:block;width:100%;font-size:16px;font-size:1rem}.content_TJIht>span:last-child{margin-top:.1em}.content_TJIht>span:not(:last-child){overflow-wrap:break-word}.content_TJIht span strong{font-size:18px;font-size:1.125rem}.content_TJIht span.unit_1E2ZH{font-size:16px;font-size:1rem}@media screen and (max-width: 1440px){.pillar_328LX{border-width:.209vw}.group_MrdNH{padding-top:.209vw;border-top-width:.209vw;border-left-width:.209vw}.content_TJIht>span{font-size:15px;font-size:0.9375rem}.content_TJIht span strong{font-size:17px;font-size:1.0625rem}.content_TJIht span.unit_1E2ZH{font-size:15px;font-size:0.9375rem}.box_1NKW3.parent_2wZWB{border-top-width:.209vw;border-left-width:.209vw;padding-top:2.013vw}.box_1NKW3.parent_2wZWB::after{height:2.223vw;border-left-width:.209vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-2.013vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.209vw * 2) / 6 - 0.209vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.209vw * 2) / 6 * 5 + 0.209vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.209vw;width:calc(100% / 5 * 3 - 0.209vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.209vw * 2) / 3 - 0.209vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.209vw * 2) / 3 * 2 + 0.209vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.209vw;width:calc(100% / 2 - 0.209vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.209vw;width:calc(100% / 5 - 0.209vw)}}@media screen and (max-width: 1263px){.pillar_328LX{border-width:.159vw}.group_MrdNH{padding-top:.159vw;border-top-width:.159vw;border-left-width:.159vw}.content_TJIht>span{font-size:13px;font-size:0.8125rem}.content_TJIht span strong{font-size:15px;font-size:0.9375rem}.content_TJIht span.unit_1E2ZH{font-size:13px;font-size:0.8125rem}.box_1NKW3.parent_2wZWB{border-top-width:.159vw;border-left-width:.159vw;padding-top:1.583vw}.box_1NKW3.parent_2wZWB::after{height:1.742vw;border-left-width:.159vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-1.583vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.159vw * 2) / 6 - 0.159vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.159vw * 2) / 6 * 5 + 0.159vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.159vw;width:calc(100% / 5 * 3 - 0.159vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.159vw * 2) / 3 - 0.159vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.159vw * 2) / 3 * 2 + 0.159vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.159vw;width:calc(100% / 2 - 0.159vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.159vw;width:calc(100% / 5 - 0.159vw)}}@media screen and (max-width: 1170px){.pillar_328LX{border-width:.171vw}.group_MrdNH{padding-top:.171vw;border-top-width:.171vw;border-left-width:.171vw}.content_TJIht>span{font-size:13px;font-size:0.8125rem}.content_TJIht span strong{font-size:15px;font-size:0.9375rem}.content_TJIht span.unit_1E2ZH{font-size:13px;font-size:0.8125rem}.box_1NKW3.parent_2wZWB{border-top-width:.171vw;border-left-width:.171vw;padding-top:1.71vw}.box_1NKW3.parent_2wZWB::after{height:1.881vw;border-left-width:.171vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-1.709vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.171vw * 2) / 6 - 0.171vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.171vw * 2) / 6 * 5 + 0.171vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.171vw;width:calc(100% / 5 * 3 - 0.171vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.171vw * 2) / 3 - 0.171vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.171vw * 2) / 3 * 2 + 0.171vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.171vw;width:calc(100% / 2 - 0.171vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.171vw;width:calc(100% / 5 - 0.171vw)}}@media screen and (max-width: 959px){.pillar_328LX{border-width:.417vw}.group_MrdNH{padding-top:.417vw;border-top-width:.417vw;border-left-width:.417vw}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht span strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3.parent_2wZWB{border-top-width:.417vw;border-left-width:.417vw;padding-top:3.333vw}.box_1NKW3.parent_2wZWB::after{height:3.75vw;border-left-width:.417vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-3.333vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.417vw * 2) / 6 - 0.417vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.417vw * 2) / 6 * 5 + 0.417vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.417vw;width:calc(100% / 5 * 3 - 0.417vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.417vw * 2) / 3 - 0.417vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.417vw * 2) / 3 * 2 + 0.417vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.417vw;width:calc(100% / 2 - 0.417vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.417vw;width:calc(100% / 5 - 0.417vw)}}@media screen and (max-width: 767px){.pillar_328LX{border-width:.313vw}.group_MrdNH{padding-top:.313vw;border-top-width:.313vw;border-left-width:.313vw}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht span strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3.parent_2wZWB{border-top-width:.313vw;border-left-width:.313vw;padding-top:3.541vw}.box_1NKW3.parent_2wZWB::after{height:3.855vw;border-left-width:.313vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-3.541vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.313vw * 2) / 6 - 0.313vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.313vw * 2) / 6 * 5 + 0.313vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.313vw;width:calc(100% / 5 * 3 - 0.313vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.313vw * 2) / 3 - 0.313vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.313vw * 2) / 3 * 2 + 0.313vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.313vw;width:calc(100% / 2 - 0.313vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.313vw;width:calc(100% / 5 - 0.313vw)}}@media screen and (max-width: 600px){.pillar_328LX{border-width:.5vw}.group_MrdNH{padding-top:.5vw;border-top-width:.5vw;border-left-width:.5vw}.content_TJIht>span{font-size:14px;font-size:0.875rem}.content_TJIht span strong{font-size:16px;font-size:1rem}.content_TJIht span.unit_1E2ZH{font-size:14px;font-size:0.875rem}.box_1NKW3.parent_2wZWB{border-top-width:.5vw;border-left-width:.5vw;padding-top:4.834vw}.box_1NKW3.parent_2wZWB::after{height:5.334vw;border-left-width:.5vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-4.833vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.5vw * 2) / 6 - 0.5vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.5vw * 2) / 6 * 5 + 0.5vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.5vw;width:calc(100% / 5 * 3 - 0.5vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.5vw * 2) / 3 - 0.5vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.5vw * 2) / 3 * 2 + 0.5vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.5vw;width:calc(100% / 2 - 0.5vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.5vw;width:calc(100% / 5 - 0.5vw)}}@media screen and (max-width: 420px){.pillar_328LX{border-width:.334vw}.group_MrdNH{padding-top:.334vw;border-top-width:.334vw;border-left-width:.334vw}.content_TJIht>span{font-size:12px;font-size:0.75rem}.content_TJIht span strong{font-size:14px;font-size:0.875rem}.content_TJIht span.unit_1E2ZH{font-size:12px;font-size:0.75rem}.box_1NKW3.parent_2wZWB{border-top-width:.334vw;border-left-width:.334vw;padding-top:5.166vw}.box_1NKW3.parent_2wZWB::after{height:5.5vw;border-left-width:.334vw}.box_1NKW3.parent_2wZWB>.pillar_328LX{margin-top:-5.166vw}.box_1NKW3.confirmed_2YbZB>.pillar_328LX{width:calc( (100% + 0.334vw * 2) / 6 - 0.334vw * 3 )}.box_1NKW3.confirmed_2YbZB>.group_MrdNH{width:calc( (100% + 0.334vw * 2) / 6 * 5 + 0.334vw )}.box_1NKW3.hospitalized_Rqbmd{margin-left:.334vw;width:calc(100% / 5 * 3 - 0.334vw)}.box_1NKW3.hospitalized_Rqbmd>.pillar_328LX{width:calc( (100% + 0.334vw * 2) / 3 - 0.334vw * 3 )}.box_1NKW3.hospitalized_Rqbmd>.group_MrdNH{width:calc( (100% + 0.334vw * 2) / 3 * 2 + 0.334vw )}.box_1NKW3.minor_b8-Iw,.box_1NKW3.severe_JE-4a{margin-left:.334vw;width:calc(100% / 2 - 0.334vw)}.box_1NKW3.deceased_n1Y1Z,.box_1NKW3.recovered_2Jwmb{margin-left:.334vw;width:calc(100% / 5 - 0.334vw)}}',""]),e.locals={container:"container_1VuG7",pillar:"pillar_328LX",group:"group_MrdNH",box:"box_1NKW3",parent:"parent_2wZWB",confirmed:"confirmed_2YbZB",hospitalized:"hospitalized_Rqbmd",minor:"minor_b8-Iw",severe:"severe_JE-4a",deceased:"deceased_n1Y1Z",recovered:"recovered_2Jwmb",content:"content_TJIht",unit:"unit_1E2ZH"},t.exports=e}}]);