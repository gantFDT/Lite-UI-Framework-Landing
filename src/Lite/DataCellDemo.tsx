
import React, { useState } from 'react';
import { notification } from 'antd'
import { Input } from 'gantd';
import Code from './Code'
import Prism from 'prismjs'

const Demo = () => {
  const [value, setValue] = useState('数据单元是读写分离的,点击右侧小笔进行编辑')
  const onSave = (id, value, cb) => {
    notification.open({
      message: '文本值',
      description: <pre className="language-json">
        <code>
          <div dangerouslySetInnerHTML={{
            __html: Prism.highlight(JSON.stringify({ value: value }), Prism.languages.json, 'json')
          }} ></div>
        </code >
      </pre >,
      duration: 0,
    })
    console.log(id, value);
    cb()
  }
  return <>
    <Input placeholder='可编辑' allowEdit={true} onSave={onSave} value={value} onChange={setValue} />
  </>
}

export default Demo