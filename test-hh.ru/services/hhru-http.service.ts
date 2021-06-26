import { stringify } from "query-string";
import { VacanciesQueryParams } from "../types/VacanciesQueryParams";
import { VacanciesQueryResponse } from "../types/VacanciesQueryResponse";
import { Vacancy } from "../types/Vacancy";
import { VacancyFilters } from "../types/VacancyFilters";

const API_URL = "https://api.hh.ru/";

interface HttpParams {
  headers?: { [prop: string]: string };
  quaryParams?: { [prop: string]: any };
}

export default class HHruHttpService {
  public static getInstance(): HHruHttpService {
    HHruHttpService._instance =
      HHruHttpService._instance ?? new HHruHttpService();

    return HHruHttpService._instance;
  }

  private static _instance: HHruHttpService | null = null;

  private constructor() {}

  private _get<T>(
    path: string,
    { quaryParams, headers }: HttpParams
  ): Promise<T> {
    const requestUrl = `${API_URL}${path}${
      quaryParams ? "?" + stringify(quaryParams) : ""
    }`;

    return fetch(requestUrl, {
      headers: headers ?? {},
    }).then((res) => res.json());
  }

  public getVacancies(
    quaryParams: VacanciesQueryParams
  ): Promise<VacanciesQueryResponse> {
    return this._get<VacanciesQueryResponse>("vacancies", {
      headers: { "User-Agent": "api-test-agent" },
      quaryParams,
    });
  }

  public getVacancy(id: string): Promise<Vacancy> {
    return this._get<Vacancy>(`vacancies/${id}`, {
      headers: { "User-Agent": "api-test-agent" },
    });
  }

  public getVacancyFilters(): Promise<VacancyFilters> {
    return this._get<VacancyFilters>("dictionaries", {
      headers: { "User-Agent": "api-test-agent" },
    }).then(({ employment, experience, schedule }) => ({
      employment,
      experience,
      schedule,
    }));
  }
}
