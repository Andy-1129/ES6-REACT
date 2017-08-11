import React from 'react';
import ReactDom from 'react-dom';

class Banner extends React.Component{
  render(){
    let styles = {
      root:{
        width: '80px',
        height: '30px',
        border:'1px solid red',
        marginBottom: '10px'
      },
      p:{
        fontSize:'20px'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.p}>中部</p>
      </div>
    )
  }
}

export default Banner;
