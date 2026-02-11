import React from "react";
interface myButtonProps {
    text:string;
    onClick:()=>void;
}
const MyButton: React.FC<myButtonProps> = (props)=>{
    const {text,onClick} = props
    return <button onClick={onClick}>{text}</button>
}
export default MyButton