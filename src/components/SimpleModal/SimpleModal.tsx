import {
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
} from "@chakra-ui/react";
import React, { RefObject } from "react";

interface ISimpleModal extends Omit<ModalProps,'children'> {
  title ?: React.ReactNode;
  body ?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
  hideCloseButton?: boolean;
  hideOverlay?: boolean;
  elementProps?: Partial<{
    closeButtonProps : Partial<ModalCloseButtonProps>,
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

const SimpleModal = (props: ISimpleModal) => {
  const {
    title,
    body,
    footer,
    hideOverlay,
    hideCloseButton,
    elementProps,
    elementRefs,
    ...modalProps
  } = props;

  return (
    <Modal {...modalProps}>
      {hideOverlay !== true && <ModalOverlay ref={elementRefs?.overlayRef} {...elementProps?.overlayProps} />}
      <ModalContent ref={elementRefs?.contentRef} {...elementProps?.contentProps}>
        {title && <ModalHeader ref={elementRefs?.headerRef} {...elementProps?.headerProps}>
          {title}
        </ModalHeader>}
        {hideCloseButton !== true && <ModalCloseButton ref={elementRefs?.closeButtonRef} {...elementProps?.closeButtonProps} />}
        {body && <ModalBody ref={elementRefs?.bodyRef} {...elementProps?.bodyProps}>
          {body}
        </ModalBody>}

        {footer && (
          <ModalFooter ref={elementRefs?.footerRef} {...elementProps?.footerProps}>
            {footer}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SimpleModal;
