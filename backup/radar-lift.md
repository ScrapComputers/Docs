---
title: "RadarLift"
description: "A lift detected from the radar"
---

A lift detected from the radar

## Fields
- `id` [ **interger** ] ID of the Lift

## Functions

### getLevel

```lua
RadarLift.getLevel()
```

Gets the level of the lift

**Returns:**
- [ **interger** ] The level of the lift

---

### getPosition

```lua
RadarLift.getPosition()
```

Gets the position of the lift

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The position of the lift

---

### hasBodies

```lua
RadarLift.hasBodies()
```

Returns true if it has any bodies attached.

**Returns:**
- [ **boolean** ] True if it has any bodies attached
