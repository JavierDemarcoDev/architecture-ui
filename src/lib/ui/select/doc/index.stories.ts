import type { Meta, StoryObj } from '@storybook/react'
import { SelectDemo } from '.'

const meta = {
  title: 'Components/Select',
  component: SelectDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
