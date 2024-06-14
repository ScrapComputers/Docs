---
title: "sc.util"
description: "The utility Module (Computer API)"
---

## Description

The utility Module for the computer API!

## Functions

### positiveModulo

```lua
sc.util.positiveModulo( a, b )
```

Gets the remainder of the division.

{{< callout context="tip" title="Did you know? (Rant warning!)" icon="outline/rocket" >}}
This is useless and I don't know why you need this. sm.util.positiveModule redirects this function anyway!

Infact sc.util.positiveModulo IS the same as sm.util.positiveModulo. Basicly 1:1!

It's not like we reimplemented it. We only have that function so you can't crash the game! Thanks, SM Devs for not adding **1 ERROR CHECK FOR DIVISION BY ZERO ERROR**

Go ahead and take a look at our code for crash prevention:

```lua
---Gets the remainder of division. This function is more safer than sm.util.postiveModule as for some reason, Scrap Mechanic
---dosent handle division by 0 for sm.util.postiveModule so it crashes.
---@param a number The number to divide
---@param b number The amount to divide
---@return number remainder The remains that it is impossible to divide
sc.util.postiveModulo = function (a, b)
    if b == 0 then
        error("Cannot Divide by 0!")
    else
        return sm.util.positiveModulo(a, b)
    end
end
```

This is the actual code we have to use so you can't crash the game. If you don't think you can crash the game, Enable unsafe mode write this into the computer, and run it

```lua
sm.util.positiveModulo(0, 0) -- The first parameter can be any number
```

And when you run it. Scrap Mechanic will explode itself because it has received a "Division By Zero" error which wasn't handled and so you get a bug splat!

**SO SCREW YOU SCRAP MECHANIC DEVELOPERS FOR NOT BEING ABLE TO DO 1 ERROR HANDLING CHECK WHICH COULD ONLY TAKE A COUPLE OF SECONDS!**
{{< /callout >}}

**Arguments:**
- a [ **number** ] The number to divide and get its remainder
- b [ **number** ] The division by number

**Returns:**
- [ **number** ] The remainder of a divided number.
