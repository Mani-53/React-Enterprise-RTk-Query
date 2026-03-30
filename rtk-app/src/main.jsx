import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter.jsx'
import Todos from './features/todos/Todos.jsx'
import Recipes from './Recipes.jsx'
import Products from './Products.jsx'
import Productdetails from './Productdetails.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Jsontodos from './Jsontodos.jsx'
import Recipesdetails from './Recipesdetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "counter",
        element: <Counter />
      },
      {
        path: "todos",
        element: <Todos />
      },
      {
        path: "/recipes",
        element: <Recipes />,
        children: [
          {
            path: "recipesdetails/:id",
            element: <Recipesdetails />
          }
        ]
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "productdetails/:id",
            element: <Productdetails />
          }
        ]
      },
      {
        path: "/jsontodos",
        element: <Jsontodos />
      },

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
