import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './styles.module.scss';

export function Footer(){
  return(
    <div>
      <footer className={style.footer}>
              <a href='https://www.linkedin.com/in/nobarbosa/' target='_blank' rel="noreferrer"><LinkedInIcon /></a>
              <a href='https://github.com/NOBarbosa' target='_blank' rel="noreferrer"><GitHubIcon/></a>  
            </footer>
    </div>
  )
}