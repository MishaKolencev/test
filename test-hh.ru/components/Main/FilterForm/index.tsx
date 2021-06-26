import HHruHttpService from "../../../services/hhru-http.service";
import { Button, MenuItem } from "@material-ui/core";
import { TextField, SelectField } from "../../common/form/fields"
import { Form } from "react-final-form";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./FilterForm.module.css";

export const FilterFrom = ({onSubmit}) => {
    let [employment, setEmployment] = useState<{id: string, name: string}[]>([]);
    let [experience, setExperience] = useState<{id: string, name: string}[]>([]);
    let [schedule, setSchedule] = useState<{id: string, name: string}[]>([]);

    useEffect(() => {
        HHruHttpService.getInstance().getVacancyFilters().then((filters) => {
            setEmployment(filters.employment);
            setExperience(filters.experience);
            setSchedule(filters.schedule);
        });
    }, []);

  return (
    <Form onSubmit={onSubmit}>
        {props => (
            <form className={styles.filterForm} onSubmit={props.handleSubmit}>
                <TextField className={styles.field} name="text" placeholder="Имя вакансии" />
                <SelectField className={styles.field} name="employment" label="Тип занятости">
                    {employment.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                        {name}
                    </MenuItem>
                    ))}
                </SelectField>   
                <SelectField className={styles.field} name="experience" label="Опыт работы">
                    {experience.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                        {name}
                    </MenuItem>
                    ))}
                </SelectField>           
                <SelectField className={styles.field} name="schedule" label="График работы">
                    {schedule.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                        {name}
                    </MenuItem>
                    ))}
                </SelectField>

                <Button className={styles.submit} variant="contained" color="primary" type="submit">Поиск</Button>
            </form>
        )}
    </Form>
  );
};
