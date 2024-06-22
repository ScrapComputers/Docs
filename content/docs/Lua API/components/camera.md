---
title: "Camera"
description: "The camera component"
---

The camera allows you to take screenshots or even render video from the world to your display! Our camera looks great while not even touching the **raytracing**. There's no raytracing happening! just rays going everywhere as a **multicast**!

This doesn't even touch the complicated math! Just addition, subtraction, division, and multiplication.

{{< callout context="caution" title="Performance note!" icon="outline/alert-triangle" >}}
Cameras in ScrapComputers use multicast to get the frame or video. However, raycasts in scrap mechanic that we (Modders) have access to are slow. This is because (According to VeraDev) it's handled by the CPU. If it was a GPU then it wouldn't take a lot of time.

The bigger the resolution you take the frame. The longer it would take to send all of those ray casts. You can see how many ray casts you're going to use by just using simple math. The formula to calculate that is: `frameWidth * frameHeight `.

We have to do a multicast since there's no other way to do it. So if you're going to use the camera, If your game freezes when you get a frame/video, Then the multicast is busy.
{{< /callout >}}

---

## Functions

### getFrame

```lua
Camera.getFrame( width, height, fovX, fovY, xOffset, yOffset )
```

Takes a frame (aka a screenshot)

****Arguments:**:**
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the top, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the left, it would be rendered there

**Returns:**
- [ **[DisplayPixelTable](/docs/lua-api/components/display/#pixeltable)** ] The pixels of the frame

---

### getDepthFrame

```lua
Camera.getDepthFrame( width, height, fovX, fovY, focalLength, xOffset, yOffset )
```

Takes a depth map frame (aka a screenshot) and returns it

**Arguments:**
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- focalLength [ **integer** ] The focal's length
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the top, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the left, it would be rendered there

**Returns:**
- [ **DisplayPixelsTable** ] The pixels of the frame

---

### getMaskedFrame

```lua
Camera.getMaskedFrame( width, height, fovX, fovY, mask, xOffset, yOffset )
```

Takes a masked map frame (aka a screenshot) and returns it

**In case `mask` is a `string[]`**: Each string is a raycast result type. If a raycast's type matches the pixel, it will be white or else black.
**In case `mask` is a `string`**: If a raycast's type matches with the mask, the pixel's color would be white and else black.

If you do not know what the value(s) for the mask should be, (Find them by [clicking this](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Constants#smphysicstypes)) URL.

**Arguments:**
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- mask [ **string|string[]** ] The mask for the raycast's to set.
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the left, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the top, it would be rendered there

**Returns:**
- [ **DisplayPixelsTable** ] The pixels of the frame

---

### getVideo

```lua
Camera.getVideo( width, height, fovX, fovY, sliceWidth, xOffset, yOffset )
```

Like getFrame but it's as slices meaning you could make CCTV cameras without lagging a lot! It's just that the refresh rate would be lower.

**Arguments:**:
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- sliceWidth [ **integer** ] The width for each slice
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the left, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the top, it would be rendered there

**Returns:**
- [ **DisplayPixelsTable** ] The pixels of the frame

---


### getAdvancedFrame

```lua
Camera.getAdvancedFrame( width, height, fovX, fovY, xOffset, yOffset )
```

{{< callout context="caution" title="Performance note!" icon="outline/alert-triangle" >}}
The advanced functions use **CPU-Based Raytracing (Via Raycasting)** to render your frame(s). So this will use a ton of your CPU!
{{< /callout >}}

Takes a frame (aka a screenshot)

**Arguments:**:
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the left, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the top, it would be rendered there

**Returns:**
- [ **[DisplayPixelTable](/docs/lua-api/components/display/#pixeltable)** ] The pixels of the frame

---

### getAdvancedVideo

```lua
Camera.getAdvancedVideo( width, height, fovX, fovY, sliceWidth, xOffset, yOffset )
```

{{< callout context="caution" title="Performance note!" icon="outline/alert-triangle" >}}
The advanced functions use **CPU-Based Raytracing (Via Raycasting)** to render your frame(s). So this will use a ton of your CPU!
{{< /callout >}}

Like getFrame but it's as slices meaning you could make CCTV cameras without lagging a lot! It's just that the refresh rate would be lower.

**Arguments:**:
- width [ **integer** ] The width of the frame
- height [ **integer** ] The height of the frame
- fovX [ **number** ] The FOV on x-axis
- fovY [ **number** ] The FOV on y-axis
- sliceWidth [ **integer** ] The width for each slice
- xOffset [ **integer** ] The applied x offset for the frame. By default, it's at 0 so at the left, it would be rendered there
- yOffset [ **integer** ] The applied y offset for the frame. By default, it's at 0 so at the top, it would be rendered there

**Returns:**
- [ **DisplayPixelsTable** ] The pixels of the frame

### toggleRandom

```lua
Camera.toggleRandom( toggle )
```

Toggles the randomization shader. This is very simple but adds a lot of detail to the frame at a cost of performance when used in displays as the optimization would be gone.

This randomization of the colors of a frame's pixels is a tiny bit.

**Arguments:**:
- toggle [ **boolean** ] To enable or disable the randomization shader
