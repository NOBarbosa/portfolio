import style from './styles.module.scss';
import eu from '../../assets/eu.jpg';

export function About(){
  return(
    <div className={style.container}>
        <div>
          <p>Olá, eu me chamo Natália tenho 26 anos e sempre fui uma pessoa muito curiosa, Amo aprender e acredito que trabalhar em equipe com colaboração, equidade e diversidade de pessoas é a melhor forma de construir o futuro.  Foi com esse pensamento que eu ingressei no curso de Licenciatura em Matemática na UFBA entretanto minha paixão por linguagens fez com que minha vida tomasse outro rumo. O meu interesse na área de tecnologia deixou de ser uma mera curiosidade e em 2021 eu  decidi fazer uma transição de carreira e trocar de curso na faculdade. Hoje eu sou estudante de Estatística na UFBA e em Junho de 2021 fui selecionada dentre  23 mil participantes em um processo com 120 vagas oferecido pela Cubos Academy juntamente com o iFood  para estudar programação do zero</p>
        </div>
        <div className={style.info}>
          <img src={eu} alt='minha imagem'/>
          <div>
            <h2>Natália Oliveira</h2>
            <h2>nob.ufba@gmail.com</h2>
          </div>
        </div>
    </div>
)
}