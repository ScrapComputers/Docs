---
title: "MD5Stream"
description: "A stream for MD5 Encrpyiption"
---

This is an MD5 Stream, Allows you to add additional data.

---

## Fields

- `a` [ **number** ] Unknown. The default Value is ` 0x67452301 ` (Number form: ` 1732584193 `)
- `b` [ **number** ] Unknown. The default value is ` 0xefcdab89 ` (Number form: ` 4023233417 `)
- `c` [ **number** ] Unknown. The default value is ` 0x98badcfe ` (Number form: ` 2562383102 `)
- `d` [ **number** ] Unknown. The default value is ` 0x10325476 ` (Number form: ` 271733878 `)
- `pos` [ **number** ] The current position
- `buf` [ **string** ] The buffer data

---

## Functions

### update

```lua
MD5Stream.update( data )
```

Adds additional data to the stream

**Arguments:**
- data [ **string** ] The data to add.

---

### finish

```lua
MD5Stream.finish()
```

Finishes a buffer and returns its output data

**Returns:**
- [ **string** ] The stream's data.
