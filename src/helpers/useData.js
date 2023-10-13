export const getStudents = async() => {
  try {
    const  data = await fetch('http://localhost:3000/api/alumnos/getAlumnos')
    const result = await data.json()

    if(result.length > 0){
      return result
    }
    return false

  } catch(error) {
    console.error(error)
    return false
  }

}

export const createStudent = async (values) => {
try {
  const response = await fetch('http://localhost:3000/api/alumnos/crearAlumno', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  })

  const data = await response.json()
  if (data.status == 200) {
    return true
  }
  return false
  
} catch (error) {
  console.error(error)
  return false
}
}

export const updateStudentById = async (id, values) => {
  try {
    const response = await fetch(`http://localhost:3000/api/alumnos/actualizarAlumno/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
  
    const data = await response.json()

  if (data.status == 200) {
      return true
    }

    return false
    
  } catch (error) {
    console.error(error)
    return false
  }
}

export const deleteStudentById = async(id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/alumnos/borrarAlumnoById/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
      
    })
  
    const result = response.status
    console.log(result)
    if(result == 204) {
      return true
    } 
    return false
    
  } catch(error) {
    console.error(error)
    return false
  }

}

