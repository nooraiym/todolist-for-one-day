import { TodoType } from '../Home';
import { Check } from './Check';
import cn from 'classnames'
import { FaTrash } from 'react-icons/fa6'

type TodoItemProps = {
    todo: TodoType
    changeTodo: (id: string) => void
    removeTodo: (id: string) => void
};

export const TodoItem = ({ todo, changeTodo, removeTodo }: TodoItemProps) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
        >
            <button className='flex items-center' 
            onClick={ () => changeTodo(todo._id)}
            >
                <Check isCompleted={todo.isCompleted} />
                <span className={cn({
                    'line-through': todo.isCompleted
                })}>{todo.title}</span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <FaTrash size={22} className='text-gray-600 hover:text-pink-600 transition-colors ease-in-out duration-300' />
            </button>
        </div>
    );
};