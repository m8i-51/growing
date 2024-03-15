import React, { FC } from "react";
import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { Todo } from "./Todo";
import { useIndexPageLogic } from "./IndexPageLogic";

export const IndexPage: FC = () => {
  const {
    todoName,
    todos,
    onChangeTask,
    onClickAddTodo,
    getTodos,
  } = useIndexPageLogic();

  return (
    <Flex align="center" color="gray.500" justify="center">
      <Box w="400">
        <Stack spacing={6}>
          <Heading as="h1" size="lg" textAlign="center">
            TodoApp_sasaryo
          </Heading>
          <Box w={400}>
            <Stack>
              <Input placeholder="Input taskname.." value={todoName} onChange={onChangeTask} />
              <Button colorScheme="teal" onClick={onClickAddTodo}>
                Add
              </Button>
              <Divider my={"5"} />
            </Stack>
          </Box>
          {todos.map((todo) => (
            // sasaryo dev
            // last_idを追加
            <Todo key={todo.id} id={todo.id} item={todo.summary} getTodos={getTodos} last_id={todos.length} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};
