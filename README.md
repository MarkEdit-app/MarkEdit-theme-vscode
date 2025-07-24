# MarkEdit-theme-vscode

[VS Code](https://code.visualstudio.com/) default theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="VS Code Light" src="https://github.com/user-attachments/assets/fddcb291-75d0-461c-8dbd-b9230bcc524e" /> <img width="344" title="VS Code Dark" src="https://github.com/user-attachments/assets/fd0d5de6-db2c-4399-ab88-750b87c5d673" />

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

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
