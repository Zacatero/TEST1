!function(s){s(".wp-block-wwwows-blocks-sticky").each(function(t){var i,e=s(this).attr("data-topspace"),c=s(this).attr("data-cfa"),a=s(this).attr("data-minwidth"),l=s(this).attr("data-pushup"),n=s(this).attr("data-zindex"),r=s(this).attr("data-stickycolor");s(this).addClass("wwwows-sticky-block-"+t).addClass("sticky-block-original-"+t).addClass("block-is-not-sticky"),l&&s(l).length<1?(console.warn('STICKY BLOCK DEBUGGER: you selected a Push-up element "'+l+'" but there is no element on the page with that class/ID.'),l=""):l&&s(l).length>1&&(console.warn("STICKY BLOCK DEBUGGER: there are "+s(l).length+' elements on the page with the selector/class/ID you selected for the push-up element ("'+l+'"). You can select only ONE element to push the sticky element up.'),l="");var d=(i=s(this),(o={}).display=i.css("display"),o.float=i.css("float"),o.flex=i.css("flex"),o["box-sizing"]=i.css("box-sizing"),o.clear=i.css("clear"),o.overflow=i.css("overflow"),o.transform=i.css("transform"),o),h=s(".sticky-block-original-"+t).attr("style");null==h&&(h=""),function t(i){s(".sticky-block-original-"+i).wrap('<div class="sticky-block-wrapper sticky-block-wrapper-'+i+'"></div>').addClass("sticky-block-active-"+i).before('<div class="sticky-block-placeholder sticky-block-placeholder-'+i+'" style="width:0; height:0; margin:0; padding:0; visibility:hidden;"></div>')}(t),checkElement=setInterval(function(){(function t(i,e,c,a,l,n,r,d,h,k){var p=s(".sticky-block-active-"+i),g=s(".sticky-block-original-"+i);orgElementTop=p.offset().top,n&&(pushElementTop=s(n).offset().top);var y=window,b="inner";if("innerWidth"in window||(b="client",y=document.documentElement||document.body),viewport=y[b+"Width"],adminBarHeight="true"==c&&s("body").hasClass("admin-bar")&&viewport>600?s("#wpadminbar").height():0,s(window).scrollTop()>=orgElementTop-e-adminBarHeight&&viewport>=a&&viewport<=99999){leftOrgElement=(coordsOrgElement=p.offset()).left,(widthPlaceholder=p[0].getBoundingClientRect().width)||(widthPlaceholder=p.css("width")),(heightPlaceholder=p[0].getBoundingClientRect().height)||(heightPlaceholder=p.css("height")),"0px"==(widthSticky=p.css("width"))&&(widthSticky=g[0].getBoundingClientRect().width),heightSticky=g.height(),paddingSticky=(paddingOrgElement=[g.css("padding-top"),g.css("padding-right"),g.css("padding-bottom"),g.css("padding-left")])[0]+" "+paddingOrgElement[1]+" "+paddingOrgElement[2]+" "+paddingOrgElement[3],marginPlaceholder=(marginOrgElement=[p.css("margin-top"),p.css("margin-right"),p.css("margin-bottom"),p.css("margin-left")])[0]+" "+marginOrgElement[1]+" "+marginOrgElement[2]+" "+marginOrgElement[3];var m="";for(var f in h)"inline"==h[f]?m+=f+":inline-block; ":m+=f+":"+h[f]+"; ";var v=g.outerHeight();stickyTopMargin=n&&s(window).scrollTop()>pushElementTop-e-v-adminBarHeight?pushElementTop-e-v-s(window).scrollTop():adminBarHeight,stickyTopMargin-=1,m+="width:100%; height:"+heightPlaceholder+"px; margin:"+marginPlaceholder+";",g.removeClass("sticky-block-active-"+i).removeClass("block-is-not-sticky").addClass("element-is-sticky").addClass("block-is-sticky").css("position","fixed").css("left",leftOrgElement+"px").css("top",e+"px").css("width",widthSticky).css("margin-left",0).css("padding",paddingSticky).css("margin-top",stickyTopMargin).css("z-index",r).css("background-color",d),s(".sticky-block-placeholder-"+i).hasClass("sticky-block-active-"+i)||s(".sticky-block-placeholder-"+i).addClass("sticky-block-active-"+i).attr("style",m)}else g.addClass("sticky-block-active-"+i).removeClass("element-is-sticky").removeClass("block-is-sticky").addClass("block-is-not-sticky").attr("style",k),s(".sticky-block-placeholder-"+i).hasClass("sticky-block-active-"+i)&&s(".sticky-block-placeholder-"+i).removeClass("sticky-block-active-"+i).removeAttr("style").css("width","0").css("height","0").css("margin","0").css("padding","0")})(t,e,c,a,99999,l,n,r,d,h)},10)})}(jQuery);