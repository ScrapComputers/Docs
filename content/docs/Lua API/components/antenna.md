---
title: "Antenna"
description: "The antenna component"
---

## Description

The antenna component is connected to a network port. If connected, You would be able to send data to other antenna's wireless!

---

## Functions

### getName

```lua
Antenna.getName()
```

Gets the name of the antenna

**Returns:**
- [ **string** ] The name of the antenna


---

### setName

```lua
Antenna.setName( name )
```

Sets the name of the antenna

- name [ **string** ] The new name of the antenna

---

### hasConnection

```lua
Antenna.hasConnection()
```

Returns true if there's a connection with another antenna.

**Returns:**
- [ **boolean** ] True if it has a connection

---

### scanAntennas

```lua
Antenna.scanAntennas()
```

Gets all the antenna's of the entire world

**Returns:**
- [ **string[]** ] All discovered antennas
