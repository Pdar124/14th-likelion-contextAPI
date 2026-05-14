import React, {useState} from 'react'
import Counter from './Counter'
import ThemeContext from './ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
              <Counter> </Counter>
      </ThemeContext.Provider>
  );
};

export default App