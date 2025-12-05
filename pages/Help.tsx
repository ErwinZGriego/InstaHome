import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Icon } from '../components/Icon';
import { FAQS, APP_CONFIG } from '../constants';

export const Help: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-brand-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">¿Cómo podemos ayudarte?</h1>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Buscar un tema (ej. pagos, garantía, seguridad)..." 
              className="w-full pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-brand-300 outline-none bg-white text-gray-900 placeholder-gray-500"
            />
            <div className="absolute left-4 top-3.5 text-gray-400">
               <Icon name="Search" size={20} />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <Icon name="User" className="text-brand-600 mb-3 h-8 w-8" />
                <h3 className="font-bold text-gray-900 mb-1">Para Clientes</h3>
                <p className="text-sm text-gray-500">Dudas sobre contrataciones, pagos y seguridad.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <Icon name="Tool" className="text-brand-600 mb-3 h-8 w-8" />
                <h3 className="font-bold text-gray-900 mb-1">Para Técnicos</h3>
                <p className="text-sm text-gray-500">Cómo unirse a la red, procesos de validación y cobros.</p>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
            {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                        <Icon name="HelpCircle" className="text-brand-500 flex-shrink-0 mt-1" size={18} />
                        {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
            ))}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <Icon name="HelpCircle" className="text-brand-500 flex-shrink-0 mt-1" size={18} />
                    ¿Cómo reporto un problema con un servicio?
                </h3>
                <p className="text-gray-600 ml-7">
                    Si algo no salió bien, contáctanos inmediatamente a través de nuestro WhatsApp de soporte ({APP_CONFIG.whatsappNumber}). Nuestro equipo de mediación intervendrá para aplicar la garantía de satisfacción.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <Icon name="HelpCircle" className="text-brand-500 flex-shrink-0 mt-1" size={18} />
                    ¿En qué zonas operan?
                </h3>
                <p className="text-gray-600 ml-7">
                    Actualmente operamos en la zona central de Hermosillo y colonias aledañas. Estamos expandiendo nuestra cobertura mes a mes.
                </p>
            </div>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center border border-blue-100">
            <h3 className="font-bold text-blue-900 text-lg mb-2">¿Aún necesitas ayuda?</h3>
            <p className="text-blue-700 mb-6">Nuestro equipo de soporte humano está disponible de 8:00 AM a 8:00 PM.</p>
            <a 
                href={`https://wa.me/${APP_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center bg-brand-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-700 transition-colors"
            >
                <Icon name="MessageCircle" className="mr-2" />
                Contactar Soporte
            </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};