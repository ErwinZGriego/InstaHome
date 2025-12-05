export enum ServiceCategory {
  PLUMBING = 'PLUMBING',
  ELECTRICITY = 'ELECTRICITY',
  LOCKSMITH = 'LOCKSMITH',
  GENERAL = 'GENERAL'
}

export interface ServiceOption {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  basePrice: number;
  iconName: string;
}

export interface Technician {
  id: string;
  name: string;
  rating: number;
  jobsCompleted: number;
  photoUrl: string;
  specialties: ServiceCategory[];
  verified: boolean;
  backgroundCheckDate: string;
}

export interface BookingState {
  step: number;
  selectedService: ServiceOption | null;
  address: string;
  zone: string;
  description: string;
  isUrgent: boolean;
  assignedTechnician: Technician | null;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}