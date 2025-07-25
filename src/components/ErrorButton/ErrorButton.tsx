import React from 'react';

interface State {
  hasError: boolean;
}
type Props = Record<string, never>;

class ErrorButton extends React.Component<Props, State> {
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
      <button
        className="button error"
        onClick={this.handleClick}
        data-testid="error-boundary"
      >
        Throw error
      </button>
    );
  }
}

export default ErrorButton;
