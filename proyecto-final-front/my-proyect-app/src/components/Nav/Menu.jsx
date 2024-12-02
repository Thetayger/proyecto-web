import Nav from './Nav';
import { menus } from '../../data/Menu';

const Menu = () => (
  <div>
    {menus.map(menu => (
      <Nav 
        key={menu.id} 
        id={menu.id}
        items={menu.items} 
        backgroundColor={menu.backgroundColor} 
      />
    ))}
  </div>
);

export default Menu;


