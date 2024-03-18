import * as react_jsx_runtime from 'react/jsx-runtime';
import { ModalProps, ModalCloseButtonProps, ModalOverlayProps, ModalContentProps, ModalBodyProps, ModalHeaderProps, ModalFooterProps } from '@chakra-ui/react';
import React, { RefObject } from 'react';

interface ISimpleModal extends Omit<ModalProps, 'children'> {
    title?: React.ReactNode;
    body?: React.ReactNode | React.ReactNode[];
    footer?: React.ReactNode | React.ReactNode[];
    hideCloseButton?: boolean;
    hideOverlay?: boolean;
    elementProps?: Partial<{
        closeButtonProps: Partial<ModalCloseButtonProps>;
        overlayProps: Partial<ModalOverlayProps>;
        contentProps: Partial<ModalContentProps>;
        bodyProps: Partial<ModalBodyProps>;
        headerProps: Partial<ModalHeaderProps>;
        footerProps: Partial<ModalFooterProps>;
    }>;
    elementRefs?: Partial<{
        closeButtonRef: RefObject<HTMLButtonElement>;
        overlayRef: RefObject<HTMLDivElement>;
        contentRef: RefObject<HTMLDivElement>;
        bodyRef: RefObject<HTMLDivElement>;
        headerRef: RefObject<HTMLDivElement>;
        footerRef: RefObject<HTMLDivElement>;
    }>;
}
declare const SimpleModal: (props: ISimpleModal) => react_jsx_runtime.JSX.Element;

export { SimpleModal };
