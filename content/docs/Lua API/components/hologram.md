---
title: "Hologram"
description: "The hologram component"
---

## Description

The hologram are like [Display's](../display/) but instead of being in [2D](https://en.wikipedia.org/wiki/2D_computer_graphics), Its in [3D](https://en.wikipedia.org/wiki/3D_computer_graphics). You can r

## Functions

### createCube

```lua
Hologram.createCube( position, rotation, scale, color )
```

Creates a cube object

**Arguments:**
- position [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position of the object
- rotation [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The rotation of the object
- scale [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The scale of the object
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string** ] The color of the object

**Returns:**
- [ **integer** ] The id of the object

---

### createSphere

```lua
Hologram.createSphere( position, rotation, scale, color )
```

Creates a sphere object

**Arguments:**
- position [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position of the object
- rotation [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The rotation of the object
- scale [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The scale of the object
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string** ] The color of the object

**Returns:**
- [ **integer** ] The id of the object

---

### createCustomObject

```lua
Hologram.createCustomObject( uuid, position, rotation, scale, color )
```

Like createCube or createSphere but u can pass any kind of object from whatever loaded mod! (Via UUID)
- uuid [ **[Uuid](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Uuid)** ] The uuid of the object
- position [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The position of the object
- rotation [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The rotation of the object
- scale [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The scale of the object
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string** ] The color of the object

**Returns:**
- [ **integer** ] The id of the object

---

### getObject

```lua
Hologram.getObject( index )
```
Gets the object via Object ID and returns a table containing the data of that object or nil since it doesn't exist.

**Arguments:**
- index [ **number** ] The object you wanna get its data.

**Returns:**
- [ **[HologramObject](/docs/lua-api/user-data/hologramobject/)?** ] Ether u get a table (so the object exists) or nil (so the object does NOT exist)
