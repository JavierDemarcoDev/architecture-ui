import type { Meta, StoryObj } from '@storybook/react'
import { ScrollAreaDemo } from '.'

const meta = {
  title: 'Demos/Scroll Area',
  component: ScrollAreaDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScrollAreaDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
