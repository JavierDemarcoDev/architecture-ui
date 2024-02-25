import type { Meta, StoryObj } from '@storybook/react'
import { CollapsibleDemo } from '.'

const meta = {
  title: 'Demos/Collapsible',
  component: CollapsibleDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CollapsibleDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}