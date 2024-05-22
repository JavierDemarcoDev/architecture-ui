import type { Meta, StoryObj } from '@storybook/react'
import { CardDemo } from '.'

const meta = {
  title: 'Components/Card',
  component: CardDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof CardDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
