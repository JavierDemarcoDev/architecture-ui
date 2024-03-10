import type { Meta, StoryObj } from '@storybook/react'
import { CarouselDemo } from '.'

const meta = {
  title: 'Components/Carousel',
  component: CarouselDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof CarouselDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
