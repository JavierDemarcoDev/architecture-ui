import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroupDemo } from '.'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroupDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof RadioGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
