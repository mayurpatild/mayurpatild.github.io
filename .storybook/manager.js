import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://mayurpatild.github.io/icon.svg',
    brandTitle: 'Mayur Patil Components',
    brandUrl: 'https://mayurpatild.github.io',
  },
});
