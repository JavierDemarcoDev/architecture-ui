import type { Meta, StoryObj } from '@storybook/react'
import { TooltipDemo } from '.'

const meta = {
  title: 'Demos/Tooltip',
  component: TooltipDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TooltipDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
