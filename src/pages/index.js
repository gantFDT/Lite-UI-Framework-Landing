import Home from '../Lite';
// import QueueAnim from 'rc-queue-anim';
// import ScrollAnim from 'rc-scroll-anim';
// import TweenOne from 'rc-tween-one';
// const ScrollOverPack = ScrollAnim.OverPack;

// import { OverPack } from 'rc-scroll-anim';
// import TweenOne from 'rc-tween-one';
// import QueueAnim from 'rc-queue-anim';

import favicon from '../Lite/images/favicon.ico'
const updateFavicon = (img) => {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = img;
  document.getElementsByTagName('head')[0].appendChild(link);
}
const updateTitle = (title) => {
  document.title = title
}
updateFavicon(favicon)
updateTitle('Lite-UI-Framework | 专注于数据密集型业务场景')
export default function () {
  return (
    <Home />
    // <div style={{height:5000}}>
    //   <OverPack style={{ overflow: 'hidden', height: 200 }} >
    //     <TweenOne key="0" animation={{ opacity: 1 }}
    //       className="code-box-shape"
    //       style={{ opacity: 0, marginBottom: 10 }}
    //     />
    //     <QueueAnim key="queue"
    //       leaveReverse
    //       style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
    //     >
    //       <div key="a" className="code-box-shape queue-anim-demo" />
    //       <div key="b" className="code-box-shape queue-anim-demo" />
    //       <div key="c" className="code-box-shape queue-anim-demo" />
    //       <div key="d" className="code-box-shape queue-anim-demo" />
    //       <div key="e" className="code-box-shape queue-anim-demo" />
    //       <div key="f" className="code-box-shape queue-anim-demo" />
    //     </QueueAnim>
    //   </OverPack>
    // </div>
  );
}
