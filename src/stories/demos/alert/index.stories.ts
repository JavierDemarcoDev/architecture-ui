import type { Meta, StoryObj } from '@storybook/react';
import { AlertDemo } from '.';

const meta = {
  title: 'Demos/Alert',
  component: AlertDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AlertDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};