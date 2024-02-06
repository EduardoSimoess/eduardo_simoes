import { useContext, useState } from "react";

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const experiences = [
        {
            title: 'ESTOA - MAIO 2023 - DEZ 2023',
            text: `A ESTOA é uma startup voltada ao mercado financeiro, atuando em seguimentos diversos, desde venda de cursos a composição de carteira de investimentos.
            Atualmente estou alocado no desenvolvimento back end do novo site da empresa. As tecnologias com as quais mais trabalho no cotidiano são node.js com o auxílio de TypeScript e as informações são armazenadas em banco de dados MySql2.
            Também estou inserido no desenvolvimento do portal da empresa, onde trabalho com as mesmas tecnologias e com o framework nest.js.
            A definição das metas é realizada durante as dailys e seu acompanhamento  é feito com o auxílio do trello.`,
            skills: ['Node.js', 'MySql2', 'TypeScript', 'AWS', 'Nest.js', 'React']
        },

        {
            title: 'ONG palavras de paz - JAN 2023 - MAIO 2023',
            text: `A ONG Palavras de Paz é uma organização focada em disseminar a ideologia Prem Rawat, através do programa 'Educação para a paz'.
            Afim de melhorar o relacionamento com clientes e voluntários, o time de web está focado no desenvolvimento de uma plataforma que atenda às necessidades de ambos. 
            Ali fiquei alocado na área de back end. Nosso código é construído em Node.js e TypeScript, focando em orientação a objetos (o que me deu embasamento para mau cargo na ESTOA). O banco de dados foi usa MySql2 e os testes foram feitos com o auxílio do Jest.
            As demandas são definidas em sprints semanais e a organização da nossa evolução é controlada com o auxílio do Kanban.`,
            skills: ['Node.js', 'MySql2', 'TypeScript', 'Nest.js']
        }
    ]

    const handleClick = (index: number | null) => {
        setActiveIndex(index);
    }

    return(
        <div>
            <div>
                <h1>Experiência profissional</h1>
            </div>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <h3 onClick={() => handleClick(index)}>{experience.title}</h3>
                        { activeIndex === index ? 
                          <div>
                              <p>{experience.text}</p>
                              {experience.skills.map((skill, index) => <span key={index}>{skill}</span>)}
                          </div> : ''
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}