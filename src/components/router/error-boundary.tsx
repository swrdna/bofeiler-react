import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  isPageNotFound?: boolean;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.props.isPageNotFound) {
      return (
        <div>
          <h1>404</h1>
          <p>Sorry, the page that you are looking for is not found.</p>
        </div>
      );
    }

    if (this.state.hasError) {
      return (
        <div>
          <h1>500</h1>
          <p>Sorry, something went wrong. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
