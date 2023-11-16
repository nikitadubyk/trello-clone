import { PropsWithChildren } from "react";

import { Navbar } from "./organization/_components/navbar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
