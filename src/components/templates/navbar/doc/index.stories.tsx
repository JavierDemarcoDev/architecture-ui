import type { Meta, StoryObj } from "@storybook/react";
import { NavbarExample } from ".";

const meta = {
  title: "Templates/Navbar",
  component: NavbarExample,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof NavbarExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
