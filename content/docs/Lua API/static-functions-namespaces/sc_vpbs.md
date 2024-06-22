---
title: "sc.vpbs"
description: "The VPBS Module (Computer API)"
---

## Description

VPBS allows you to convert a lua table to a packet buffer. Use this if you do NOT wanna deal with BitStreams and want to do every packet as a string.

## Functions

### tostring

```lua
sc.VPBS.tostring( data )
```

Converts a table to a VPBS string

**Arguments:**
- tbl [ **table** ] The table to convert

**Returns:**
- [ **string** ] vpbsStr The converted string.

---

### totable

```lua
sc.VPBS.totable( data )
```

Converts a VPBS string to a table

**Arguments:**
- data [ **string** ] The VPBS string.

**Returns:**
- [ **table** ] The table from the string

---

## isVPBSstring

```lua
sc.VPBS.isVPBSstring( data )
```

Returns true if the string is a VPBS-formatted string

**Arguments:**
- data [ **string** ] The data to check

**Returns:**
- [ **boolean** ] True if it's a VPBS string, else not.
