import { NextComponentType } from "next";
import styles from '../styles/openSouce.module.css'

interface openSource{
    image:string
    title:string
    introduce:string
    status:string
    github?:string
    preview?:string
}

const OpenSouce:NextComponentType =(props:openSource)=>{
    return (
        <div className={styles.content}></div>
    )
}

export default OpenSouce
