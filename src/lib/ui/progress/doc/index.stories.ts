import type { Meta, StoryObj } from '@storybook/react'
import { ProgressDemo } from '.'

const meta = {
  title: 'Components/Progress',
  component: ProgressDemo,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ProgressDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
