---
title: "Important"
description: "Important to add-on developers"
---

<!-- This page has a table which really does NOT like mobile-support -->
<script>
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if(window.mobileCheck())
{
  if(confirm("You are being redirected backwards because this page has poor mobile-support.\n\nPress OK to redirect backwards or press Cancel to view it anyways"))
    window.history.back()
}
</script>

## Before you can even start making add-ons

Before you can even make your first-addon, <mark>You need permission to even be able to make a addon</mark> since we really do NOT like people violating copyright so we have a very strict license. This also includes of modifing the behaviour of ScrapComputers in any way.

However we would have a issue with this where if someone DOES violate copyright or breaks one of our rules, we really cannot DMCA them without risking our personal information to be leaked. Hence we have a **Ban System**

---

## How does our ban-system work?

You will receive a popup if you have a banned add-on loaded which mentions all banned addons you have loaded and the result of having that loaded.

Our ban-system has 4 levels of serverity.

**Levels on serverity:**
- `Level 1`: You would only get this popup every time you join the world.
- `Level 2`: You would receieve the popup every 30 secconds.
- `Level 3`: ScrapComputers would be **ENTIRLY** disabled
- `Level 4`: Your game would **CRASH**

Why do we have a serverity where your game would crash? Well that is incase a addon attempts to bypass our ban-system. If they are caught doing that, we would bump up the level to 4. **At the time, Only 3 crash methods are in. Those are: Divison Crash, JSON Crash and the infamous `while true do end`** Although `while true do end` is not a crash, It does prevent the user from being able to do anything so good enough!

---

## Ban severities

Each ban reason can result to a diffirent outcome. Maybe you only would get a popup or maybe your game would crash when loading it in.

To know what would happen. This table would provide info about it


| Name                       | Description                                                                      | Serverity           | Appealable | Dev Banned |
|----------------------------|----------------------------------------------------------------------------------|---------------------|------------|------------|
| Bypass Ban System          | Your addon attempts to bypass the ban-system in some sort of method              | 4 (Game Crash)      | No         | Yes        |
| Copyright Violation        | Your addon uses code from developers without any permission                      | 3 (Mod Disabled)    | Depends    | Depends    |
| No Permission              | You didn't ask for permission for the addon to be created                        | 3 (Mod Disabled)    | Depends    | No         |
| False Advertisement        | You are making claims that aren't valid.                                         | 2 (Popup every 30s) | Yes        | No         |
| License Violation          | Your add-on violates our license.                                                | 3 (Mod Disabled)    | Depends    | Depends    |
| Bad Reputation             | You have very horrible reputation in the community.                              | 2 (Popup every 30s) | Yes        | No         |
| Ban Evasion                | You attempt to evade our bans                                                    | 4 (Game Crash)      | No         | Yes        |
| Bad Documentation          | Your add-on is not easy to understand what something does.                       | 1 (Popup once)      | Yes        | No         |
| Ban-System Not Implemented | Theres 1 or more interactables that dont have the added code for the ban system. | 3 (Mod Disabled)    | Yes        | No         |
| Horrible Add-on Quality    | Your add-on is not really good, poorly made or/and useless                       | 2 (Popup every 30s) | Yes        | No         |

if you violate one of the above and your `Dev Banned` (So the Dev Banned catagory is a `Yes` or on the depends where we mention that your one), You can nolonger make
any add-on's and your current add-on's would be effected. All of your add-on would be banned under the same ban with Serverity **4 (Game Crash)**. This WILL be permenant!

This means that you getting this is essentaly being on a blacklist for life!

---

## Rules to follow

There are some rules you gotta follow.

### Please ask for permisison before creating a addon!

You need permission incase you want make a addon. You don't have to ask again if you got permission and wanted to make more add-on's.

### DO NOT bypass the ban system!

We will be honest here, If you try bypassing our ban system, your a actual asshole doing it because not only you somehow broke one of our rules, your trying to do ban evasion! Isn't that a way to ruin your reputation and be hated torwards to the community?

### No lying to the community!

Your claims what your add-on do, They gotta be a claim that would be true. It's fine if a claim is as a joke but if its a false claim, you would be violating this rule!

If you lie to the community (or to your coummnity) thats related to the add-on, you would be violating this rule!

### No violating our license or copyright

Because its iliegal to violate a license or copyrigt. No need to explain it further.

### Your reputation DOES matter!

We do NOT want developers with horrible reputation make add-on's with our mod. We want developers that the community likes! If your canceled, well your never going to be able to make add-on's for scrapcomputers then.

### Code and User Documentation quality matters!

