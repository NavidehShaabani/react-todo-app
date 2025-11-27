import React, { useState, useEffect } from 'react';
import TodoListForm from './TodoListForm';
export default function TaskPage() {
  // localStorage.removeItem('task_list');

  const [list, setList] = useState(() =>
    localStorage.getItem('task_list')
      ? JSON.parse(localStorage.getItem('task_list'))
      : [
          {
            id: crypto.randomUUID(),
            name: 'first task',
            owner: 'nana',
            status: '1',
            task: 'create todo list with react',
          },
        ]
  );

  useEffect(() => {
    localStorage.setItem('task_list', JSON.stringify(list));
  }, [list]);

  return <TodoListForm list={list} setList={setList}></TodoListForm>;
}
