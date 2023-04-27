import Membership from "@/components/Membership/Membership";
import Navbar from "@/components/Nav/Navbar";
import { Footer } from "@/components/Footer/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Membership />
      <Footer />
    </main>
  );
}