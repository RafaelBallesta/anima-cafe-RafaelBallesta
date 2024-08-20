import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Contacts} from './pages/Contacts'
import {PokemonElejido} from './pages/PokemonElejido'
import { useRouteError } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage'
import { PokeFav } from './pages/PokeFav'
import { Pokemon } from './pages/Pokemon'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts/:contactID",
    element: <Contacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokeFav",
    element: <PokeFav />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
    errorElement: <ErrorPage />,
},
{
  path: "/pokemon/:pokeID",
  element: <PokemonElejido />,
  errorElement: <ErrorPage />,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
