---
title: "Global Variables"
description: "All functions/variables globally accessible in the computer!"
---

Generally contains functions that were modified to do something different.

## Functions

### print

```lua
print( ... )
```

Prints text to the chat. Will be always converted to a string so you can pass in anything

If it is a table. It will convert to be printable and you can see the contents inside.

**Arguments:**
- ... [ **any[]** ] All arguments to send to the chat

---

### alert

```lua
alert( ... )
```

Same as [print](#print) but sends it as a alert message

**Arguments:**
- ... [ **any[]** ] All arguments to send to the alert popup

---

### tostring

```lua
tostring( data )
```

Like the normal but modified to have additional features like printing lua tables!

**Arguments:**
- data [ **any** ] The variable to convert to be a string.

---

### debug

```lua
debug( ... )
```

The debug function is basically Lua's implementation of the `print` function in Scrap Mechanic.

**Arguments:**
- ... [ **any[]** ] All arguments to send to the console
