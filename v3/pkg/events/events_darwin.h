//go:build darwin

#ifndef _events_h
#define _events_h

extern void processApplicationEvent(unsigned int, void* data);
extern void processWindowEvent(unsigned int, unsigned int);

#define EventApplicationDidBecomeActive 1025
#define EventApplicationDidChangeBackingProperties 1026
#define EventApplicationDidChangeEffectiveAppearance 1027
#define EventApplicationDidChangeIcon 1028
#define EventApplicationDidChangeOcclusionState 1029
#define EventApplicationDidChangeScreenParameters 1030
#define EventApplicationDidChangeStatusBarFrame 1031
#define EventApplicationDidChangeStatusBarOrientation 1032
#define EventApplicationDidFinishLaunching 1033
#define EventApplicationDidHide 1034
#define EventApplicationDidResignActiveNotification 1035
#define EventApplicationDidUnhide 1036
#define EventApplicationDidUpdate 1037
#define EventApplicationWillBecomeActive 1038
#define EventApplicationWillFinishLaunching 1039
#define EventApplicationWillHide 1040
#define EventApplicationWillResignActive 1041
#define EventApplicationWillTerminate 1042
#define EventApplicationWillUnhide 1043
#define EventApplicationWillUpdate 1044
#define EventApplicationDidChangeTheme 1045
#define EventApplicationShouldHandleReopen 1046
#define EventWindowDidBecomeKey 1047
#define EventWindowDidBecomeMain 1048
#define EventWindowDidBeginSheet 1049
#define EventWindowDidChangeAlpha 1050
#define EventWindowDidChangeBackingLocation 1051
#define EventWindowDidChangeBackingProperties 1052
#define EventWindowDidChangeCollectionBehavior 1053
#define EventWindowDidChangeEffectiveAppearance 1054
#define EventWindowDidChangeOcclusionState 1055
#define EventWindowDidChangeOrderingMode 1056
#define EventWindowDidChangeScreen 1057
#define EventWindowDidChangeScreenParameters 1058
#define EventWindowDidChangeScreenProfile 1059
#define EventWindowDidChangeScreenSpace 1060
#define EventWindowDidChangeScreenSpaceProperties 1061
#define EventWindowDidChangeSharingType 1062
#define EventWindowDidChangeSpace 1063
#define EventWindowDidChangeSpaceOrderingMode 1064
#define EventWindowDidChangeTitle 1065
#define EventWindowDidChangeToolbar 1066
#define EventWindowDidChangeVisibility 1067
#define EventWindowDidDeminiaturize 1068
#define EventWindowDidEndSheet 1069
#define EventWindowDidEnterFullScreen 1070
#define EventWindowDidEnterVersionBrowser 1071
#define EventWindowDidExitFullScreen 1072
#define EventWindowDidExitVersionBrowser 1073
#define EventWindowDidExpose 1074
#define EventWindowDidFocus 1075
#define EventWindowDidMiniaturize 1076
#define EventWindowDidMove 1077
#define EventWindowDidOrderOffScreen 1078
#define EventWindowDidOrderOnScreen 1079
#define EventWindowDidResignKey 1080
#define EventWindowDidResignMain 1081
#define EventWindowDidResize 1082
#define EventWindowDidUpdate 1083
#define EventWindowDidUpdateAlpha 1084
#define EventWindowDidUpdateCollectionBehavior 1085
#define EventWindowDidUpdateCollectionProperties 1086
#define EventWindowDidUpdateShadow 1087
#define EventWindowDidUpdateTitle 1088
#define EventWindowDidUpdateToolbar 1089
#define EventWindowDidUpdateVisibility 1090
#define EventWindowShouldClose 1091
#define EventWindowWillBecomeKey 1092
#define EventWindowWillBecomeMain 1093
#define EventWindowWillBeginSheet 1094
#define EventWindowWillChangeOrderingMode 1095
#define EventWindowWillClose 1096
#define EventWindowWillDeminiaturize 1097
#define EventWindowWillEnterFullScreen 1098
#define EventWindowWillEnterVersionBrowser 1099
#define EventWindowWillExitFullScreen 1100
#define EventWindowWillExitVersionBrowser 1101
#define EventWindowWillFocus 1102
#define EventWindowWillMiniaturize 1103
#define EventWindowWillMove 1104
#define EventWindowWillOrderOffScreen 1105
#define EventWindowWillOrderOnScreen 1106
#define EventWindowWillResignMain 1107
#define EventWindowWillResize 1108
#define EventWindowWillUnfocus 1109
#define EventWindowWillUpdate 1110
#define EventWindowWillUpdateAlpha 1111
#define EventWindowWillUpdateCollectionBehavior 1112
#define EventWindowWillUpdateCollectionProperties 1113
#define EventWindowWillUpdateShadow 1114
#define EventWindowWillUpdateTitle 1115
#define EventWindowWillUpdateToolbar 1116
#define EventWindowWillUpdateVisibility 1117
#define EventWindowWillUseStandardFrame 1118
#define EventMenuWillOpen 1119
#define EventMenuDidOpen 1120
#define EventMenuDidClose 1121
#define EventMenuWillSendAction 1122
#define EventMenuDidSendAction 1123
#define EventMenuWillHighlightItem 1124
#define EventMenuDidHighlightItem 1125
#define EventMenuWillDisplayItem 1126
#define EventMenuDidDisplayItem 1127
#define EventMenuWillAddItem 1128
#define EventMenuDidAddItem 1129
#define EventMenuWillRemoveItem 1130
#define EventMenuDidRemoveItem 1131
#define EventMenuWillBeginTracking 1132
#define EventMenuDidBeginTracking 1133
#define EventMenuWillEndTracking 1134
#define EventMenuDidEndTracking 1135
#define EventMenuWillUpdate 1136
#define EventMenuDidUpdate 1137
#define EventMenuWillPopUp 1138
#define EventMenuDidPopUp 1139
#define EventMenuWillSendActionToItem 1140
#define EventMenuDidSendActionToItem 1141
#define EventWebViewDidStartProvisionalNavigation 1142
#define EventWebViewDidReceiveServerRedirectForProvisionalNavigation 1143
#define EventWebViewDidFinishNavigation 1144
#define EventWebViewDidCommitNavigation 1145
#define EventWindowFileDraggingEntered 1146
#define EventWindowFileDraggingPerformed 1147
#define EventWindowFileDraggingExited 1148

#define MAX_EVENTS 1149


#endif