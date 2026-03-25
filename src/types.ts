export interface Plant {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  maintenanceInfo: string;
  viewingPeriod: string;
  story: string;
}

export interface Service {
  id: string;
  title: string;
  assignedTo: string;
  status: 'pending' | 'completed';
  time: string;
  date: string;
  type: 'inspection' | 'cleaning';
}

export type ViewType = 'home' | 'plan' | 'maintenance' | 'profile' | 'detail';
