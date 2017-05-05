import React, { Component } from 'react';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['发行方式111', '企业性质222', '企业性质333'];
const defaultCheckedList = [];

class ConditionList extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    );
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
    this.props.checkedListTexts(checkedList)
    console.log(checkedList);
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
    this.props.checkedListTexts(checkedList)
    console.log(checkedList);
  }
}

export default ConditionList;
