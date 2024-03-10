import type { Meta, StoryObj } from '@storybook/react'
import { DrawerDemo } from '.'

const meta = {
  title: 'Components/Drawer',
  component: DrawerDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DrawerDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
