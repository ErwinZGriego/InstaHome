import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Icon } from '../components/Icon';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Nuestra Misión
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-100">
            Profesionalizar y dignificar los oficios técnicos del hogar en México.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  La Crisis de Confianza
                </h2>
                <div className="prose text-gray-500">
                  <p className="mb-4">
                    En las grandes zonas urbanas, contratar un servicio técnico se ha convertido en una actividad de alto riesgo. 
                    Los métodos tradicionales carecen de filtros de seguridad, exponiendo a los usuarios a la incertidumbre.
                  </p>
                  <p className="mb-4">
                    <strong>InstaHome</strong> surge como respuesta a esta problemática. No somos solo un directorio; somos un 
                    ente certificador que elimina el "miedo al extraño" mediante tecnología y procesos rigurosos.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Validación de identidad y antecedentes.</li>
                    <li>Estandarización de precios (sin sorpresas).</li>
                    <li>Garantía de servicio y satisfacción.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 flex justify-center">
                 <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 shadow-inner max-w-sm w-full text-center">
                    <Icon name="ShieldAlert" size={64} className="text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">El Problema Actual</h3>
                    <p className="text-sm text-gray-500">
                      "¿Realmente es seguro dejar entrar a esta persona a mi casa?"
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-extrabold text-gray-900">Visión Estratégica</h2>
                 <p className="mt-4 text-lg text-gray-500">
                   Aspiramos a convertirnos en el estándar de confianza para la gestión del hogar en América Latina.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-100">
                    <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                       <Icon name="Eye" className="text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Seguridad y Confianza</h3>
                    <p className="text-gray-500 text-sm">
                       Resolvemos la fricción psicológica de la inseguridad mediante validación estricta de cada técnico (Vetting Manual).
                    </p>
                 </div>

                 <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-100">
                    <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                       <Icon name="Briefcase" className="text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Profesionalización</h3>
                    <p className="text-gray-500 text-sm">
                       Dignificamos el trabajo técnico proveyendo herramientas digitales que estabilizan sus ingresos y optimizan su logística.
                    </p>
                 </div>

                 <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-100">
                    <div className="bg-brand-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                       <Icon name="Zap" className="text-brand-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Modelo "Concierge"</h3>
                    <p className="text-gray-500 text-sm">
                       Combinamos tecnología ágil con atención humana personalizada para garantizar que cada servicio se complete con éxito.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              ¿Listo para recuperar tu tranquilidad?
            </h2>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Solicitar un Técnico Verificado
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};