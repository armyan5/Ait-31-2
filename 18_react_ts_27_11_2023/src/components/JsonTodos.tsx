import React, { useEffect, useState } from 'react';

interface ITodo {
        "userId": number,
        "id": number,
        "title": string,
        "completed": boolean;
      
}

const JsonTodos = () => {
    const [todoList,setTodoList] = useState<ITodo[]| null>(null);

    useEffect(() => {
        // console.log('Component did mount');
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => setTodoList(data));
        
    })
    
  return (
    <>
    {
        todoList && 
        todoList.map((todo,index) => (
        <>
            {todo.title} {todo.completed}
        </>
        ))
    }

    </>
  );
};

export default JsonTodos;


