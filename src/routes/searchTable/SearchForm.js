import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { searchForm } from '../../utils'

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

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      if (this.props.onSearch) this.props.onSearch(values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    // To generate mock Form.Item
    const children = [];
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
    for (let i = 0; i < searchForm.length; i++) {
        if(searchForm[i].type == 'input'){
          children.push(
              <Col span={8} key={searchForm[i].id} className="ieheight">
                <FormItem {...formItemLayout} label={`${searchForm[i].name}`}>
                  {getFieldDecorator(`${searchForm[i].id}`)(
                    <Input placeholder={`${searchForm[i].name}`} />
                  )}
                </FormItem>
              </Col>
            );
        } else if(searchForm[i].type == 'Single'&&searchForm[i].selectList){
            const options = searchForm[i].selectList.map((k) => {
              return (
                <Option key={k}>{k}</Option>
              );
            });
            children.push(
              <Col span={8} key={searchForm[i].id}>
                <FormItem
                    {...formItemLayout}
                    label={`${searchForm[i].name}`}
                  >
                    {getFieldDecorator(`select-${searchForm[i].id}`)(
                      <Select placeholder={`${searchForm[i].name}`}>
                        {options}
                      </Select>
                    )}
                  </FormItem>
              </Col>
            );
      } else if(searchForm[i].type == 'multiple' && searchForm[i].selectList){
            const options = searchForm[i].selectList.map((k) => {
              return (
                <Option key={k}>{k}</Option>
              );
            });
            children.push(
              <Col span={8} key={searchForm[i].id}>
                <FormItem
                  {...formItemLayout}
                  label={`${searchForm[i].name}`}
                >
                  {getFieldDecorator(`select-multiple-${searchForm[i].id}`, {
                      rules: [
                        {type: 'array' },
                      ],
                    })(
                    <Select mode="multiple" placeholder={`${searchForm[i].name}`}>
                      {options}
                    </Select>
                  )}
                </FormItem>
              </Col>
            );
      } else if(searchForm[i].type == 'Date'){
            children.push(
              <Col span={8} key={searchForm[i].id}>
                <FormItem
                  {...formItemLayout}
                  label={`${searchForm[i].name}`}
                >
                  {getFieldDecorator(`range-picker-${searchForm[i].id}`)(
                   <DatePicker />
                  )}
                </FormItem>
              </Col>
            );
      }
    }


    const expand = this.state.expand;
    const shownCount = expand ? children.length : 6;
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={40}>
          {children}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}



AdvancedSearchForm.propTypes = {
  size: PropTypes.string,
  select: PropTypes.bool,
  selectProps: PropTypes.object,
  onSearch: PropTypes.func,
  selectOptions: PropTypes.array,
  style: PropTypes.object,
  keyword: PropTypes.string,
}

export default Form.create()(AdvancedSearchForm)
