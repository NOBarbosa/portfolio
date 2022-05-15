import style from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink, Outlet, useNavigate} from 'react-router-dom'

export function Main(){
  const navigate = useNavigate()
    return(
            <div>
            <header className={style.header}>
                <NavLink to='/projects'> Projetos</NavLink>
                <h1 onClick={()=>navigate('/')}>Natália Oliveira</h1>
                <NavLink to='/about'>Sobre</NavLink>
            </header>
            <main className={style.main}>
                <Outlet/>
            </main>
            <footer><LinkedInIcon/></footer>
    </div>
    )
}