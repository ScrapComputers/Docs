---
title: "SeatController"
description: "The SeatController component"
---

## Description

This allows you to control seats! Read its WASD data, press some buttons, and cause a war crime against humanity by using seats for networking! (Please don't)

## Structures

### SeatData

Contains data on the seat.

#### Fields
- `wsPower` [ **1|0|-1** ] The power for WS. 1 = Forwards, 0 = None, -1 = Backwards
- `adPower` [ **1|0|-1** ] The power for AD. 1 = Left, 0 = None, -1 = Right
- `characterName` [ **string?** ] The character's name that is sitting.

### JointData

Contains data of a joint.

#### Fields
- `leftSpeed` [ **number** ] The left angle speed.
- `rightSpeed` [ **number** ] The right angle speed.
- `leftLimit` [ **number** ] The left angle limit.
- `rightLimit` [ **number** ] The right angle limit.
- `bearingLock` [ **boolean** ] Whether the joint is unlocked or not.

## Functions

### getSeatData

```lua
SeatController.getSeatData()
```

Gets data from the connected seat

**Returns:**
- [ **[SeatController.SeatData](#seatdata)** ] The data of the seat

---

### getJointData

```lua
SeatController.getJointData()
```

Gets data from connected joints from the seat

**Returns:**
- [ **[SeatController.JointData](#jointdata)[]** ] The data of multiple joints

---

### pressButton

```lua
SeatController.pressButton( index )
```

Presses a button connected to the seat

**Arguments:**
- index [ **number** ] The button to press (0 to 9)

---

### releaseButton

```lua
SeatController.releaseButton( index )
```

Releases a button connected to the seat

**Arguments:**
- index [ **number** ] The button to release (0 to 9)

---

### setADPower

<s>

```lua
SeatController.setADPower( power )
```

Sets the power for AD movement

**Arguments:**
- power [ **1|0|-1** ] The power for AD to set. 1 = Left, 0 = None, -1 = Right

</s>

{{< callout context="caution" title="Unusable at the time!" icon="outline/alert-triangle" >}}
This function is planned to be implemented however SM sucks! At the time we think that it's because 2 scripts are slaughtering them together. 1 wants to make a variable like this and others like this. It's like Battle Royal but with Lua and it's handled like actual dog poop!

When it was implemented, after 1 commit. The next commit was named: `Removed WS and AD power set because sm is dumb`. We hate this!
{{< /callout >}}

---

### setWSPower

<s>

```lua
SeatController.setWSPower( power )
```

Sets the power for WS movement

**Arguments:**
- power [ **1|0|-1** ] The power for WS. 1 = Forwards, 0 = None, -1 = Backwards

</s>

{{< callout context="caution" title="Unusable at the time!" icon="outline/alert-triangle" >}}
This function is planned to be implemented however SM sucks! At the time we think that it's because 2 scripts are slaughtering them together. 1 wants to make a variable like this and others like this. It's like Battle Royal but with Lua and it's handled like actual dog poop!

When it was implemented, after 1 commit. The next commit was named: `Removed WS and AD power set because sm is dumb`. We hate this!
{{< /callout >}}
