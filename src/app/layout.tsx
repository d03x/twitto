// import "./app.css";
import "#/app/styles/layout.scss";
import { ErrorBoundaryProvider } from "#/providers/error-boundary-provider";
import { Sidebar } from "#/features/sidebar";
import { Aside } from "#/features/aside";
import ErrorFallback from "./error-fallback";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import Link from "next/link";
import { StoreProvider } from "#/store/StoreProvider";
export default function RootLayout({
  children,
  auth,
}: Readonly<{
  auth: ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <NextTopLoader
            height={2}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            showSpinner={false}
          />
          <div className="layout">
            <ErrorBoundaryProvider fallback={ErrorFallback}>
              <Sidebar />
            </ErrorBoundaryProvider>
            <main>
              <ErrorBoundaryProvider fallback={ErrorFallback}>
                {children}
              </ErrorBoundaryProvider>
            </main>
            <ErrorBoundaryProvider fallback={ErrorFallback}>
              <Aside />
            </ErrorBoundaryProvider>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
