import { Circle, Trash } from "@phosphor-icons/react";

export function List() {
    return(
        <div>
            <div>
                <div>
                    <p>tarefas Criadas</p>
                    <p>6</p>
                </div>
                <div>
                    <p>Concluidas</p>
                    <p> 2 de 6</p>
                </div>
            </div>

            <div>
                <div>
                    <Circle/>
                    <p>Tenho que lavar a louça</p>
                </div>
                <Trash/>
            </div>
        
        </div>
    )
}