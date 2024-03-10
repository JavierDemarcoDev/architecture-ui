import type { Meta, StoryObj } from '@storybook/react'
import { BadgeDemo } from '.'

const meta = {
  title: 'Components/Badge',
  component: BadgeDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BadgeDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
