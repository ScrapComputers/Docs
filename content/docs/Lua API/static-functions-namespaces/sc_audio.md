---
title: "sc.audio"
description: "The Audio Module (Computer API)"
---

The Audio Module for the computer API!

---

## Structures

### AudioParameter

Results for [getParams](#getparams)

#### Fields:
- `default` [ **number** ] The default value
- `maximum` [ **number** ] The maximum value
- `minimum` [ **number** ] The minimum value

---

### ParamsIncorrectTable

Result for [areParamsCorrect](#areparamscorrect).

All issues that the provided parameters have.

#### Fields:
- `hasNoParamsUsableIssue` [ **boolean** ] If true. that means there are no usable parameters for this audio
- `issues` [ **string[][]** ] A matrix of issues. The 1st array is the parameter's name and the 2nd array is the issues it has for that parameter.

{{< callout context="note" title="How to check if there are NO issues" icon="outline/info-circle" >}}
If the issue is empty and hasNoParamsUsableIssue is false. Then there are NO issues!

You can check by doing this
```lua {lineNos=true}
if not issues.hasNoParamsUsableIssue and sc.table.getTotalItemsDict(issues.issues) == 0 then
    -- There are NO issues

    print("No issues found")
else
    -- There is an issue

    print("A issue('s) has been noticed")
end
```
{{< /callout >}}

---

## Functions

### areParamsCorrect

```lua
sc.audio.areParamsCorrect( name, params )
```

Returns information about audio parameters in case they have any issues.

**Arguments:**
- name [ **string** ] The name of the audio to check
- params [ **[AudioParameter[]](#audioparameter)** ] The name of the audio to check

**Returns:**
- [ **[ParamsIncorrectTable](#paramsincorrecttable)** ] All issues with those parameters.

---

### exists

```lua
sc.audio.exists( name )
```

Returns true if the audio name exists in Scrap Mechanic.

**Arguments:**
- name [ **string** ] The name of the audio to check

**Returns:**
- [ **boolean** ] If true, the audio exists in the game. Else it doesn't!

---

### getAudioNames

```lua
sc.audio.getAudioNames()
```

Gets every audio in existence in Scrap Mechanic and puts them all in a **string[]** you can access

**Returns:**
- [ **string[]** ] Every singular audio in existence

---

### getParams

```lua
sc.audio.getParams( name )
```

Gets all usable parameters for that audio.

**Arguments:**
- name [ **string** ] The name of the audio to get its parameters from

**Returns:**
- [ **[AudioParameter[]](#audioparameter)** ] All usable parameters for that audio.
