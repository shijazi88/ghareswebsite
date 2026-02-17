export enum UserRole {
  INITIATOR = 'Initiator', // Mobader
  PLANTER = 'Planter',     // Ghares
  VENDOR = 'Vendor'
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  region: string;
  price: number;
  imageUrl: string;
  category: 'General Planting' | 'Desert Greening' | 'Urban Forestry';
  progress: number; // Percentage
  target: number; // Number of trees
}

export interface PlanterStats {
  totalTrees: number;
  activePlanters: number;
  regionsCovered: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}