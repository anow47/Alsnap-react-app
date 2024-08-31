import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
    const navItems = [
        { name: 'الرئيسية', path: '/' },
        { name: 'مشاريع عقارية', path: '/projects' },
        { name: 'المزادات العقارية', path: '/auctions' },
        { name: 'خدماتنا التسويقية', path: '/services' },
        { name: 'من نحن', path: '/about' }
    ];

    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
        setShowNav(!showNav);
    };

    const hideMenu = () => {
        setShowNav(false);
    };

    return (
        <header className="App-header">
            <nav>
                <i className="zmdi zmdi-menu" onClick={toggleMenu}></i>
                <div className={`overlay ${showNav ? 'showOverlay' : ''}`} onClick={hideMenu}></div>
                <ul className={`nav-list ${showNav ? 'showMenu' : ''}`}>
                    <i className="zmdi zmdi-close" onClick={hideMenu}></i>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link className='nav-link' onClick={hideMenu} to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link to={navItems[0].path} className='logo-link'>
                <div className='App-logo'>
                    <p className='ar'>السناب العقاري</p>
                    <p className='en'>agari2030</p>
                </div>
            </Link>
      </header>
    );
}
