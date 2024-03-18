import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, fn } from '@storybook/test';
import SimpleModal from '../components/SimpleModal/SimpleModal';


const meta = {
  title: 'SimpleModal',
  component: SimpleModal,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SimpleModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoArgs: Story = {
  args: {
    isOpen:true,
    onClose:fn()
  }
};

export const OnlyTitle: Story = {
  args: {
    title: "A Title",
    isOpen:true,
    onClose:fn()
  }
};

export const NoOverlay: Story = {
  args: {
    title: "No Overlay",
    hideOverlay:true,
    isOpen:true,
    onClose:fn()
  }
};

export const TextBody: Story = {
  args: {
    title: "Text Body Title",
    body: "Text Body",
    isOpen:true,
    onClose:fn()
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
    isOpen:true,
    onClose:fn()
  }
};

