import { IoSearchOutline } from 'react-icons/io5';

const HeaderSearch = () => (
  <div className="relative w-full max-w-md text-primary-200 focus-within:text-gray-400">
    <IoSearchOutline
      className="absolute top-[0.6875rem] sm:top-[0.5625rem] left-3"
      size={20}
    />
    <input
      className="block w-full pl-10 bg-opacity-25 border border-transparent rounded-full text-primary-100 placeholder-primary-200 bg-primary-400 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-800 sm:text-sm"
      type="search"
      placeholder="Search..."
    />
  </div>
);

export default HeaderSearch;
