import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({submit, buttonText, cancel, formTitle}) {
    // const navigate  = useNavigate();
    const [taskText, setTaskText] = React.useState('');

    const location  = useLocation();

    React.useEffect(() => {
        if (location.state?.text) {
            setTaskText(location.state.text);
        }
    }, []);

    const onChangeText = (event) => {
        setTaskText(event.target.value);
    }

    const onKeyDown = (event) =>{
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            submit(taskText);
        }
    }

    return ( 
        <form onSubmit={(e) => {
                e.preventDefault();
                submit(taskText);
            }}
        >
            <div className='TodoForm_Container'>
                <div className='TodoForm_Content'>
                    <h3 htmlFor="">{formTitle}</h3>
                    <textarea 
                        className='TodoForm_Task' 
                        rows="10"
                        onChange={onChangeText}
                        onKeyDown={onKeyDown}
                        value={taskText}
                    >
                    </textarea>
                </div>
                <div className='TodoForm_Footer'>
                    <button 
                        className='TodoForm_CancelBtn' 
                        type='button'
                        onClick={()=> cancel()} 
                    >
                        Cancel
                    </button>
                    <button 
                        className='TodoForm_AddBtn' 
                        type='submit'
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </form>
     );
}

export { TodoForm } ;