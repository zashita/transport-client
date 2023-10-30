import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import Theme from "./theme";
import {router} from "./routes/routes";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <Theme>
              <GlobalStyle/>
              <RouterProvider router = {router}/>
          </Theme>

  </React.StrictMode>,
)
