import './Banner.css';
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <header className="banner">
      <img src={banner} alt="Principle banner of Organo" />
    </header>
  );
};

export default Banner;
