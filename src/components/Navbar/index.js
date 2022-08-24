const Navbar = () => {
  return (
    <div className='container-fluid d-flex justify-content-between'>
      <div
        flex-row
        bd-highlight
        mb-3
        className='d-inline-flex flex-row bd-highlight mb-3'
      >
        <a className='navbar-brand' href='#home'>
          Abel Perez
        </a>
      </div>
      <nav className='d-inline-flex flex-row bd-highlight'>
        <a className='nav-item nav-link' href='#about-me'>
          About Me
        </a>

        <a className='nav-item nav-link' href='#work'>
          Portfolio
        </a>

        <a className='nav-item nav-link' href='#contact-info'>
          Contact
        </a>

        <a className='nav-item nav-link' href='#resume-info'>
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
