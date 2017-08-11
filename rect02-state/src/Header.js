import React from 'react';
import ReactDom from 'react-dom';

class Header extends React.Component{
  render(){
    let styles = {
      root:{
        width: '50px',
        height: '20px',
        border:'1px solid red',
        marginBottom: '10px'
      },
      p:{
        fontSize:'16px'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.p}>头部</p>
      </div>
    )
  }
}

export default Header;
