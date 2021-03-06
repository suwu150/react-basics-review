/*
 * @file component ItemEditor
 */

/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

class ItemEditor extends React.Component {
  render() {
    const { onSave, onCancel } = this.props;

    const item = this.props.item || {
      title: '',
      content: '',
    };

    const saveText = item.id ? '保存' : '创建';

    const save = () => {
      onSave({
        ...item,
        title: this.refs.title.value,
        content: this.refs.content.value,
      });
    };

    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={save} className="btn btn-success">{saveText}</button>
          <button onClick={onCancel} className="btn secondary">取消</button>
        </div>
        <div className="edit-area">
          <input ref="title" placeholder="请填写标题" defaultValue={item.title} />
          <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
        </div>
      </div>
    );
  }
}

ItemEditor.propTypes = propTypes;

export default ItemEditor;
