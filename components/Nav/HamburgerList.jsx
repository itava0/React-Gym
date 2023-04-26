import Link from 'next/link';

const HamburgerList = () => {
  return (
    <ul className="flex flex-col items-center justify-between min-h-[250px]">
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/classes">Classes</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/memberships">Membership</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/stories">Stories</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/myaccount">My Account</Link>
      </li>
    </ul>
  );
};

export default HamburgerList;
