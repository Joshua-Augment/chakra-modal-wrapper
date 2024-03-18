# Chakra Modal Wrapper

Simple Wrapper for Chakra UI's Modal, while maintaining flexibility

## Props

| Props | Type | Description |
---|---|---|
title | React.ReactNode | Title of Modal |
body | React.ReactNode \| React.ReactNode[] | Content of Modal |
footer | React.ReactNode \| React.ReactNode[] | Footer of Modal (if needed) |
hideCloseButton | boolean | Hides Close Button (Close Button shown by default)
hideOverlay | boolean | Hides Overlay (Overlay shown by default)
elementProps| Object <table><thead><tr><th>Element</th><th>Type</th></tr></thead><tbody><tr><th>closeButtonProps</th><td>`Partial<ModalCloseButtonProps>`</td></tr><tr><th>overlayProps</th><td>`Partial<ModalOverlayProps>`</td></tr><tr><th>contentProps</th><td>`Partial<ModalContentProps>`</td></tr><tr><th>bodyProps</th><td>`Partial<ModalBodyProps>`</td></tr><tr><th>headerProps</th><td>`Partial<ModalHeaderProps>`</td></tr><tr><th>footerProps</th><td>`Partial<ModalFooterProps>`</td></tr></tbody></table> |Props for the Chakra UI Elements |
elementRefs | Object <table><thead><tr><th>Element</th><th>Type</th></tr></thead><tbody><tr><th>closeButtonRef</th><td>`RefObject<HTMLButtonElement>`</td></tr><tr><th>overlayRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>contentRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>bodyRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>headerRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>footerRef</th><td>`RefObject<HTMLDivElement>`</td></tr></tbody></table> | Refs for the Chakra UI Elements

## Basic Usage

```jsx
import SimpleModal from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // Use a state or useDisclosure since this is
  // wrapping chakra UI
  const {isOpen, onClose, onOpen} = useDisclosure()
  
  return <div>
    <button onClick={()=>onOpen()}>Open Modal</button>
    <SimpleModal 
      isOpen={isOpen}
      onClose={onClose}
      // Use a ReactNode
      title="Modal Title"
      // Use a ReactNode
      body={<div>
        <p>My Modal Body</p>
      </div>}
      isOpen
    />
  </div>
}
```