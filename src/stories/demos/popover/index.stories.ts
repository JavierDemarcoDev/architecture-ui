import type { Meta, StoryObj } from '@storybook/react'
import { PopoverDemo } from '.'

const meta = {
  title: 'Demos/Popover',
  component: PopoverDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PopoverDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
