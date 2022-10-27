import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MegaSena from '../pages/MegaSena'

const Router = () => {
 return(
  <BrowserRouter>
  <Routes>
    <Route  exact path={'/'} element={<MegaSena/>}/>
  </Routes>
</BrowserRouter>
 )
}

export default Router;
