import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDemo } from '.'

const meta = {
  title: 'Components/Avatar',
  component: AvatarDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof AvatarDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
