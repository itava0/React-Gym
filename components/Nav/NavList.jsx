import Link from "next/link";

export default function NavList() {
      return (
        <>
          <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link  href="/about">
                About
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link  href="/pricing">
                Pricing
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/classes">
                Classes
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/contact">
                Contact
              </Link>
            </li>
            <li
              style={{ transition: "all 0.3s" }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/myaccount">
                My Account
              </Link>
            </li>
          </ul>
        </>
  );
}
