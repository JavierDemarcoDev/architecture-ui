import type { Meta, StoryObj } from '@storybook/react'
import { ButtonDemo } from '.'

const meta = {
  title: 'Demos/Button',
  component: ButtonDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}