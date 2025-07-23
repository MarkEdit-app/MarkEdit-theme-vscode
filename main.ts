import { overrideThemes } from 'markedit-theming';
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode';

overrideThemes({
  light: { extension: vscodeLight },
  dark: { extension: vscodeDark },
  options: { settingsKey: 'extension.markeditThemeVSCode' },
});
