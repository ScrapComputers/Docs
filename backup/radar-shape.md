---
title: "RadarShape"
description: "A shape detected from a radar"
---

A shape detected from a radar.

---

## Structures

### States

Current state of a shape

#### Fields:

- `Buildable` [ **boolean** ] True if buildable
- `Connectable` [ **boolean** ] True if connectable
- `ConvertibleToDynamic` [ **boolean** ] True if convertable to Dyamic
- `Destructable` [ **boolean** ] True if destructable
- `Erasable` [ **boolean** ] True if Erasable
- `Liftable` [ **boolean** ] True if Liftable
- `Paintable` [ **boolean** ] True if Paintable
- `Usable` [ **boolean** ] True if Usable

---

## Fields

- `id` [ **interger** ] ID of the Shape
- `uuid` [ **[Uuid](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Uuid/)** ] The Shape's UUID

## Functions

### getMaterial

```lua
RadarShape.getMaterial()
```

Gets the Shape's Material

**Returns:**
- [ **string** ] The material of the shape

---

### getMaterialId

```lua
RadarShape.getMaterialId()
```

Gets the Shape's Material ID

**Returns:**
- [ **interger** ] The material ID of the shape

---

### getBounds

```lua
RadarShape.getBounds()
```

Gets the bounding box of that shape

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The bounds of the shape

---

### getColor

```lua
RadarShape.getColor()
```

Gets the color of the shape

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)** ] The color of the shape

---

### getMass

```lua
RadarShape.getMass()
```

Gets the mass of the shape

**Returns:**
- [ **number** ] The mass of the shape

---

### getLocalPosition

```lua
RadarShape.getLocalPosition()
```

Gets the local position of the shape

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The local position of the shape

---

### getLocalRotation

```lua
RadarShape.getLocalRotation()
```

Gets the local rotation of the shape
- [ **[Quat](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Quat/)** ] The local rotation of the shape

---

### getWorldPosition

```lua
RadarShape.getWorldPosition()
```

Gets the world position of the shape

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3/)** ] The world position of the shape

---

### getWorldRotation

```lua
RadarShape.getWorldRotation()
```

Gets the world rotation of the shape

**Returns:**
- [ **[Quat](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Quat/)** ] The world rotation of the shape

---

### getUvFrameIndex

```lua
RadarShape.getUvFrameIndex()
```

Gets the current UV index of the shape

**Returns:**
- [ **integer** ] The UV index of the shape

---

### getState

```lua
RadarShape.getState()
```

Gets the states of the shape

**Returns:**
- [ **[RadarShape.States](#states)** ] The states of the shape
