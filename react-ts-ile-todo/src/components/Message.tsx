import React from "react";
import { Todos } from "../types/Type";

type Props = {
  todos: Todos[];
  delelteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, delelteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          {todo.message} -{" "}
          <span onClick={() => delelteMessage(todo.id)}>x</span>{" "}
        </div>
      ))}
    </div>
  );
};

export default Message;
