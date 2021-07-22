import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowm);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowm);
  }

  handleKeyDowm = e => {
    this.props.closeModal(e);
  };

  render() {
    return (
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">
          <img src={this.props.largeimageurl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
