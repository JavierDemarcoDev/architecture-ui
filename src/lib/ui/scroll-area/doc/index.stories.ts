import type { Meta, StoryObj } from '@storybook/react'
import { ScrollAreaDemo } from '.'

const meta = {
  title: 'Components/Scroll Area',
  component: ScrollAreaDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ScrollAreaDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
