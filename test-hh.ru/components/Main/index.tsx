import HHruHttpService from '../../services/hhru-http.service'
import Pagination from "@material-ui/lab/Pagination";
import { FilterFrom } from "./FilterForm";
import { Vacancies } from "./Vacancies";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Main.module.css";
import { Vacancy } from "../../types/Vacancy"

interface Filters {
    text?: string;
    employment?: string;
    experience?: string;
    schedule?: string;
}

export const Main = () => {
    const [page, setPage] = useState(1);
    const [filtres, setFiltres] = useState({});
    const [vacancies, setVacancies] = useState([] as Vacancy[]);
    const [pagesCount, setPagesCount] = useState(0);

    useEffect(() => {
        HHruHttpService.getInstance().getVacancies({page}).then(res => {
            const vacancies = res.items ?? [];
              setVacancies(vacancies);
              setPagesCount(res.pages);
        });
    }, []);
   
    const onPaginate = (p: number) => {
        setPage(p);
        HHruHttpService.getInstance().getVacancies({...filtres, page: p - 1}).then(res => {
            const vacancies = res.items?? [];
            setVacancies(vacancies);
        });
      };

    const onSearch = (filterParams: Filters) => {
        setPage(1);
        setFiltres({...filtres , ...filterParams});
        HHruHttpService.getInstance().getVacancies({...filtres , ...filterParams, page: 0}).then(res => {
            const vacancies = res.items ?? [];
              setVacancies(vacancies);
              setPagesCount(res.pages);
        });
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.filterForm}>
                <FilterFrom onSubmit={(params: Filters) => onSearch(params)}></FilterFrom>
            </div>
            <div className={styles.vacancies}>
                <div className={styles.list}>
                <Vacancies vacancies={vacancies} ></Vacancies>
                </div>
                <div className={styles.pagination}>
                { pagesCount > 1 
                    ? <Pagination
                        count={Math.min(pagesCount, 99)}
                        color="primary"
                        onChange={(e, v) => onPaginate(v)}
                        page={page}
                    />
                    : ''
                }
            </div>
            </div>
        </div>
    ); 
};