import type { Meta, StoryObj } from '@storybook/react'
import { HoverCardDemo } from '.'

const meta = {
  title: 'Components/Hover Card',
  component: HoverCardDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HoverCardDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
