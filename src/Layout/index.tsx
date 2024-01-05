import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col w-full h-full min-h-screen min-w-screen">
      <Navbar />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
