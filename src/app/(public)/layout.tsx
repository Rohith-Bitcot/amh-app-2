import React from "react";

interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = async ({ children }) => {

  return <div className="min-h-screen bg-slate-50">{children}</div>;
};

export default PublicLayout;
