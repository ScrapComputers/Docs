---
title: "Display"
description: "The display component"
---

## Description

The display is like a monitor but in Scrap Mechanic. Allows you to draw anything on it with a computer.

{{< callout context="caution" title="Performance note!" icon="outline/alert-triangle" >}}
Displays are the only component where you can cause a ton of lag! Since the only way to render pixels is via effects, Too many effects mean a lot of lag. Although our optimization is very good. We suggest making any graphics on our display simple or not using a ton of colors.

Using a ton of colors would decrease your game's performance even after optimizations!
{{< /callout >}}

## Structures

### TouchData

This contains touch data when the user interacts with the display AKA "touches the display"

#### Fields
- x [ **number** ] The position on the x-axis.
- y [ **number** ] The position on the y-axis.
- state [ **1|2|3** ] The state that it has been pressed. 1 is Pressed, 2 is Hold, 3 is Released.

### PixelTable

A pixel table is an array of pixels. Each item inside it contains the data below. Each value inside has a use case

```lua
{
    x = 1, -- The position of the pixel on the X-axis
    y = 1, -- The position of the pixel on the Y-axis

    scale = { -- The size of the pixel itself.
        x = 1, -- The size of the pixel on the X-axis (Aka width)
        y = 1  -- The size of the pixel on the Y-axis (Aka height)
 },

    color = sm.color.new("ff0000") -- The color of the pixel
}
```

This one above draws a singular pixel on coordinates ***(1, 1)***. The scale is also 1x1 so we are just drawing a 1x1 pixel.

## Functions

### drawPixel

```lua
Display.drawPixel( x, y, color )
```

Draws a single pixel at the specified coordinates with the given color.

Arguments:
- x [ **number** ] The x-coordinate of the pixel.
- y [ **number** ] The y-coordinate of the pixel.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the pixel in hexadecimal format.

---

### drawFromTable

```lua
Display.drawFromTable( tbl )
```

Draws shapes and text based on data provided in a table.

