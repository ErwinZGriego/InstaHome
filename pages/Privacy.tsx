import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full prose prose-blue">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-6 text-gray-600">
            <p>
                En InstaHome, la seguridad es nuestro pilar fundamental ("Confianza Radical"). Esto incluye la protección rigurosa de tus datos personales.
            </p>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Datos que Recopilamos</h2>
                <p>Para gestionar tu solicitud de servicio, recopilamos:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Información de contacto (Nombre, Teléfono).</li>
                    <li>Ubicación geográfica (Dirección, Colonia) para la asignación del técnico.</li>
                    <li>Detalles del servicio requerido.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. Uso de la Información</h2>
                <p>Tu información se utiliza exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Conectar tu solicitud con el técnico más cercano.</li>
                    <li>Enviar confirmaciones de servicio y fichas de seguridad del técnico.</li>
                    <li>Mejorar nuestros procesos de asignación y calidad.</li>
                </ul>
                <p className="mt-2 font-medium">Nunca vendemos tus datos a terceros con fines publicitarios.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. Compartir con Técnicos</h2>
                <p>
                    Únicamente compartimos tu dirección y contacto con el técnico asignado <strong>una vez que has confirmado el servicio</strong>. Nuestros técnicos firman acuerdos de confidencialidad estrictos respecto a los datos de los clientes.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Tus Derechos ARCO</h2>
                <p>
                    Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, contacta a nuestro oficial de privacidad en hola@instahome.mx.
                </p>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};