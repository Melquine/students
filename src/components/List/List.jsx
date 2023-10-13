import Update from "../Update/Update"

const List = ({names, setStatus, deleteStudent, updateStudent}) => {

    return (
        <ul>
            {names.map((el, index) => (
                
                <div key={index}>
                <li >
                    <h2>{`${el.nombre} ${el.apellidos}`}</h2>
                </li>
                <div className="form-cont">
                    <Update updateStudent={updateStudent} deleteStudent={deleteStudent} setStatus={setStatus} id={el.id_alumno}/>
                </div>                      
                </div>
            ))}
        </ul>
    )
}

export default List