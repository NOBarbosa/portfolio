import style from './styles.module.scss';
import logo from '../../assets/logoPropofando.png'

export function Project(){
    return(
        <div className={style.container}>
            <img src={logo} alt='logo' />
            <h3>O projeto</h3>
            <p>Manuela Carvalhal é Anestesiologista e CEO do Propofando, uma empresa de mentorias com o objetivo de guiar pessoas da área de Medicina a conquistarem o Título Superior em Anestesiologia (TSA). A empresa já atingiu a marca de mais de 100 mentorados com 81% de aprovação no TSA Oral.

            A plataforma será um meio essencial para que os mentorados possam testar suas habilidades e conhecimentos criando simulados personalizados com questões de diversas categorias e acompanhando as estatísticas do seu desempenho.

            MVP (Mínimo Produto Viável)
            O conceito do MVP é lançar um produto de baixo custo com funcionalidades básicas para validar a aderência dele e se vai existir uma demanda. Com isso, nesse projeto não passamos pela fase de pesquisas e testes, pois, a ideia agora é explorar o potencial do produto com ele já em funcionamento.</p>

            <h2>Escopo do projeto</h2>
            <h3>Admin (Propofando)</h3>
            <p>
              1. Login: Admin — Usuário único.
              .2 CRUD de usuários: O administrador fará o cadastro manual de novos usuários na plataforma.
              3. CRUD de categorias de questões: Cada questão pertence a uma categoria definida pelo administrador.
              4. CRUD de questões: Categoria da questão, título, descrição e explicação da questão, alternativas de múltipla escolha com predefinição da resposta correta e vídeo ou imagem anexo a questão.
              5. Pesquisa de questões no banco de questões
              6. Pesquisa de categorias no banco de categorias
              7. Estatísticas: Porcentagem de desempenho geral do aluno.
            </p>
        </div>
    )
}