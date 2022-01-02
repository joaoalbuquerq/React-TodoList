import { useState } from 'react';

import * as Components from './App.styles'

const app = () => {

  const [list,setList] = useState([]);

  return (
    <Components.Container>
      <Components.AreaTask>
        <Components.Header> Lista de Tarefas</Components.Header>
      </Components.AreaTask>
    </Components.Container>
  )
}

export default app;