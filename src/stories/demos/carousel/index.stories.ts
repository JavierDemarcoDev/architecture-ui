import type { Meta, StoryObj } from '@storybook/react'
import { CarouselDemo } from '.'

const meta = {
  title: 'Demos/Carousel',
  component: CarouselDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CarouselDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
