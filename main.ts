import { overrideThemes } from 'markedit-theming';
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode';

overrideThemes({
  light: {
    extension: vscodeLight,
    colors: {
      accentColor: '#0070c1',
      syntaxMarker: '#a31515',
    },
  },
  dark: {
    extension: vscodeDark,
    colors: {
      accentColor: '#9cdcfe',
      syntaxMarker: '#ce9178',
    },
  },
});
