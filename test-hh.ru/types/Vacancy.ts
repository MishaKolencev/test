export interface Vacancy {
  id: string;
  name: string;
  description: string;
  schedule: {
    id: string;
    name: string;
  };
  employment: {
    id: string;
    name: string;
  };
  employer: {
    name: string;
    url: string;
    alternate_url: string;
    id: string;
    trusted: boolean;
    blacklisted: boolean;
  };
  salary: {
    to: number | null;
    from: number | null;
    currency: string;
    gross: boolean;
  };
  area: {
    url: string;
    id: string;
    name: string;
  };
  experience: {
    id: string;
    name: string;
  };
}
