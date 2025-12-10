import React,{Fragment} from 'react'
import abx from './myphoto/myimg.jpg';

function Contactus() {

const a=50;
const myimg = "https://img.lovepik.com/bg/20240208/hd-landscape-wallpapers-hd-landscape-wallpapers-for-mobile-desktop-wallpaper_3181093_wh860.jpg!/fw/860";




  return (
    <Fragment>
      <div style={{backgroundColor:'orange',padding:'20px'}}>
        <h1 style={{'background-color':'red'}}>heading</h1>
        <p style={{fontSize:`${a}px`}}>this is </p>
        <h3 className='first'>sdfhsjdfhjsdfh</h3>
        <img src={myimg}/>
        <img src={abx}/>
        </div>
    </Fragment>
    
  )
}

export default Contactus