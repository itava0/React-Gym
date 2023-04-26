import Link from "next/link";

const NavList = () => {
      return (
        <>
          <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
            <li
              style={{ transition: 'all 0.3s' }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              style={{ transition: 'all 0.3s' }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/classes">Classes</Link>
            </li>
            <li
              style={{ transition: 'all 0.3s' }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/memberships">Membership</Link>
            </li>
            <li
              style={{ transition: 'all 0.3s' }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/stories">Stories</Link>
            </li>
            <li
              style={{ transition: 'all 0.3s' }}
              className=" cursor-pointer hover:text-[#ff0336]"
            >
              <Link href="/myaccount">My Account</Link>
            </li>
          </ul>
        </>
      );
}

export default NavList;