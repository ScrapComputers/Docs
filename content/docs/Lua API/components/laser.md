---
title: "Laser"
description: "The laser component"
---

The Laser is like a normal scrap mechanic sensor but instead of ON or OFF, It provides more information which could be useful for things like [Robot kinematics](https://en.wikipedia.org/wiki/Robot_kinematics) (More like **Sensor-Enhanced Kinematics**)

Advanced users: This uses a ray cast for object detection, But this also means that there is an offset between the raycast's starting point and the object itself. it's small but this could cause issues with your math!

## Structures

---

### LaserData

This structure contains data that the laser has received

#### Fields
- `directionWorld` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The direction vector of the ray cast
- `fraction` [ **number** ] The fraction (0-1) of the distance reached until collision divided by the ray's length
- `normalLocal` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The normal vector of the surface that was hit, relative to the target's rotation.
- `normalWorld` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The normal vector of the hit surface
- `originWorld` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The starting world position of the raycast.
- `pointLocal` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The world position of the point that was hit, relative to the target's position.
- `pointWorld` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The world position of the point that was hit.
- `type` [ **string** ] The physics type of the target that was hit. (See [sm.physics.types](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Constants#smphysicsfilter))
- `valid` [ **boolean** ] Is true if the ray cast was even valid.

---

## Functions

### setDistance

```lua
Laser.setDistance( distance )
```

Sets the distance (In Meters!)

**Arguments:**
- distance [ **number** ] The new distance

---

### getLaserData

```lua
Laser.getLaserData()
```

Gets the data of the laser (Will send a ray cast!)

**Returns:**
- [ **boolean** ] Is True if it hit something.
- [ **[LaserData](#laserdata)** ] The laser data
