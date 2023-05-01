import { useEffect, useState } from 'react';
import { ModalOverlay, ModalBody, ModalCloseButton, ModalHeader, ModalContent, Modal, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons'

interface ModalProps {
  title: string,
  subText: string,
  isVisible: boolean
}

export default function SuccessModal({ title, isVisible, subText } : ModalProps){
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if(!isVisible) return;
    setIsOpen(true);
  }, [isVisible])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay display="flex" alignItems="center">
        <ModalContent display="flex" alignItems="center">
          <ModalHeader>
            <ModalCloseButton/>
          </ModalHeader>
          <ModalBody 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center"
            padding="4"
          >
            <Heading size='md' margin="2">{title}</Heading>
            <Text textAlign="center">{subText}</Text>
            <CheckCircleIcon color="green.300" boxSize={14} marginTop="4"/>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}