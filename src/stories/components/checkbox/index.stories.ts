import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxDemo } from '.'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckboxDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