Arguments:
- tbl [ **[PixelTable](#pixeltable)** ] A table containing drawing commands and parameters.

---

### clear

```lua
Display.clear( color )
```

Clears the display with the specified color.

Arguments:
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color to clear the display with, in hexadecimal format. (If nil, It will clear the screen with the default color)

---

### drawLine

```lua
Display.drawLine( x, y, x1, y1, color )
```

Draw a line between two points with the specified color.

Arguments:
- x [ **number** ] The x-coordinate of the starting point.
- y [ **number** ] The y-coordinate of the starting point.
- x1 [ **number** ] The x-coordinate of the ending point.
- y1 [ **number** ] The y-coordinate of the ending point.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the line in hexadecimal format.

---

### drawCircle

```lua
Display.drawCircle( x, y, radius, color )
```

Draws a circle with the specified center coordinates, radius, and color.

Arguments:
- x [ **number** ] The x-coordinate of the center of the circle.
- y [ **number** ] The y-coordinate of the center of the circle.
- radius [ **number** ] The radius of the circle.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the circle in hexadecimal format.

---

### drawFilledCircle

```lua
Display.drawFilledCircle( x, y, radius, color )
```

Draws a filled circle with the specified center coordinates, radius, and color.

Arguments:
- x [ **number** ] The x-coordinate of the center of the circle.
- y [ **number** ] The y-coordinate of the center of the circle.
- radius [ **number** ] The radius of the circle.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the circle in hexadecimal format.

---

### drawTriangle

```lua
Display.drawTriangle( x1, y1, x2, y2, x3, y3, color )
```

Draws a triangle with the specified vertices and color.
Arguments:

Arguments"
- x1 [ **number** ] The x-coordinate of the first vertex.
- y1 [ **number** ] The y-coordinate of the first vertex.
- x2 [ **number** ] The x-coordinate of the second vertex.
- y2 [ **number** ] The y-coordinate of the second vertex.
- x3 [ **number** ] The x-coordinate of the third vertex.
- y3 [ **number** ] The y-coordinate of the third vertex.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the triangle in hexadecimal format.

---

### drawFilledTriangle

```lua
Display.drawFilledTriangle( x1, y1, x2, y2, x3, y3, color )
```

Draws a filled triangle with the specified vertices and color.
Arguments:

Arguments"
- x1 [ **number** ] The x-coordinate of the first vertex.
- y1 [ **number** ] The y-coordinate of the first vertex.
- x2 [ **number** ] The x-coordinate of the second vertex.
- y2 [ **number** ] The y-coordinate of the second vertex.
- x3 [ **number** ] The x-coordinate of the third vertex.
- y3 [ **number** ] The y-coordinate of the third vertex.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the triangle in hexadecimal format.

---

### drawRect

```lua
Display.drawRect( x, y, width, height, color )
```

Draws a rectangle with the specified position, width, height, and color.

Arguments:
- x [ **number** ] The x-coordinate of the top-left corner of the rectangle.
- y [ **number** ] The y-coordinate of the top-left corner of the rectangle.
- width [ **number** ] The width of the rectangle.
- height [ **number** ] The height of the rectangle.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the rectangle in hexadecimal format.

---

### drawFilledRect

```lua
Display.drawFilledRect( x, y, width, height, color )
```

Draws a filled rectangle with the specified position, width, height, and color.

Arguments:
- x [ **number** ] The x-coordinate of the top-left corner of the rectangle.
- y [ **number** ] The y-coordinate of the top-left corner of the rectangle.
- width [ **number** ] The width of the rectangle.
- height [ **number** ] The height of the rectangle.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the rectangle in hexadecimal format.

---

### drawText

```lua
Display.drawText( x, y, string, color, fontName )
```

Draws text at the specified position with the specified color.

- x [ **number** ] The x-coordinate of the text.
- y [ **number** ] The y-coordinate of the text.
- string [ **string** ] The text to draw.
- color [ **[Color](https://scrapmechanicdocs.com/docs/Game-Script-Environment/Userdata/Color/)|string?** ] The color of the text in hexadecimal format.
- fontName [ **string?** ] The font to use. (defaults to whatever the default font the font manager is using)

---

### optimize

```lua
Display.optimize()
```

This optimizes the display but more at the extreme bound.

{{< callout context="caution" title="Performance note!" icon="outline/alert-triangle" >}}
This is only meant to be called when you're not planning to update the display for a long time. Use it when it's generally going to be static.
{{< /callout >}}

---

### getDimensions

```lua
Display.getDimensions()
```

Retrieves the dimensions of the display.

Returns:
- [ **number** ] The width of the display
- [ **number** ] The height of the display

---

### hide

```lua
Display.hide()
```

Hides the display.

---

### show

```lua
Display.show()
```

Shows the display.

---

### setRenderDistance

```lua
Display.setRenderDistance( distance )
```

Sets the render distance of the display.

Arguments:
- distance [ **number** ] The render distance to set.

---

### enableTouchScreen

```lua
Display.enableTouchScreen( bool )
```

Enables or disables the touchscreen functionality.

Arguments:
- bool [ **boolean** ] True to enable touch screen, false to disable.

---

### getTouchData

```lua
Display.getTouchData()
```

Retrieves touch data from the touch screen.

Returns:
- [ **[TouchData](#touchdata)** ] A table containing touch data such as coordinates and touch state.

---

### update

```lua
Display.update()
```

Updates the display.

---

### autoUpdate

```lua
Display.autoUpdate( bool )
```

Sets whether the display should automatically update.

{{< callout context="caution" title="Peformance note!" icon="outline/alert-triangle" >}}
If you let's say draw a lot of things like rectangles, text, etc with this enabled. Your game would lag a LOT! And the network would be spammed with network requests!

So please only use this when you're not going to draw a lot and your display doesn't get updated a lot!
{{< /callout >}}

Arguments:
- bool [ **boolean** ] True to enable auto-update, false to disable.

---

### setOptimizationThreshold

```lua
Display.setOptimizationThreshold( int )
```

This function sets the optimization threshold of the display. Our displays optimize the effect count by grouping similar-colored pixels together into one larger effect. The integer (ranging between 0 and 1) dictates how similar the neighboring pixels' colors have to be, with 0 requiring them to be exactly the same RGB value and 1 allowing any RGB value.

Arguments:
- int [ **number** ] The optimization threshold to set.

---

### calcTextSize

```lua
Display.calcTextSize( text )
```

Calculate the text's bounding box

Arguments:
- text [ **string** ] The text to calculate its size.

Returns:
- [ **number** ] The width that the text would consume
- [ **number** ] The height that the text would consume
