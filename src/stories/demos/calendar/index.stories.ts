import type { Meta, StoryObj } from '@storybook/react';
import { CalendarDemo } from '.';

const meta = {
  title: 'Demos/Calendar',
  component: CalendarDemo,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CalendarDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};