import type { Meta, StoryObj } from '@storybook/react'
import { ResizableDemo } from '.'

const meta = {
  title: 'Demos/Resizable',
  component: ResizableDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResizableDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
