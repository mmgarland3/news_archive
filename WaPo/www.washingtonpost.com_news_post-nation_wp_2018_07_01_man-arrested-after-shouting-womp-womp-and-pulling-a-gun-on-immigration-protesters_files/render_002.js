(function(){var __e=window.__e||[],dataWrapper=document.getElementById("coral-data-wrapper"),coralButton=document.getElementById("comment_summary_button"),coralEmbed=document.getElementById("comments"),calcOffset=function(el){var scrollOffset=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,elOffset=el?el.getBoundingClientRect().top+scrollOffset:0;return elOffset},initialEmbedOffset=calcOffset(coralEmbed),mobileBrowser=window.isMobile&&window.isMobile.any()||!window.isMobile&&
document.querySelector("html").offsetWidth<768,deferMobile=parseInt(dataWrapper.getAttribute("data-defer-mobile"))=="NaN"?1:parseInt(dataWrapper.getAttribute("data-defer-mobile")),deferDesktop=parseInt(dataWrapper.getAttribute("data-defer-desktop"))||0,noStreamMobile=parseInt(dataWrapper.getAttribute("data-no-stream-mobile"))||0,noStreamDesktop=parseInt(dataWrapper.getAttribute("data-no-stream-desktop"))||0,allowScrollLoad=mobileBrowser&&!deferMobile&&!noStreamMobile||!mobileBrowser&&!deferDesktop&&
!noStreamDesktop,loadThreshold=parseInt(dataWrapper.getAttribute("data-scroll-threshold"))||.9,isPermalink=document.querySelector("html.outputtype_comment"),wp_pb=window.wp_pb||{},talkEmbedView={init:function(){coralEmbed.className=dataWrapper.className;if(!isPermalink)coralEmbed.style.marginBottom=window.innerHeight+"px";document.addEventListener("query.CoralEmbedStream_Embed.ready",function(){coralEmbed.style.marginBottom=0;document.addEventListener("wp.stream.commentCount",function(data){try{wp_pb.StaticMethods.CommentCount._formatCommentCount(data.detail.totalCommentCount,
$(".comment-count"))}catch(error){console.log(error)}})});wp_pb.register("comments","showComments",talkEmbedView.showComments);if(coralButton)coralButton.addEventListener("click",function(){wp_pb.report("comments","showComments",{event:"click"})});if(isPermalink||window.location.hash=="#comments")wp_pb.report("comments","showComments",{event:"load"});else if(allowScrollLoad)window.addEventListener("scroll",talkEmbedView.loadCommentsOnScroll);return true},loadCommentsOnScroll:function(){if(window.pageYOffset/
initialEmbedOffset>=loadThreshold||window.pageYOffset>=initialEmbedOffset){window.removeEventListener("scroll",talkEmbedView.loadCommentsOnScroll);wp_pb.report("comments","showComments",{event:"scroll"})}return true},scrollToComments:function(){var adjustedEmbedOffset=calcOffset(coralEmbed);window.scrollTo(0,adjustedEmbedOffset);return true},showComments:function(data){window.removeEventListener("scroll",talkEmbedView.loadCommentsOnScroll);if(!window.Coral)wp_pb.CommentLoader.load();if(typeof window.sendDataToOmniture===
"function"&&data&&data.event&&data.event!="scroll"){try{var commonVars={pageName:s.pageName,channel:s.channel,eVar1:s.eVar1,prop1:s.prop1,eVar2:s.eVar2,prop2:s.prop2,prop3:s.prop3,prop4:s.prop4,prop5:s.prop5,eVar8:s.eVar8,eVar11:s.eVar11,prop12:s.prop12,eVar17:s.eVar17,prop25:s.prop25,prop33:s.prop33,eVar33:s.eVar33,eVar58:s.eVar58,prop58:s.prop58,eVar59:s.eVar59,prop59:s.prop59,eVar62:s.eVar62,eVar65:s.eVar65,prop65:s.prop65,eVar70:"coral",prop70:"coral"};commonVars.eVar26="click to comments";window.sendDataToOmniture("coral.gotoComments",
"event5",commonVars)}catch(err){}talkEmbedView.scrollToComments()}return true}};wp_pb.CommentLoader=wp_pb.CommentLoader||{};wp_pb.CommentLoader.load=function(){var env="${system.environment}";var domain=env=="production"?"//www.washingtonpost.com/pb":"/pb";var outputtype=env=="production"?"\x26outputType\x3djavascript":"\x26outputType\x3djavascript";var resourceToken=wp_pb.resourceToken||"201504300950";var commentsFile=[domain+"/1d/twp-comments-coral.js"+"?token\x3d"+resourceToken+outputtype];window.wp_import&&
window.wp_import(commentsFile)};if(typeof wp_pb.StaticMethods=="undefined"||typeof wp_pb.StaticMethods.isPageHydrated=="undefined"||wp_pb.StaticMethods.isPageHydrated())talkEmbedView.init();__e.push(["shamble",function(){talkEmbedView.init()}])})();