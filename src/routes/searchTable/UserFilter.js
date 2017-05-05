import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { searchForm } from '../../utils'
import styles from './UserList.less'
import SearchModal from './SearchModal'

import { 
  Modal, Form, Input, Row, Col, Button, DatePicker, Checkbox, Icon,
  Select, InputNumber, Switch, Radio,Slider, Upload,
  Table, Breadcrumb,
  } from 'antd'
import moment from 'moment';
const FormItem = Form.Item
const Option = Select.Option
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
const RangePicker = DatePicker.RangePicker
const {defaultList, dialogList} = searchForm
console.log(defaultList, dialogList);

class AdvanceddefaultList extends React.Component {
  state = {
      childrenJson: defaultList,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const values = {
        ...fieldsValue,
        'range-picker-8': fieldsValue['range-picker-8'].format('YYYY-MM-DD'),
        'range-picker-81': fieldsValue['range-picker-81'].format('YYYY-MM-DD'),
      };
      console.log('Received values of form: ', values);
      if (this.props.onSearch) this.props.onSearch(values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  add = (arr) => {
    let childrenJsonAdd = [];
    console.log(arr);
    for(var i =0; i<arr.length; i++){
       for(var j =0; j<dialogList.length; j++){
           console.log(j,i);
           if(arr[i] == dialogList[j].name){
              defaultList.push(dialogList[j])
              continue;
           }
       }
    }
    this.setState({
      childrenJson: defaultList,
     });
    //this.state.childrenJson = [...defaultList, childrenJsonAdd];
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [];
    const childrenJson = this.state.childrenJson;
    /*for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i}>
          <FormItem {...formItemLayout} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`)(
              <Input placeholder="placeholder" />
            )}
          </FormItem>
        </Col>
      );
    }*/
    for (let i = 0; i < childrenJson.length; i++) {
        if(childrenJson[i].type == 'input'){
          children.push(
              <Col span={8} key={childrenJson[i].id} className={styles.ieheight}>
                <FormItem {...formItemLayout} label={`${childrenJson[i].name}`}>
                  {getFieldDecorator(`${childrenJson[i].id}`)(
                    <Input placeholder={`${childrenJson[i].name}`} />
                  )}
                </FormItem>
              </Col>
            );
        } else if(childrenJson[i].type == 'Single'&&childrenJson[i].selectList){
            const options = childrenJson[i].selectList.map((k) => {
              return (
                <Option key={k}>{k}</Option>
              );
            });
            children.push(
              <Col span={8} key={childrenJson[i].id} className={styles.ieheight}>
                <FormItem
                    {...formItemLayout}
                    label={`${childrenJson[i].name}`}
                  >
                    {getFieldDecorator(`select-${childrenJson[i].id}`)(
                      <Select placeholder={`${childrenJson[i].name}`}>
                        {options}
                      </Select>
                    )}
                  </FormItem>
              </Col>
            );
      } else if(childrenJson[i].type == 'multiple' && childrenJson[i].selectList){
            const options = childrenJson[i].selectList.map((k) => {
              return (
                <Option key={k}>{k}</Option>
              );
            });
            children.push(
              <Col span={8} key={childrenJson[i].id} className={styles.ieheight}>
                <FormItem
                  {...formItemLayout}
                  label={`${childrenJson[i].name}`}
                >
                  {getFieldDecorator(`select-multiple-${childrenJson[i].id}`, {
                      rules: [
                        {type: 'array' },
                      ],
                    })(
                    <Select mode="multiple" placeholder={`${childrenJson[i].name}`}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
            );
      } else if(childrenJson[i].type == 'Date'){
            children.push(
              <Col span={8} key={childrenJson[i].id} className={styles.ieheight}>
                <FormItem
                  {...formItemLayout}
                  label={`${childrenJson[i].name}`}
                >
                  {getFieldDecorator(`range-picker-${childrenJson[i].id}`)(
                    <DatePicker style={{width: '49%'}}/>
                  )}-{getFieldDecorator(`range-picker-${childrenJson[i].id}1`)(
                    <DatePicker style={{width: '49%'}}/>
                  )}
                </FormItem>
              </Col>
            );
      }
    }
    const searchModalList = {
      text: '更多选项',
      add: (arr) => {
        this.add(arr)
      },
    }
    return (
      <Form
        className={styles['ant-advanced-search-form']}
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {children}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
            <SearchModal {...searchModalList}/>
          </Col>
        </Row>
      </Form>
    );
  }
}



AdvanceddefaultList.propTypes = {
  size: PropTypes.string,
  select: PropTypes.bool,
  selectProps: PropTypes.object,
  onSearch: PropTypes.func,
  selectOptions: PropTypes.array,
  style: PropTypes.object,
  keyword: PropTypes.string,
}

export default Form.create()(AdvanceddefaultList)
