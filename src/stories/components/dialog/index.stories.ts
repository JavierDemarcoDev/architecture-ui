import type { Meta, StoryObj } from '@storybook/react'
import { DialogDemo } from '.'

const meta = {
  title: 'Components/Dialog',
  component: DialogDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DialogDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
