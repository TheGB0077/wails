//go:build !production || devtools

package application

func newOpenDevToolsMenuItem() *MenuItem {
	return NewMenuItem("Open Developer Tools").
		SetAccelerator("Alt+Command+I").
		OnClick(func(ctx *Context) {
			currentWindow := globalApplication.CurrentWindow()
			if currentWindow != nil {
				currentWindow.OpenDevTools()
			}
		})
}