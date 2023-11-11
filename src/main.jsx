import React, { } from 'react'
import ReactDOM from 'react-dom/client'
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
/* importando os elementos*/
import App from './App.jsx'
import Error from './Error.jsx'
import Home from './components/Home/home.jsx'
import Tech from './components/Pages/Tecnologias/tech.jsx'
import './css/index.css'

 /* criando a função createBrowser */
const router = createBrowserRouter([
  {
    /* chamando o elemento principal(pai) */
    path: '/', element: <App />,

    /*  chamando o elemento de erro*/
    errorElement: <Error />,
    /* chamando elementos filhos */
    children:[
      {path: '/', element:<Home />},
      {path:"/tech", element:<Tech />},

    ]
  }
])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       {/*chamando a função que será renderizada */}
      <RouterProvider router={router} />
    </React.StrictMode>,
  )