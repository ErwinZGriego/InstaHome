import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full prose prose-blue">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-6 text-gray-600">
            <p className="text-sm text-gray-400">Última actualización: Marzo 2025</p>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introducción</h2>
                <p>
                    Bienvenido a InstaHome. Al utilizar nuestra plataforma para solicitar servicios de mantenimiento y reparación, aceptas cumplir con los siguientes términos y condiciones. InstaHome actúa como un intermediario digital que conecta a usuarios con técnicos independientes verificados.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Alcance del Servicio</h2>
                <p>
                    InstaHome facilita la conexión entre el Cliente y el Técnico ("Proveedor"). Nosotros validamos la identidad y antecedentes del Proveedor, pero la relación contractual final del servicio se establece entre el Cliente y el Proveedor.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Tarifas y Pagos</h2>
                <p>
                    Los precios mostrados en la plataforma son estimaciones base. El precio final puede variar dependiendo de la complejidad real del trabajo, lo cual será informado por el Técnico antes de iniciar. El Cliente acepta pagar el total acordado directamente al Técnico o a través de los medios facilitados por la plataforma.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Responsabilidades</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Del Cliente:</strong> Proporcionar un entorno seguro para el trabajo y detalles veraces sobre el problema.</li>
                    <li><strong>Del Técnico:</strong> Realizar el trabajo con diligencia, profesionalismo y respetar la propiedad del cliente.</li>
                    <li><strong>De InstaHome:</strong> Garantizar la validación previa del técnico y mediar en caso de disputas bajo nuestra "Garantía de Satisfacción".</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cancelaciones</h2>
                <p>
                    Las cancelaciones realizadas con menos de 30 minutos de antelación a la hora programada pueden estar sujetas a un cargo por desplazamiento mínimo.
                </p>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};