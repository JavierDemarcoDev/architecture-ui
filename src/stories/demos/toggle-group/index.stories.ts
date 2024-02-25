import type { Meta, StoryObj } from '@storybook/react'
import { ToggleGroupDemo } from '.'

const meta = {
  title: 'Demos/Toggle Group',
  component: ToggleGroupDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
