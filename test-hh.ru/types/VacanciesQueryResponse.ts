import { Vacancy } from "./Vacancy";

export interface VacanciesQueryResponse {
  alternate_url: string;
  arguments: string;
  clusters: string;
  found: number;
  items: Vacancy[];
  page: number;
  pages: number;
  per_page: number;
}
