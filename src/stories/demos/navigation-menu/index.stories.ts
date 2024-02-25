import type { Meta, StoryObj } from '@storybook/react'
import { NavigationMenuDemo } from '.'

const meta = {
  title: 'Demos/Navigation Menu',
  component: NavigationMenuDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NavigationMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
