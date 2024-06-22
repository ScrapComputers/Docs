---
title: "BitStream"
description: "A Bitstream that is a stream of bits!"
---

A Bitstream that is a stream of bits! (What did you expect!)

---

## Fields

- `pos` [ **number** ] The position in the string itself (Bit by Bit!)
- `bytePos` [ **number** ] he position in the string itself (Byte by Byte!)
- `size` [ **number** ] The size of the stream.

---

## Functions

### dumpString

```lua
BitStream:dumpString()
```

Dumps the string

**Returns:**
 - [ **string** ] dumpedString The dumped string

---

### dumpBase64

```lua
BitStream:dumpBase64()
```

Dumps the string (as base64)

**Returns:**
 - [ **string** ] dumpedString The dumped string

---

### dumpHex

```lua
BitStream:dumpHex()
```

Dumps the string (as hex)

**Returns:**
 - [ **string** ] dumpedString The dumped string

---

### writeBit

```lua
BitStream:writeBit( bit )
```

Writes a bit

**Arguments:**
- bit [ **boolean|integer** ] The bit value to write

---

### readBit

```lua
BitStream:readBit()
```

Reads a bit

**Returns:**
 - [ **integer?** ] 0 or 1 for bit value. Nil if it overflows.

---

### writeByte

```lua
BitStream:writeByte( byte )
```

Writes a byte

**Arguments:**
- byte [ **integer** ] The byte to write (Integer because it must be as ASCII char)

---

### readByte

```lua
BitStream:readByte()
```

Reads a byte

**Returns:**
 - [ **string?** ] byte The byte it has read.

---

### writeInt8

```lua
BitStream:writeInt8( integer )
```

Writes a signed 8-bit integer.

**Arguments:**
- integer [ **integer** ] The integer to write

---

### readInt8

```lua
BitStream:readInt8()
```

Reads a signed 8-bit integer.

**Returns:**
 - [ **integer?** ] The signed 8-bit integer read.

---

### writeUInt8

```lua
BitStream:writeUInt8( uinteger )
```

Writes an unsigned 8-bit integer.

**Arguments:**
- uinteger [ **integer** ] The unsigned integer to write.

---

### readUInt8

```lua
BitStream:readUInt8()
```

Reads an unsigned 8-bit integer.

**Returns:**
 - [ **integer?** ] The unsigned 8-bit integer read.

---

### writeInt16

```lua
BitStream:writeInt16( integer )
```

Writes a signed 16-bit integer.

**Arguments:**
- integer [ **integer** ] The signed integer to write.

---

### readInt16

```lua
BitStream:readInt16()
```

Reads a signed 16-bit integer.

**Returns:**
 - [ **integer?** ] The signed 16-bit integer read.

---

### writeUInt16

```lua
BitStream:writeUInt16( uinteger )
```

Writes an unsigned 16-bit integer.

**Arguments:**
- uinteger [ **integer** ] The unsigned integer to write.

---

### readUInt16

```lua
BitStream:readUInt16()
```

Reads an unsigned 16-bit integer.

**Returns:**
 - [ **integer?** ] The unsigned 16-bit integer read.

---

### writeInt24

```lua
BitStream:writeInt24( integer )
```

Writes a signed 24-bit integer.

**Arguments:**
- integer [ **integer** ] The signed integer to write.

---

### readInt24

```lua
BitStream:readInt24()
```

Reads a signed 24-bit integer.

**Returns:**
 - [ **integer?** ] The signed 24-bit integer read.

---

### writeUInt24

```lua
BitStream:writeUInt24( uinteger )
```

Writes an unsigned 24-bit integer.

**Arguments:**
- uinteger [ **integer** ] The unsigned integer to write.

---

### readUInt24

```lua
BitStream:readUInt24()
```

Reads an unsigned 24-bit integer.

**Returns:**
 - [ **integer?** ] The unsigned 24-bit integer read.

---

### writeInt32

```lua
BitStream:writeInt32( integer )
```

Writes a signed 32-bit integer.

**Arguments:**
- integer [ **integer** ] The signed integer to write.

---

### readInt32

```lua
BitStream:readInt32()
```

Reads a signed 32-bit integer.

**Returns:**
 - [ **integer?** ] The signed 32-bit integer read.

---

### writeUInt32

```lua
BitStream:writeUInt32( uinteger )
```

Writes an unsigned 32-bit integer.

**Arguments:**
- uinteger [ **integer** ] The unsigned integer to write.

---

### readUInt32

```lua
BitStream:readUInt32()
```

Reads an unsigned 32-bit integer.

**Returns:**
 - [ **integer?** ] The unsigned 32-bit integer read.

---

### writeString

```lua
BitStream:writeString( str )
```

Writes a string.

**Arguments:**
- str [ **string** ] The string to write.

---

### readString

```lua
BitStream:readString()
```

Reads a string.

**Returns:**
 - [ **string?** ] The string read.
