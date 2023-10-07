import "./header.scss";
import Menu from "./Menu";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import { ReactComponent as Basket } from "../assets/svg/basket.svg";
import Button from "./Button";

const topMenuLinks = [
  { name: "Code" },
  { name: "Video" },
  { name: "Audio" },
  { name: "Graphics" },
  { name: "Web Themes & Templates" },
  { name: "Photos" },
  { name: "3D Files" },
  { name: "Unlimited Downloads" },
];

const bottomMenuLinks = [
  { name: "Ode" },
  { name: "Ideo" },
  { name: "Udio" },
  { name: "Raphics" },
  { name: "Whemes & Templates" },
  { name: "Htos" },
  { name: "Piles" },
  { name: "Wmited Downloads" },
];

const topHeaderMenu = [
  { name: "Forums" },
  { name: "Start Selling" },
  { name: "Our Pro}ducts" },
  { name: "Sing In" },
];

function Header() {
  return (
    <header className="header pt-5">
      <div className="container">
        <div className="d-flex jc-between a-items-y">
          <Logo className="logo-m" />
          <div className="d-flex a-items-y">
            <Menu menuId="header-menu-black" menuLinks={topHeaderMenu} />
            <Button extraClass="btn-dark d-flex btn-border-sharp"><Basket className="icon-sm pr-1" />login</Button>
          </div>
        </div>
        <Menu menuId="header-menu-black" menuLinks={topMenuLinks} />
      </div>
      <div className="bg-white">
        <div className="container">
          <Menu menuId="header-menu-white" menuLinks={bottomMenuLinks} />
        </div>
      </div>
    </header>
  );
}

export default Header;
