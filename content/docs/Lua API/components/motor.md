---
title: "Motor"
description: "The motor component"
---

The motor allows you to control what the bearings and pistons should do.

---

## Functions

### setBearingSpeed

```lua
Motor.setBearingSpeed( speed )
```

Sets the bearing(s) speed

**Arguments:**
- speed [ **number** ] The speed to set to bearing(s)

---

### setBearingAngle

```lua
Motor.setBearingSpeed( angle )
```

Sets the bearing(s) angle. Set it to nil to turn into an engine, or else (a number) to a controller.

**Arguments:**
- angle [ **number?** ] The angle to set to bearing(s)

---

### setPistonSpeed

```lua
Motor.setPistonSpeed( speed )
```

Sets the piston(s) speed

**Arguments:**
- speed [ **number** ] The speed to set to piston(s)

---

### setTorque

```lua
Motor.setTorque( torque )
```

Sets the bearing(s) torque

**Arguments:**
- torque [ **number** ] The torque to set to bearing(s)

---

### setLength

```lua
Motor.setLength( length )
```

Sets the piston(s) length

**Arguments:**
- length [ **number** ] The length to set to piston(s)

---

### setForce

```lua
Motor.setForce( force )
```

Sets the piston(s) force

**Arguments:**
- force [ **number** ] The force to set
