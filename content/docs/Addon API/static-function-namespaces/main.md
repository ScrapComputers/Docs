---
title: "sm.scrapcomputers"
description: "Functions and variables inside the \"sm.scrapcomputers\" namespace."
---

All data inside the `sm.scrapcomputers` namespace!

---

## Fields

`privateDataPrefix` [ **string** ] The prefix used for components for interfacing together without being public to the computer API.

---

## Tables

### layoutFiles

This table contains all layout files from $CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout. You could also just write the names independently.

```lua
sm.scrapcomputers.layoutFiles = {
    Computer = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Computer.layout",
    Terminal = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Terminal.layout",
    Register = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Register.layout",
    Configurator = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Configurator.layout",
    Harddrive = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Harddrive.layout",
    Keyboard = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Keyboard.layout",
    Banned = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/Gui/Layout/Banned.layout",
}
```

---

### jsonFiles

Contains JSON files that are used in ScrapComputers.

```lua
sm.scrapcomputers.jsonFiles = {
    ExamplesList = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/examples.json",
    HarddriveExamples = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/hdd_examples.json",
    AudioList = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/audio.json",
    BuiltInFonts = "$CONTENT_3660881a-a6b8-40e5-a348-27b368a742e9/JSON/fonts.json"
}
```

---

### dataList

Contains all functions, data (or whatever). Eg: Displays is a list of all displays in ScrapComputers.

```lua
sm.scrapcomputers.dataList = {
 ["Displays"] = {},
 ["Harddrives"] = {},
 ["Holograms"] = {},
 ["Terminals"] = {},
 ["Radars"] = {},
 ["Readers"] = {},
 ["Writers"] = {},
 ["WriterInters"] = {},
 ["NetworkPorts"] = {},
 ["Antennas"] = {},
 ["Cameras"] = {},
 ["Speakers"] = {},
 ["Keyboards"] = {},
 ["Motors"] = {},
 ["Lasers"] = {},
 ["GPSs"] = {},
 ["SeatControllers"] = {},
}
```

---

## Enums

### filters.dataType

The Data types for sm.scrapcomputers.dataList. Great for filtering components.

```lua
sm.scrapcomputers.filters.dataType = {
    Displays = "Displays",
    Harddrives = "Harddrives",
    Holograms = "Holograms",
    Terminals = "Terminals",
    Radars = "Radars",
    Readers = "Readers",
    Writers = "Writers",
    NetworkPorts = "NetworkPorts",
    Antennas = "Antennas",
    Cameras = "Cameras",
    Speakers = "Speakers",
    Keyboards = "Keyboards",
    Motors = "Motors",
    Lasers = "Lasers",
    GPSs = "GPSs",
    SeatControllers = "SeatControllers",
}
```

---

## Functions

### toSring

```lua
sm.scrapcomputers.toString( value )
```

Additional features that the normal `tostring` function doesn't have

**Arguments:**
- value [ **any** ] The value to convert to a string

**Returns:**
- [ **string** ] The value as a string
