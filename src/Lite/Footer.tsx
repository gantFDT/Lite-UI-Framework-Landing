import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
import { Col, Row } from 'antd'
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;
import GantImg from './images/gant.png'


export default function Footer(props: any) {

  const span = { md: 8, sm: 24, xs: 24 }

  return (
    <>
      <footer className="footer" {...props}
      >
        <div className="full-width" style={{ padding: 50 }}>
          <Row>
            {/* <ScrollOverPack key="3132342"> */}
            <QueueAnim
              key="queue"
              type={['bottom', 'top']}
              delay={200}
            >
              <Col key="a" {...span}>
                <img src={logo} style={{ height: 40 }} />
                <div>专注于数据密集型业务场景</div>
              </Col>
              {/* <Col key="b" {...span}>

                <div className="title">
                  首页
              </div>
                <div className="link">
                  <a href="#datacell">数据单元</a>
                </div>
                <div className="link">
                  <a href="#form">表单</a>
                </div>
                <div className="link">
                  <a href="#table">表格</a>
                </div>
              </Col> */}
              <Col key="c" {...span}>
                <div className="title">
                  链接
              </div>
                <div className="link">
                  <a href="https://www.yuque.com/favori/sccf5s/quickstart" target="_blank">文档</a>
                </div>
                <div className="link">
                  <a href="https://github.com/gantFDT/lite-ui-framework" target="_blank">GITHUB</a>
                </div>
                <div className="link">
                  <a href="http://gant.design" target="_blank">GantD</a>
                </div>
                <div className="link">
                  <a href="https://ant.design" target="_blank">AntD</a>
                </div>
              </Col>
            </QueueAnim>
            {/* </ScrollOverPack> */}
          </Row>

        </div >
        <div style={{ borderTop: '1px solid rgba(128,128,128,0.3)', marginTop: 30, padding: 10, textAlign: 'center' }}>
          Made By <a href="https://github.com/gantFDT" target="_blank" style={{ display: 'inline-block', color: '#fff' }}>😜 Gant FDT</a> |  Sponsor by<a href="https://www.gantsoftware.com/" target="_blank" style={{ display: 'inline-block', color: '#fff' }}><img src={GantImg} style={{ width: 40, display: 'inline-block' }} />
            <p style={{ fontWeight: 'bold', display: 'inline-block' }}>GantSoftware</p>
          </a>
        </div>
        <div style={{ borderTop: '1px solid rgba(128,128,128,0.3)', padding: 10, textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold', display: 'inline-block' }}>甘棠软件系统（上海）有限公司的版权所有</p>
          <p style={{ fontWeight: 'bold', display: 'inline-block', margin: '0 10px' }}> | </p>
          <a href="http://www.beian.miit.gov.cn" target="_blank" style={{ display: 'inline-block', color: '#fff' }}>
            <p style={{ fontWeight: 'bold', display: 'inline-block' }}>沪ICP备15000245号-3</p>
            <p style={{ fontWeight: 'bold', display: 'inline-block', margin: '0 10px' }}> | </p>
            <p style={{ fontWeight: 'bold', display: 'inline-block' }}>http://www.beian.miit.gov.cn</p>
          </a>
        </div>
      </footer>
    </>
  );
}
