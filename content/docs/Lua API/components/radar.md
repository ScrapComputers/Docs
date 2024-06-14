---
title: "Radar"
description: "The radar component"
---

## Description

The radar allows you to detect objects around you.

## Structure

### Target

A target is an object detected from the radar

#### Fields:
- `position` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position of the target
- `surfaceArea` [ **number** ] The total surface area that the radar can see

## Functions

### getTargets

```lua
Radar.getTargets()
```

Gets all the targets it has detected

**Returns:**
- [ **[Radar.Target](#target)[]**] All targets it has found

---

### setVerticalScanAngle

```lua
Radar.setVerticalScanAngle( angle )
```

Sets its vertical angle from 10 to 90.

**Arguments:**
- angle [ **number** ] The angle to set

---

### setHorizontalScanAngle

```lua
Radar.setHorizontalScanAngle( angle )
```

Sets its horizontal angle from 10 to 90.

**Arguments:**
- angle [ **number** ] The angle to set
