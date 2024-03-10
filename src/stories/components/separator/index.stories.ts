import type { Meta, StoryObj } from '@storybook/react'
import { SeparatorDemo } from '.'

const meta = {
  title: 'Components/Separator',
  component: SeparatorDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SeparatorDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
