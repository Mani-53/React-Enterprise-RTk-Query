import './App.css'
import Counter from './features/counter/Counter'
import Todos from './features/todos/Todos'
import { useGetproductnameQuery } from './services/products/product'
import Recipes from './Recipes'
import Jsontodos from './Jsontodos'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
function App() {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
    </div>
  )
}

export default App
