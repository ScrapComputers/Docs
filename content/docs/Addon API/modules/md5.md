---
title: "Md5"
description: "The MD5 Module (Computer API)"
---

An encryption module for MD5 only! (Even tho it's no longer recommended to use this for encryption! )

---

## Functions

### new

```lua
sm.scrapcomputers.md5.new()
```

Creates a new MD5 Stream

**Returns:**
- [ **[MD5Stream](/docs/addon-api/user-data/md5stream/)** ] The new MD5 stream

---

### sum

```lua
sm.scrapcomputers.md5.sum( str )
```

Converts a string to a MD5 string **(NOTE: Pure raw bytes!)**

**Arguments:**
- str [ **string** ] The string to convert

**Returns:**
- [ **string** ] The string in a MD5 string in raw bytes format

---

### sumhexa

```lua
sm.scrapcomputers.md5.sumhexa( str )
```

Converts a string to an MD5-encrypted string

**Arguments:**
- str [ **string** ] The string to convert

**Returns:**
- [ **string** ] The MD5-Encrypted string

---

### tohex

```lua
sm.scrapcomputers.md5.tohex( str )
```

Converts an MD5 Raw bytes string to a Proper MD5 string that is readable

**Arguments:**
- str [ **string** ] The string to convert

**Returns:**
- [ **string** ] The MD5-Encrypted string
