import type { Meta, StoryObj } from '@storybook/react'
import { PaginationDemo } from '.'

const meta = {
  title: 'Components/Pagination',
  component: PaginationDemo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof PaginationDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
