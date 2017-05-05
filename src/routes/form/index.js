import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Form, Row, Col, Input, Button, Icon } from 'antd'
import { config } from '../../utils'
import styles from './index.less'

const FormItem = Form.Item

const FormList = ({
  formList,
  dispatch,
  form: {
    getFieldDecorator,
    validateFields,
    resetFields,
  },
}) => {

  /*function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }*/
  function handleSearch(e){
    e.preventDefault();
    validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  function handleReset(){
    resetFields();
  }
  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };
  const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      );
    }
  return (
    <Form
        className="ant-advanced-search-form"
        onSubmit={handleSearch}
      >
        <Row gutter={40}>
          {children}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" size='large'>提交</Button>
            <Button style={{ marginLeft: 8 }} onClick={handleReset} size='large'>
              清空
            </Button>
          </Col>
        </Row>
      </Form>
  )
}

FormList.propTypes = {
  form: PropTypes.object,
  formList: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ formList }) => ({ formList }))(Form.create()(FormList))
