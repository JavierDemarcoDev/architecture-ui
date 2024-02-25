import type { Meta, StoryObj } from '@storybook/react'
import { TableDemo } from '.'

const meta = {
  title: 'Demos/Table',
  component: TableDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TableDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}