Your code documentation MUST be good! You must make it so other developer's (Intermetiate specificly) can understand the code without having a headache over why this function is needed.

**This is allowed**

```lua
-- Function to perform Bubble Sort on a list
function bubbleSort(array)
    local n = #array -- Get the number of elements in the array
    for i = 1, n - 1 do
        for j = 1, n - i do
            if array[j] > array[j + 1] then
                -- Swap elements
                array[j], array[j + 1] = array[j + 1], array[j]
            end
        end
    end
end

-- Function to print the array
function printArray(array)
    local str = ""
    for i = 1, #array do
        str = str..tostring(array[i]).." "
    end

    print(str:sub(1,#str))
end

-- Example usage
local myArray = {64, 34, 25, 12, 22, 11, 90}
print("Original array:")
printArray(myArray)

bubbleSort(myArray)

print("Sorted array:")
printArray(myArray)
```

**This is NOT allowed**
```lua
-- The initiation of the unfathomable metamorphosis (Bubble Enigma)
function BS(arr)
    local n = #arr -- Decipher the enigmatic array size
    for i = 1, n - 1 do -- Engage in the arcane iteration sequence
        for j = 1, n - i do -- Traverse the mystical nested loop
            -- Introducing mind-boggling calculations for absolute obfuscation
            local complexNumber = 2 * i * j + (i^2) / (j + 1) + math.sqrt(i * j) -- A concoction of arcane formulae

            -- Perform a baffling comparison using the complex number
            if arr[j] > arr[j + 1] and complexNumber > 1000 then
                arr[j], arr[j + 1] = arr[j + 1], arr[j] -- Initiate the forbidden switch
            elseif arr[j] == arr[j + 1] then
                -- Perform a useless operation to make things more confusing
                local pointlessVariable = i + j * 2 / (i + j)
            else
                -- Perform another set of convoluted calculations to add to the mystique
                for k = 1, 100 do
                    local mysticalValue = k * j / (i % 3 + 1) + math.pow(j, 2)
                end
            end
        end
    end

    -- Invoke the spirits with an utterly useless loop
    for k = 1, 10000 do
        local x = k * k * k * k / (k - 1) -- An utterly perplexing computation
    end

    -- Perform another pointless ritual to confound the minds
    for m = 1, 10000 do
        local y = m % 2 == 0 and m / 2 or m * 3 + 1 -- The mystifying Collatz sequence
    end

    -- Adding a cryptic condition that does absolutely nothing
    if n % 2 == 0 then
        local crypticVariable = math.random(1, 100) + math.sqrt(n)
    else
        local enigmaticVariable = math.random(100, 1000) * math.sin(n)
    end

    -- Engage in a final perplexing loop with no purpose whatsoever
    for z = 1, 100000 do
        local mysticValue = z * n / (z + 1) + math.pow(z, 2) / (n % 2 + 1)
    end
end

-- Function to manifest the arcane numeric configuration
function printArray(array)
    local str = "" -- Channel the void with an empty string
    for i = 1, #array do -- Traverse the astral plane of the array
        str = str .. tostring(array[i]) .. " " -- Concatenate the ethereal integers with a mysterious space
    end
    print(str:sub(1, #str)) -- Reveal the enigmatic string of characters
end

-- Embark on the journey of enigmatic transformation
local mysticalSet = {64, 34, 25, 12, 22, 11, 90} -- The cryptic ensemble of integers
print("Behold the enigmatic configuration:") -- Utter the prophecy of chaos
printArray(mysticalSet) -- Evoke the essence of disarray

BS(mysticalSet) -- Initiate the perplexing transmutation

print("Witness the enigmatic array:") -- Reveal the revelation of order
printArray(mysticalSet) -- Unveil the transcendental sequence
```

### Add the following code for every interactable

In every singluar interactable (Includes Components), You must add this at the end of your code that is NOT in any function. This is needed for the ban-system to work incase a banned addon gets loaded.

**For Components:**
```lua {title="MyInteractable.lua" lineNos=true lineNoStart=278 hl_lines=[3]}
...

sm.scrapcomputers.components.ToComponent( InteractableClass, nil, false )
-- Do not put any code afther it!
```

**For interactables:**
```lua {title="MyComponent.lua" lineNos=true lineNoStart=427 hl_lines=[3]}
...

sm.scrapcomputers.components.ToComponent( ComponentClass, "MyComponent", true )
-- Do not put any code afther it!
```

### Your add-on must be good!

Your add-on must be something that does a lot of changes in the mod. Things like just display extended add-on's aren't allowed since this is not impressive enough! Making a printer addon is allowed since it could be useful in cases and requires some effort put into!
