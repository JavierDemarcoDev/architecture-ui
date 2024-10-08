import type { Meta, StoryObj } from '@storybook/react'
import { AccordionDemo } from '.'

const meta = {
  title: 'Components/Accordion',
  component: AccordionDemo,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof AccordionDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
