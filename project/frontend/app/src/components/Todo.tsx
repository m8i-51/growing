import React, { memo, FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import { UpdateTodo } from "./UpdateTodo";
import { DeletedTodo } from "./DeletedTodo";
import { CopyTodo } from "./CopyTodo";

type TodoProps = {
  id: number;
  item: string;
  getTodos: () => void;
};

export const Todo: FC<TodoProps> = memo(({ id, item, getTodos }) => (
  <Box>
    <Text>{item}</Text>
    <UpdateTodo id={id} item={item} getTodos={getTodos} />
    <DeletedTodo id={id} item={item} getTodos={getTodos} />
    < CopyTodo id={id} item={item} getTodos={getTodos} />
  </Box>
));
