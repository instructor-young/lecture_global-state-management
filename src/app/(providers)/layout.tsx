import ReduxStoreProvider from "@/redux/provider";
import { PropsWithChildren } from "react";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <ReduxStoreProvider>{children}</ReduxStoreProvider>;
}

export default ProvidersLayout;
