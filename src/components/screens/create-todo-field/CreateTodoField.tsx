import { Dispatch, SetStateAction, useState } from "react";
import { TodoType } from "../Home";

type CreateTodoFieldProps = {
    setTodos: Dispatch<SetStateAction<TodoType[]>>
};

export const CreateTodoField = ({setTodos}: CreateTodoFieldProps) => {

    const [title, setTitle] = useState<string>('')

    const addTodo = (title: string) => {
        setTodos((prev: TodoType[]) => [...prev, {
            _id: new Date().toString(),
            title,
            isCompleted: false
        }])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mt-20 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full'>
            <input 
            type="text" 
            onChange={e => setTitle(e.currentTarget.value)} 
            onKeyDown={ e => e.key === 'Enter' && addTodo(title)}
            className="bg-transparent w-full border-none outline-none"
            placeholder="Add new task and press 'Enter'"
            />
        </div>
    );
};