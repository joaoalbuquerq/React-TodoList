import * as C from '../AddArea/styles'

export const AddArea = () => {

    return (
        <C.ContainerArea>
            <div className='image'>➕</div>
            <input type="text" placeholder='Adicionar uma tarefa'/>
        </C.ContainerArea>
    )
}