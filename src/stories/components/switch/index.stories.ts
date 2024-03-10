import type { Meta, StoryObj } from '@storybook/react'
import { SwitchDemo } from '.'

const meta = {
  title: 'Components/Switch',
  component: SwitchDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SwitchDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
