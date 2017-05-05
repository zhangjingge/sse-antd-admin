import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd';
import ConditionList from './ConditionList';

class MoreChecks extends React.Component {
  state = { 
    visible: false,
    checkedListTexts: []
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if (this.props.add) this.props.add(this.state.checkedListTexts);
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  textResponse(texts){
      this.setState({checkedListTexts : texts});
  }
  render() {
    const {text} = this.props;
    return (
      <span style={{ marginLeft: 8 }} >
        <Button type="primary" onClick={this.showModal}>{text}</Button>
        <Modal title="条件列表" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>目前选择：{this.state.checkedListTexts.join(',')}</p>
          <div><ConditionList checkedListTexts={this.textResponse.bind(this)}/></div>
        </Modal>
      </span>
    );
  }
}

MoreChecks.propTypes = {
  text: PropTypes.string,
  add: PropTypes.func,
}

export default MoreChecks
