---
title: "Update: The Addon System Update"
contributors: ["VeraDev"]
summary: "We just made our add-on system a LOT better than before! After 1 issue we encountered, we have done it!"
date: 2024-06-22T21:34:40+0200
categories: ["Updates"]
---

But first, let's dive around a couple of days ago. So, we had an issue where we couldn't manage to sync a variable across mods, but when **Ben Bingo** asked that issue in **The Guild of Scrap Mechanic Modders**. Then **June** gave us the solution! One came after the other. Now we have the best Addon System out of all other computer mods.

We also are the 1st ever computer mod to allow the Addon Developers to make configurations with just code! You can make configurations in just two lines, 1 for initializing the config functions and the other for creating them!

After changing how the structure works in the mod and how things work, You can also modify the environment variables of the Computer API! You can also access the Computer API from Components via the Addon API!

You can also now take a masked frame for cameras via the `getMaskedFrame` function. It would be useful for such as detecting objects. What it does is via a mask parameter, Pixels become white if that raycast's result type is the mask (So if the mask is "body", all white pixels mean that it hit a "body"). It can also be an array in case you want to detect multiple things.

We also added 2 new modules. **The BitStream Module and the VPBS Module.** The BitStream Module is a Module to read/write to binary via bitstreams! The VPBS module makes converting from **lua tables to binary and vice-versa easier** via the **bitstream module.**

There are also more table functions added to your table's tables!

We also **improved the config updater** to be done for every config option. So you don't have to reset your configuration when making addons

We also fixed some bugs in the mod! One of the bugs has been solved, but not in the other computer mods.

Thanks to everyone who supported our mods, the people who gaved us suggestions and found bugs! We see you in the next update!
