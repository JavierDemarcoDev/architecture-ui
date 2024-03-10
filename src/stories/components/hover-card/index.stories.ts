import type { Meta, StoryObj } from '@storybook/react'
import { HoverCardDemo } from '.'

const meta = {
  title: 'Components/Hover Card',
  component: HoverCardDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof HoverCardDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
