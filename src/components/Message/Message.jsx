import React, { useEffect } from 'react'

function Message({status, setStatus}) {
    const styleMsg = {
        backgroundColor: status == "success" ? "#5cb85c" : "#DC3545",
        color: "white",
        padding: "10px",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        with: "100%"
    }
    useEffect(() => {
        setTimeout(() => {
            setStatus('')
        }, 5000)
    },[])
  return (
    <div className='msg' style={styleMsg}>{status.toUpperCase()}</div>
  )
}

export default Message