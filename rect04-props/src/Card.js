import React,{PropTypes} from 'react';//引用多个组件

class Card extends React.Component{
  render(){
    let styles = {
      root:{
        width:'100%',
        maxWidth:'720px',
        margin:'0 auto',
        height:'100px',
        clear:'both',
        // backgroundColor:'blue'
        boxShadow: '0px 0px 10px  #888'
      },
      left:{
        width:'15%',
        height:'100px',
        lineHeight:'100px',
        textAlign:'center',
        backgroundColor:'#666',
        color:'white',
        fontWeight:'750',
        fontSize:'1.8em',
        float:'left'
      },
      right:{
        width:'85%',
        padding:'20px',
        float:'left',
        fontSize:'1.5em'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.left}>
          <span>{this.props.index}</span>
        </div>
        <div style={styles.right}>
          <h4 style={{paddingBottom:'10px'}}>{this.props.title}</h4>
          <p>{this.props.data}</p>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
  index:1,
  title:'请输入标题',
  data:'2017-5-16'
}
Card.propTypes = {//设置数据类型 PropTypes在开头引入
  index:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  data:PropTypes.string.isRequired,
}
export default Card;
