//go:build darwin

#include "Cocoa/Cocoa.h"
#include "menuitem_darwin.h"
#include "systemtray_darwin.h"

extern void systrayClickCallback(long, int);

// StatusItemController.m
@implementation StatusItemController

- (void)statusItemClicked:(id)sender {
	NSEvent *event = [NSApp currentEvent];
	systrayClickCallback(self.id, event.type);
}

@end

// Create a new system tray
void* systemTrayNew(long id) {
	StatusItemController *controller = [[StatusItemController alloc] init];
	controller.id = id;
	NSStatusItem *statusItem = [[[NSStatusBar systemStatusBar] statusItemWithLength:NSVariableStatusItemLength] retain];
	[statusItem setTarget:controller];
	[statusItem setAction:@selector(statusItemClicked:)];
	NSButton *button = statusItem.button;
	[button sendActionOn:(NSEventMaskLeftMouseDown|NSEventMaskRightMouseDown)];
	return (void*)statusItem;
}

void systemTraySetLabel(void* nsStatusItem, char *label) {
	if( label == NULL ) {
		return;
	}
	// Set the label on the main thread
	dispatch_async(dispatch_get_main_queue(), ^{
		NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
		statusItem.button.title = [NSString stringWithUTF8String:label];
		free(label);
	});
}

// Create an nsimage from a byte array
NSImage* imageFromBytes(const unsigned char *bytes, int length) {
	NSData *data = [NSData dataWithBytes:bytes length:length];
	NSImage *image = [[NSImage alloc] initWithData:data];
	return image;
}

// Set the icon on the system tray
void systemTraySetIcon(void* nsStatusItem, void* nsImage, int position, bool isTemplate) {
	// Set the icon on the main thread
	dispatch_async(dispatch_get_main_queue(), ^{
		NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
		NSImage *image = (NSImage *)nsImage;

		NSStatusBar *statusBar = [NSStatusBar systemStatusBar];
		CGFloat thickness = [statusBar thickness];
		[image setSize:NSMakeSize(thickness, thickness)];
		if( isTemplate ) {
			[image setTemplate:YES];
		}
		statusItem.button.image = [image autorelease];
		statusItem.button.imagePosition = position;
	});
}

// Add menu to system tray
void systemTraySetMenu(void* nsStatusItem, void* nsMenu) {
	// Set the menu on the main thread
	dispatch_async(dispatch_get_main_queue(), ^{
		NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
		NSMenu *menu = (NSMenu *)nsMenu;
		statusItem.menu = menu;
	});
}

// Destroy system tray
void systemTrayDestroy(void* nsStatusItem) {
	// Remove the status item from the status bar and its associated menu
	dispatch_async(dispatch_get_main_queue(), ^{
		NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
		[[NSStatusBar systemStatusBar] removeStatusItem:statusItem];
		[statusItem release];
	});
}

void showMenu(void* nsStatusItem, void *nsMenu) {
	// Show the menu on the main thread
	dispatch_async(dispatch_get_main_queue(), ^{
		NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
		[statusItem popUpStatusItemMenu:(NSMenu *)nsMenu];
        // Post a mouse up event so the statusitem defocuses
        NSEvent *event = [NSEvent mouseEventWithType:NSEventTypeLeftMouseUp
                                            location:[NSEvent mouseLocation]
                                       modifierFlags:0
                                           timestamp:[[NSProcessInfo processInfo] systemUptime]
                                        windowNumber:0
                                             context:nil
                                         eventNumber:0
                                          clickCount:1
                                            pressure:1];
        [NSApp postEvent:event atStart:NO];
        [statusItem.button highlight:NO];
	});
}

void systemTrayGetBounds(void* nsStatusItem, NSRect *rect) {
	NSStatusItem *statusItem = (NSStatusItem *)nsStatusItem;
	NSRect buttonFrame = statusItem.button.frame;
	*rect = [statusItem.button.window convertRectToScreen:buttonFrame];
}

int statusBarHeight() {
    NSMenu *mainMenu = [NSApp mainMenu];
    CGFloat menuBarHeight = [mainMenu menuBarHeight];
    return (int)menuBarHeight;
}
