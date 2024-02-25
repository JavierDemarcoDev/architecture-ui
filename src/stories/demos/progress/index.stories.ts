import type { Meta, StoryObj } from '@storybook/react'
import { ProgressDemo } from '.'

const meta = {
  title: 'Demos/Progress',
  component: ProgressDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProgressDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
