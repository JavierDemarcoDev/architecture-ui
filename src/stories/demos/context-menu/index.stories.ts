import type { Meta, StoryObj } from '@storybook/react'
import { ContextMenuDemo } from '.'

const meta = {
  title: 'Demos/Context Menu',
  component: ContextMenuDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ContextMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
