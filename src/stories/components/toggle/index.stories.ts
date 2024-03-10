import type { Meta, StoryObj } from '@storybook/react'
import { ToggleDemo } from '.'

const meta = {
  title: 'Components/Toggle',
  component: ToggleDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
