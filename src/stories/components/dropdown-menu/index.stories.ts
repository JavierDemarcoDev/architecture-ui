import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenuDemo } from '.'

const meta = {
  title: 'Components/Drop Down Menu',
  component: DropdownMenuDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
