import type { Meta, StoryObj } from '@storybook/react'
import { CollapsibleDemo } from '.'

const meta = {
  title: 'Components/Collapsible',
  component: CollapsibleDemo,
  parameters: {},

  argTypes: {},
} satisfies Meta<typeof CollapsibleDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
