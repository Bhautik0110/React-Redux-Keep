import { useDispatch } from 'react-redux';
import { modal } from './keepSlice';

export default function Header(props) {
    const dispatch = useDispatch()
    return (
        <header className='w-full'>
            <div>
                <div className='w-full justify-between flex items-center'>
                    <h1 className='font-sans text-xl text-green-600 font-bold'>
                        {props.title}
                    </h1>
                    <div>
                        <button onClick={(e) => dispatch(modal())} className='sm:w-auto flex-none bg-green-600 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900 focus:outline-none transition-colors duration-200'>
                            ADD KEEP
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

