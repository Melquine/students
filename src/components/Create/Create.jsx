import React from "react"
import { Formik } from 'formik'
import { createStudent } from "../../helpers/useData"

import './Create.css'

function Create({ setStatus }) {

  return (
    <>
      <Formik
        initialValues={{ nombre: '', apellidos: '' }}
        validate={values => {
          const errors = {}
          if (!values.nombre) {
            errors.nombre = 'Required'
          }
          if (!values.apellidos) {
            errors.apellidos = 'Required'
          }

          return errors

        }}

        onSubmit={(values, { setSubmitting }) => {

          const result = createStudent(values)
          result ? setStatus('success') : setStatus('success')
          setSubmitting(false)

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
          <form onSubmit={handleSubmit}>

            <div className="form-controls">
              <label htmlFor="nombre">Name</label>
              <input
                type='text'
                name='nombre'
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
              />
              {errors.nombre && touched.nombre && errors.nombre}
              <label htmlFor="nombre">Lastname</label>
              <input
                type='text'
                name='apellidos'
                placeholder="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.apellidos}
              />
              {errors.apellidos && touched.apellidos && errors.apellidos}
              <button type="submit">Create</button>
            </div>
          </form>
        )}

      </Formik>

    </>
  )
}

export default Create