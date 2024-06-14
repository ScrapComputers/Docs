---
title: "Getting Started"
description: "Learn how to begin to code in ScrapComputers"
---

This guide will give you a setup to start projects with ScrapComputers via the Computer API

## Before you do anything

If you do NOT have any Lua 5.1 knowledge, Then you must learn Lua 5.1 if you want to code in ScrapComputers. There are many ways you could learn 5.1, From messing around with the files of Lua games (Scrap Mechanic is one of them!), using YouTube tutorials, or learning Lua from Roblox Studio. Whatever makes you learn Lua 5.1!

If you do not know where you can learn Lua 5.1. Then [click this (Flashbang alert!)](https://www.lua.org/manual/5.1/manual.html) to start learning Lua 5.1.

For the people who know modding in Scrap Mechanic. Yes, we know that Scrap Mechanic uses LuaJIT and NOT Lua 5.1. But really, LuaJIT is Lua 5.1 but faster in short/simple terms.

---

## Choosing the correct Code Editor

You might have already got a code editor but some features are required and your code editor may not have them.

These are the required features that your code editor needs.
* Able to understand Lua code
* Add definition files.

In this case. We are going to use [Visual Studio Code](https://code.visualstudio.com/) with the [Lua Extension by summneko](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) as that is what we use.

---

## The world to code our Computer project in.

We need a world where we can go and test our projects. Open our Scrap Mechanic and create a new world with the ScrapComputers mod. Then go and place a computer. That's where our code will go in.

---

## Creating a Computer Project

We are going to create a project. We already have a template set up for you. The templates are stored in our mod.

These are the methods you can use to set up a project

#### Github (Recommended)

Go to our [GitHub Repository](https://github.com/ScrapComputers/ScrapComputers) and download our mod, Go into the `Templates` folder and clone the `Computer` folder. Name it whatever you want and that's it! You can go move the project's location somewhere else like your `Documents` folder

#### Type copy and paste

Most users have the same path installation but since it is configurable. This method might not work.

Open File Explorer and go to this path: `C:\Program Files (x86)\Steam\steamapps\workshop\content\387990\3238484039\Templates`, Copy the `Computer` folder and folder and rename it to whatever you want and that's it! You can go move the project's location somewhere else like your `Documents` folder

#### Point and click

What you have to do is to open Steam and go to your library, Then right-click on `Scrap Mechanic` and press `Properties`. Go to `Installed Files` and click `Browse...`.

On the File Explorer window. Go back to 2 directories and go into `workshop > content > 387990 > 3238484039 > Templates`. Clone the `Computer` folder and rename it to whatever you want and that's it! You can go move the project's location somewhere else like your `Documents` folder

---

## How to use our Template

You might get confused with our template so this section would help you.

The folder structure should look something like this:

```txt
.vscode/
└── settings.json
Main.lua
Main.lua.template
ScrapComputers.lua
SM.lua
```

These are what the files/folders are used for:
* **.vscode/\***: These are just configurations for [Visual Studio Code](https://code.visualstudio.com/)
* **Main.lua**: This is where the source code of your project would be
* **Main.lua.template**: This contains the script template we suggest you use.
* **ScrapComputers.lua and SM.lua**: These are definition files and should NOT be modified!

## Mess around!

Now you know all of this, A way you could learn to work with ScrapComputers via the Computer is to mess around with our examples or look through the documentation and try using them.
