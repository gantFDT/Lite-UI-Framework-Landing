import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
import { Icon } from 'antd'
export default function Header(props: any) {
  const [stick, setStick] = useState(false)

  const updateStick = () => {
    const winHeight = window.screen.height;
    const scrollTop = document.querySelector('html')['scrollTop']
    if (scrollTop > 50) {
      setStick(true)
    } else {
      setStick(false)
    }
  }

  // useEffect(() => {
  //   updateStick()
  //   document.addEventListener('scroll', updateStick)
  //   return () => {
  //     document.removeEventListener('scroll', updateStick)
  //   };
  // }, []);

  return (
    <>
      <header {...props}
        style={{
          position: stick ? 'fixed' : 'unset',
          backgroundImage: stick ? 'linear-gradient(45deg, #2E2D99 0%, #0F0F2D 100%)' : 'none',
          boxShadow: stick ? 'rgb(15, 15, 45) 0px 1px 1px' : 'none'
        }}>
        <div className="header-content">
          <div>
            <img className="logo" src={logo} />
            {/* <h1>
              <span>专注于数据密集型业务场景</span>
            </h1> */}
          </div>
          <div className='h1'>
            <span className="gant-margin-h-20"><a href="#datacell"><Icon type='book' theme='filled' /> 文档</a></span>
            <span className="gant-margin-h-20"><a href="#datacell"><Icon type='github' /> GITHUB</a></span>
          </div>
        </div>

      </header>
      {stick && <div style={{ height: 61 }}></div>}
    </>
  );
}
