import React, { useState } from "react";
import { isDefaultClause } from "typescript";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let persone: Object;
// // type Person = {
// //   name: string;
// //   age?: number;
// // };
// // let person: Person = {
// //   name: "Hello",
// // };
// // let lotOfPeople: Person[];

// let printName: (name: string) => never;

// let personName: unknown;

// type X = {
//   a: string;
//   b: number;
// };

// interface Person extends X {
//   name: string;
//   age?: number;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos);
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
