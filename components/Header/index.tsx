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
            src="https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg"
            alt="Oliver Tuck"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
