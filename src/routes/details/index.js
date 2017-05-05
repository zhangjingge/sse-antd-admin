import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import style from'./index.less'
import { Tab1, Tab2, Tab3 } from './components'
import { connect } from 'dva'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

function Details({dispatch, details}){
  const { list } = details
  console.log(list);
  const { browser, comments, completed, cpu, numbers, quote, recentSales, sales, user} = list;
  console.log(browser);
  const children = [];
  browser && browser.map((item, index)=>{
    children.push(<li key={index}>{item.name}</li>)
  })
   return (
       <div className="content-inner">
        <Tabs type="card" className={style['me-tabs-bar']}>
          <TabPane tab="Tab 1111" key="1">
              <Tab1 data={browser} />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
               <Tab2 data={comments} />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
               <Tab3 data={completed} />
          </TabPane>
        </Tabs>
      </div>
    )
}

Details.propTypes = {
  details: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({details}) => ({details}))(Details)