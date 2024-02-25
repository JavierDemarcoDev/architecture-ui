import type { Meta, StoryObj } from '@storybook/react'
import { AlertDialogDemo } from '.'

const meta = {
  title: 'Demos/Alert Dialog',
  component: AlertDialogDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AlertDialogDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
