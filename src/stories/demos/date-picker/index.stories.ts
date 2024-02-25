import type { Meta, StoryObj } from '@storybook/react'
import { DatePickerDemo } from '.'

const meta = {
  title: 'Demos/Date Picker',
  component: DatePickerDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DatePickerDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
