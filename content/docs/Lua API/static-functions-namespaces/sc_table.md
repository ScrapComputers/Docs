---
title: "sc.table"
description: "The Table Module (Computer API)"
---

The Table Module for the computer API!

---

## Functions

### clone

```lua
sc.table.clone( tbl )
```

Clones a table

<details><summary>This function doesn't really need to exist</summary>

This function is utterly unnecessary but in SOME situations is useful. It does create a new table but it's so easy to implement that I don't think it should deserve to have its function.

Geuss why

<details><summary>Click this dropdown to see why its unnessorary</summary>

**This is all the code the function uses...**

```lua
---Clones a table
---@param tbl table The table to clone
---@return table clonedTable The cloned table
sc.table.clone = function (tbl)
    assert(type(tbl) == "table", "Expected table, got "..type(tbl).." instead.") -- Error handling

    return unpack({tbl})
end
```

It's too little amount of code! I could do it in different ways but those have downsides! So this is the easiest thing we can do.

</details>

</details>

**Arguments:**
- tbl [ **table** ] The table to clone

**Returns:**
- [ **table** ] The cloned table

---

### getItemAt

```lua
sc.table.getItemAt( tbl, index )
```

Gets an item from a table via the index. Unlike doing `tbl[index]`. This will not care if the index numbers aren't in order.

```lua
-- This is in our actual todo
local todo = {
 [25] = "Add glass support for camera"
 [69] = "Add another parameter for speakers. Allows you to add such as the \"wind\" parameter to the sound effect"
 [4825] = "Add 512x512 and 1024x1024 displays for 3x3, 2x2 and 1x1 (Im going to add this no matter what :) )"
}

local lastTodoGood = sc.table.getItemAt(todo, 3) -- Works! Returns item of the index of 4825. Since it's the 3rd element in the table
local lastTodoBad = todo[3]                      -- Doesn't Work! Tries grabbing an element at index 3 but that doesn't exist! so this is nil!

print("lastTodoGood: "..tostring(lastTodoGood))
print("lastTodoBad: " ..tostring(lastTodoBad ))

```

You see that tbl[index] would error out but not **sc.table.getItemAt**

**Arguments:**
- tbl [ **table** ] The table
- index [ **integer** ] The item to get

**Returns:**
- [ **any** ] Whatever data it has received from the index

---

### getTotalItems

```lua
sc.table.getTotalItems( tbl )
```

Gets all items via a **ipairs** loop.

Unlike doing #tbl, If the indexing was weird, #tbl would return 0. This function does not care if the indexing system is weird. Will give you the same result as if the indexing system was normal.

For dictionaries. Use [sc.table.getTotalItemsDict](#gettotalitemsdict)

**Arguments:**
- tbl [ **table** ] The table

**Returns:**
- [ **integer** ] The total items in the table

---

### getTotalItemsDict

```lua
sc.table.getTotalItemsDict( tbl )
```

Gets all items via a **pairs** loop. This is used for dictionaries. else use [sc.table.getTotalItems](#gettotalitems)

Unlike doing #tbl, If the indexing was weird, #tbl would return 0. This function does not care if the indexing system is weird. Will give you the same result as if the indexing system was normal.

**Arguments:**
- tbl [ **table** ] The table

**Returns:**
- [ **integer** ] The total items in the table

---

### isDictonary

```lua
sc.table.isDictonary( tbl )
```

Returns true if it is a dictionary

**Arguments:**
- tbl [ **table** ] The table to check

**Returns:**
- [ **boolean** ] Is true if it's a dictionary.

---

### itemExistsInList

```lua
sc.table.itemExistsInList( tbl, item )
```

Returns true if an item is found in a list

**Arguments:**
- tbl [ **table** ] The table to check
- item [ **any** ] The item to try finding the table. (Cannot be nil!)

**Returns:**
- [ **boolean** ] If it was found or not.

---

### numberlyOrderTable

```lua
sc.table.numberlyOrderTable( tbl )
```

Orders the list to be 1 to table size

**Arguments:**
- tbl [ **table** ] The table to check

**Returns:**
- [ **table** ] The organized table.

---

### shiftTableIndexes

```lua
sc.table.shiftTableIndexes( tbl, shiftAmount )
```

Shifts list's indexes.

**Arguments:**
- tbl [ **table** ] table The table
- shiftAmount [ **integer** ] integer The amount to shift

**Returns:**
- [ **table** ] The shifted table

---

### merge

```lua
sc.table.merge( tbl1, tbl2, fullOverwrite )
```

Merges 2 tables in 1.

{{< callout context="caution" title="Important!" icon="outline/alert-triangle" >}}
The order that you put the sc.table.merge matters! ` tbl2 ` will override/overwrite anything inside ` tbl1 `!
{{< /callout >}}

**Arguments:**
- tbl1 [ **table** ] The 1st table
- tbl2 [ **table** ] The 2nd table
- fullOverwrite [ **boolean?** ] This will make it so the merged value will be always from tbl2. Will not care about anything else. The default is ` false `

**Returns:**
- tbl [ **table** ] The merged table

---

### toString

```lua
sc.table.toString( tbl )
```

Converts a table to the same thing but as a string. If you were to try doing this with Lua's tostring. You would just get "table: 00A59928". Not the actual contents of the table itself!

**Arguments:**
- tbl [ **table** ] The table

**Returns:**
- [ **string** ] The converted lua table is a string.
