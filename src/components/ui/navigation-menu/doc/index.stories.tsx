import type { Meta, StoryObj } from "@storybook/react";
import { NavigationMenuDemo } from ".";

const meta = {
  title: "Components/Navigation Menu",
  component: NavigationMenuDemo,
  argTypes: {},
} satisfies Meta<typeof NavigationMenuDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
