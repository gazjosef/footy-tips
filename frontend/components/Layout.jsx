import { useRouter } from "next/router";
import { Meta } from "@/components/Meta";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Header />

      {router.pathname === "/"}

      <main className="u-min-h-screen">{children}</main>

      <Footer />
    </>
  );
};
