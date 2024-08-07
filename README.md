# Chakra Modal Wrapper

Simple Wrapper for Chakra UI's Modal, while maintaining flexibility

## Installation

Chakra UI needs to be installed, follow [Installing ChakraUI](https://chakra-ui.com/getting-started)

(TLDR for npm. Please note that you still need to setup the ChakraProvider as well, if you've already have it installed just install `chakraui-modal-wrapper`)
### npm
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion chakraui-modal-wrapper
```
### yarn
```
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion chakraui-modal-wrapper
```


## Props

The `<SimpleModal>` extends `ModalProps` of ChakraUI, so you can directly inject those props to `<Modal>` component. For the other components inside (`<ModalBody>`,`<ModalHeader>`,`<ModalOverlay>`,`<ModalFooter>`,`<ModalContent>`,`<ModalCloseButton>`), you may inject props via the `elementProps` prop (see table)

| Props | Type | Description |
---|---|---|
title | React.ReactNode | Title of Modal |
body | React.ReactNode \| React.ReactNode[] | Content of Modal |
footer | React.ReactNode \| React.ReactNode[] | Footer of Modal (if needed) |
hideCloseButton | boolean | Hides Close Button (Close Button shown by default)
hideOverlay | boolean | Hides Overlay (Overlay shown by default)
elementProps| Object <table><thead><tr><th>Element</th><th>Type</th></tr></thead><tbody><tr><th>closeButtonProps</th><td>`Partial<ModalCloseButtonProps>`</td></tr><tr><th>overlayProps</th><td>`Partial<ModalOverlayProps>`</td></tr><tr><th>contentProps</th><td>`Partial<ModalContentProps>`</td></tr><tr><th>bodyProps</th><td>`Partial<ModalBodyProps>`</td></tr><tr><th>headerProps</th><td>`Partial<ModalHeaderProps>`</td></tr><tr><th>footerProps</th><td>`Partial<ModalFooterProps>`</td></tr></tbody></table> |Props for the Chakra UI Elements |
elementRefs | Object <table><thead><tr><th>Element</th><th>Type</th></tr></thead><tbody><tr><th>closeButtonRef</th><td>`RefObject<HTMLButtonElement>`</td></tr><tr><th>overlayRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>contentRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>bodyRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>headerRef</th><td>`RefObject<HTMLDivElement>`</td></tr><tr><th>footerRef</th><td>`RefObject<HTMLDivElement>`</td></tr></tbody></table> | Refs for the Chakra UI Elements

`<SimpleModalButton>` has the same props as `<SimpleModal>` with the addition of
| Props | Type | Description |
---|---|---|
buttonTitle|React.ReactNode|Title for Button |
buttonProps|ButtonProps|Props for Button|
buttonComponent|React.FC<{ ...buttonProps, children: React.ReactNode, onClick : /*on Open function, so use this to open the modal*/}>|Replaces the Button with another element

*Note : When using SimpleModalButton you may access the useDisclosure methods used for the button using the 
`useSimpleModalButton()` hook. It provides the methods of the 
useDisclosure that the current Modal Context uses.*

## Usage
### Basic Usage
```jsx
import {SimpleModal} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // Use a state or useDisclosure since this is
  // wrapping chakra UI
  const {isOpen, onClose, onOpen} = useDisclosure()
  
  return <div>
    <button onClick={onOpen}>Open Modal</button>
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

```jsx
import {SimpleModalButton} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // No need onDisclosure as the button is already 
  // added to the component
  
  return <SimpleModalButton 
      size="4xl" // Extends ModalProps, autocomplete is included
      p={4} // Extends ModalProps
      // Use a ReactNode
      title="Modal Title"
      // Use a ReactNode
      body={<div>
        <p>My Modal Body</p>
      </div>}
      buttonTitle="Open Modal"
      buttonProps={{
        p: 4,
        colorScheme: "blue" // All the ButtonProps for Chakra
      }}
    />
}
```

### Changing the Size / Using ModalProps
```jsx
import {SimpleModalButton} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // Use a state or useDisclosure since this is
  // wrapping chakra UI
  const {isOpen, onClose, onOpen} = useDisclosure()
  
  return <div>
    <button onClick={onOpen}>Open Modal</button>
    <SimpleModalButton 
      size="4xl" // Extends ModalProps, autocomplete is included
      p={4} // Extends ModalProps
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

### Injecting Props to Other Components
```jsx
import {SimpleModal} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // Use a state or useDisclosure since this is
  // wrapping chakra UI
  const {isOpen, onClose, onOpen} = useDisclosure()
  
  return <div>
    <button onClick={onOpen}>Open Modal</button>
    <SimpleModal 
      size="4xl" // Extends ModalProps, autocomplete is included
      p={4} // Extends ModalProps
      elementProps={{
        footerProps: {p:4, borderColor:'red.400',borderWidth:2} // ModalFooterProps
        bodyProps: {p:2, backgroundColor:'blue.300', } // ModalBodyProps
      }}
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

### Injecting Refs to components
```jsx
import {SimpleModal} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // Use a state or useDisclosure since this is
  // wrapping chakra UI
  const {isOpen, onClose, onOpen} = useDisclosure()


  const footerRef = useRef<HTMLDivElement>()
  
  return <div>
    <button onClick={onOpen}>Open Modal</button>
    <SimpleModal 
      elementRefs={{
        footerRef: footerRef // Each component can be given a ref except for the main Modal, which doesnt have a ref 
      }}
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

### Using a Custom Button with the Simple Modal

```jsx
import {SimpleModalButton, ButtonElementProps} from "chakraui-modal-wrapper"

const CustomButton = (props: ButtonElementProps) => {
  return <CustomButton onClick={props.onClick} {...props} />
}

const MyModalPage = () => {
  // No need onDisclosure as the button is already 
  // added to the component
  
  return <SimpleModalButton 
      size="4xl" // Extends ModalProps, autocomplete is included
      p={4} // Extends ModalProps
      // Use a ReactNode
      title="Modal Title"
      // Use a ReactNode
      body={<div>
        <p>My Modal Body</p>
      </div>}
      buttonTitle="Open Modal"
      buttonElement={CustomButton}
    />
}
```

### Using the useSimpleModalButton to control modal

```jsx
import {SimpleModalButton, useSimpleModalButton} from "chakraui-modal-wrapper"

const MyModalPage = () => {
  // No need onDisclosure as the button is already 
  // added to the component
  
  return <SimpleModalButton 
      size="4xl" // Extends ModalProps, autocomplete is included
      p={4} // Extends ModalProps
      // Use a ReactNode
      title="Modal Title"
      // Use a ReactNode
      body={<MyComponent />}
      buttonTitle="Open Modal"
    />
}

const MyComponent = () => {
  const {isOpen, onClose} = useSimpleModalButton()

  return <div>
    {isOpen ? "Modal is Open" : "Modal is Closed"}
    <button onClick={onClose}>Close Modal</button>
  </div>
}
```