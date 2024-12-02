import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './navigation';

const meta: Meta<typeof Navigation> = {
  title: 'UI/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const MyNavigation: Story = {};
