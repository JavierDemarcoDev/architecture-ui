import type { Meta, StoryObj } from '@storybook/react'
import { LabelDemo } from '.'

const meta = {
  title: 'Components/Label',
  component: LabelDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof LabelDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
