import React from 'react';
import classnames from 'classnames'
import QueueAnim from 'rc-queue-anim';

export default function Cmp(props: any) {
  const { img, content, imageAlign = 'right', style, className, ...restProps } = props;

  return (
    <QueueAnim className={classnames('banner', className)}
      style={{ ...style, flexDirection: imageAlign === 'left' ? 'row-reverse' : 'row' }}
      {...restProps}
      // type={['bottom', 'top']}
      delay={300}
    >

      <div className="intro-wrap" key="left">
        <div className="intro">
          {content}
        </div>
      </div>
      <div className="bannerimg" key="right">
        <img src={img} />
      </div>
    </QueueAnim>
  );
}
