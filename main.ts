import { CustomTheme, overrideThemes } from 'markedit-theming';
import { MarkEdit, type JSONObject, type JSONValue } from 'markedit-api';
import { vscodeLight, vscodeDark } from '@uiw/codemirror-theme-vscode';

const toObject = (value: JSONValue, fallback = {}) => (value ?? fallback) as JSONObject;
const rootValue = toObject(toObject(MarkEdit.userSettings)['extension.markeditThemeVSCode']);
const enabledMode = (rootValue.enabledMode ?? 'both') as string;

const lightTheme: CustomTheme = {
  extension: vscodeLight,
  colors: {
    accentColor: '#0070c1',
    syntaxMarker: '#a31515',
  },
};

const darkTheme: CustomTheme = {
  extension: vscodeDark,
  colors: {
    accentColor: '#9cdcfe',
    syntaxMarker: '#ce9178',
  },
};

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? lightTheme : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? darkTheme : undefined,
});
