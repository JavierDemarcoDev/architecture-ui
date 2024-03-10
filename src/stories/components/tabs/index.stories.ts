import type { Meta, StoryObj } from '@storybook/react'
import { TabsDemo } from '.'

const meta = {
  title: 'Components/Tabs',
  component: TabsDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabsDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
