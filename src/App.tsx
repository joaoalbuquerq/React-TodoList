import { useState } from 'react';
import {Item} from './types/Item'
import * as Components from './App.styles'
import { ListItem } from './components/ListItem';

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
          <ListItem key={index} item={item}/>
          
        ))}
      </Components.AreaTask>
    </Components.Container>
  );
}

export default App;