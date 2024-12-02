// src/components/Nav/Nav.jsx
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = ({ items, backgroundColor, id }) => {
  const className = id === 2 ? 'navegacion grande' : 'navegacion';

  return (
    <nav style={{ backgroundColor }}>
      <ol className={className}>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Nav;

