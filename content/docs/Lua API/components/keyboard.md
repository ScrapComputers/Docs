---
title: "Keyboard"
description: "The keyboard component"
---

It's like a virtual keyboard! You can interact with it and then type anything and the computer will be able to read it!

---

## Functions

---

### getLatestKeystroke

```lua
Keyboard.getLatestKeystroke()
```

Returns the latest keystroke that has been sent. If it is "backSpace", that means the user has pressed "backSpace"

**Returns:**
- [ **"backSpace"|string** ] The keystroke

---

### isPressed

```lua
Keyboard.isPressed()
```

Returns true if a key is being pressed.

**Returns:**
- [ **boolean** ] True if a key is being pressed.
