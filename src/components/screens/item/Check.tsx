import { BsCheck } from "react-icons/bs";
import cn from 'classnames'

type CheckProps = {
    isCompleted: boolean
};


export const Check = ({isCompleted}: CheckProps) => {
    return (
        <div className={cn("border-2 rounded-lg border-pink-400 w-6 h-6 mr-2 w-100 flex items-center justify-center", {
            'bg-pink-400': isCompleted
        })}>
            {isCompleted &&
            <BsCheck size={24} className="text-gray-900" />
            }
        </div>
    );
};