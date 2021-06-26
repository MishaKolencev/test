import { Vacancy } from "../../../types/Vacancy";
import { ListItem } from "./ListItem";
import styles from "./VacancyList.module.css";

export const Vacancies = ({vacancies}) => {

    const showInfo = (vacancy?: Vacancy) => {
        window.open(`/vacancy/${vacancy?.id}`, '_blank');
    }

    return (
        <div className={styles.vacancyList}>
            {vacancies.map((vacancy) => {
                return (
                    <div key={vacancy.id} onClick={() => showInfo(vacancy)}>
                        <ListItem vacancy={vacancy}></ListItem>
                    </div>
                );
            })}
        </div>
    ); 
}