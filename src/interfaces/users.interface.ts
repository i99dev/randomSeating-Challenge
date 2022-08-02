export interface User {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_first_name: string;
  url: string;
  phone: any;
  displayname: string;
  usual_full_name: string;
  image_url: string;
  'staff?': boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: any;
  wallet: number;
  anonymize_date: string;
  groups: any[];
  cursus_users: CursusUser[];
  projects_users: any[];
  languages_users: LanguagesUser[];
  achievements: any[];
  titles: any[];
  titles_users: any[];
  partnerships: any[];
  patroned: Patroned[];
  patroning: any[];
  expertises_users: ExpertisesUser[];
  campus: Campu[];
  campus_users: CampusUser[];
}

export interface CursusUser {
  id: number;
  begin_at: string;
  end_at: any;
  grade: any;
  level: number;
  skills: any[];
  cursus_id: number;
  has_coalition: boolean;
  user: User;
  cursus: Cursus;
}

export interface User {
  id: number;
  login: string;
  url: string;
}

export interface Cursus {
  id: number;
  created_at: string;
  name: string;
  slug: string;
}

export interface LanguagesUser {
  id: number;
  language_id: number;
  user_id: number;
  position: number;
  created_at: string;
}

export interface Patroned {
  id: number;
  user_id: number;
  godfather_id: number;
  ongoing: boolean;
  created_at: string;
  updated_at: string;
}

export interface ExpertisesUser {
  id: number;
  expertise_id: number;
  interested: boolean;
  value: number;
  contact_me: boolean;
  created_at: string;
  user_id: number;
}

export interface Campu {
  id: number;
  name: string;
  time_zone: string;
  language: Language;
  users_count: number;
  vogsphere_id: number;
}

export interface Language {
  id: number;
  name: string;
  identifier: string;
  created_at: string;
  updated_at: string;
}

export interface CampusUser {
  id: number;
  user_id: number;
  campus_id: number;
  is_primary: boolean;
}
