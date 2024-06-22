---
title: "Speaker"
description: "The speaker component"
---

The speaker allows you to play ANY kind of sound and we mean ANYTHING!

---

## Functions

### beep

```lua
Speaker.beep()
```

Play's a beep sound

---

### beepQueue

```lua
Speaker.beepQueue()
```

Play's a beep sound

{{< callout context="note" title="This uses the Queue system!" icon="outline/info-circle" >}}
This is going to be sent to the queue, Flush the queue to play it!
{{< /callout >}}

**Returns:**
- [ **integer** ] The index where the note is located in the queue.

---

### playNote

```lua
Speaker.playNote( pitch, note, durationTicks )
```

Play's whatever note

**Arguments:**
- pitch [ **number** ] The pitch of the note
- note [ **integer** ] The note to play
- durationTicks [ **integer** ] The duration that it will play in ticks

---

### playNoteQueue

```lua
Speaker.playNoteQueue( pitch, note, durationTicks )
```

Play's whatever note

{{< callout context="note" title="This uses the Queue system!" icon="outline/info-circle" >}}
This is going to be sent to the queue, Flush the queue to play it!
{{< /callout >}}

**Arguments:**
- pitch [ **number** ] The pitch of the note
- note [ **integer** ] The note to play
- durationTicks [ **integer** ] The duration that it will play in ticks

**Returns:**
- [ **integer** ] The index where the note is located in the queue.

---

### playNoteEffect

```lua
Speaker.playNoteEffect( name, params, durationTicks )
```

Plays whatever event effect you specify!

**Arguments:**
- name [ **string** ] The name of the audio to play
- params [ **[AudioParameter](/docs/lua-api/static-functions-namespaces/sc.audio/#audioparameter)[]**] Audio parameters to use
- durationTicks [ **integer** ] The duration of how long it should play in ticks!

---

### playNoteEffectQueue

```lua
Speaker.playNoteEffectQueue( name, params, durationTicks )
```

Plays whatever event effect you specify!

{{< callout context="note" title="This uses the Queue system!" icon="outline/info-circle" >}}
This is going to be sent to the queue, Flush the queue to play it!
{{< /callout >}}

**Arguments:**
- name [ **string** ] The name of the audio to play
- params [ **[AudioParameter](/docs/lua-api/static-functions-namespaces/sc.audio/#audioparameter)[]**] Audio parameters to use
- durationTicks [ **integer** ] The duration of how long it should play in ticks!

**Returns:**
- [ **integer** ] The index where the note is located in the queue.

---

### flushQueue

```lua
Speaker.flushQueue()
```

Flushes the queue and plays all of them whatever it's inside at ONCE!

---

### removeNote

```lua
Speaker.removeNote( noteIndex )
```

Remove a note from the queue

**Arguments:**
- noteIndex [ **integer** ] The index where the note is located

---

### clearQueue

```lua
Speaker.clearQueue()
```

Clears the entire queue

---

### getCurrentQueueSize

```lua
Speaker.getCurrentQueueSize()
```

Returns the size of the queue

**Returns:**
- queueSize [ **integer** ] The size of the queue.
