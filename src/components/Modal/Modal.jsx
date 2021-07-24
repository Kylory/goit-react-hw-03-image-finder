import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  // Додає EventListener для відстеження натискання кнопок
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDowm);
  }

  // Прибирає EventListener для відстеження натискання кнопок
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDowm);
  }

  //Закриває модалку при натисканні кнопки Escape
  handleKeyDowm = e => {
    if (e.code === 'Escape') {
    this.props.closeModal();
    }
  };

  //Закриває модалку при кліку в оверлей
  handleClick = e => {
    if (e.target === e.currentTarget) {
    this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.largeimageurl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeimageurl: PropTypes.string.isRequired,
};

export default Modal;
