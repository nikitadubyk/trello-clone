import { PropsWithChildren } from "react";

const ClerkLayout = ({ children }: PropsWithChildren) => (
  <div className="h-full flex items-center justify-center">{children}</div>
);

export default ClerkLayout;
