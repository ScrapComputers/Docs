---
title: "HologramObject"
description: "An object generated from a hologram"
---

A HologramObject is an object from a hologram. AKA: An object that you're rendering on the hologram.

---

## Functions

### getId

```lua
HologramObject.getId()
```

Gets the ID of the object

**Returns:**
- [ **integer** ] The ID of the object

---

### getUUID

```lua
HologramObject.getUUID()
```

Gets the UUID of the object

**Returns:**
- [ **Uuid** ] The UUID of the object

---

### getPosition

```lua
HologramObject.getPosition()
```

Gets the position of the object

**Returns:**
- [ **Vec3** ] The Position of the object

---

### getRotation

```lua
HologramObject.getRotation()
```

Gets the Rotation of the object

**Returns:**
- [ **Quat** ] The Rotation of the object

---

### getScale

```lua
HologramObject.getScale()
```

Gets the Scale of the object

**Returns:**
- [ **Vec3** ] The Scale of the object

---

### getColor

```lua
HologramObject.getColor()
```

Gets the Color of the object

**Returns:**
- [ **Color** ] color The Color of the object

---

### setUUID

```lua
HologramObject.setUUID( value )
```

Sets the object's UUID to be the argument.

**Arguments:**
- value [ **string|Uuid** ] The new UUID

---

### setPosition

```lua
HologramObject.setPosition( value )
```

Sets the object's Position to be the argument.

**Arguments:**
- value [ **Vec3** ] The New Position

---

### setRotation

```lua
HologramObject.setRotation( value )
```

Sets the object's Rotation to be the argument.

**Arguments:**
- value [ **Quat** ] The New Rotation

---
### setScale

```lua
HologramObject.setScale( value )
```

Sets the object's Scale to be the argument.

**Arguments:**
- value [ **Vec3** ] The New Scale

---

### setColor

```lua
HologramObject.setColor( value )
```

Sets the object's Color to be the argument.

**Arguments:**
- value [ **Color** ] The New Color

---

### delete

```lua
HologramObject.delete()
```

Deletes the object

---

### isDeleted

```lua
HologramObject.isDeleted()
```

Returns true if the object has been deleted

**Returns:**
- [ **boolean** ] If true, the object is deleted and else it's false and it's NOT deleted.
