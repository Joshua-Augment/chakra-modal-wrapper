import * as react_jsx_runtime from 'react/jsx-runtime';
import { ModalProps, ModalCloseButtonProps, ModalOverlayProps, ModalContentProps, ModalBodyProps, ModalHeaderProps, ModalFooterProps, ButtonProps } from '@chakra-ui/react';
import React, { RefObject } from 'react';

interface ISimpleModal$1 extends Omit<ModalProps, 'children'> {
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
declare const SimpleModal: (props: ISimpleModal$1) => react_jsx_runtime.JSX.Element;

type ButtonElementProps = {
    children: React.ReactNode;
    buttonTitle: React.ReactNode;
    onClick: () => void;
};
interface ISimpleModal extends Omit<ModalProps, "children" | "isOpen" | "onClose"> {
    buttonTitle: React.ReactNode;
    buttonProps?: Partial<ButtonProps>;
    buttonElement?: React.FunctionComponent<ButtonElementProps>;
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
declare const SimpleModalButton: (props: ISimpleModal) => react_jsx_runtime.JSX.Element;
declare const useSimpleModalButton: () => {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
};

export { type ButtonElementProps, SimpleModal, SimpleModalButton, useSimpleModalButton };
