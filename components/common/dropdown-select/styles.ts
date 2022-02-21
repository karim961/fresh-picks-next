import { DefaultTheme } from 'styled-components';

export const controlStyle = (theme: DefaultTheme, state: any) => ({
  border: state.isFocused
    ? `1px solid ${theme.colors.secondary}`
    : `1px solid ${theme.colors.grey}`,
  minHeight: '40px',
  borderRadius: '4px',
  outline: 'none',
  boxShadow: 'none',
  '&:hover': {
    border: `1px solid ${theme.colors.secondary}`,
    outline: 'none',
    boxShadow: 'none',
  },
});

export const optionItem = (theme: DefaultTheme, state: any) => ({
  backgroundColor: state.isFocused ? theme.colors.primary : 'transparent',
  height: 30,
  cursor: 'pointer',
  color: state.isFocused ? theme.colors.snow : theme.colors.primaryText,
  border: 'none',
  padding: 0,
  textIndent: 18,
  fontFamily: theme.fonts.Lato,
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: theme.colors.snow,
    backgroundColor: theme.colors.primary,
  },
  '&:active': {
    backgroundColor: 'transparent',
  },
  '&:first-of-type': {
    borderTopWidth: 0,
  },
});
