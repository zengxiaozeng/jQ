"use strict";var investIndex={isLoading:!0,init:function(){var i=this;FastClick.attach(document.body),i.initPageSlider(),i.initTabs(),i.initThreeTabs(),setTimeout(function(){i.isLoadingOrStarted()},500)},initPageSlider:function(){new PageSlider({pages:$(".page-wrap .page")})},initTabs:function(){this.clicksTab($(".page-two-title span"),$(".page-content div"))},initThreeTabs:function(){this.clicksTab($(".page-three-title span"),$(".page-three-content div"))},clicksTab:function(i,t){var n=0;for(n=0;n<i.length;n++)i[n].index=t[n].index=n,i[n].onclick=function(){for(n=0;n<i.length;n++)i[n].className="",t[n].className="";this.className="on",t[this.index].className="on"}},isLoadingOrStarted:function(){0==this.isLoading?($(".isStarted").hide(),$(".start_loading").show()):($(".isStarted").show(),$(".start_loading").hide())}};investIndex.init();