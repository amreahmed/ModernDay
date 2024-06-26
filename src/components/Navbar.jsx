
const Navbar = () => {
  return (
    <div className="navbar  py-[0] px-[2pc] bg-[#06050A] h-[85px]">
      <div className="navbar-start">
        <img
          src="/Logo.svg"
          alt=""
          width={60}
          height={55}
          
        />
      </div>
      <div className="navbar-center  justify-start  lg:flex text-white">
        <ul className="menu menu-horizontal px-1 lg:text-base font-bold">
          <li key={1}>
            <a>Insights</a>
          </li>
          <li key={2}>
            <a>Services</a>
          </li>
          <li key={3}>
            <a>Industries</a>
          </li>
          <li key={4}>
            <a>Careers</a>
          </li>
          <li key={5}>
            <a>About us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar