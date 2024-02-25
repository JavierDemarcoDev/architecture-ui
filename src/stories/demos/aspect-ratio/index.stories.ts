import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatioDemo } from '.'

const meta = {
  title: 'Demos/Aspect Ratio',
  component: AspectRatioDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AspectRatioDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
