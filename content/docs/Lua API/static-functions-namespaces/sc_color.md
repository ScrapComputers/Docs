---
title: "sc.color"
description: "The Color Module (Computer API)"
---

The Color Module for the computer API!

---

## Functions

### newSingluar

```lua
sc.color.newSingluar( rgbNum )
```

Creates a new color from 1 value. Whatever **rgbNum**'s value has will be set on R, G, and B.

This means it's grayscale only!

**Arguments:**
- rgbNum [ **number** ] The color value that will be set on R, G, and B

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color)** ] The generated color

---

### random

```lua
sc.color.random( from, to )
```

Generates a random color from whatever range you want

**Arguments:**
- from [ **number** ] The starting range
- to [ **number** ] The ending range

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color)** ] The generated color

---

### random0to1

```lua
sc.color.random0to1()
```

Generates a random color from 0 to 1

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color)** ] The generated color
