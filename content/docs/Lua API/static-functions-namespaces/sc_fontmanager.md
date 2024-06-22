---
title: "sc.fontmanager"
description: "The Font manager that allows you to access fonts."
---

The font manager allows you to, of course, manage fonts. You can get font information, get all font names you can use, etc.

*The font manager is NOT a module so please do not identify this as a module*

---

## Structures

### SCFont

A SCFont (`SCF` in short, `ScrapComputers Font` for full name) is a font that has a fixed with and height for EVERY singular character. This is in Lua so expect a massive font file size.

{{< callout context="tip" title="Did you know?" icon="outline/rocket" >}}
The owner (VeraDev) attempted to make a binary font version. However due to some issues with the String Buffer system (Named badly btw. works like a Packet Buffer)

For some stupid reason. it was NOT reading the actual glyphs itself and after a lot of headaches, it has been scrapped.

This would have been called SCFL (`SCFont Lua` in readable short, `ScrapComputers Font Lua` for the full name but I would have changed it to `SCLF` so the full name is better.)
{{< /callout >}}

#### Fields:
- `fontWidth` [ **integer** ] The width of the font
- `fontHeight` [ **integer** ] The height of the font
- `characters` [ **string** ] All characters used on the font
- `errorChar` [ **string[]** ] The error character font
- `charset` [ **string[][]** ] All character's gylphs. On the first array. The index is the character! The second is the row number!

---

## Functions

### getFont

```lua
sc.fontmanager.getFont( fontName )
```

Gets a font

**Arguments:**
- fontName [ **string** ] The name of the font to get

**Returns:**
- [ [**SCFont?** ](#scfont) ] The font it has recieved. Nil if there is an error.
- [ **string?** ] The error message it has received. Nil if there wasn't an error.

---

### getFontNames

```lua
sc.fontmanager.getFontNames()
```

Gets all fonts the font manager has access to

**Returns:**
- [ **string[]** ] Every font name the font manager has access to.

---

### getDefaultFontName

```lua
sc.fontmanager.getDefaultFontName()
```

Gets the default font that the font manager uses. This is hard coded so you will require to hook this if you want to modify it.

**Returns:**
- [ **string** ] The default font name used.

---

### getDefaultFont

```lua
sc.fontmanager.getDefaultFont()
```

Like [getDefaultFontName](#getdefaultfontname) but calls [getFont](#getfont) automaticly.

**Returns:**
- [ [**SCFont** ](#scfont) ] The default font used.
