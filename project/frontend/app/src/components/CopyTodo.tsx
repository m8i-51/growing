import React, { memo, FC, ChangeEvent, useState, useCallback } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

type CopyTodoProps = {
  id: number;
  item: string;
  getTodos: () => void;
};

export const CopyTodo: FC<CopyTodoProps> = memo(({ id, item, getTodos }) => {
  const [todo, setTodo] = useState(item);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const API_URL = process.env.REACT_APP_API_URL;

  const onClickModalOpen = useCallback(() => onOpen(), [onOpen]);

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);


  const onClickCopyTodo = useCallback(
    async (id: number, item: string) => {
    const newTodo = {
      id: id + 1,
      summary: item,
    };

    fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then(() => {
        getTodos();
      })
      .catch(() => {
        alert("Unknown error occurred while adding todo");
      });

      onClose();
      getTodos();
    },
    [onClose, getTodos]
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Task Copy</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <FormControl>
                  <FormLabel>Task copy?</FormLabel>
                  <Input value={todo} onChange={onChangeTodo}></Input>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => onClickCopyTodo(id, todo)}>Done</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <Button mr="2" onClick={onClickModalOpen}>
        Copy
      </Button>
    </>
  );
});
