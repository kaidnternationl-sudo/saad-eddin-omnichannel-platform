// src/data/branches.ts
import { Branch } from '@/types';

export const branches: Branch[] = [
  {
    id: 'riyadh-1',
    name: 'فرع الرياض - النزهة',
    city: 'الرياض',
    address: 'حي النزهة، شارع الأمير محمد بن عبدالعزيز',
    phone: '011 234 5678',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 24.774265,
    lng: 46.738586,
    isMainBranch: true,
  },
  {
    id: 'riyadh-2',
    name: 'فرع الرياض - العليا',
    city: 'الرياض',
    address: 'شارع العليا، تقاطع طريق الملك فهد',
    phone: '011 234 5679',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 24.713552,
    lng: 46.675297,
  },
  {
    id: 'jeddah-1',
    name: 'فرع جدة - الشاطئ',
    city: 'جدة',
    address: 'حي الشاطئ، طريق الكورنيش',
    phone: '012 345 6789',
    workingHours: '٩:٠٠ صباحاً - ١٢:٠٠ صباحاً',
    lat: 21.615463,
    lng: 39.148454,
    isMainBranch: true,
  },
  {
    id: 'jeddah-2',
    name: 'فرع جدة - السلامة',
    city: 'جدة',
    address: 'شارع صاري، حي السلامة',
    phone: '012 345 6790',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 21.567788,
    lng: 39.145678,
  },
  {
    id: 'dammam-1',
    name: 'فرع الدمام - الشاطئ الغربي',
    city: 'الدمام',
    address: 'حي الشاطئ الغربي، شارع الأمير نايف',
    phone: '013 456 7890',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 26.431234,
    lng: 50.103456,
    isMainBranch: true,
  },
  {
    id: 'khobar-1',
    name: 'فرع الخبر - الراكة',
    city: 'الخبر',
    address: 'الراكة الشمالية، شارع الملك سلمان',
    phone: '013 456 7891',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 26.381234,
    lng: 50.193456,
  },
  {
    id: 'makkah-1',
    name: 'فرع مكة - العزيزية',
    city: 'مكة المكرمة',
    address: 'حي العزيزية، طريق مكة - جدة السريع',
    phone: '012 567 8901',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 21.389082,
    lng: 39.857912,
  },
  {
    id: 'medina-1',
    name: 'فرع المدينة - قباء',
    city: 'المدينة المنورة',
    address: 'حي قباء، شارع الملك عبدالله',
    phone: '014 567 8901',
    workingHours: '٩:٠٠ صباحاً - ١١:٠٠ مساءً',
    lat: 24.467234,
    lng: 39.612345,
  },
];

export const getBranchesByCity = (city: string): Branch[] => {
  return branches.filter(b => b.city === city);
};

export const getMainBranches = (): Branch[] => {
  return branches.filter(b => b.isMainBranch);
};
