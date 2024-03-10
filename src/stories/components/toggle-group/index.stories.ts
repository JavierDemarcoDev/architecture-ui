import type { Meta, StoryObj } from '@storybook/react'
import { ToggleGroupDemo } from '.'

const meta = {
  title: 'Components/Toggle Group',
  component: ToggleGroupDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ToggleGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
