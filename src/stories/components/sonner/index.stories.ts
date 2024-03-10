import type { Meta, StoryObj } from '@storybook/react'
import { SonnerDemo } from '.'

const meta = {
  title: 'Components/Sonner',
  component: SonnerDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SonnerDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
