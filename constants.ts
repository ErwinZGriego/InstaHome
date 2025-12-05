import { ServiceCategory, ServiceOption, Technician, Testimonial, FAQItem } from './types';

export const SERVICES: ServiceOption[] = [
  {
    id: 's1',
    category: ServiceCategory.PLUMBING,
    name: 'Plomería General',
    description: 'Reparación de fugas, destape de drenajes, instalación de grifos.',
    basePrice: 450,
    iconName: 'Droplet'
  },
  {
    id: 's2',
    category: ServiceCategory.ELECTRICITY,
    name: 'Electricidad',
    description: 'Cortocircuitos, instalación de lámparas, cambio de contactos.',
    basePrice: 500,
    iconName: 'Zap'
  },
  {
    id: 's3',
    category: ServiceCategory.LOCKSMITH,
    name: 'Cerrajería',
    description: 'Apertura de puertas, cambio de chapas, duplicados urgentes.',
    basePrice: 600,
    iconName: 'Key'
  },
  {
    id: 's4',
    category: ServiceCategory.GENERAL,
    name: 'Reparaciones Generales',
    description: 'Instalaciones menores, pintura, resanes.',
    basePrice: 400,
    iconName: 'Hammer'
  }
];

export const MOCK_TECHNICIANS: Technician[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza',
    rating: 4.8,
    jobsCompleted: 142,
    photoUrl: 'https://placehold.co/200x200/e2e8f0/1e293b?text=CM',
    specialties: [ServiceCategory.PLUMBING, ServiceCategory.GENERAL],
    verified: true,
    backgroundCheckDate: '2023-10-15'
  },
  {
    id: 't2',
    name: 'Roberto Alcaraz',
    rating: 4.9,
    jobsCompleted: 89,
    photoUrl: 'https://placehold.co/200x200/e2e8f0/1e293b?text=RA',
    specialties: [ServiceCategory.ELECTRICITY],
    verified: true,
    backgroundCheckDate: '2023-11-02'
  },
  {
    id: 't3',
    name: 'Fernanda Ruiz',
    rating: 5.0,
    jobsCompleted: 56,
    photoUrl: 'https://placehold.co/200x200/e2e8f0/1e293b?text=FR',
    specialties: [ServiceCategory.LOCKSMITH],
    verified: true,
    backgroundCheckDate: '2023-09-20'
  }
];

export const APP_CONFIG = {
  whatsappNumber: '526621482744', 
  currency: 'MXN',
  guaranteeText: 'Confianza Radical: Todos nuestros técnicos pasan por una verificación de 7 puntos.'
};

export const COVERAGE_ZONES = [
  "Centro",
  "Colonia Reforma",
  "Villa de Seris",
  "Pitic",
  "Sahuaro",
  "Proyecto Rio Sonora",
  "San Benito",
  "Morelos"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Ana García',
    role: 'Dueña de Casa',
    content: 'Tenía miedo de contratar a un desconocido. InstaHome me envió la ficha de Carlos antes de que llegara y el servicio fue excelente.',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100/f3f4f6/4b5563?text=AG'
  },
  {
    id: 'test2',
    name: 'Jorge Martínez',
    role: 'Airbnb Host',
    content: 'La rapidez es increíble. Tuve una emergencia eléctrica a las 8 PM y en 40 minutos Roberto ya lo estaba arreglando.',
    rating: 5,
    avatarUrl: 'https://placehold.co/100x100/f3f4f6/4b5563?text=JM'
  },
  {
    id: 'test3',
    name: 'Sofía López',
    role: 'Estudiante',
    content: 'Me encanta que no hay regateos. El precio base me dio tranquilidad y el técnico fue muy respetuoso.',
    rating: 4.5,
    avatarUrl: 'https://placehold.co/100x100/f3f4f6/4b5563?text=SL'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Es seguro dejar entrar al técnico?',
    answer: 'Absolutamente. Todos nuestros técnicos pasan por un proceso de "Vetting" manual que incluye revisión de antecedentes penales, identificación oficial y referencias laborales. Te enviamos su foto y nombre antes de que llegue.'
  },
  {
    question: '¿Qué pasa si no quedo satisfecho?',
    answer: 'Ofrecemos una garantía de satisfacción. Si el trabajo no cumple con los estándares, enviaremos a otro técnico para corregirlo sin costo adicional o te reembolsamos.'
  },
  {
    question: '¿Aceptan pagos con tarjeta?',
    answer: 'Por el momento, operamos con pagos directos al técnico (Efectivo/Transferencia) o vía link de pago al confirmar por WhatsApp para mantener los costos bajos.'
  },
  {
    question: '¿Cuál es el tiempo de respuesta?',
    answer: 'Para servicios marcados como "Emergencia", garantizamos la llegada en menos de 90 minutos dentro de nuestra zona de cobertura.'
  }
];