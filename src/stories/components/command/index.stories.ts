import type { Meta, StoryObj } from '@storybook/react'
import { CommandDemo } from '.'

const meta = {
  title: 'Components/Command',
  component: CommandDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommandDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
