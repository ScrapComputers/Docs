---
title: "EnviromentManager"
description: "Allows you to create AND modify enviroments!"
---

Allows you to get the Computer's API env and modify it!

---

## Fields

### envHooks

**This is a table!**

This is where your addon can add "hooks" to the env. If you want to modify the env. You create a function that would have 1 parameter which is `self`. The `self` parameter would be generally the Computer's self. You will need that incase you want to add like `sc.getFunnyComponents` where the component manager requires the interactable!

You can overwrite functions aswel!

If you have to make envHooks. You **MUST** put this in a `Autotool`! (For people who dont know that, Basicly a tool that gets automaticly loaded via the `autoTool` parameter in the JSON file where your tools are defined.)

Example Code:

```lua {title="myAutoTool.lua" lineNos=true lineNoStart=52 hl_lines=["3-9", 12]}
-- This would be the function to hook the env!
---@param self ShapeClass
function EnvHook(self)
    return {
        sc = {
            getTest = function () return sm.scrapcomputers.components.getComponents("ComponentTest", self.interactable, true) end
        }
    }
end

-- To make the function actually work. Add the function itself to the envHooks table!
table.insert(sm.scrapcomputers.envManager.envHooks, EnvHook)
```

Where you place it does NOT matter!

## Functions

### createEnv

```lua
sm.scrapcomputers.envManager.createEnv( self )
```

Creates a fresh Enviroment-Variables list

**Arguments:**
- self [ **[ShapeClass](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/ShapeClass)** ] The self parameter of the class.

**Returns:**
- [ **[ComputerAPI](/docs/lua-api/)** ] The enviroment variables!
