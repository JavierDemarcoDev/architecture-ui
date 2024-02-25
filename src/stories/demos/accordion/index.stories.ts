import type { Meta, StoryObj } from '@storybook/react'
import { AccordionDemo } from '.'

const meta = {
  title: 'Demos/Accordion',
  component: AccordionDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AccordionDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
