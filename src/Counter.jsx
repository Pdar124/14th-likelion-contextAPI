//Counter.jsx
import React, {useState} from 'react'
import ThemeContext from './ThemeContext';

const Counter = () => {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div className={`flex flex-col p-10 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'}`}>
	    <h1 className='text-3xl font-bold mb-4'>Counter</h1>
	    <p className='text-2xl'>{count}</p>
	    <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={() => setCount(count + 1)}>
	      Increase
	    </button>
	    <button className='bg-gray-500 text-white px-4 py-2 rounded mt-4' onClick={() => setCount(0)}>
	      Reset
	    </button>
	    <button className='bg-red-500 text-white px-4 py-2 rounded mt-4' onClick={() => setCount(count - 1)}   >
	        Decrease
	    </button>
		<button className='bg-green-500 text-white px-4 py-2 rounded mt-4' onClick={setTheme}>
			Toggle Theme
		</button>
    </div>
  )
}

export default Counter