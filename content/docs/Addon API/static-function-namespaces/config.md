---
title: "sm.scrapcomputers.config"
description: "The configurator manager itself!"
---

This one allows you to add configurations and look at the values for it. You can modify them at the **Configurator**, An interactable that allows you to modify the configs of the mod and add-ons.

---

## Structures

### Configuration

This would contain data for a config.

#### Fields

- `id` [ **string** ] The id of the config
- `name` [ **string** ] The name of the config
- `description` [ **string** ] The description of the config
- `selectedOption` [ **integer** ] The current config's selected option
- `hostOnly` [ **boolean** ] If the configuration is host-only accessible
- `options` [ **string** ][] List of usable options for the config.

---

## Functions

### createDefaultConfigs

```lua
sm.scrapcomputers.config.createDefaultConfigs( onlyDefaultConfigs )
```

Creates a fresh configuration. Use onlyDefaultConfigs to remove all add-on-added configurations.

**Arguments:**
- onlyDefaultConfigs [ **boolean?** ] Set this to true if you do not want configs added from configs to be added. Default is false

**Returns:**
- [ **[Configuration](#configuration)[]**] Contains the fresh configuration's.

---

### initConfig

```lua
sm.scrapcomputers.config.initConfig()
```

Initialize the configuration manager. (Required to run when messing around with configurations!)

---

### nameToId

```lua
sm.scrapcomputers.config.nameToId( name )
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Converts a config name to its id.

**Arguments:**
- name [ **string** ] The name of the config

**Returns:**
- id [ **string** ] The id of the config

---

### setConfig

```lua
sm.scrapcomputers.config.setConfig( id, selectedOption )
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Updates the value of a configuration

**Arguments:**
- id [ **string** ] The id of the config
- selectedOption [ **integer** ] The newly selected option value

---

### resetConfiguration

```lua
sm.scrapcomputers.config.resetConfiguration()
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Resets the configuration back to normal.

---

### saveConfig

```lua
sm.scrapcomputers.config.saveConfig()
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Saves config through all clients

---

### createConfig

```lua
sm.scrapcomputers.config.createConfig( id, name, description, hostOnly, options )
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Creates a new config

**Arguments:**
- id [ **string** ] The id name
- name [ **string** ] The name of the config (Would be shown to Configurator)
- description [ **string** ] The description of the config
- hostOnly [ **boolean** ] If true, Only the host can modify this
- options [ **string[]** ] The usable options for this config

---

### getConfig

```lua
sm.scrapcomputers.config.getConfig( id )
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}

Gets a config

**Arguments:**
- id [ **string** ] The id of the config to get

**Returns:**
- [ **[Configuration](#configuration)** ] The config that it has found.

---

### configExists

```lua
sm.scrapcomputers.config.configExists( id )
```

` Server-Only `

{{< callout context="caution" title="Requires initalization!" icon="outline/alert-triangle" >}}
This function will NOT work if `sm.scrapcomputers.config.initConfig` hasn't been called.
{{< /callout >}}


Returns true if the config exists

**Arguments:**
- id [ **string** ] The id of the config to check

**Returns:**
- [ **boolean** ] True if the config exists
