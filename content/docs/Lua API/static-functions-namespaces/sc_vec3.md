---
title: "sc.vec3"
description: "The Vector3 Module (Computer API)"
---

## Description

The Vector3 Module for the computer API!

## Functions

### add

```lua
sc.vec3.add( vec3, x, y, z )
```

Adds a vec3 by **X, Y and Z**

**Arguments:**
- vec3 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The vector3 to modify
- x [ **number** ] Vec3's x value to be added by
- y [ **number** ] Vec3's y value to be added by
- z [ **number** ] Vec3's z value to be added by

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The new vector3

---

### divide

```lua
sc.vec3.divide( vec3, x, y, z )
```

Divides a vec3 by **X, Y and Z**

**Arguments:**
- vec3 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The vector3 to modify
- x [ **number** ] Vec3's x value to be divided by
- y [ **number** ] Vec3's y value to be divided by
- z [ **number** ] Vec3's z value to be divided by

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The new vector3

---

### mulitply

```lua
sc.vec3.mulitply( vec3, x, y, z )
```

Multiplies a vec3 by **X, Y and Z**

**Arguments:**
- vec3 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The vector3 to modify
- x [ **number** ] Vec3's x value to be multiplied by
- y [ **number** ] Vec3's y value to be multiplied by
- z [ **number** ] Vec3's z value to be multiplied by

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The new vector3

---

### subtract

```lua
sc.vec3.subtract( vec3, x, y, z )
```

Subtracts a vec3 by **X, Y and Z**

**Arguments:**
- vec3 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The vector3 to modify
- x [ **number** ] Vec3's x value to be subtracted by
- y [ **number** ] Vec3's y value to be subtracted by
- z [ **number** ] Vec3's z value to be subtracted by

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The new vector3

---

### distance

```lua
sc.vec3.distance( vec1, vec2 )
```

Calculates the distance between 2 vectors

Formula: {{< math >}}$\sqrt{(x_2 - x_1) ^ 2 + (y_2 - y_1) ^ 2 + (z_2 - z_1) ^ 2}${{< /math >}}

**Arguments:**
- vec1 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The 1st vector3
- vec2 [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The 2nd vector3

**Returns:**
- [ **number** ] The distance between the 2 vectors

---

### newSingluar

```lua
sc.vec3.newSingluar( xyz )
```

Creates a vector3 by 1 number for xyz

**Arguments:**
- xyz [ **number** ] The value for the **X, Y and Z**

**Returns:**
- [ **[Vec3](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Vec3)** ] The new vector3
