// import "./app.css";
import "#/app/styles/layout.scss";
import { ErrorBoundaryProvider } from "#/providers/error-boundary-provider";
import { Sidebar } from "#/features/sidebar";
import { Aside } from "#/features/aside";
import ErrorFallback from "./error-fallback";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
