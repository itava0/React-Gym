import Link from 'next/link';

export default function HamburgerList() {
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
        <Link href="/about"> About</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/blog">Blog</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/pricing">Pricing</Link>
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
        <Link href="/contact">Contact</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/myaccount">My Account</Link>
      </li>
    </ul>
  );
}
