import { ButtonProps, ModalBodyProps, ModalCloseButtonProps, ModalContentProps, ModalFooterProps, ModalHeaderProps, ModalOverlayProps, ModalProps } from "@chakra-ui/react";
import React, { RefObject } from "react";
export type ButtonElementProps = {
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
declare const SimpleModalButton: (props: ISimpleModal) => import("react/jsx-runtime").JSX.Element;
export default SimpleModalButton;
