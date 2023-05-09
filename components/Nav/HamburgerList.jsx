import Link from 'next/link';

const HamburgerList = () => {
  return (
    <ul className="flex flex-col items-center justify-between min-h-[250px]">
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/" className='text-lg'>Home</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/classes" className='text-lg'>Classes</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/memberships" className='text-lg'>Membership</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/blog" className='text-lg'>Our Blog</Link>
      </li>
      <li
        className="border-b border-gray-400 my-8 uppercase cursor-pointer hover:text-[#ff0336]"
        style={{ transition: 'all 0.3s' }}
      >
        <Link href="/myaccount" className='text-lg'>My Account</Link>
      </li>
    </ul>
  );
};

export default HamburgerList;
