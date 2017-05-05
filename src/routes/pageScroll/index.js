import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Affix, Button } from 'antd'
import { config } from '../../utils'
import styles from './index.less'

function scrollContent(){
    /*$('window').scroll(function(){
      console.log(document.documentElement.scrollTop || document.body.scrollTop)
    })*/
    function clickLi(event, num){
      const arr = ['债券信息','发行信息','受托管理信息','日期信息','债券信息1','债券信息2','债券信息3']
      console.log(event.target.innerHTML);
      const targetTag = $(event.target);
      const target = $('.'+styles.detail);
      for (var i = 0; i < target.length; i++) {
        console.log($(target[i]).offset().top);
        const detailOffseTop = $(target[i]).offset().top;
        if(arr[i] == targetTag.html()){
          $(window).scrollTop(detailOffseTop);
        }
      }
    }
    return (
        <div className='content-inner'>
          <Row className={styles['scroll-content']}>
            <Col span={20} push={4} className={styles['detail-list']}>
               <div className={styles.detail}>
                    <h3>个债信息1</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息2</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息3</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息4</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息5</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息6</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
                <div className={styles.detail}>
                    <h3>个债信息7</h3>
                    <Row>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                      <Col span={8}>
                          <span>债券代码：</span>
                          <span>大叔的哈苏</span>
                      </Col>
                    </Row>
                </div>
            </Col>
            <Col span={4} pull={20}>
               <div>
                 <Affix>
                   <h3>个债信息导航</h3>
                   <ul className={styles['nav-ul']}>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>债券信息</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>发行信息</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>受托管理信息</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>日期信息</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>债券信息1</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>债券信息2</a></li>
                       <li><a href="javascript:;" onClick={clickLi.bind(this)}>债券信息3</a></li>
                   </ul>
                 </Affix>
               </div>
            </Col>
          </Row>
        </div>
      )
}

scrollContent.propTypes = {
  dispatch: PropTypes.func,
}

export default scrollContent
