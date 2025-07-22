import { overrideThemes } from 'markedit-theming';
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode';

overrideThemes({
  light: {
    extension: vscodeLight,
    colors: {
      subtleEmphasis: true,
    },
  },
  dark: {
    extension: vscodeDark,
    colors: {
      subtleEmphasis: true,
    },
  },
  options: {
    settingsKey: 'extension.markeditThemeVSCode',
  },
});
