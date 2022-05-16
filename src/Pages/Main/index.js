import style from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink, Outlet, useNavigate} from 'react-router-dom'

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
            <footer className={style.footer}>
              <a href='https://www.linkedin.com/in/nobarbosa/' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
              <a href='https://github.com/NOBarbosa' target='_blank' rel="noreferrer"><GitHubIcon/></a>  
            </footer>
    </div>
    )
}