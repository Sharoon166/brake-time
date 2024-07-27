"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function OrderRejectionForm({disabled}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button
        disabled={disabled}
        onPress={onOpen}
        variant="bordered"
        className="text-red-500 disabled:text-gray-400 hover:bg-red-500 disabled:hover:text-gray-400 border-red-500 disabled:border-gray-400 disabled:hover:bg-white hover:text-white bg-white rounded-lg font-semibold transition-colors duration-200">
        Reject
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                <div className="border-b py-3 font-bold">
                  Reason of Rejection
                </div>
              </ModalHeader>
              <ModalBody>
                <form action="" className="space-y-4 text-gray-400 font-medium">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      className="px-4 py-2 rounded-lg border-1.5 border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="p-3 border-1.5 border-gray-300 rounded-lg resize-none focus:outline-none"></textarea>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  variant="bordered"
                  color="primary"
                  className="font-semibold px-8">
                  Discard
                </Button>
                <Button
                  onPress={onClose}
                  className="bg-red-500 text-white font-semibold px-8">
                  Reject
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
