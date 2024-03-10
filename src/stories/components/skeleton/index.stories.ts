import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonDemo } from '.'

const meta = {
  title: 'Components/Skeleton',
  component: SkeletonDemo,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SkeletonDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
