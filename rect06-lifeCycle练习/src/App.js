import React from 'react';

import Timer from './Timer.js';
import PictureCicle from './pictureCicle.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Timer />
        <PictureCicle />
      </div>
    )
  }
}
export default App;
