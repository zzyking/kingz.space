---
title: "Fixing Ghostty SSH Key Issues on Remote Machines"
date: 2026-03-21T10:38:00+08:00
draft: false
description: "A practical fix for broken backspace and cursor keys when SSHing from Ghostty to remote hosts without the xterm-ghostty terminfo entry."
tags: ["Terminal"]
---

Recently, I ran into a strange issue when using Ghostty on macOS to SSH into another machine. Locally, everything worked fine, but on the remote host the keyboard behavior was clearly wrong: pressing backspace inserted spaces, and some cursor keys did not behave as expected.

The same remote machine worked normally from iTerm2, so the problem was not the shell itself. After digging through discussions and Ghostty's documentation, the cause turned out to be much simpler: the remote machine did not know how to handle Ghostty's terminal type.

## Symptoms

If the remote host does not have Ghostty's terminfo entry, you may see one or more of these problems:

- Backspace inserts spaces instead of deleting characters
- Arrow keys or other cursor-related keys behave incorrectly
- Full-screen terminal apps fail to start correctly
- Warnings such as `Unknown terminal: xterm-ghostty` or `terminal is not fully functional`

In my case, the most obvious sign was that backspace became unusable during SSH sessions.

## Cause

Ghostty identifies itself as `xterm-ghostty`. That is fine on your local machine, but the remote system also needs a matching terminfo definition. If it does not have one, terminal applications cannot correctly interpret the key sequences sent by Ghostty.

That is why the issue usually appears only after SSHing into another host, especially older or minimal systems.

## Fix 1: Install Ghostty's terminfo on the remote host

This is the better fix if you control the remote machine. Ghostty's own documentation recommends copying the terminfo entry over SSH. The simplest one-liner is:

```shell
infocmp -x xterm-ghostty | ssh YOUR-SERVER -- tic -x -
```

This exports the local `xterm-ghostty` terminfo entry and compiles it on the remote machine. After that, reconnect and test the affected keys again.

## Fix 2: Fall back to a more common terminal type

If you cannot modify the remote machine, a workaround is to use a terminal type that is already widely available there, such as `xterm-256color`.

For example:

```shell
TERM=xterm-256color ssh YOUR-SERVER
```

This is usually enough to avoid broken backspace behavior, but it is still a fallback. If you want the most correct behavior, installing Ghostty's terminfo on the remote host is the cleaner solution.

## Notes

I found the most useful references in:

- Ghostty terminfo help: <https://ghostty.org/docs/help/terminfo>
- A Reddit discussion where others reported the same SSH key problems: <https://www.reddit.com/r/Ghostty/comments/1homunn/problem_with_certain_keys_when_working_remotely/>

If you are seeing odd keyboard behavior only in Ghostty SSH sessions, check the remote machine's terminfo support first. In my case, that was the real issue.
