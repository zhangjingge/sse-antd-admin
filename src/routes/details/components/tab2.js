import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import styles from './tab1.less'
import { color } from '../../../utils'

function Tab1 ({ data }) {
  console.log('data',data);
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    }, {
      title: 'date',
      dataIndex: 'date',
    }, {
      title: 'avatar',
      dataIndex: 'avatar',
    },
  ]
  return <Table pagination={false} showHeader={false} columns={columns} rowKey={(record, key) => key} dataSource={data} />
}

Tab1.propTypes = {
  data: PropTypes.array,
}

export default Tab1
