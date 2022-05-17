import style from './styles.module.scss';

import { NavLink, Outlet, useNavigate} from 'react-router-dom'
import { Footer } from '../../components/Footer';

export function Main(){
  const navigate = useNavigate()
    return(
      <div className={style.container}>
            <header className={style.header}>
                <NavLink to='/projects'> Projetos</NavLink>
                <h1 onClick={()=>navigate('/')}>Natália Oliveira</h1>
                <NavLink to='/about'>Sobre</NavLink>
            </header>
            <main className={style.main}>
                <Outlet/>
            </main>
            <Footer />
    </div>
    )
}