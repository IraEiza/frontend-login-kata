import { Component } from "react";
import * as Sentry from "@sentry/react";

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log('line 10')
      return {};
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('Error')
      console.log(error, errorInfo);
      Sentry.captureException(error);
    }
  
    render() {
      return this.props.children; 
    }
  }