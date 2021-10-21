import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/addArea';

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    { id: 1, name: 'Correr', done: true },
    { id: 2, name: 'Nadar', done: false },
  ]);

  const handleAddTask = (taskname: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem 
            item={item} 
            key={index}
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;