import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    asChild: false,
  },
  render: (args) => {
    const child =
      args.asChild && typeof args.children === 'string' ? (
        <a href="#" onClick={(e) => e.preventDefault()}>
          {args.children}
        </a>
      ) : (
        args.children
      );
    return <Button {...args}>{child}</Button>;
  },
};
