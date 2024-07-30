import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, fn } from '@storybook/test';
import SimpleModalButton from '../components/SimpleModalButton/SimpleModalButton';


const meta = {
  title: 'SimpleModalButton',
  component: SimpleModalButton,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SimpleModalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoArgs: Story = {
  args: {
    buttonTitle: "Open Modal"
  }
};

export const OnlyTitle: Story = {
  args: {
    title: "A Title",
    buttonTitle: "Open Modal"
  }
};

export const NoOverlay: Story = {
  args: {
    title: "No Overlay",
    hideOverlay:true,
    buttonTitle: "Open Modal"
  }
};

export const TextBody: Story = {
  args: {
    title: "Text Body Title",
    body: "Text Body",
    buttonTitle: "Open Modal"
  }
};

export const TextBodyWithProps: Story = {
  args: {
    title: "Text Body Title",
    body: "Text Body",
    elementProps: {
      headerProps:{
        fontSize:'xl',
        fontWeight:'bold',
        backgroundColor:'blue.100',
        rounded:'md'
      },      
      bodyProps: {
        mt:2,
        rounded:'md',
        py:6,
        backgroundColor:'white',
        shadow:'xl'
      },
      contentProps: {
        p:3,
        backgroundColor: 'blue.300'
      }
    },
    buttonTitle: "Open Modal"
  }
};

