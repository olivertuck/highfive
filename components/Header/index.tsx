import HeaderSearch from 'components/HeaderSearch';
import Avatar from 'components/Avatar';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 py-3 bg-primary-600">
    <div className="container">
      <div className="grid grid-cols-[2rem,1fr,2.625rem] sm:grid-cols-[2rem,1fr,2.375rem] gap-3">
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-auto h-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
            alt="Highfive"
          />
        </div>
        <div className="flex justify-center">
          <HeaderSearch />
        </div>
        <div className="flex justify-end">
          <Avatar
            src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F"
            alt="Oliver Tuck"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
