---
title: "Radar"
description: "The radar component"
---

## Description

The radar allows you to detect objects around itself.

## Structures

### Result

Detected object's result from a scan

#### Fields:
- `1` [ **string** ] The type of object it has detected
- `2` [ **[RadarCharacter](/docs/lua-api/user-data/radarcharacter/)|[RadarBody](/docs/lua-api/user-data/radarbody/)|[RadarLift](/docs/lua-api/user-data/radarlift/)|[RadarHarvestable](/docs/lua-api/user-data/radarharvestable/)** ] The object's data

## Functions

### getRange

```lua
Radar.getRange()
```

Returns the range that it can detect

**Returns:**
- [ **number** ] The range of the radar

---

### setRange

```lua
Radar.setRange( radius )
```

Sets the range

**Arguments:**
- radius [ **number** ] The new radius

---

### getObjects

```lua
Radar.getObjects()
```

Get the objects inside range

**Returns:**
- [ **[Radar.Result](#result)** ] All objects it has detected
