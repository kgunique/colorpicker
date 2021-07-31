import React,{useState} from 'react'

const Color = () => {
    const [col,setCol] = useState('#ffffff')
    const randomColor = ()=>{
        const chColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setCol(chColor);
    }
    return (
        <>
            <div className="container" style={{backgroundColor:`${col}`,minHeight:'100vh',overflow:'hidden'}}>
                <h1 style={{color:'#fff'}}>{col}</h1>
                <button onClick={randomColor}>Change Color</button>
                <button onClick={()=>navigator.clipboard.writeText(col)}>Copy Color Hex Value</button>
            </div>
        </>
    )
}

export default Color
