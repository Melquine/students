import React, { useEffect, useState } from "react"
import { Formik } from 'formik'
import { createStudent, updateStudentById, deleteStudentById } from "../../helpers/useData"

function Update({ setStatus, id, deleteStudent, updateStudent }) {

  const [showForm, setShowForm] = useState(false)
  const [text, setText] = useState('Edit')

  const handleShowForm = () => {
    console.log("first")
    setShowForm(show => !show)

  }

  const handleDeleteStudent = async(id) => {
    const result = await deleteStudentById(id)
    console.log('REsult..', result)
    if(result) {
        setStatus('success')
        deleteStudent(id)
    } else {
        setStatus('error')
    }
  }



  useEffect(() => {
    showForm ? setText('Cancel') : setText('Edit')
  }, [showForm])



    return (
      <>
        <Formik
          initialValues={{nombre: '', apellidos: ''}}
          validate={values => {
            const errors = {}
            if(!values.nombre) {
              errors.nombre = 'Required'
            }
            if(!values.apellidos) {
              errors.apellidos = 'Required'
            }
  
            return errors
  
          }}
  
          onSubmit={(values, { setSubmitting }) => {
              const result = updateStudentById(id, values, setSubmitting)
              setSubmitting(false)
              handleShowForm()
            if(result) {
                setStatus('success')
                updateStudent(id, values.nombre, values.apellidos)
                return
            }
              setStatus('error')

              

          }}
        >
  
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form 
            onSubmit={handleSubmit}
            >
              <div className="btns-cont">
              <button className="cancel-btn" type="button" onClick={() => handleShowForm()}>{text}</button>
              <button className="delete-btn" type="button" onClick={() => handleDeleteStudent(id)}>Delete</button>
              </div>

              {
                showForm ? 
                <div className="form-controls-update">
                <input
                  type='text'
                  name='nombre'
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.nombre && touched.nombre && errors.nombre}  
                <input
                  type='text'
                  name='apellidos'
                  placeholder="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apellidos}
                />
                {errors.apellidos && touched.apellidos && errors.apellidos}  
                <div className="cont-btn-update">
                    <button className="update-btn" type="submit" disabled={isSubmitting}>
                        Update
                    </button>
                </div>

                </div>
                :
                null
              }
             
             
            </form>
          )}
  
        </Formik>
  
      </>
    )
  }

export default Update