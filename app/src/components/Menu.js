import "./menu.scss";

function Menu(props) {
  return (
    <menu className={props.menuId}>
      <nav>
        <ul>
          {props.menuLinks.map((item) => {
            return (
              <li key={item.name}>
                <a href="#">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </menu>
  );
}

export default Menu;
