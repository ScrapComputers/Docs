---
title: "Network Port"
description: "The network port component"
---

The network port allows you to send data to other network ports.

{{< callout context="note" title="Lag Issue" icon="outline/info-circle" >}}
We've discovered a lag problem with the network system for this. We use a table to store **received packets** which is all and good until you realize that you can send **MASSIVE** (and I mean like 1/2's of a million) amounts of byte data on a packet. How Lua works in this game, A massive table means lag when removing it.

This is our current theory at the time but at the moment. **Try not to send too much data!**
{{< /callout >}}

---

## Functions

### getAntenna

```lua
NetworkPort.getAntenna()
```

Gets the connected antenna

**Returns:**
- [ **[AntennaComponent](/docs/lua-api/components/antenna/)**?] The antenna if it is connected, else nil

---

### hasConnection

```lua
NetworkPort.hasConnection()
```

Returns true if there's a connection.

**Returns:**
- [ **boolean** ] True if it has a connection.

---

### sendPacket

```lua
NetworkPort.sendPacket( data )
```

Sends a packet to an Antenna or Network Port

**Arguments:**
- data [ **any** ] The contents of the packet. Doesn't matter what the data is. can be a number or even a function!

---

### sendPacketToAntenna

```lua
NetworkPort.sendPacketToAntenna( name, data )
```

Sends a packet to a specified antenna. (Antenna needs to be connected!)

**Arguments:**
- name [ **string** ] The antenna name.
- data [ **any** ] The contents of the packet. Doesn't matter what the data is. can be a number or even a function!

---

### getTotalPackets

```lua
NetworkPort.getTotalPackets()
```

Gets the total packets.

**Returns:**
- [ **integer** ] The total packets it has to read through.

---

### receivePacket

```lua
NetworkPort.receivePacket()
```

Reads a packet

{{< callout context="note" title="Check if there are any packets first!" icon="outline/info-circle" >}}
Please check if there are any packets! If there are none and you execute this, It will error!
{{< /callout >}}

**Returns:**
- [ **any** ] The content of the packet

---

### clearPackets

```lua
NetworkPort.clearPackets()
```

Clears the packets that it has to read through.
