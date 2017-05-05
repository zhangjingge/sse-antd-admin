import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import styles from './tab1.less'
import { color } from '../../../utils'

const status = {
  1: {
    color: color.green,
  },
  2: {
    color: color.red,
  },
  3: {
    color: color.blue,
  },
  4: {
    color: color.yellow,
  },
}

function Tab1 ({ data }) {
  console.log('data',data);
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      className: styles.name,
    }, {
      title: 'percent',
      dataIndex: 'percent',
      className: styles.percent,
      render: (text, it) => <Tag color={status[it.status].color}>{text}%</Tag>,
    },
  ]
  return <Table pagination={false} showHeader={false} columns={columns} rowKey={(record, key) => key} dataSource={data} />
}

Tab1.propTypes = {
  data: PropTypes.array,
}

export default Tab1
