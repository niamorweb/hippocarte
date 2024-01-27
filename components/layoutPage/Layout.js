import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Raleway, Open_Sans, DM_Sans, Poppins } from "next/font/google";
import { useParams, usePathname } from "next/navigation";

const raleway = Raleway({ subsets: ["latin"] });
const openSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className={openSans.className}>
      {pathname === "/signin" || pathname === "/signup" ? (
        <main>{children}</main>
      ) : (
        <>
          {" "}
          <Header />
          <main className="px-5 md:px-10">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}
