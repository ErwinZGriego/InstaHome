import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Icon } from '../components/Icon';
import { Link } from 'react-router-dom';

export const Guarantee: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-green-600 text-white py-16 text-center px-4">
         <div className="inline-flex bg-white text-green-600 p-4 rounded-full mb-6 shadow-lg">
             <Icon name="ShieldCheck" size={48} />
         </div>
         <h1 className="text-4xl font-extrabold mb-4">Garantía InstaHome</h1>
         <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tu tranquilidad no es negociable. Si no queda bien, lo arreglamos.
         </p>
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
         <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">1. Cobertura Total</h3>
                    <p className="text-gray-500 text-sm">Protección contra daños accidentales durante el servicio hasta por $5,000 MXN.</p>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">2. Satisfacción</h3>
                    <p className="text-gray-500 text-sm">Si la reparación falla en los siguientes 30 días, enviamos a otro técnico sin costo.</p>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">3. Sin Sorpresas</h3>
                    <p className="text-gray-500 text-sm">Respetamos el presupuesto acordado. Si cambia, te pedimos autorización antes.</p>
                </div>
            </div>
         </div>

         <div className="mt-12 space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funciona nuestra garantía?</h2>
                <div className="prose text-gray-600">
                    <p>
                        Entendemos que invitar a alguien a tu hogar requiere confianza. Por eso, respaldamos cada servicio reservado a través de nuestra plataforma con la Garantía InstaHome.
                    </p>
                    <p>
                        Esta garantía entra en vigor automáticamente al confirmar tu cita y cubre:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Re-trabajo sin costo:</strong> Si el problema persiste o la calidad del trabajo no es la estándar de la industria.</li>
                        <li><strong>Protección de propiedad:</strong> En el improbable caso de daños causados directamente por el técnico.</li>
                        <li><strong>Devolución:</strong> Si el servicio no pudo completarse por causas imputables a nuestra red.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Exclusiones</h3>
                <p className="text-sm text-gray-500 mb-4">
                    La garantía no cubre servicios acordados "por fuera" de la plataforma, materiales pre-existentes en mal estado, o desgaste natural no relacionado con la reparación.
                </p>
            </section>

            <div className="text-center pt-8">
                <Link to="/booking" className="btn-primary bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition">
                    Solicitar Servicio con Garantía
                </Link>
            </div>
         </div>
      </main>
      <Footer />
    </div>
  );
};