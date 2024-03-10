import type { Meta, StoryObj } from '@storybook/react'
import { SheetDemo } from '.'

const meta = {
  title: 'Components/Sheet',
  component: SheetDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SheetDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
