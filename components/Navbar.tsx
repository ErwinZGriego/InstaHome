import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Icon name="Home" className="text-white h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                InstaHome
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/about"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hidden md:block"
            >
              Nosotros
            </Link>

            {isHome ? (
              <a 
                href="#how-it-works" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hidden md:block"
              >
                Cómo funciona
              </a>
            ) : (
              <Link 
                to="/#how-it-works" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hidden md:block"
              >
                Cómo funciona
              </Link>
            )}
            
            <Link 
              to="/booking"
              className="bg-brand-600 text-white hover:bg-brand-700 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
            >
              <Icon name="Zap" size={16} />
              Solicitar Ahora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};