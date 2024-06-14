---
title: "Drive"
description: "The drive component"
---

## Description

A drive allows you to store anything* inside it. You can also go interact with it to modify its data there without doing it via code.

## Functions

### load

```lua
Drive.load()
```

Receive data from the drive

**Returns:**
- [ **table** ] The contents of the drive

### save

```lua
Drive.save( data )
```

Saves data to the drive

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
You can only save data that JSON supports! You can only use the following types:
```json
// Indexes
[ "number", "string" ]

// Values
[ "table", "number", "string", "boolean", "nil" ]
```
{{< /callout >}}

**Arguments:**
- data [ **table** ] The new data
