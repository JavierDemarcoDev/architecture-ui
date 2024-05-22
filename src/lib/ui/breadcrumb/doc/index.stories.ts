import type { Meta, StoryObj } from '@storybook/react'
import { BreadcrumbDemo } from '.'

const meta = {
  title: 'Components/Breadcrumb',
  component: BreadcrumbDemo,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
} satisfies Meta<typeof BreadcrumbDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
