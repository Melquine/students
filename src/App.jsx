import { useState } from 'react'
import { Formik } from 'formik'
import Create from './components/Create/Create'
import FormikControl from './components/FormikControl'
import { getStudents } from './helpers/useData'
import Message from './components/Message/Message'

import './App.css'
import List from './components/List/List'

function App() {

  const [status, setStatus] = useState('')

  const [names, setNames] = useState({ isLoading: true, data: null })

  const [show, setShow] = useState(true)

  const getData = async() => {
    const data = await getStudents()

    setShow(false)
    data ? setNames({isLoading:false, data}) : setNames({isLoading:true, data: null})

  }

  const deleteStudent = (id) => {
    const newData = names.data.filter(el => el.id_alumno != id)
    names.data = [...newData]
  }

  const updateStudent = (id, nombre, apellidos) => {
    const newName = { nombre, apellidos }
    const newData = names.data.map(el => {
      if(el.id_alumno == id) {
        return {el, ...newName}
      }
      return el
    })
    names.data = [...newData]
  }

  return (
    <div className='full-cont'>
    {
      status ? 
      <Message
      status={status}
      setStatus={setStatus} />
      :
      null
    }
    <div className='cont'>
      <h1>App Students Information</h1>
      <div className='main-btns-cont'>
        <button onClick={() => setShow(true)}>New Student</button>
        <button onClick={() => getData()}>Get Students</button>
      </div>


      { show ? <Create setStatus={setStatus} /> : <List updateStudent={updateStudent} deleteStudent={deleteStudent} names={names.data} setStatus={setStatus} /> }
 
    </div>
    </div>
  )
}

export default App
