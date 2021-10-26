import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 The Best Movies 🎬
    </span>
  );
};

export default Header;