import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SERVICES, TESTIMONIALS, FAQS } from '../constants';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                   <span className="flex h-2 w-2 relative mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                   </span>
                   Técnicos verificados disponibles ahora
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Tu hogar seguro y funcional</span>{' '}
                  <span className="block text-brand-600 xl:inline">en menos de 90 minutos.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  InstaHome profesionaliza los servicios del hogar. Olvídate del "miedo al extraño". 
                  Conectamos tu urgencia con técnicos verificados, precios transparentes y garantía de satisfacción.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/booking"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10"
                    >
                      Solicitar Servicio
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/about"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-700 bg-brand-100 hover:bg-brand-200 md:py-4 md:text-lg md:px-10"
                    >
                      Saber más
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-200">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://placehold.co/1200x800/e2e8f0/1e293b?text=InstaHome+Servicios+Profesionales"
            alt="Técnico profesional trabajando"
          />
        </div>
      </div>

      <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Por qué InstaHome</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Confianza Radical
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Resolvemos la crisis de confianza en los servicios del hogar.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Icon name="ShieldCheck" className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">100% Verificados</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Cada técnico pasa por un filtro de seguridad de 7 puntos, incluyendo antecedentes penales y validación de identidad.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Icon name="Clock" className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">En &lt;90 Minutos</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Para emergencias, nuestra red geolocalizada nos permite llegar más rápido que nadie.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Icon name="DollarSign" className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Precios Claros</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Sin regateos. Tabulador de precios base y cotizaciones formales antes de empezar el trabajo.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

       <div id="how-it-works" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Cómo funciona</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tu servicio en 3 pasos simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solicita</h3>
              <p className="text-gray-500">Selecciona el servicio que necesitas (Plomería, Electricidad, etc.) y cuéntanos el problema.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Asignamos</h3>
              <p className="text-gray-500">Nuestro sistema "Concierge" localiza al técnico verificado más cercano disponible en tu zona.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Soluciona</h3>
              <p className="text-gray-500">Recibes la ficha del técnico por seguridad. Él llega, repara y tú pagas sin fricción.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map(service => (
                    <div key={service.id} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className="bg-brand-100 p-3 rounded-full w-fit mb-4 group-hover:bg-brand-200 transition-colors">
                            <Icon name={service.iconName} className="text-brand-700 h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                        <p className="font-semibold text-brand-600">Desde ${service.basePrice} MXN</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map(t => (
               <div key={t.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                 <div className="flex items-center mb-4">
                    <img src={t.avatarUrl} alt={t.name} className="h-10 w-10 rounded-full mr-3" />
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                       <span className="text-xs text-gray-500">{t.role}</span>
                    </div>
                 </div>
                 <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className={i < Math.floor(t.rating) ? "fill-current" : "text-gray-300"} />
                    ))}
                 </div>
                 <p className="text-gray-600 text-sm italic">"{t.content}"</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-brand-900 text-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-10">Preguntas Frecuentes</h2>
            <div className="space-y-8">
               {FAQS.map((faq, idx) => (
                 <div key={idx} className="border-b border-brand-800 pb-6 last:border-0">
                    <h3 className="text-lg font-bold text-brand-100 mb-2 flex items-center gap-2">
                       <Icon name="HelpCircle" className="text-brand-400" size={20} />
                       {faq.question}
                    </h3>
                    <p className="text-gray-400 pl-7">{faq.answer}</p>
                 </div>
               ))}
            </div>
            <div className="mt-12 text-center">
               <Link to="/booking" className="inline-block bg-white text-brand-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Resolver mi problema ahora
               </Link>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
};