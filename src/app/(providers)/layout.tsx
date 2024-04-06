import ThemeProvider from "@/contexts/ThemeContext/ThemeProvider";
import ReduxStoreProvider from "@/redux/provider";
import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <ReduxStoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxStoreProvider>
  );
}

export default ProvidersLayout;
