
import { useState } from 'react'
import './App.css'
import Button from './Buttons'



function App() {
  const [added, setAdded] = useState(0)
  const [count, setCount] = useState([0])
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    // Toggle background color between white and blue
    setBackgroundColor(backgroundColor === 'white' ? 'blue' : 'white');
  };
  function additem(){

    const next = added + 1
    setCount([next, ...count])
    setAdded(next)
  }
  return (
    <div className='buttons'>
        <button onClick={additem} >add more</button>
        {count.map((item) =>
        <Button key={item} value={item}/>
        )}
    
       
    </div>
  )
}

export default App


/* This program show the use of key props in react
 . the little interface a button add more to add buttons 
 . you can add button and then click on them to change the color 
 . if you add new buttons React will be able to track the button if it has a key prop
 . you can try and see how its work by remove the key prop in the fileApp.jsx line 27 */