---
title: "RadarBody"
description: "A body detected from a radar"
---

## Description

A body detected from a radar

---

## Structures

### States

Current states of a body

- `Buildable` [ **boolean** ] True if its buildable
- `Connectable` [ **boolean** ] True if its Connectable
- `ConvertibleToDynamic` [ **boolean** ] True if its Convertible To Dynamic
- `Destructable` [ **boolean** ] True if its Destructable
- `Dynamic` [ **boolean** ] True if its Dyamic
- `Erasable` [ **boolean** ] True if its Erasable
- `Liftable` [ **boolean** ] True if its Liftable
- `OnLift` [ **boolean** ] True if its on a lift
- `Paintable` [ **boolean** ] True if its Paintable
- `Static` [ **boolean** ] True if its Static
- `Usable` [ **boolean** ] True if its Usable

---

## Fields

- `id` [ **interger** ] ID of the Body
- `creationId` [ **interger** ] Creation ID of the Body
- `mass` [ **number** ] Mass of the Body

---

## Functions

### getPosition

```lua
RadarBody.getPosition()
```

Gets the position of the body

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The position of the body

---

### getRotation

```lua
RadarBody.getRotation()
```

Gets the rotation of the body

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The rotation of the body

---

### getCOMPosition

```lua
RadarBody.getCOMPosition()
```

Gets the Center of mass position of the body

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The Centor of mass of the body

---

### getLinearVelocity

```lua
RadarBody.getLinearVelocity()
```

Gets its Linear velocity

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ]  The Linear Velocity of the body

---

### getAngularVelocity

```lua
RadarBody.getAngularVelocity()
```

Gets its Angular velocity

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ]The Angular Velocity of the body

---

### getAABB

```lua
RadarBody.getAABB()
```

Gets the AABB of the body.

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The 1st part of the AABB of the body
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The 2nd part of the AABB of the body

---

### getShapes

```lua
RadarBody.getShapes()
```

Gets all shapes from the body

**Returns:**
- [ **[RadarShape](/docs/lua-api/user-data/radarshape/)[]** ] All shapes from the body

---

### getCreationShapes

```lua
RadarBody.getCreationShapes()
```

Gets all shapes from the creation

**Returns:**
- [ **[RadarBody](/docs/lua-api/user-data/radarbody/)[]** ] All shapes from the creation

---

### getCreationBodies

```lua
RadarBody.getCreationBodies()
```

Gets all bodies from the creation

**Returns:**
- [ **[RadarBody](/docs/lua-api/user-data/radarbody/)[]** ] All creation bodies from the creation.

---

### getState

```lua
RadarBody.getState()
```

Gets the states of the body

**Returns:**
- [ **[RadarBody.States](#states)** ] bodyStates The states of the body
