import React from 'react';
import ReactDom from 'react-dom';

import Img2 from './img/2.jpg';

class Footer extends React.Component{
  styles(){
    return{
      root:{
        border:'1px solid red',
      },
      img:{
        borderRadius:'50%'
      }
    }
  }
  render(){
    let styles = this.styles();
    return(
      <div style={styles.root}>
        <p style={{color:'white'}}>尾部</p>
        <img src={Img2} style={styles.img}/>
      </div>
    )
  }
}

export default Footer;
