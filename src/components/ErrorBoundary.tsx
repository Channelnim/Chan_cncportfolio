import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#fcf9f5] px-6 text-center">
          <div className="max-w-md p-8 bg-white border border-[#16140d]/10 shadow-sm">
            <h2 className="font-serif text-2xl text-[#16140d] mb-4">Something went wrong</h2>
            <p className="text-sm text-[#16140d]/70 mb-6 font-light">
              An unexpected display error occurred. Please refresh to reload the page.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#16140d] text-[#fcf9f5] text-xs uppercase tracking-[0.2em]"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
