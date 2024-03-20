import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
