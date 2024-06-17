---
title: "sc"
description: "All functions inside the \"sc\" namespace."
---

## Description

All data inside the `sc` namespace!

## Functions

### getDisplays

```lua
sc.getDisplays()
```

Gets all connected displays from the computer

**Returns:**
- [ **[Display](/docs/lua-api/components/display/)[]** ] All connected displays from the computer

---

### getDrives

```lua
sc.getDrives()
```

Gets all connected drives from the computer

**Returns:**
- [ **[Drive](/docs/lua-api/components/drive/)[]** ] All connected drives from the computer

---

### getHolograms

```lua
sc.getHolograms()
```

Gets all connected holograms from the computer

**Returns:**
- [ **[Hologram](/docs/lua-api/components/hologram/)[]** ] All connected holograms from the computer

---

### getTerminals

```lua
sc.getTerminals()
```

Gets all connected terminals from the computer

**Returns:**
- [ **[Terminal](/docs/lua-api/components/terminal/)[]** ] All connected terminals from the computer

---

### getRadars

```lua
sc.getRadars()
```

Gets all connected radars from the computer

**Returns:**
- [ **[Radar](/docs/lua-api/components/radar/)[]** ] All connected radars from the computer

---

### getNetworkPorts

```lua
sc.getNetworkPorts()
```

Gets all connected network ports from the computer

**Returns:**
- [ **[NetworkPort](/docs/lua-api/components/networkport/)[]** ] All connected network ports from the computer

---

### getCameras

```lua
sc.getCameras()
```

Gets all connected cameras from the computer

**Returns:**
- [ **[Camera](/docs/lua-api/components/camera/)[]** ] All connected cameras from the computer

---

### getSpeakers

```lua
sc.getSpeakers()
```

Gets all connected speakers from the computer

**Returns:**
- [ **[Speaker](/docs/lua-api/components/speaker/)[]** ] All connected speakers from the computer

---

### getKeyboards

```lua
sc.getKeyboards()
```

Gets all connected keyboards from the computer


**Returns:**
- [ **[Keyboard](/docs/lua-api/components/keyboard/)[]** ] All connected keyboards from the computer

---

### getMotors

```lua
sc.getMotors()
```

Gets all connected motors from the computer

**Returns:**
- [ **[Motor](/docs/lua-api/components/motor/)[]** ] All connected motors from the computer

---

### getLasers

```lua
sc.getLasers()
```

Gets all connected lasers from the computer

**Returns:**
- [ **[Laser](/docs/lua-api/components/laser/)[]** ] All connected lasers from the computer

---

### getSeatControllers

```lua
sc.getSeatControllers()
```

Gets all connected SeatControllers from the computer

**Returns:**
- [ **[SeatController](/docs/lua-api/components/seatcontroller/)[]** ] All connected SeatControllers from the computer

---

### getReg

```lua
sc.getReg( registerName )
```

Gets a value of a register.

{{< callout context="note" icon="outline/info-circle" >}}
The name of the register should be from a **Input** Register
{{< /callout >}}

**Arguments:**
- registerName [ **string** ] The name of the register to read.

**Returns:**
- [ **number** ] The value it's receiving. (For things like logic gates: 0 is Off, 1 is On)

---

### setReg

```lua
sc.setReg( registerName, power )
```

Sets a value of a register.

{{< callout context="note" icon="outline/info-circle" >}}
The name of the register should be from a **Output** Register
{{< /callout >}}

**Arguments:**
- registerName [ **string** ] The name of the register to write.
- power [ **number** ] The value to set it to. (This is power!)
