---
title: "GPS"
description: "The gps component"
---

## Description

Allows you to get information on such things like velocity, rotation and etc

## Strucutres

### Data

Contains GPS data

- `worldPosition` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The world position
- `worldRotation` [ **[Quat](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Quat)** ] The world rotation
- `bearing` [ **number** ] The bearing rotation (Degrees!)
- `velocity` [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The velocity
- `speed` [ **number** ] The speed
- `forwardVelocity` [ **number** ] The forwards velocity
- `horizontalVelocity` [ **number** ] The horizontal velocity
- `verticalVelocity` [ **number** ] The vertical velocity
- `acceleration` [ **number** ] The acceleration
- `forwardAcceleration` [ **number** ] The forwards acceleration
- `horizontalAcceleration` [ **number** ] The horizontal acceleration
- `verticalAcceleration` [ **number** ] The vertical acceleration

## Functions

### getGPSData

```lua
GPS.getGPSData()
```

Gets GPS Data

**Returns:**
- [ **[GPS.Data](#data)** ] The GPS Data
