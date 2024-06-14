---
title: "RadarHarvestable"
description: "A harvestable detected from a radar"
---

## Description

A harvestable detected from a radar

---

## Fields

- `id` [ **interger** ] ID of the Harvestable
- `type` [ **string** ] Type of Harvestable
- `uuid` [ **[Uuid](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Uuid/)** ] The Shape's Harvestable

---

## Functions

### isKinematic

```lua
RadarHarvestable.isKinematic()
```

Returns true if its Kinematic

**Returns:**
- [ **boolean** ] True if Kinematic

---

### getMaterial

```lua
RadarHarvestable.getMaterial()
```

Get the material of the Harvestable

**Returns:**
- [ **string** ] The name of the material

---

### getMaterialId

```lua
RadarHarvestable.getMaterialId()
```

Get the material ID of the Harvestable

**Returns:**
- [ **interger** ] The ID of the material

---

### getAabb

```lua
RadarHarvestable.getAabb()
```

Get the Aabb of the Harvestable

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The Aabb of the harvestable.

---

### getColor

```lua
RadarHarvestable.getColor()
```

Gets the color of the Harvestable

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)** ] The color of the harvestable

---

### getMass

```lua
RadarHarvestable.getMass()
```

Gets the mass of the Harvestable

**Returns:**
- [ **number** ] The mass of the Harvestable

---

### getName

```lua
RadarHarvestable.getName()
```

Gets the name of the Harvestable

**Returns:**
- [ **string** ] The name of the Harvestable

---

### getPosition

```lua
RadarHarvestable.getPosition()
```

Gets the position of the harvestable

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The position of the harvestable

---

### getRotation

```lua
RadarHarvestable.getRotation()
```

Gets the rotation of the harvestable

**Returns:**
- [ **[Quat](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Quat/)** ] The rotation of the harvestable

---

### getScale

```lua
RadarHarvestable.getScale()
```

Gets the scale of the harvestable

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The scale of the harvestable

---

### getType

```lua
RadarHarvestable.getType()
```

Gets the type of the harvestable

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The type of harvestable

---

### getUvFrameIndex

```lua
RadarHarvestable.getUvFrameIndex()
```

Gets the UV index of the harvestable

**Returns:**
- [ **index** ] The index of the current UV.
