import type { Meta, StoryObj } from '@storybook/react'
import { PopoverDemo } from '.'

const meta = {
  title: 'Components/Popover',
  component: PopoverDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof PopoverDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
