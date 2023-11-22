import {useState} from 'react'

function TodoForm({addTodo}) {

    const[value, setValue] = useState('')
    const[category, setCategory] = useState('')

    const hadleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return
        //add todo
        addTodo(value, category);
        // limpar campos
        setValue('');
        setCategory('');
    }

  return (
    <div className='todo-form'>
        <h2>
            Criar Tarefa:
        </h2>
        <form onSubmit={hadleSubmit}>
            <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione Uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm