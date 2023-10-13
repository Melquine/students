/* const dropDownOptions = [
  { key: 'Select an option', value: ''},
  { key: 'Create Student', value: 'create'},
  { key: 'Get all Students', value: 'get'},

] */
<Formik

initialValues={{select: ''}}
/*         validate={values => {
  const errors = {}
  if(!values.select) {
    errors.select = 'Required'
  }
  return errors
}} */

onSubmit={(values, { setSubmitting }) => {
  alert(values)
  const createStudent = async() => {
    const response = await fetch('http://localhost:3000/api/alumnos/crearAlumno', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    const data = await response.json()
    console.log(data)
  }

  const getStudents = async() => {
    const  data = await fetch('http://localhost:3000/api/alumnos/getAlumnos')
    const result = await data.json()
    console.log(result)
    // setNames({isLoading:false, data: result})
  }

  setTimeout(() => {
    const getStudents = async() => {
      const  data = await fetch('http://localhost:3000/api/alumnos/getAlumnos')
      const result = await data.json()
      console.log(result)
    }

    const createStudent = async() => {
      const response = await fetch('http://localhost:3000/api/alumnos/crearAlumno', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })

      const data = await response.json()
      console.log(data)
    }

    const getStudentById = async() => {
      const response = await fetch(`http://localhost:3000/api/alumnos/getAlumnoById/${5}`)
      const data = await response.json()
      console.log(data)
    }

    const updateStudentById = async() => {
      const response = await fetch(`http://localhost:3000/api/alumnos/actualizarAlumno/${1}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })

      const data = await response.json()
      console.log(data)
    }
    // borrarAlumnoById/:id
    const deleteStudentById = async() => {
      const response = await fetch(`http://localhost:3000/api/alumnos/borrarAlumnoById/${15}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
        
      })

      const result = response.status
      console.log(result)
    }

    deleteStudentById()

    // updateStudentById()
    //getStudentById()
    //createStudent()
    //getStudents()
    setSubmitting(false);
  }, 400);
  

  switch (action) {
    case 'create':
      createStudent(); break;
    case 'get':  
      alert();
  }

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
    <FormikControl
      control='select'
      label='select a topic'
      name='selectOption'
      handleState={handleState}
      options={dropDownOptions}
    />
    {
      action == 'create' ? (
        <>
          <FormikControl
          control='input'
          label='Name'
          name='nombre'
        />
        <FormikControl
          control='input'
          label='Name'
          name='apellidos'
        />
        </>

      )
      :
      (
        <div>
        Get
      </div>
      )
    }
    {errors.name && touched.name && errors.name}  

    <button type="submit" disabled={isSubmitting}>
     Submit
   </button>
  </form>
)}

</Formik>

    {
      !names.isLoading ? <div>Listo</div>:<div>NO</div>
    }