import type { Meta, StoryObj } from '@storybook/react'
import { FormDemo } from '.'

const meta = {
  title: 'Components/Form',
  component: FormDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof FormDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
