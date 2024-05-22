import type { Meta, StoryObj } from '@storybook/react'
import { InputDemo } from '.'

const meta = {
  title: 'Components/Input',
  component: InputDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof InputDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
