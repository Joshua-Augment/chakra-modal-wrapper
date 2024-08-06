import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalCloseButtonProps,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  ModalOverlayProps,
  ModalProps,
  useDisclosure,
} from "@chakra-ui/react";
import React, { createContext, RefObject, useContext } from "react";

export type ButtonElementProps = { children: React.ReactNode; buttonTitle: React.ReactNode; onClick: () => void };

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

const ModalContext = createContext<{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
  isControlled: false,
  getButtonProps: (props?: any) => ({}),
  getDisclosureProps: (props?: any) => ({}),
});

const SimpleModalButton = (props: ISimpleModal) => {
  const { isOpen, onClose, onOpen, ...rest } = useDisclosure();
  const { title, body, footer, hideOverlay, hideCloseButton, elementProps, elementRefs, buttonElement, buttonProps, buttonTitle, ...modalProps } =
    props;

  const ButtonComponent = buttonElement ?? Button;

  return (
    <ModalContext.Provider value={{isOpen, onClose, onOpen, ...rest}}>
      <ButtonComponent {...buttonProps} buttonTitle={buttonTitle} onClick={onOpen}>
        {buttonTitle}
      </ButtonComponent>
      <Modal isOpen={isOpen} onClose={onClose} {...modalProps}>
        {hideOverlay !== true && <ModalOverlay ref={elementRefs?.overlayRef} {...elementProps?.overlayProps} />}
        <ModalContent ref={elementRefs?.contentRef} {...elementProps?.contentProps}>
          {title && (
            <ModalHeader ref={elementRefs?.headerRef} {...elementProps?.headerProps}>
              {title}
            </ModalHeader>
          )}
          {hideCloseButton !== true && <ModalCloseButton ref={elementRefs?.closeButtonRef} {...elementProps?.closeButtonProps} />}
          {body && (
            <ModalBody ref={elementRefs?.bodyRef} {...elementProps?.bodyProps}>
              {body}
            </ModalBody>
          )}

          {footer && (
            <ModalFooter ref={elementRefs?.footerRef} {...elementProps?.footerProps}>
              {footer}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

export const useSimpleModalButton = () => useContext(ModalContext)

export default SimpleModalButton;
