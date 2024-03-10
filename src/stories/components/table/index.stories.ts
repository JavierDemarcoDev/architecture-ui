import type { Meta, StoryObj } from '@storybook/react'
import { TableDemo } from '.'

const meta = {
  title: 'Components/Table',
  component: TableDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof TableDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
