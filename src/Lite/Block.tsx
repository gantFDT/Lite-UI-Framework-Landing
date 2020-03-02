import React from 'react';
import classnames from 'classnames'


export default function Cmp(props: any) {
  const { title, data, extra, span = 3, style, className, ...restProps } = props;

  return (
    <div className={classnames('block', className)} style={...style} {...restProps}>
      <div className="title">
        {title}
      </div>
      <div className="block-body" style={{}}>
        {data.map((item: object, index: number) => <div className="block-item" style={{ flex: `0 0 ${100 / span}%` }} key={item['title'] + index}>
          <img src={item['img']} />
          <div className="block-title">
            {item['title']}
          </div>
          <div className="block-content">
            {item['content']}
          </div>
        </div>)}
      </div>
      {extra}
    </div>
  );
}
