import React from 'react';
import s from './ButtonError.module.scss';

interface State {
  hasError: boolean;
}
type Props = Record<string, never>;

class ButtonError extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state?.hasError) {
      throw new Error('Test error from button "Throw error"');
    }
    return (
      <button className={s['button-error']} onClick={this.handleClick}>
        Throw error
      </button>
    );
  }
}

export default ButtonError;
