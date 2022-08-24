import Myimg from './myimg.jpg';

const Aboutme = () => {
  return (
    <section className='container-fluid aboutMe d-flex justify-content-between'>
      <div className='d-inline-flex description'>
        <h2>
          About Me
          <p>
            Hi my name is Abel Perez, and i'm a new web developer hoping to
            learn new skills to help better myself in my journey.
          </p>
        </h2>
      </div>
      <div className='d-inline-flex my-img'>
        <img src={Myimg} style={{ width: '100%' }} alt='cover' />
      </div>
    </section>
  );
};

export default Aboutme;
