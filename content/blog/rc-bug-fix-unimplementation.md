---
title: "Bugfix Update: Removing a bugfix to fix a bug!"
contributors: ["VeraDev"]
summary: "We just unimplemented a bugfix as our bugfix. That is not even a joke."
date: 2024-06-25T16:30:02+0200
categories: ["Updates"]
---

You might be wondering, "Did we just undo a bugfix to solve a problem?" Yes, that’s precisely what happened! In our latest update for ScrapComputers, we had to remove a previous bugfix and essentially reintroduce a bug to address an even more significant issue. Let's dive into the details.

# The RC Bug: What’s the Deal?

For those unfamiliar with the RC bug in ScrapComputers, it allows remote control of components even when they have no physical connections. Sounds neat, right? Well, not really. While this might seem like a handy feature, it led to unexpected behavior and caused more harm than good. The original fix aimed to tackle this issue but ended up causing more trouble. So, we had to roll back the fix to restore stability.

An example of the issues caused by the RC bug was that it could "brick" your computer. Users reported receiving an error message saying, "The component cannot be found," even though the component was still connected. This essentially rendered the computer useless because you could no longer interact with that component, which is a significant problem!

# What Else Is New?

Besides the rollback of the RC bugfix, we've implemented a few other updates and changes to improve your experience with ScrapComputers. Here's the full changelog:
- Removed RC Bugfix: We had to revert the fix for the RC bug due to its negative impact.
- Enhanced Keyboard Functionality in Seats: You can now use the keyboard while sitting in a seat, even though there's no icon indicating this feature when you're connected to the seat.
- Fixed Critical Computer Issue: Previously, the computer wasn’t affected by our ban-system process. This has now been fixed.

# What Does This Mean for You?

While it might sound counterintuitive to reintroduce a bug, this step was necessary to maintain stability and usability. We’re committed to providing you with a seamless experience in ScrapComputers, and sometimes that involves a bit of backtracking to move forward.

# Fresh New Bug Discovery!

During our testing and community feedback, we discovered a new bug. One of our community members, The Red Builder, encountered an issue while working on a project with ScrapComputers. He set self.cl to an empty table in an unsafe environment, which caused significant problems. ScrapComputers uses self.cl for client-side variables, so when he did that, it effectively wiped out his entire computer setup, resulting in errors like "unable to find self.sv," which is not typical behavior.

We are planning to fix this issue soon. In the meantime, we recommend avoiding setting self.sv or self.cl in the computer when in an unsafe environment.
