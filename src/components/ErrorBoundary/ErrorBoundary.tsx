import React from 'react';
import s from './ErrorBoundary.module.scss';

interface IProps {
  children: React.ReactNode;
}
interface IState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(): Partial<IState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    console.error('Error caught in boundary: ', error, errorInfo);
  }

  handleClick = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={s['wrapper-error-message']}>
          <h2>Something went wrong...</h2>
          <details className={s.details}>
            {<summary>Details</summary>}
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
          <a href="/">Home</a>
          <button
            className="button light"
            onClick={this.handleClick}
            data-testid="clear-error"
          >
            Clear error
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
