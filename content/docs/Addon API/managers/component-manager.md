---
title: "ComponentManager"
description: "Manages components!"
---

This allows you to find connected components and create components!

---

## Functions

```lua
sm.scrapcomputers.components.ToComponent( classData, dataType, shouldBeComponent )
```

Converts a class to a component class!

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
If your going to use this function in a a script. **PLEASE** place it at the absolute bottom of a file and do NOT put it in any sort of function.

Do it like this

```lua {title="MyComponent.lua" lineNos=true lineNoStart=427 hl_lines=[3]}
...

sm.scrapcomputers.components.ToComponent( ComponentClass, "MyComponent", true )
-- Do not put any code afther it!
```


```lua {title="MyInteractable.lua" lineNos=true lineNoStart=278 hl_lines=[3]}
...

sm.scrapcomputers.components.ToComponent( InteractableClass, nil, false )
-- Do not put any code afther it!
```

{{< /callout >}}

{{< callout context="danger" title="Required on every interactable" icon="outline/alert-octagon" >}}
When you make a addon. Every interactable (so components and non-components) should have this function be called! This is due to ban-system
reasons.

If it is a component, set `shouldBeComponent` to true.
<br>
If it is **NOT** a component, set `shouldBeComponent` to false.

**If you DO NOT do this, We may or not ban your addon because of the interactables (or components) not being affected by the ban-system! (The ban level would be 3 or even 4!)**

{{< /callout >}}

**Arguments:**
- classData [ **[ShapeClass](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Classes/ShapeClass)** ] The class to use for the component
- dataType [ **string?** ] The type of component it is. This value would be ingored when `shouldBeComponent` is `true` so if its not a component. You can set to any value.
- shouldBeComponent [ **boolean** ] Set this to true if your planning it to be a actual component!

---

### getComponents

```lua
sm.scrapcomputers.components.getComponents( dataType, interactable, getViaChildren, flags, allowPrivateData )
```

Gets data from sm.scrapcomputers.dataList and filters them to whats connected or not. The boolean value on argument 3 is needed incase if u want to get the children or parents.

**Arguments:**
- dataType [ **[sm.scrapcomputers.filters.dataType](/docs/addon-api/static-function-namespaces/sm.scrapcomputers/#filtersdatatype)** ] The type of what object to choose. (example: `sm.scrapcomputers.dataType.Display` filters to be only `Displays` from ScrapComputers)
- interactable [ **[Interactable](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Interactable)** ] The interactable itself. (Required to filter of what connected or not)
- getViaChildren [ **boolean** ] If true. it makes children interactable. else parents from interactable
- flags [ **integer?** ] This only exists just so the network ports work. Defaults to [`sm.interactable.connectinType.compositeIO`](/docs/addon-api/static-function-namespaces/sm.interactable.connectiontype/)
- allowPrivateData [ **boolean?** ] If true, the results will also have private data that shouldn't be accessible to the public. Defaults is `false`

**Returns:**
- [ **table** ] All components it has discovered
