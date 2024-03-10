import type { Meta, StoryObj } from '@storybook/react'
import { DatePickerDemo } from '.'

const meta = {
  title: 'Components/Date Picker',
  component: DatePickerDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof DatePickerDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
