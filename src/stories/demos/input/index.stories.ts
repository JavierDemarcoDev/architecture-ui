import type { Meta, StoryObj } from '@storybook/react'
import { InputDemo } from '.'

const meta = {
  title: 'Demos/Input',
  component: InputDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
