var Me=Object.defineProperty;var w=(e,n)=>{for(var i in n)Me(e,i,{get:n[i],enumerable:!0})};var G={};w(G,{Application:()=>$,Browser:()=>P,Call:()=>ee,Clipboard:()=>ne,Create:()=>ie,Dialogs:()=>B,Events:()=>L,Flags:()=>Q,Screens:()=>oe,System:()=>X,WML:()=>j,Window:()=>E,init:()=>De});var j={};w(j,{Enable:()=>V,Reload:()=>me});var P={};w(P,{OpenURL:()=>I});var Ce="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",D=(e=21)=>{let n="",i=e|0;for(;i--;)n+=Ce[Math.random()*64|0];return n};var Se=window.location.origin+"/wails/runtime",a={Call:0,Clipboard:1,Application:2,Events:3,ContextMenu:4,Dialog:5,Window:6,Screens:7,System:8,Browser:9,CancelCall:10},xe=D();function l(e,n){return function(i,t=null){return ve(e,i,n,t)}}function ve(e,n,i,t){let r=new URL(Se);r.searchParams.append("object",e),r.searchParams.append("method",n);let s={headers:{}};return i&&(s.headers["x-wails-window-name"]=i),t&&r.searchParams.append("args",JSON.stringify(t)),s.headers["x-wails-client-id"]=xe,new Promise((c,m)=>{fetch(r,s).then(d=>{if(d.ok)return d.headers.get("Content-Type")&&d.headers.get("Content-Type").indexOf("application/json")!==-1?d.json():d.text();m(Error(d.statusText))}).then(d=>c(d)).catch(d=>m(d))})}var Ae=l(a.Browser,""),be=0;function I(e){return Ae(be,{url:e})}var B={};w(B,{Error:()=>Ne,Info:()=>ze,OpenFile:()=>Le,Question:()=>T,SaveFile:()=>He,Warning:()=>ke});window._wails=window._wails||{};window._wails.dialogErrorCallback=Be;window._wails.dialogResultCallback=Te;var Re=0,Ee=1,ye=2,Ue=3,Oe=4,Fe=5,Ie=l(a.Dialog,""),h=new Map;function Pe(){let e;do e=D();while(h.has(e));return e}function M(e,n={}){let i=Pe();return n["dialog-id"]=i,new Promise((t,r)=>{h.set(i,{resolve:t,reject:r}),Ie(e,n).catch(s=>{r(s),h.delete(i)})})}function Te(e,n,i){let t=h.get(e);t&&(i?t.resolve(JSON.parse(n)):t.resolve(n),h.delete(e))}function Be(e,n){let i=h.get(e);i&&(i.reject(n),h.delete(e))}var ze=e=>M(Re,e),ke=e=>M(Ee,e),Ne=e=>M(ye,e),T=e=>M(Ue,e),Le=e=>M(Oe,e),He=e=>M(Fe,e);var L={};w(L,{Emit:()=>N,Off:()=>Qe,OffAll:()=>Je,On:()=>Ke,OnMultiple:()=>k,Once:()=>Ye,Types:()=>Ze,WailsEvent:()=>v,setup:()=>je});var de={Windows:{SystemThemeChanged:"windows:SystemThemeChanged",APMPowerStatusChange:"windows:APMPowerStatusChange",APMSuspend:"windows:APMSuspend",APMResumeAutomatic:"windows:APMResumeAutomatic",APMResumeSuspend:"windows:APMResumeSuspend",APMPowerSettingChange:"windows:APMPowerSettingChange",ApplicationStarted:"windows:ApplicationStarted",WebViewNavigationCompleted:"windows:WebViewNavigationCompleted",WindowInactive:"windows:WindowInactive",WindowActive:"windows:WindowActive",WindowClickActive:"windows:WindowClickActive",WindowMaximise:"windows:WindowMaximise",WindowUnMaximise:"windows:WindowUnMaximise",WindowFullscreen:"windows:WindowFullscreen",WindowUnFullscreen:"windows:WindowUnFullscreen",WindowRestore:"windows:WindowRestore",WindowMinimise:"windows:WindowMinimise",WindowUnMinimise:"windows:WindowUnMinimise",WindowClosing:"windows:WindowClosing",WindowSetFocus:"windows:WindowSetFocus",WindowKillFocus:"windows:WindowKillFocus",WindowDragDrop:"windows:WindowDragDrop",WindowDragEnter:"windows:WindowDragEnter",WindowDragLeave:"windows:WindowDragLeave",WindowDragOver:"windows:WindowDragOver",WindowDidMove:"windows:WindowDidMove",WindowDidResize:"windows:WindowDidResize",WindowShow:"windows:WindowShow",WindowHide:"windows:WindowHide",WindowStartMove:"windows:WindowStartMove",WindowEndMove:"windows:WindowEndMove",WindowStartResize:"windows:WindowStartResize",WindowEndResize:"windows:WindowEndResize",WindowKeyDown:"windows:WindowKeyDown",WindowKeyUp:"windows:WindowKeyUp",WindowZOrderChanged:"windows:WindowZOrderChanged",WindowPaint:"windows:WindowPaint",WindowBackgroundErase:"windows:WindowBackgroundErase",WindowNonClientHit:"windows:WindowNonClientHit",WindowNonClientMouseDown:"windows:WindowNonClientMouseDown",WindowNonClientMouseUp:"windows:WindowNonClientMouseUp",WindowNonClientMouseMove:"windows:WindowNonClientMouseMove",WindowNonClientMouseLeave:"windows:WindowNonClientMouseLeave",WindowDPIChanged:"windows:WindowDPIChanged"},Mac:{ApplicationDidBecomeActive:"mac:ApplicationDidBecomeActive",ApplicationDidChangeBackingProperties:"mac:ApplicationDidChangeBackingProperties",ApplicationDidChangeEffectiveAppearance:"mac:ApplicationDidChangeEffectiveAppearance",ApplicationDidChangeIcon:"mac:ApplicationDidChangeIcon",ApplicationDidChangeOcclusionState:"mac:ApplicationDidChangeOcclusionState",ApplicationDidChangeScreenParameters:"mac:ApplicationDidChangeScreenParameters",ApplicationDidChangeStatusBarFrame:"mac:ApplicationDidChangeStatusBarFrame",ApplicationDidChangeStatusBarOrientation:"mac:ApplicationDidChangeStatusBarOrientation",ApplicationDidFinishLaunching:"mac:ApplicationDidFinishLaunching",ApplicationDidHide:"mac:ApplicationDidHide",ApplicationDidResignActiveNotification:"mac:ApplicationDidResignActiveNotification",ApplicationDidUnhide:"mac:ApplicationDidUnhide",ApplicationDidUpdate:"mac:ApplicationDidUpdate",ApplicationWillBecomeActive:"mac:ApplicationWillBecomeActive",ApplicationWillFinishLaunching:"mac:ApplicationWillFinishLaunching",ApplicationWillHide:"mac:ApplicationWillHide",ApplicationWillResignActive:"mac:ApplicationWillResignActive",ApplicationWillTerminate:"mac:ApplicationWillTerminate",ApplicationWillUnhide:"mac:ApplicationWillUnhide",ApplicationWillUpdate:"mac:ApplicationWillUpdate",ApplicationDidChangeTheme:"mac:ApplicationDidChangeTheme!",ApplicationShouldHandleReopen:"mac:ApplicationShouldHandleReopen!",WindowDidBecomeKey:"mac:WindowDidBecomeKey",WindowDidBecomeMain:"mac:WindowDidBecomeMain",WindowDidBeginSheet:"mac:WindowDidBeginSheet",WindowDidChangeAlpha:"mac:WindowDidChangeAlpha",WindowDidChangeBackingLocation:"mac:WindowDidChangeBackingLocation",WindowDidChangeBackingProperties:"mac:WindowDidChangeBackingProperties",WindowDidChangeCollectionBehavior:"mac:WindowDidChangeCollectionBehavior",WindowDidChangeEffectiveAppearance:"mac:WindowDidChangeEffectiveAppearance",WindowDidChangeOcclusionState:"mac:WindowDidChangeOcclusionState",WindowDidChangeOrderingMode:"mac:WindowDidChangeOrderingMode",WindowDidChangeScreen:"mac:WindowDidChangeScreen",WindowDidChangeScreenParameters:"mac:WindowDidChangeScreenParameters",WindowDidChangeScreenProfile:"mac:WindowDidChangeScreenProfile",WindowDidChangeScreenSpace:"mac:WindowDidChangeScreenSpace",WindowDidChangeScreenSpaceProperties:"mac:WindowDidChangeScreenSpaceProperties",WindowDidChangeSharingType:"mac:WindowDidChangeSharingType",WindowDidChangeSpace:"mac:WindowDidChangeSpace",WindowDidChangeSpaceOrderingMode:"mac:WindowDidChangeSpaceOrderingMode",WindowDidChangeTitle:"mac:WindowDidChangeTitle",WindowDidChangeToolbar:"mac:WindowDidChangeToolbar",WindowDidDeminiaturize:"mac:WindowDidDeminiaturize",WindowDidEndSheet:"mac:WindowDidEndSheet",WindowDidEnterFullScreen:"mac:WindowDidEnterFullScreen",WindowMaximise:"mac:WindowMaximise",WindowUnMaximise:"mac:WindowUnMaximise",WindowDidZoom:"mac:WindowDidZoom!",WindowZoomIn:"mac:WindowZoomIn!",WindowZoomOut:"mac:WindowZoomOut!",WindowZoomReset:"mac:WindowZoomReset!",WindowDidEnterVersionBrowser:"mac:WindowDidEnterVersionBrowser",WindowDidExitFullScreen:"mac:WindowDidExitFullScreen",WindowDidExitVersionBrowser:"mac:WindowDidExitVersionBrowser",WindowDidExpose:"mac:WindowDidExpose",WindowDidFocus:"mac:WindowDidFocus",WindowDidMiniaturize:"mac:WindowDidMiniaturize",WindowDidMove:"mac:WindowDidMove",WindowDidOrderOffScreen:"mac:WindowDidOrderOffScreen",WindowDidOrderOnScreen:"mac:WindowDidOrderOnScreen",WindowDidResignKey:"mac:WindowDidResignKey",WindowDidResignMain:"mac:WindowDidResignMain",WindowDidResize:"mac:WindowDidResize",WindowDidUpdate:"mac:WindowDidUpdate",WindowDidUpdateAlpha:"mac:WindowDidUpdateAlpha",WindowDidUpdateCollectionBehavior:"mac:WindowDidUpdateCollectionBehavior",WindowDidUpdateCollectionProperties:"mac:WindowDidUpdateCollectionProperties",WindowDidUpdateShadow:"mac:WindowDidUpdateShadow",WindowDidUpdateTitle:"mac:WindowDidUpdateTitle",WindowDidUpdateToolbar:"mac:WindowDidUpdateToolbar",WindowShouldClose:"mac:WindowShouldClose!",WindowWillBecomeKey:"mac:WindowWillBecomeKey",WindowWillBecomeMain:"mac:WindowWillBecomeMain",WindowWillBeginSheet:"mac:WindowWillBeginSheet",WindowWillChangeOrderingMode:"mac:WindowWillChangeOrderingMode",WindowWillClose:"mac:WindowWillClose",WindowWillDeminiaturize:"mac:WindowWillDeminiaturize",WindowWillEnterFullScreen:"mac:WindowWillEnterFullScreen",WindowWillEnterVersionBrowser:"mac:WindowWillEnterVersionBrowser",WindowWillExitFullScreen:"mac:WindowWillExitFullScreen",WindowWillExitVersionBrowser:"mac:WindowWillExitVersionBrowser",WindowWillFocus:"mac:WindowWillFocus",WindowWillMiniaturize:"mac:WindowWillMiniaturize",WindowWillMove:"mac:WindowWillMove",WindowWillOrderOffScreen:"mac:WindowWillOrderOffScreen",WindowWillOrderOnScreen:"mac:WindowWillOrderOnScreen",WindowWillResignMain:"mac:WindowWillResignMain",WindowWillResize:"mac:WindowWillResize",WindowWillUnfocus:"mac:WindowWillUnfocus",WindowWillUpdate:"mac:WindowWillUpdate",WindowWillUpdateAlpha:"mac:WindowWillUpdateAlpha",WindowWillUpdateCollectionBehavior:"mac:WindowWillUpdateCollectionBehavior",WindowWillUpdateCollectionProperties:"mac:WindowWillUpdateCollectionProperties",WindowWillUpdateShadow:"mac:WindowWillUpdateShadow",WindowWillUpdateTitle:"mac:WindowWillUpdateTitle",WindowWillUpdateToolbar:"mac:WindowWillUpdateToolbar",WindowWillUpdateVisibility:"mac:WindowWillUpdateVisibility",WindowWillUseStandardFrame:"mac:WindowWillUseStandardFrame",MenuWillOpen:"mac:MenuWillOpen",MenuDidOpen:"mac:MenuDidOpen",MenuDidClose:"mac:MenuDidClose",MenuWillSendAction:"mac:MenuWillSendAction",MenuDidSendAction:"mac:MenuDidSendAction",MenuWillHighlightItem:"mac:MenuWillHighlightItem",MenuDidHighlightItem:"mac:MenuDidHighlightItem",MenuWillDisplayItem:"mac:MenuWillDisplayItem",MenuDidDisplayItem:"mac:MenuDidDisplayItem",MenuWillAddItem:"mac:MenuWillAddItem",MenuDidAddItem:"mac:MenuDidAddItem",MenuWillRemoveItem:"mac:MenuWillRemoveItem",MenuDidRemoveItem:"mac:MenuDidRemoveItem",MenuWillBeginTracking:"mac:MenuWillBeginTracking",MenuDidBeginTracking:"mac:MenuDidBeginTracking",MenuWillEndTracking:"mac:MenuWillEndTracking",MenuDidEndTracking:"mac:MenuDidEndTracking",MenuWillUpdate:"mac:MenuWillUpdate",MenuDidUpdate:"mac:MenuDidUpdate",MenuWillPopUp:"mac:MenuWillPopUp",MenuDidPopUp:"mac:MenuDidPopUp",MenuWillSendActionToItem:"mac:MenuWillSendActionToItem",MenuDidSendActionToItem:"mac:MenuDidSendActionToItem",WebViewDidStartProvisionalNavigation:"mac:WebViewDidStartProvisionalNavigation",WebViewDidReceiveServerRedirectForProvisionalNavigation:"mac:WebViewDidReceiveServerRedirectForProvisionalNavigation",WebViewDidFinishNavigation:"mac:WebViewDidFinishNavigation",WebViewDidCommitNavigation:"mac:WebViewDidCommitNavigation",WindowFileDraggingEntered:"mac:WindowFileDraggingEntered",WindowFileDraggingPerformed:"mac:WindowFileDraggingPerformed",WindowFileDraggingExited:"mac:WindowFileDraggingExited",WindowShow:"mac:WindowShow",WindowHide:"mac:WindowHide"},Linux:{SystemThemeChanged:"linux:SystemThemeChanged",WindowLoadChanged:"linux:WindowLoadChanged",WindowDeleteEvent:"linux:WindowDeleteEvent",WindowDidMove:"linux:WindowDidMove",WindowDidResize:"linux:WindowDidResize",WindowFocusIn:"linux:WindowFocusIn",WindowFocusOut:"linux:WindowFocusOut",ApplicationStartup:"linux:ApplicationStartup"},Common:{ApplicationStarted:"common:ApplicationStarted",WindowMaximise:"common:WindowMaximise",WindowUnMaximise:"common:WindowUnMaximise",WindowFullscreen:"common:WindowFullscreen",WindowUnFullscreen:"common:WindowUnFullscreen",WindowRestore:"common:WindowRestore",WindowMinimise:"common:WindowMinimise",WindowUnMinimise:"common:WindowUnMinimise",WindowClosing:"common:WindowClosing",WindowZoom:"common:WindowZoom",WindowZoomIn:"common:WindowZoomIn",WindowZoomOut:"common:WindowZoomOut",WindowZoomReset:"common:WindowZoomReset",WindowFocus:"common:WindowFocus",WindowLostFocus:"common:WindowLostFocus",WindowShow:"common:WindowShow",WindowHide:"common:WindowHide",WindowDPIChanged:"common:WindowDPIChanged",WindowFilesDropped:"common:WindowFilesDropped",WindowRuntimeReady:"common:WindowRuntimeReady",ThemeChanged:"common:ThemeChanged",WindowDidMove:"common:WindowDidMove",WindowDidResize:"common:WindowDidResize",ApplicationOpenedWithFile:"common:ApplicationOpenedWithFile"}};var Ze=de;window._wails=window._wails||{};window._wails.dispatchWailsEvent=Ge;var _e=l(a.Events,""),Ve=0,u=new Map,z=class{constructor(n,i,t){this.eventName=n,this.maxCallbacks=t||-1,this.Callback=r=>(i(r),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}},v=class{constructor(n,i=null){this.name=n,this.data=i}};function je(){}function Ge(e){let n=u.get(e.name);if(n){let i=n.filter(t=>{if(t.Callback(e))return!0});i.length>0&&(n=n.filter(t=>!i.includes(t)),n.length===0?u.delete(e.name):u.set(e.name,n))}}function k(e,n,i){let t=u.get(e)||[],r=new z(e,n,i);return t.push(r),u.set(e,t),()=>Xe(r)}function Ke(e,n){return k(e,n,-1)}function Ye(e,n){return k(e,n,1)}function Xe(e){let n=e.eventName,i=u.get(n).filter(t=>t!==e);i.length===0?u.delete(n):u.set(n,i)}function Qe(e,...n){[e,...n].forEach(t=>u.delete(t))}function Je(){u.clear()}function N(e){return _e(Ve,e)}function ae(){if(!EventTarget||!AbortSignal||!AbortController)return!1;let e=!0,n=new EventTarget,i=new AbortController;return n.addEventListener("test",()=>{e=!1},{signal:i.signal}),i.abort(),n.dispatchEvent(new CustomEvent("test")),e}var le=!1;document.addEventListener("DOMContentLoaded",()=>le=!0);function se(e){le||document.readyState==="complete"?e():document.addEventListener("DOMContentLoaded",e)}var qe=0,$e=1,en=2,nn=3,tn=4,on=5,rn=6,dn=7,an=8,ln=9,sn=10,cn=11,wn=12,mn=13,un=14,pn=15,Wn=16,hn=17,gn=18,fn=19,Dn=20,Mn=21,Cn=22,Sn=23,xn=24,vn=25,An=26,bn=27,Rn=28,En=29,yn=30,Un=31,On=32,Fn=33,In=34,Pn=35,Tn=36,Bn=37,zn=38,kn=39,Nn=40,Ln=41,Hn=42,Zn=43,_n=44,Vn=45,jn=46,Gn=47,o=Symbol(),H=class e{constructor(n=""){this[o]=l(a.Window,n);for(let i of Object.getOwnPropertyNames(e.prototype))i!=="constructor"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this))}Get(n){return new e(n)}Position(){return this[o](qe)}Center(){return this[o]($e)}Close(){return this[o](en)}DisableSizeConstraints(){return this[o](nn)}EnableSizeConstraints(){return this[o](tn)}Focus(){return this[o](on)}ForceReload(){return this[o](rn)}Fullscreen(){return this[o](dn)}GetScreen(){return this[o](an)}GetZoom(){return this[o](ln)}Height(){return this[o](sn)}Hide(){return this[o](cn)}IsFocused(){return this[o](wn)}IsFullscreen(){return this[o](mn)}IsMaximised(){return this[o](un)}IsMinimised(){return this[o](pn)}Maximise(){return this[o](Wn)}Minimise(){return this[o](hn)}Name(){return this[o](gn)}OpenDevTools(){return this[o](fn)}RelativePosition(){return this[o](Dn)}Reload(){return this[o](Mn)}Resizable(){return this[o](Cn)}Restore(){return this[o](Sn)}SetPosition(n,i){return this[o](xn,{x:n,y:i})}SetAlwaysOnTop(n){return this[o](vn,{alwaysOnTop:n})}SetBackgroundColour(n,i,t,r){return this[o](An,{r:n,g:i,b:t,a:r})}SetFrameless(n){return this[o](bn,{frameless:n})}SetFullscreenButtonEnabled(n){return this[o](Rn,{enabled:n})}SetMaxSize(n,i){return this[o](En,{width:n,height:i})}SetMinSize(n,i){return this[o](yn,{width:n,height:i})}SetRelativePosition(n,i){return this[o](Un,{x:n,y:i})}SetResizable(n){return this[o](On,{resizable:n})}SetSize(n,i){return this[o](Fn,{width:n,height:i})}SetTitle(n){return this[o](In,{title:n})}SetZoom(n){return this[o](Pn,{zoom:n})}Show(){return this[o](Tn)}Size(){return this[o](Bn)}ToggleFullscreen(){return this[o](zn)}ToggleMaximise(){return this[o](kn)}UnFullscreen(){return this[o](Nn)}UnMaximise(){return this[o](Ln)}UnMinimise(){return this[o](Hn)}Width(){return this[o](Zn)}Zoom(){return this[o](_n)}ZoomIn(){return this[o](Vn)}ZoomOut(){return this[o](jn)}ZoomReset(){return this[o](Gn)}},Kn=new H(""),E=Kn;function Yn(e,n=null){N(new v(e,n))}function Xn(e,n){let i=E.Get(e),t=i[n];if(typeof t=="function")try{t.call(i)}catch{}}function ce(e){let n=e.currentTarget;function i(r="Yes"){if(r!=="Yes")return;let s=n.getAttribute("wml-event"),c=n.getAttribute("wml-target-window")||"",m=n.getAttribute("wml-window"),d=n.getAttribute("wml-openurl");s!==null&&Yn(s),m!==null&&Xn(c,m),d!==null&&I(d)}let t=n.getAttribute("wml-confirm");t?T({Title:"Confirm",Message:t,Detached:!1,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(i):i()}var y=Symbol(),Z=class{constructor(){this[y]=new AbortController}set(n,i){return{signal:this[y].signal}}reset(){this[y].abort(),this[y]=new AbortController}},A=Symbol(),C=Symbol(),_=class{constructor(){this[A]=new WeakMap,this[C]=0}set(n,i){return this[C]+=!this[A].has(n),this[A].set(n,i),{}}reset(){if(!(this[C]<=0)){for(let n of document.body.querySelectorAll("*")){if(this[C]<=0)break;let i=this[A].get(n);this[C]-=typeof i<"u";for(let t of i||[])n.removeEventListener(t,ce)}this[A]=new WeakMap,this[C]=0}}},we=ae()?new Z:new _;function Qn(e){let n=/\S+/g,i=e.getAttribute("wml-trigger")||"click",t=[],r;for(;(r=n.exec(i))!==null;)t.push(r[0]);let s=we.set(e,t);for(let c of t)e.addEventListener(c,ce,s)}function V(){se(me)}function me(){we.reset(),document.body.querySelectorAll("[wml-event], [wml-window], [wml-openurl]").forEach(Qn)}window.wails=G;V();var X={};w(X,{Capabilities:()=>ei,Environment:()=>ni,IsAMD64:()=>oi,IsARM:()=>ri,IsARM64:()=>di,IsDarkMode:()=>$n,IsDebug:()=>Y,IsLinux:()=>ii,IsMac:()=>ti,IsWindows:()=>K,invoke:()=>g});var pe=l(a.System,""),Jn=0,qn=1,ue=(()=>{try{if(window?.chrome?.webview)return e=>window.chrome.webview.postMessage(e);if(window?.webkit?.messageHandlers?.external)return e=>window.webkit.messageHandlers.external.postMessage(e)}catch{}return null})();function g(e){if(ue)return ue(e)}function $n(){return pe(Jn)}function ei(){return fetch("/wails/capabilities").json()}function ni(){return pe(qn)}function K(){return window._wails.environment.OS==="windows"}function ii(){return window._wails.environment.OS==="linux"}function ti(){return window._wails.environment.OS==="darwin"}function oi(){return window._wails.environment.Arch==="amd64"}function ri(){return window._wails.environment.Arch==="arm"}function di(){return window._wails.environment.Arch==="arm64"}function Y(){return window._wails.environment.Debug===!0}window.addEventListener("contextmenu",ci);var ai=l(a.ContextMenu,""),li=0;function si(e,n,i,t){ai(li,{id:e,x:n,y:i,data:t})}function ci(e){let n=e.target,i=window.getComputedStyle(n).getPropertyValue("--custom-contextmenu");if(i=i?i.trim():"",i){e.preventDefault();let t=window.getComputedStyle(n).getPropertyValue("--custom-contextmenu-data");si(i,e.clientX,e.clientY,t);return}wi(e)}function wi(e){if(Y())return;let n=e.target;switch(window.getComputedStyle(n).getPropertyValue("--default-contextmenu").trim()){case"show":return;case"hide":e.preventDefault();return;default:if(n.isContentEditable)return;let r=window.getSelection(),s=r.toString().length>0;if(s)for(let c=0;c<r.rangeCount;c++){let d=r.getRangeAt(c).getClientRects();for(let p=0;p<d.length;p++){let x=d[p];if(document.elementFromPoint(x.left,x.top)===n)return}}if((n.tagName==="INPUT"||n.tagName==="TEXTAREA")&&(s||!n.readOnly&&!n.disabled))return;e.preventDefault()}}var Q={};w(Q,{GetFlag:()=>b});function b(e){try{return window._wails.flags[e]}catch(n){throw new Error("Unable to retrieve flag '"+e+"': "+n)}}var S=!1,We=!1,U=null,J="auto";window._wails=window._wails||{};window._wails.setResizable=function(e){We=e};window._wails.endDrag=function(){document.body.style.cursor="default",S=!1};window.addEventListener("mousedown",ui);window.addEventListener("mousemove",Wi);window.addEventListener("mouseup",pi);function mi(e){let n=window.getComputedStyle(e.target).getPropertyValue("--wails-draggable"),i=e.buttons!==void 0?e.buttons:e.which;return!n||n===""||n.trim()!=="drag"||i===0?!1:e.detail===1}function ui(e){if(U){g("wails:resize:"+U),e.preventDefault();return}if(mi(e)){if(e.offsetX>e.target.clientWidth||e.offsetY>e.target.clientHeight)return;S=!0}else S=!1}function pi(){S=!1}function W(e){document.documentElement.style.cursor=e||J,U=e}function Wi(e){if(S&&(S=!1,(e.buttons!==void 0?e.buttons:e.which)>0)){g("wails:drag");return}if(!We||!K())return;J==null&&(J=document.documentElement.style.cursor);let n=b("system.resizeHandleHeight")||5,i=b("system.resizeHandleWidth")||5,t=b("resizeCornerExtra")||10,r=window.outerWidth-e.clientX<i,s=e.clientX<i,c=e.clientY<n,m=window.outerHeight-e.clientY<n,d=window.outerWidth-e.clientX<i+t,p=e.clientX<i+t,x=e.clientY<n+t,re=window.outerHeight-e.clientY<n+t;!s&&!r&&!c&&!m&&U!==void 0?W():d&&re?W("se-resize"):p&&re?W("sw-resize"):p&&x?W("nw-resize"):x&&d?W("ne-resize"):s?W("w-resize"):c?W("n-resize"):m?W("s-resize"):r&&W("e-resize")}var $={};w($,{Hide:()=>Di,Quit:()=>Ci,Show:()=>Mi});var q=l(a.Application,""),hi=0,gi=1,fi=2;function Di(){return q(hi)}function Mi(){return q(gi)}function Ci(){return q(fi)}var ee={};w(ee,{ByID:()=>yi,ByName:()=>Ei,Call:()=>Ri,Plugin:()=>Ui});window._wails=window._wails||{};window._wails.callResultHandler=Ai;window._wails.callErrorHandler=bi;var O=0,Si=l(a.Call,""),xi=l(a.CancelCall,""),R=new Map;function vi(){let e;do e=D();while(R.has(e));return e}function Ai(e,n,i){let t=he(e);t&&t.resolve(i?JSON.parse(n):n)}function bi(e,n){let i=he(e);i&&i.reject(n)}function he(e){let n=R.get(e);return R.delete(e),n}function F(e,n={}){let i=vi(),t=()=>xi(e,{"call-id":i}),r=!1,s=!1,c=new Promise((m,d)=>{n["call-id"]=i,R.set(i,{resolve:m,reject:d}),Si(e,n).then(p=>{if(s=!0,r)return t()}).catch(p=>{d(p),R.delete(i)})});return c.cancel=()=>{if(s)return t();r=!0},c}function Ri(e){return F(O,e)}function Ei(e,...n){return F(O,{methodName:e,args:n})}function yi(e,...n){return F(O,{methodID:e,args:n})}function Ui(e,n,...i){return F(O,{packageName:"wails-plugins",structName:e,methodName:n,args:i})}var ne={};w(ne,{SetText:()=>Ii,Text:()=>Pi});var ge=l(a.Clipboard,""),Oi=0,Fi=1;function Ii(e){return ge(Oi,{text:e})}function Pi(){return ge(Fi)}var ie={};w(ie,{Any:()=>f,Array:()=>Bi,ByteSlice:()=>Ti,Map:()=>zi,Nullable:()=>ki,Struct:()=>Ni});function f(e){return e}function Ti(e){return e??""}function Bi(e){return e===f?n=>n===null?[]:n:n=>{if(n===null)return[];for(let i=0;i<n.length;i++)n[i]=e(n[i]);return n}}function zi(e,n){return n===f?i=>i===null?{}:i:i=>{if(i===null)return{};for(let t in i)i[t]=n(i[t]);return i}}function ki(e){return e===f?f:n=>n===null?null:e(n)}function Ni(e){let n=!0;for(let i in e)if(e[i]!==f){n=!1;break}return n?f:i=>{for(let t in e)t in i&&(i[t]=e[t](i[t]));return i}}var oe={};w(oe,{GetAll:()=>_i,GetCurrent:()=>ji,GetPrimary:()=>Vi});var te=l(a.Screens,""),Li=0,Hi=1,Zi=2;function _i(){return te(Li)}function Vi(){return te(Hi)}function ji(){return te(Zi)}window._wails=window._wails||{};var fe=!1;function De(){window._wails.invoke=g,g("wails:runtime:ready"),fe=!0}window.addEventListener("load",()=>{fe||De()});export{$ as Application,P as Browser,ee as Call,ne as Clipboard,ie as Create,B as Dialogs,L as Events,Q as Flags,oe as Screens,X as System,j as WML,E as Window,De as init};
