import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SERVICES, MOCK_TECHNICIANS, APP_CONFIG, COVERAGE_ZONES } from '../constants';
import { BookingState, ServiceOption } from '../types';
import { Icon } from '../components/Icon';
import { TechnicianCard } from '../components/TechnicianCard';

export const BookingWizard: React.FC = () => {
  const [state, setState] = useState<BookingState>({
    step: 1,
    selectedService: null,
    address: '',
    zone: '',
    description: '',
    isUrgent: false,
    assignedTechnician: null
  });

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.step]);

  const handleServiceSelect = (service: ServiceOption) => {
    setState(prev => ({ ...prev, selectedService: service, step: 2 }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.zone) {
        alert("Por favor selecciona una colonia/zona.");
        return;
    }
    setState(prev => ({ ...prev, step: 3 }));
    simulateMatching();
  };

  const simulateMatching = () => {
    setIsSearching(true);
    setTimeout(() => {
      const match = MOCK_TECHNICIANS.find(t => 
        state.selectedService && t.specialties.includes(state.selectedService.category)
      ) || MOCK_TECHNICIANS[0];

      setState(prev => ({ 
        ...prev, 
        assignedTechnician: match, 
        step: 4 
      }));
      setIsSearching(false);
    }, 2500);
  };

  const generateWhatsAppLink = () => {
    if (!state.selectedService || !state.assignedTechnician) return '#';
    
    const message = `Hola InstaHome, necesito confirmar mi servicio de *${state.selectedService.name}*.
    
📍 Dirección: ${state.address}
🏘 Colonia: ${state.zone}
🛠 Problema: ${state.description}
⚡ Urgencia: ${state.isUrgent ? 'SÍ' : 'NO'}
👷 Técnico Asignado: ${state.assignedTechnician.name} (ID: ${state.assignedTechnician.id})
    
Espero confirmación.`;
    
    return `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto w-full px-4 py-8">
        
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm font-medium text-gray-500 mb-2">
            <span className={state.step >= 1 ? "text-brand-600" : ""}>Servicio</span>
            <span className={state.step >= 2 ? "text-brand-600" : ""}>Detalles</span>
            <span className={state.step >= 3 ? "text-brand-600" : ""}>Asignación</span>
            <span className={state.step >= 4 ? "text-brand-600" : ""}>Confirmar</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-brand-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${(state.step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {state.step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-gray-900 text-center">¿Qué necesitas arreglar hoy?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-500 hover:shadow-md transition-all text-left flex items-start gap-4 group"
                >
                  <div className="bg-brand-100 p-3 rounded-full group-hover:bg-brand-600 transition-colors">
                    <Icon name={service.iconName} className="text-brand-600 group-hover:text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                    <span className="inline-block mt-2 text-xs font-semibold bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Est. ${service.basePrice} {APP_CONFIG.currency}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {state.step === 2 && state.selectedService && (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 animate-fade-in">
            <button 
                onClick={() => setState(prev => ({...prev, step: 1}))}
                className="text-gray-500 hover:text-gray-700 text-sm flex items-center mb-4"
            >
                <Icon name="ArrowLeft" size={16} className="mr-1"/> Volver
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Icon name={state.selectedService.iconName} className="text-brand-600"/>
                {state.selectedService.name}
            </h2>

            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Colonia / Zona
                    </label>
                    <div className="relative rounded-md shadow-sm">
                        <select
                           required
                           className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 appearance-none bg-white text-gray-900"
                           value={state.zone}
                           onChange={e => setState(prev => ({...prev, zone: e.target.value}))}
                        >
                            <option value="">Selecciona tu colonia</option>
                            {COVERAGE_ZONES.map(z => (
                                <option key={z} value={z}>{z}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Icon name="ChevronDown" size={16} className="text-gray-500" />
                        </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Calle y Número
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon name="MapPin" size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Av. Rosales #123"
                        value={state.address}
                        onChange={e => setState(prev => ({ ...prev, address: e.target.value }))}
                      />
                    </div>
                  </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción del problema
                </label>
                <textarea
                  required
                  rows={4}
                  className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500 bg-white text-gray-900 placeholder-gray-400"
                  placeholder="Ej. La llave del lavabo gotea y no cierra bien..."
                  value={state.description}
                  onChange={e => setState(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div 
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${state.isUrgent ? 'bg-red-50 border-red-300' : 'bg-gray-50 border-gray-200 hover:border-brand-300'}`}
                onClick={() => setState(prev => ({ ...prev, isUrgent: !prev.isUrgent }))}
              >
                <div className={`flex items-center justify-center h-6 w-6 rounded border mr-3 ${state.isUrgent ? 'bg-red-500 border-red-500' : 'bg-white border-gray-300'}`}>
                    {state.isUrgent && <Icon name="Check" size={14} className="text-white" />}
                </div>
                <div>
                    <span className={`block font-medium ${state.isUrgent ? 'text-red-900' : 'text-gray-900'}`}>
                        Es una emergencia
                    </span>
                    <span className={`text-xs ${state.isUrgent ? 'text-red-700' : 'text-gray-500'}`}>
                        Llegada prioritaria en &lt;90 min (Aplica cargo extra)
                    </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
              >
                Buscar Técnico
              </button>
            </form>
          </div>
        )}

        {state.step === 3 && (
          <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-200 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-white p-4 rounded-full shadow-lg border border-gray-100">
                <Icon name="Search" className="h-12 w-12 text-brand-600" />
              </div>
            </div>
            <h3 className="mt-8 text-xl font-bold text-gray-900">Buscando técnicos cercanos...</h3>
            <p className="text-gray-500 mt-2 text-center max-w-xs">
              Estamos verificando disponibilidad en <strong>{state.zone}</strong> y validando credenciales.
            </p>
          </div>
        )}

        {state.step === 4 && state.assignedTechnician && (
          <div className="animate-fade-in">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 flex items-start gap-4">
               <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <Icon name="CheckCircle" className="text-green-600 h-6 w-6" />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-green-900">¡Técnico Encontrado!</h3>
                  <p className="text-green-800 text-sm mt-1">
                    Hemos asignado a un profesional verificado para tu servicio en <strong>{state.zone}</strong>.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-4">
                 <h4 className="font-semibold text-gray-700">Tu Técnico Asignado:</h4>
                 <TechnicianCard technician={state.assignedTechnician} />
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 border-b pb-2 mb-4">Resumen del Servicio</h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Servicio:</span>
                    <span className="font-medium text-gray-900">{state.selectedService?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ubicación:</span>
                    <span className="font-medium text-gray-900 text-right">{state.zone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Precio Base:</span>
                    <span className="font-medium text-gray-900">${state.selectedService?.basePrice} {APP_CONFIG.currency}</span>
                  </div>
                  {state.isUrgent && (
                     <div className="flex justify-between text-brand-600">
                        <span>Cargo Urgencia:</span>
                        <span>Variable</span>
                     </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500">Garantía:</span>
                    <span className="font-medium text-gray-900">Satisfacción o devolución</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs text-center text-gray-500 mb-4">
                    Para finalizar la contratación y ver la ubicación en tiempo real, confirma via WhatsApp.
                  </p>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    <Icon name="MessageCircle" size={20} />
                    Confirmar por WhatsApp
                  </a>
                  <button 
                     onClick={() => setState(prev => ({...prev, step: 1, selectedService: null, assignedTechnician: null}))}
                     className="w-full mt-3 text-center text-sm text-gray-500 hover:text-gray-700"
                  >
                     Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};