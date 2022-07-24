import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { SWRConfig } from 'swr';

import Theme from 'themes/Theme';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import { QueryConfig } from 'interfaces';

const fetcher = (args: QueryConfig) => axios(args.url, { params: args.params });

const App = () => (
  <SWRConfig value={{ fetcher }}>
    <Theme>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </SWRConfig>
);

export default App;
