"use client";
import React, { ComponentType, ErrorInfo, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
interface ErrorBoundaryProvider {
  children: ReactNode;
  fallback: ComponentType<FallbackProps>;
  onReset?: () => void;
}

export const ErrorBoundaryProvider: React.FC<ErrorBoundaryProvider> = (
  props
) => {
  const onError = (error: Error, info: ErrorInfo) => {
    console.log(info.componentStack);
  };
  return (
    <ErrorBoundary
      onError={onError}
      onReset={() => {}}
      FallbackComponent={props.fallback}
    >
      {props.children}
    </ErrorBoundary>
  );
};
