---
title: "sc.json"
description: "The JSON Module (Computer API)"
---

## Description

The JSON Module for the computer API!

---

## Functions

### isSafe

```lua
sc.json.isSafe( root )
```

Returns true if a tlua table is safe to convert to JSON.

**Arguments:**
- root [ **table** ] The lua table to check

**Returns:**
- [ **boolean** ] If true, That means it's safe to convert. else not!

---

### toString

```lua
sc.json.toString( root, safeMode, prettify, indent )
```

Converts a lua table to a JSON string.

**Arguments:**
- root [ **table** ] The lua table to convert to a string
- safeMode [ **boolean** ] If true, It will check if the root is safe for JSON usage. If it isn't safe then it would error out.
- prettify [ **boolean** ] If true, The JSON string would be prettier. Use this when you want to display it.
- indent [ **string?** ] The indentation character. Defaults to "\t"

**Returns:**
- [ **string** ] The JSON string from a Lua table.

---

### toTable

```lua
sc.json.toTable( root, safeMode )
```

Converts a JSON string to a Lua table

**Arguments:**
- root [ **string** ] The JSON string to convert
- safeMode [ **boolean** ] If true, It will check if the root is safe for JSON usage. If it isn't safe then it would error out.

**Returns:**
- [ **table** ] The converted Lua table
