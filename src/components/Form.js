import React, {useState,useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export default function Form() {
 const [value, setValue] = useState('')
 const alert = useContext(AlertContext)
 const firebase = useContext(FirebaseContext)

 const submitHandler=(e)=>{
    e.preventDefault()

    if(value.trim()){
      firebase.addNote(value.trim()).then(()=>{
        alert.show('Нотатка створена','success')
      }).catch(()=>{
        alert.show('Щось пішло не так(','danger')
      })
      setValue('')
    }else {
      alert.show("Введіть текс нотатки")
    }
 }
    return (
        <div>
            <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={e=>setValue(e.target.value)}
        />
      </div>
    </form>
        </div>
    )
}
