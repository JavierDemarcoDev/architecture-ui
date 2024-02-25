import type { Meta, StoryObj } from '@storybook/react'
import { SliderDemo } from '.'

const meta = {
  title: 'Demos/Slider',
  component: SliderDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
