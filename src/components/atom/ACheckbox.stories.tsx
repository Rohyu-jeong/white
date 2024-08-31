import { Meta, StoryObj } from '@storybook/react';
import ACheckbox, { CheckboxProps } from './ACheckbox';

const meta: Meta<CheckboxProps> = {
  title: 'atom/ACheckbox',
  component: ACheckbox,
  tags: ['autodocs'],
  argTypes: {
    textprops: {
      control: {
        type: 'object',
      },
      text: {
        control: {
          type: 'select',
          options: ['종합세척', '일반세척', '할인적용'], // CheckboxTextType의 가능한 값들
        },
      },
    },
    isCheck: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {
  args: {
    isCheck: false,
    textprops: {
      text: '할인적용',
    },
  },
};
