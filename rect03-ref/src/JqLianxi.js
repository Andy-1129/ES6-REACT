import React from 'react';
// import $ from 'jquery';

class Eg extends React.Component{
  render(){
    let styles = {
      span:{border:'1px solid black',display:'block',float:'left',padding:'10px 20px'},
      zfx:{width:'50vw',height:'50vh',backgroundColor:'green',color:'white',clear:'both'}
    }
    return(
      <div>
        <div>
          <span style={styles.span}>显示</span>
          <span style={styles.span}>隐藏</span>
        </div>
        <div style={styles.zfx}>我是可伸缩的正方形</div>
      </div>
    )
  }
}

export default Eg;
