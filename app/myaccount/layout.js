import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Nav/Navbar";


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Navbar/>
            {children}
        <Footer />
        </body>
      </html>
    );
  }