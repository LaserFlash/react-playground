import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  colorSecondary: '#2e7d32',

  // UI
  appBg: '#1c313a',
  appContentBg: '#37474f',
  appBorderColor: 'white',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'white',
  barBg: '#2e7d32',

  // brand
  brandTitle: 'LaserFlash',
  brandUrl: 'https://laserflash.tk',
});

/*

    base: 'light' | 'dark';
    colorPrimary?: string;
    colorSecondary?: string;
    appBg?: string;
    appContentBg?: string;
    appBorderColor?: string;
    appBorderRadius?: number;
    fontBase?: string;
    fontCode?: string;
    textColor?: string;
    textInverseColor?: string;
    textMutedColor?: string;
    barTextColor?: string;
    barSelectedColor?: string;
    barBg?: string;
    inputBg?: string;
    inputBorder?: string;
    inputTextColor?: string;
    inputBorderRadius?: number;
    brandTitle?: string;
    brandUrl?: string;
    brandImage?: string;
    gridCellSize?: number;

*/
