---
title: "RadarCharacter"
description: "A character detected from a radar"
---

A character detected from a radar

---

## Structures

### States

#### Fields:
- `Aiming` [ **boolean** ] True if aiming
- `Climbing` [ **boolean** ] True if Climbing
- `Crouching` [ **boolean** ] True if Crouching
- `DefaultColor` [ **boolean** ] True if its a default color.
- `Diving` [ **boolean** ] True if its Diving
- `Downed` [ **boolean** ] True if Downed
- `OnGround` [ **boolean** ] True if its on the ground
- `Player` [ **boolean** ] True if its a player
- `Sprinting` [ **boolean** ] True if its sprinting
- `Swimming` [ **boolean** ] True if its swimming
- `Tumbling` [ **boolean** ] True if its nocked out or Tumbling.

---

## Fields

- `id` [ **interger** ] ID of the Character
- `nickname` [ **string** ] Player's name

---

## Functions

### getGender

```lua
RadarCharacter.getGender()
```

Returns Male if its a male, else Female

**Returns:**
- [ **"Male"|"Female"** ] The gender of the character

---

### getPosition

```lua
RadarCharacter.getPosition()
```

Gets the position of the character

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The position of the character

---

### getLookingDirection

```lua
RadarCharacter.getLookingDirection()
```

Gets the looking direction of the character

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Vec3/)** ] The looking direction of the character

---

### getMovementSpeed

```lua
RadarCharacter.getMovementSpeed()
```

Gets the current movement speed of the character.

**Returns:**
- [ **number** ] The speed that the character is moving

---

### getMovementNoiseRadius

```lua
RadarCharacter.getMovementNoiseRadius()
```

Gets the noise radius of the movement of the character

**Returns:**
- [ **number** ] The radius of the movement noise

---

### getColor

```lua
RadarCharacter.getColor()
```

Gets the color of the character

**Returns:**
- [ **[Color](https://scrapmechanicdocs.com/docs/Terrain-Script-Environment/Userdata/Color/)** ] The color of the character

---

### getState

```lua
RadarCharacter.getState()
```

Gets the states of the character

**Returns:**
- [ **[RadarCharacter.States](#states)** ] The states of the character
