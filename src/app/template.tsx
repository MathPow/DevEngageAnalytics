import React from "react";
import Navbar from "@/components/navigation/Navbar";
import ClientWrapper from "./ClientWrapper";

interface ConfigurationProps {
  children: React.ReactNode;
}

const Configuration = ({ children }: ConfigurationProps) => {
  return (
    <div id="root">
      <ClientWrapper>{children}</ClientWrapper>
    </div>
  );
};

export default Configuration;
