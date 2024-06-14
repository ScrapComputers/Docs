---
title: "sc"
description: "All functions inside the \"sc\" namespace."
---

## Description

All data inside the `sc` namespace!

## Functions

### getDisplays

Gets all connected displays from the computer

```lua
sc.getDisplays()
```

**Returns:**
- [ **DisplayComponent[]** ] All connected displays from the computer

---

### getDrives

Gets all connected drives from the computer

```lua
sc.getDrives()
```

**Returns:**
- [ **DriveComponent[]** ] All connected drives from the computer

---

### getHolograms

Gets all connected holograms from the computer

```lua
sc.getHolograms()
```

**Returns:**
- [ **HologramComponent[]** ] All connected holograms from the computer

---

### getTerminals

Gets all connected terminals from the computer

```lua
sc.getTerminals()
```

**Returns:**
- [ **TerminalComponent[]** ] All connected terminals from the computer

---

### getRadars

Gets all connected radars from the computer

```lua
sc.getRadars()
```

**Returns:**
- [ **RadarComponent[]** ] All connected radars from the computer

---

### getNetworkPorts

Gets all connected network ports from the computer

```lua
sc.getNetworkPorts()
```

**Returns:**
- [ **NetworkPortComponent[]** ] All connected network ports from the computer

---

### getCameras

Gets all connected cameras from the computer

```lua
sc.getCameras()
```

**Returns:**
- [ **CameraComponent[]** ] All connected cameras from the computer

---

### getSpeakers

Gets all connected speakers from the computer

```lua
sc.getSpeakers()
```

**Returns:**
- [ **SpeakerComponent[]** ] All connected speakers from the computer

---

### getKeyboards

Gets all connected keyboards from the computer

```lua
sc.getKeyboards()
```

**Returns:**
- [ **KeyboardComponent[]** ] All connected keyboards from the computer


---

### getMotors

Gets all connected motors from the computer

```lua
sc.getMotors()
```

**Returns:**
- [ **MotorComponent[]** ] All connected motors from the computer

---

### getLasers

Gets all connected lasers from the computer

```lua
sc.getLasers()
```

**Returns:**
- [ **LaserComponent[]** ] All connected lasers from the computer

---

### getReg

Gets a value of a register.

{{< callout context="note" icon="outline/info-circle" >}}
The name of the register should be from a **Input** Register
{{< /callout >}}

```lua
sc.getReg( registerName )
```

**Arguments:**
- registerName [ **string** ] The name of the register to read.

**Returns:**
- [ **number** ] The value it's receiving. (For things like logic gates: 0 is Off, 1 is On)


### setReg

Sets a value of a register.

{{< callout context="note" icon="outline/info-circle" >}}
The name of the register should be from a **Output** Register
{{< /callout >}}

```lua
sc.setReg( registerName, power )
```

**Arguments:**
- registerName [ **string** ] The name of the register to read.
- power [ **number** ] The value to set it to. (This is power!)
