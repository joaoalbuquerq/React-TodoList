import { useState } from 'react';
import {Item} from './types/Item'
import * as Components from './App.styles'

const App = () => {

  const [list,setList] = useState<Item[]>([
    {id:1,name:'Comprar pão',done:false},
    {id:2,name:'Estudar React',done:false},
  ]);

  return (
    <Components.Container>
      <Components.AreaTask>
        <Components.Header> Lista de Tarefas</Components.Header>


        {list.map((item,index) =>(
          <div>{item.name}</div>
        ))}
      </Components.AreaTask>
    </Components.Container>
  );
}

export default App;