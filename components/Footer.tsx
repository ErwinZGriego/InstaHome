import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
               <div className="bg-brand-600 p-1.5 rounded">
                 <Icon name="Home" className="h-5 w-5" />
               </div>
               <span className="font-bold text-xl tracking-tight">InstaHome</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              La plataforma líder que profesionaliza y dignifica los oficios técnicos del hogar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base hover:text-brand-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="text-base hover:text-brand-400 transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/booking" className="text-base hover:text-brand-400 transition-colors">Solicitar Servicio</Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-base hover:text-brand-400 transition-colors">Cómo Funciona</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-base hover:text-brand-400 transition-colors">Centro de Ayuda</Link>
              </li>
              <li>
                <Link to="/terms" className="text-base hover:text-brand-400 transition-colors">Términos y Condiciones</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base hover:text-brand-400 transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/guarantee" className="text-base hover:text-brand-400 transition-colors">Garantía InstaHome</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-brand-500 mt-0.5" />
                <span className="text-sm">Hermosillo, Sonora.<br/>Zona Centro.</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-brand-500" />
                <span className="text-sm">+52 (662) 148 2744</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-brand-500" />
                <span className="text-sm">hola@instahome.mx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            &copy; 2025 InstaHome. Proyecto Integrador Universitario.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-green-400">Sistemas Operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};