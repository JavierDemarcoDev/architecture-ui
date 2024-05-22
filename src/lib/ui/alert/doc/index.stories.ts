import type { Meta, StoryObj } from '@storybook/react'
import { AlertDemo } from '.'

const meta = {
  title: 'Components/Alert',
  component: AlertDemo,
  parameters: {},

  argTypes: {},
} satisfies Meta<typeof AlertDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
