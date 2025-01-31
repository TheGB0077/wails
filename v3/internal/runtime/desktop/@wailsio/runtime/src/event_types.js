
export const EventTypes = {
	Windows: {
		APMPowerSettingChange: "windows:APMPowerSettingChange",
		APMPowerStatusChange: "windows:APMPowerStatusChange",
		APMResumeAutomatic: "windows:APMResumeAutomatic",
		APMResumeSuspend: "windows:APMResumeSuspend",
		APMSuspend: "windows:APMSuspend",
		ApplicationStarted: "windows:ApplicationStarted",
		SystemThemeChanged: "windows:SystemThemeChanged",
		WebViewNavigationCompleted: "windows:WebViewNavigationCompleted",
		WindowActive: "windows:WindowActive",
		WindowBackgroundErase: "windows:WindowBackgroundErase",
		WindowClickActive: "windows:WindowClickActive",
		WindowClosing: "windows:WindowClosing",
		WindowDidMove: "windows:WindowDidMove",
		WindowDidResize: "windows:WindowDidResize",
		WindowDPIChanged: "windows:WindowDPIChanged",
		WindowDragDrop: "windows:WindowDragDrop",
		WindowDragEnter: "windows:WindowDragEnter",
		WindowDragLeave: "windows:WindowDragLeave",
		WindowDragOver: "windows:WindowDragOver",
		WindowEndMove: "windows:WindowEndMove",
		WindowEndResize: "windows:WindowEndResize",
		WindowFullscreen: "windows:WindowFullscreen",
		WindowHide: "windows:WindowHide",
		WindowInactive: "windows:WindowInactive",
		WindowKeyDown: "windows:WindowKeyDown",
		WindowKeyUp: "windows:WindowKeyUp",
		WindowKillFocus: "windows:WindowKillFocus",
		WindowMaximise: "windows:WindowMaximise",
		WindowMinimise: "windows:WindowMinimise",
		WindowNonClientHit: "windows:WindowNonClientHit",
		WindowNonClientMouseDown: "windows:WindowNonClientMouseDown",
		WindowNonClientMouseLeave: "windows:WindowNonClientMouseLeave",
		WindowNonClientMouseMove: "windows:WindowNonClientMouseMove",
		WindowNonClientMouseUp: "windows:WindowNonClientMouseUp",
		WindowPaint: "windows:WindowPaint",
		WindowRestore: "windows:WindowRestore",
		WindowSetFocus: "windows:WindowSetFocus",
		WindowShow: "windows:WindowShow",
		WindowStartMove: "windows:WindowStartMove",
		WindowStartResize: "windows:WindowStartResize",
		WindowUnFullscreen: "windows:WindowUnFullscreen",
		WindowUnMaximise: "windows:WindowUnMaximise",
		WindowUnMinimise: "windows:WindowUnMinimise",
		WindowZOrderChanged: "windows:WindowZOrderChanged",
	},
	Mac: {
		ApplicationDidBecomeActive: "mac:ApplicationDidBecomeActive",
		ApplicationDidChangeBackingProperties: "mac:ApplicationDidChangeBackingProperties",
		ApplicationDidChangeEffectiveAppearance: "mac:ApplicationDidChangeEffectiveAppearance",
		ApplicationDidChangeIcon: "mac:ApplicationDidChangeIcon",
		ApplicationDidChangeOcclusionState: "mac:ApplicationDidChangeOcclusionState",
		ApplicationDidChangeScreenParameters: "mac:ApplicationDidChangeScreenParameters",
		ApplicationDidChangeStatusBarFrame: "mac:ApplicationDidChangeStatusBarFrame",
		ApplicationDidChangeStatusBarOrientation: "mac:ApplicationDidChangeStatusBarOrientation",
		ApplicationDidChangeTheme: "mac:ApplicationDidChangeTheme!",
		ApplicationDidFinishLaunching: "mac:ApplicationDidFinishLaunching",
		ApplicationDidHide: "mac:ApplicationDidHide",
		ApplicationDidResignActiveNotification: "mac:ApplicationDidResignActiveNotification",
		ApplicationDidUnhide: "mac:ApplicationDidUnhide",
		ApplicationDidUpdate: "mac:ApplicationDidUpdate",
		ApplicationShouldHandleReopen: "mac:ApplicationShouldHandleReopen!",
		ApplicationWillBecomeActive: "mac:ApplicationWillBecomeActive",
		ApplicationWillFinishLaunching: "mac:ApplicationWillFinishLaunching",
		ApplicationWillHide: "mac:ApplicationWillHide",
		ApplicationWillResignActive: "mac:ApplicationWillResignActive",
		ApplicationWillTerminate: "mac:ApplicationWillTerminate",
		ApplicationWillUnhide: "mac:ApplicationWillUnhide",
		ApplicationWillUpdate: "mac:ApplicationWillUpdate",
		MenuDidAddItem: "mac:MenuDidAddItem",
		MenuDidBeginTracking: "mac:MenuDidBeginTracking",
		MenuDidClose: "mac:MenuDidClose",
		MenuDidDisplayItem: "mac:MenuDidDisplayItem",
		MenuDidEndTracking: "mac:MenuDidEndTracking",
		MenuDidHighlightItem: "mac:MenuDidHighlightItem",
		MenuDidOpen: "mac:MenuDidOpen",
		MenuDidPopUp: "mac:MenuDidPopUp",
		MenuDidRemoveItem: "mac:MenuDidRemoveItem",
		MenuDidSendAction: "mac:MenuDidSendAction",
		MenuDidSendActionToItem: "mac:MenuDidSendActionToItem",
		MenuDidUpdate: "mac:MenuDidUpdate",
		MenuWillAddItem: "mac:MenuWillAddItem",
		MenuWillBeginTracking: "mac:MenuWillBeginTracking",
		MenuWillDisplayItem: "mac:MenuWillDisplayItem",
		MenuWillEndTracking: "mac:MenuWillEndTracking",
		MenuWillHighlightItem: "mac:MenuWillHighlightItem",
		MenuWillOpen: "mac:MenuWillOpen",
		MenuWillPopUp: "mac:MenuWillPopUp",
		MenuWillRemoveItem: "mac:MenuWillRemoveItem",
		MenuWillSendAction: "mac:MenuWillSendAction",
		MenuWillSendActionToItem: "mac:MenuWillSendActionToItem",
		MenuWillUpdate: "mac:MenuWillUpdate",
		WebViewDidCommitNavigation: "mac:WebViewDidCommitNavigation",
		WebViewDidFinishNavigation: "mac:WebViewDidFinishNavigation",
		WebViewDidReceiveServerRedirectForProvisionalNavigation: "mac:WebViewDidReceiveServerRedirectForProvisionalNavigation",
		WebViewDidStartProvisionalNavigation: "mac:WebViewDidStartProvisionalNavigation",
		WindowDidBecomeKey: "mac:WindowDidBecomeKey",
		WindowDidBecomeMain: "mac:WindowDidBecomeMain",
		WindowDidBeginSheet: "mac:WindowDidBeginSheet",
		WindowDidChangeAlpha: "mac:WindowDidChangeAlpha",
		WindowDidChangeBackingLocation: "mac:WindowDidChangeBackingLocation",
		WindowDidChangeBackingProperties: "mac:WindowDidChangeBackingProperties",
		WindowDidChangeCollectionBehavior: "mac:WindowDidChangeCollectionBehavior",
		WindowDidChangeEffectiveAppearance: "mac:WindowDidChangeEffectiveAppearance",
		WindowDidChangeOcclusionState: "mac:WindowDidChangeOcclusionState",
		WindowDidChangeOrderingMode: "mac:WindowDidChangeOrderingMode",
		WindowDidChangeScreen: "mac:WindowDidChangeScreen",
		WindowDidChangeScreenParameters: "mac:WindowDidChangeScreenParameters",
		WindowDidChangeScreenProfile: "mac:WindowDidChangeScreenProfile",
		WindowDidChangeScreenSpace: "mac:WindowDidChangeScreenSpace",
		WindowDidChangeScreenSpaceProperties: "mac:WindowDidChangeScreenSpaceProperties",
		WindowDidChangeSharingType: "mac:WindowDidChangeSharingType",
		WindowDidChangeSpace: "mac:WindowDidChangeSpace",
		WindowDidChangeSpaceOrderingMode: "mac:WindowDidChangeSpaceOrderingMode",
		WindowDidChangeTitle: "mac:WindowDidChangeTitle",
		WindowDidChangeToolbar: "mac:WindowDidChangeToolbar",
		WindowDidDeminiaturize: "mac:WindowDidDeminiaturize",
		WindowDidEndSheet: "mac:WindowDidEndSheet",
		WindowDidEnterFullScreen: "mac:WindowDidEnterFullScreen",
		WindowDidEnterVersionBrowser: "mac:WindowDidEnterVersionBrowser",
		WindowDidExitFullScreen: "mac:WindowDidExitFullScreen",
		WindowDidExitVersionBrowser: "mac:WindowDidExitVersionBrowser",
		WindowDidExpose: "mac:WindowDidExpose",
		WindowDidFocus: "mac:WindowDidFocus",
		WindowDidMiniaturize: "mac:WindowDidMiniaturize",
		WindowDidMove: "mac:WindowDidMove",
		WindowDidOrderOffScreen: "mac:WindowDidOrderOffScreen",
		WindowDidOrderOnScreen: "mac:WindowDidOrderOnScreen",
		WindowDidResignKey: "mac:WindowDidResignKey",
		WindowDidResignMain: "mac:WindowDidResignMain",
		WindowDidResize: "mac:WindowDidResize",
		WindowDidUpdate: "mac:WindowDidUpdate",
		WindowDidUpdateAlpha: "mac:WindowDidUpdateAlpha",
		WindowDidUpdateCollectionBehavior: "mac:WindowDidUpdateCollectionBehavior",
		WindowDidUpdateCollectionProperties: "mac:WindowDidUpdateCollectionProperties",
		WindowDidUpdateShadow: "mac:WindowDidUpdateShadow",
		WindowDidUpdateTitle: "mac:WindowDidUpdateTitle",
		WindowDidUpdateToolbar: "mac:WindowDidUpdateToolbar",
		WindowDidZoom: "mac:WindowDidZoom!",
		WindowFileDraggingEntered: "mac:WindowFileDraggingEntered",
		WindowFileDraggingExited: "mac:WindowFileDraggingExited",
		WindowFileDraggingPerformed: "mac:WindowFileDraggingPerformed",
		WindowHide: "mac:WindowHide",
		WindowMaximize: "mac:WindowMaximize",
		WindowShouldClose: "mac:WindowShouldClose!",
		WindowShow: "mac:WindowShow",
		WindowUnMaximise: "mac:WindowUnMaximise",
		WindowWillBecomeKey: "mac:WindowWillBecomeKey",
		WindowWillBecomeMain: "mac:WindowWillBecomeMain",
		WindowWillBeginSheet: "mac:WindowWillBeginSheet",
		WindowWillChangeOrderingMode: "mac:WindowWillChangeOrderingMode",
		WindowWillClose: "mac:WindowWillClose",
		WindowWillDeminiaturize: "mac:WindowWillDeminiaturize",
		WindowWillEnterFullScreen: "mac:WindowWillEnterFullScreen",
		WindowWillEnterVersionBrowser: "mac:WindowWillEnterVersionBrowser",
		WindowWillExitFullScreen: "mac:WindowWillExitFullScreen",
		WindowWillExitVersionBrowser: "mac:WindowWillExitVersionBrowser",
		WindowWillFocus: "mac:WindowWillFocus",
		WindowWillMiniaturize: "mac:WindowWillMiniaturize",
		WindowWillMove: "mac:WindowWillMove",
		WindowWillOrderOffScreen: "mac:WindowWillOrderOffScreen",
		WindowWillOrderOnScreen: "mac:WindowWillOrderOnScreen",
		WindowWillResignMain: "mac:WindowWillResignMain",
		WindowWillResize: "mac:WindowWillResize",
		WindowWillUnfocus: "mac:WindowWillUnfocus",
		WindowWillUpdate: "mac:WindowWillUpdate",
		WindowWillUpdateAlpha: "mac:WindowWillUpdateAlpha",
		WindowWillUpdateCollectionBehavior: "mac:WindowWillUpdateCollectionBehavior",
		WindowWillUpdateCollectionProperties: "mac:WindowWillUpdateCollectionProperties",
		WindowWillUpdateShadow: "mac:WindowWillUpdateShadow",
		WindowWillUpdateTitle: "mac:WindowWillUpdateTitle",
		WindowWillUpdateToolbar: "mac:WindowWillUpdateToolbar",
		WindowWillUpdateVisibility: "mac:WindowWillUpdateVisibility",
		WindowWillUseStandardFrame: "mac:WindowWillUseStandardFrame",
		WindowZoomIn: "mac:WindowZoomIn!",
		WindowZoomOut: "mac:WindowZoomOut!",
		WindowZoomReset: "mac:WindowZoomReset!",
	},
	Linux: {
		ApplicationStartup: "linux:ApplicationStartup",
		SystemThemeChanged: "linux:SystemThemeChanged",
		WindowDeleteEvent: "linux:WindowDeleteEvent",
		WindowDidMove: "linux:WindowDidMove",
		WindowDidResize: "linux:WindowDidResize",
		WindowFocusIn: "linux:WindowFocusIn",
		WindowFocusOut: "linux:WindowFocusOut",
		WindowLoadChanged: "linux:WindowLoadChanged",
	},
	Common: {
		ApplicationOpenedWithFile: "common:ApplicationOpenedWithFile",
		ApplicationStarted: "common:ApplicationStarted",
		ThemeChanged: "common:ThemeChanged",
		WindowClosing: "common:WindowClosing",
		WindowDidMove: "common:WindowDidMove",
		WindowDidResize: "common:WindowDidResize",
		WindowDPIChanged: "common:WindowDPIChanged",
		WindowFilesDropped: "common:WindowFilesDropped",
		WindowFocus: "common:WindowFocus",
		WindowFullscreen: "common:WindowFullscreen",
		WindowHide: "common:WindowHide",
		WindowLostFocus: "common:WindowLostFocus",
		WindowMaximise: "common:WindowMaximise",
		WindowMinimise: "common:WindowMinimise",
		WindowRestore: "common:WindowRestore",
		WindowRuntimeReady: "common:WindowRuntimeReady",
		WindowShow: "common:WindowShow",
		WindowUnFullscreen: "common:WindowUnFullscreen",
		WindowUnMaximise: "common:WindowUnMaximise",
		WindowUnMinimise: "common:WindowUnMinimise",
		WindowZoom: "common:WindowZoom",
		WindowZoomIn: "common:WindowZoomIn",
		WindowZoomOut: "common:WindowZoomOut",
		WindowZoomReset: "common:WindowZoomReset",
	},
};
