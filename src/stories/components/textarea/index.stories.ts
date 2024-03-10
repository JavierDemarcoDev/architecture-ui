import type { Meta, StoryObj } from '@storybook/react'
import { TextareaDemo } from '.'

const meta = {
  title: 'Components/Textarea',
  component: TextareaDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextareaDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
