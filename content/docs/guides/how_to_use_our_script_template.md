---
title: "How to use our script template"
description: "Learn how you can use our script template"
---

This will provide you additional information of how you can use our Script Template.

When you load up our Script Template example or use the `Main.lua.template` file of the Computer Template. You will see something like this:

```lua
-- Any variables outside the main functions are global! (As programmer perspective) The code only gets ran once!

-- Gets called when the computer starts up
function onLoad()

end

-- Gets called every tick
function onUpdate()

end

-- Gets called when the computer error's out.
function onError(err)

end

-- Gets called when the computer shuts down.
function onDestroy()

end
```

## What the functions do

We will tell you what these functions do

### onLoad
This function gets called when the computer starts up

### onUpdate
This function gets called every tick when the computer is running

### onError
This function gets called when theres a error.

The `err` parameter is a string. This will contain the error message it has recieved.

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
This will not stop the computer to stop further execution!
{{< /callout >}}

### onDestroy
When you turn OFF the computer, this function gets called.

## Code outside the functions

You might need global variables or functions. You can define them outside the functions.

Let's say you want to access the display globaly. You can add this at the top of your code!

```lua
local display = sc.getDisplays()[1]
```
