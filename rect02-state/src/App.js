import React from 'react';
import ReactDom from 'react-dom';

import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Xxk from './Xuanxiangka';
import Xxk2 from './Xuanxiangka02';
import Cbl from './Cebianlan';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Banner />
        <Footer />
        <Xxk />
        <Xxk2 />
        <Cbl />
      </div>
    )
  }
}

export default App;
