# MarkEdit-theme-vscode

[VS Code](https://code.visualstudio.com/) default theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

## Installation

Copy [dist/markedit-theme-vscode.js](dist/markedit-theme-vscode.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeVSCode` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeVSCode": {
    "enabledMode": "both"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).
