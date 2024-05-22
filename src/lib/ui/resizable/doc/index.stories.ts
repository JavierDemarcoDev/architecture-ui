import type { Meta, StoryObj } from '@storybook/react'
import { ResizableDemo } from '.'

const meta = {
  title: 'Components/Resizable',
  component: ResizableDemo,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ResizableDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
