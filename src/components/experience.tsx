import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


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
        <div className="container flex flex-col md:mt-44 text-blue-500">
            <div className="flex flex-col items-center w-100 text-center p-10">
                <h1 className="text-4xl font-extrabold">Experiência profissional</h1>
            </div>
            <div className="flex flex-col gap-4">
                {experiences.map((experience, index) => (
                    <div className="border-4 rounded-sm border-white items-center p-3" 
                    key={index}>
                        <div onClick={() => handleClick(index)}
                        className="flex flex-row justify-between">
                            <h3 className="text-lg font-medium" >
                                {experience.title}
                            </h3>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        { activeIndex === index ? 
                          <div className="flex flex-col p-3 gap-3 max-w-80 justify-items-center">
                              <p>{experience.text}</p>
                              <div className="flex flex-row gap-3 text-white max-w-30em flex-wrap justify-center">
                                {experience.skills.map((skill, index) => 
                                <span className="bg-blue-500 p-2" 
                                key={index}>{skill}</span>
                                )}
                              </div>
                          </div> : ''
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}