import { useState } from 'react';
import style from './styles.module.scss';
export function Home(){
    const [show, setShow] = useState(false);

    const handleClick = () =>{
        console.log(show)
        setShow(!show)
    }
    return(
        <div className={style.container}>
            <div>
                <h2>Desenvolvedora Fullstack Junior</h2>
            </div>
            <div className={style.tech}>
                    <button onClick={()=>handleClick()} >Tecnologias</button>
                <ul className={show ? style.visible : style.notVisible}>
                    <li>HTML</li>
                    <li>CSS, SCSS</li>
                    <li>JavaScript Es6+</li>
                    <li>React</li>
                    <li>React-router-dom v6</li>
                    <li>API REST</li>
                    <li>Material-ui</li>
                    <li>Nodejs</li>
                    <li>express</li>
                    <li>scrum</li>
                </ul>
            </div>
        </div>
    )
}