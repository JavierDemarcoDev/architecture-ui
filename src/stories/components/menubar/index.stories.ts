import type { Meta, StoryObj } from '@storybook/react'
import { MenubarDemo } from '.'

const meta = {
  title: 'Components/Menubar',
  component: MenubarDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenubarDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
