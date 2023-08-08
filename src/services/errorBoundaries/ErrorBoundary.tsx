import React from "react";

interface Props {
  fallback: React.ReactNode;
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const fallback = <div>{this.props.fallback}</div>;
      return fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
