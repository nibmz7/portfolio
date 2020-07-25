


> **DISCLAIMER**: THIS POST IS WRITTEN BY A COMPLETE NOVICE. INFORMATION STATED MAY BE INACCURATE AND IF SO, FEEL FREE TO CORRECT ANY MISTAKES. 
> **RESEARCH TOPIC**: Linux GUI stack
> **WHAT PROMPTED THIS?**: I stumbled across a process called 'xorg' and wondered that is. A quick Google and I realized it's something to do with graphics and so I set off on a journey to understand the Linux GUI stack from a high level.

## Windowing System
- In a windowing system, there are 2 main components: the display server and the window manager. 
	- Display server 
		- The display server protocol specifies communication between a client (GUI application) and the display server
		- Relays inputs (keyboards, mouse, touchscreen etc.) to clients
		- Displays the output onto a screen
	- Window manager
		-	Works hand-in-hand with a display server
		- Manages the placement and appearance of windows
- There are 2 main types of windowing system used in GUI Linux operating systems today: X11 and Wayland.
	- X11
		- X<span>.</span>Org server (display server) + Mutter/KWin (window manager)
		- X<span>.</span>Org server is the dominant implementation of the display server for X Window System (X11 Protocol).
		![enter image description here](https://raw.githubusercontent.com/nibmz7/portfolio/main/blog/From_Windows_To_Linux/Basics_of_Linux_GUI_stack/assets/webp/x11.webp)
> “In the case of X11, A window manager is a regular X client. It doesn’t have any superuser privileges or keys to kernel backdoors; it is a normal user process that is allowed by the X server to call a set of special APIs. X ensures that no more than one window manager is running at any given point by denying a client access to these APIs if another client currently has access. The first client to attempt to access these APIs always succeeds.” - [How X Window Managers Work, And How To Write One (Part I)](https://jichu4n.com/posts/how-x-window-managers-work-and-how-to-write-one-part-i/)

- Wayland
	- Mutter/KWin - Wayland compositor (Display server + window manager)
	- Wayland, unlike its X11 counterpart, does not have [network transparency](https://en.wikipedia.org/wiki/Network_transparency) in order to [simplify its architecture](https://wiki.ubuntu.com/Wayland#What_about_network_transparency.3F). 
	![enter image description here](https://raw.githubusercontent.com/nibmz7/portfolio/main/blog/From_Windows_To_Linux/Basics_of_Linux_GUI_stack/assets/webp/wayland.webp)
> I was curious as to how a wayland client would communicate to the display server (wayland compositor). In wayland’s case, it would look for a unix socket (ipc socket) typically named wayland-0.
https://wayland.freedesktop.org/docs/html/ch04.html#sect-Protocol-Wire-Format
- Linux GUI toolkits (QT, GTK) now supports both X11 and wayland protocol.

## Window Manager
- "A window manager is a system software that controls the placement and appearance of windows within a windowing system in a graphical user interface." - [Window Manager on Wikipedia](https://en.wikipedia.org/wiki/Window_manager)
- There are 2 notable types of Window Managers: Stacking and Tiling window managers.
	- Stacking
		- Openbox
		- Mutter/Kwin - more precisely a compositing window manager
	- Tiling
		- i3 (X11 Tiling window manager)
		- Sway (Tiling wayland compositor)

## Display Manager
- A [display manager](https://wiki.archlinux.org/index.php/display_manager) presents the user with a login screen. A session starts when a user successfully enters a valid combination of username and password.
- Examples are GDM, KDM and LightDM.
![enter image description here](https://raw.githubusercontent.com/nibmz7/portfolio/main/blog/From_Windows_To_Linux/Basics_of_Linux_GUI_stack/assets/webp/display_manager.webp)
> - Ubuntu uses GDM by default.
> - GDM runs on wayland. Display managers that run on X, on the other hand, starts up the X server before displaying the login UI.
> - GDM starts in TTY1 and on user login, it starts up the user session on TTY2. [Why is my GDM at a different TTY than my desktop environment?](https://askubuntu.com/questions/910108/why-is-my-gdm-at-a-different-tty-than-my-desktop-environment)
> Just a question: Is it possible to start greeter and user screen in the same TTY?
> Another question: *Session manager https://www.systutorials.com/docs/linux/man/1-gnome-session/
So the method of starting a window manager directly without a display manager does not use a session manager? What does that mean for a user?

## Desktop Environments
- "A desktop environment (DE) usually rides on top of a Window Manager and adds many features, including panels, status bars, drag-and-drop capabilities, and a suite of integrated applications and tools. " - [zeal](https://askubuntu.com/a/339812/1097045)
- You can run standalone window managers without the need of a desktop environment.
- See [desktop environments vs window managers](https://www.reddit.com/r/linux4noobs/comments/69lvet/difference_between_a_window_manager_and_desktop/)
- Examples include GNOME and KDE.

## GUI Toolkits
- Developers use these toolkits to ease development. They do not need to know the intricacies of X11/Wayland to start developing apps for the platform.
- Examples of GUI toolkits are QT and GTK.

## Digression
- [POP!_OS](https://pop.system76.com/) and [Regolith OS](https://regolith-linux.org/) looks pretty sick.
- What's Chrome OS GUI stack like?
	- [Aura](http://dev.chromium.org/developers/design-documents/aura/graphics-architecture)
	- Ozone
		- [Overview](https://chromium.googlesource.com/chromium/src.git/+/master/docs/ozone_overview.md)
		- [Chrome Is Reaching The Point Of Good X11 + Wayland Support In Same Build](https://www.phoronix.com/scan.php?page=news_item&px=Chrome-Ozone-X11-Build-Good)
- Android
	- Has its own windowing system known as SurfaceFlinger
		- [What is Android's SurfaceFlinger](https://www.bradcypert.com/what-is-androids-surfaceflinger/)
	- https://source.android.com/devices/graphics 
- MacOS - [Quartz Compositor ?](https://en.wikipedia.org/wiki/Quartz_Compositor)




