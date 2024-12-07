import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/nextjs',
  addons: ['@storybook/addon-essentials'],
};

export default config;
