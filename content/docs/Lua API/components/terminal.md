---
title: "Terminal"
description: "The terminal component"
---

## Description

The terminal is like a display but more like a console you can write to, Instead of effects, it uses via GUI.

## Functions

### send

```lua
Terminal.send( msg )
```

Sends a message to the terminal

**Arguments:**
- msg string

---

### clear

```lua
Terminal.clear()
```

Clears all data.

---

### clearInputHistory

```lua
Terminal.clearInputHistory()
```

Clears the userinput

---

### receivedInputs

```lua
Terminal.receivedInputs()
```

Returns true if there are available inputs.

**Returns:**
- [ **boolean** ] If true, then there are inputs you can read from.

---

### getInput

```lua
Terminal.getInput()
```

Gets the latest user input

{{< callout context="note" title="Use `Terminal.receivedInputs()` for this!" icon="outline/info-circle" >}}
Please use `Terminal.receivedInputs()` to check if there's something to get! If there are none and you call this, It will error out!
{{< /callout >}}


**Returns:**
- [ **string** ] The input that the user has entered.
