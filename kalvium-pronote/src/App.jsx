import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [store, setStore] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value)
  }

  const handleClick = () => {
    let data = [...store, input]
    setStore(data)
  }

  const deleteItem = (id) => {
    let deletedArr = store.filter((ele, index) => {
      return index !== id;
    })
    setStore(deletedArr);
  }

  const handleUpdate = (id) => {
    let show = prompt("Enter")
    let update = store.map((ele, index) => {
      if(id == index){
        return show;
      }else{
        return ele
      }
    })
    setStore(update)
  }

  return (
    <div className='flex'>
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add Item</button>
      <div className='content'>
        {
          store.map((ele, index) => {
            return(
              <div key={index} style={{display:'flex'}}>
                <h3>{ele}</h3>
                <button onClick={() => {deleteItem(index)}}>Delete</button>
                <button onClick={() => {handleUpdate(index)}}>Update</button>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default App;