import { useState } from 'react';
import { Item } from './types/Item'
import * as Components from './App.styles'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Estudar React', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name:taskName,
      done:false
    })

    setList(newList)
  }

  return (
    <Components.Container>
      <Components.AreaTask>
        <Components.Header> Lista de Tarefas</Components.Header>

        <AddArea onEnter = {handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />

        ))}
      </Components.AreaTask>
    </Components.Container>
  );
}

export default App;