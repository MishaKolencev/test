import HHruHttpService from "../../services/hhru-http.service";
import Head from 'next/head'
import { useRouter } from "next/dist/client/router"
import { useState } from "react";
import { useEffect } from "react";
import { Vacancy } from "../../types/Vacancy";
import styles from "./Vacancy.module.css"

export default function VacancyInfo() {
    const router  = useRouter();
    const {id} = router.query;
    let [vacancy, setVacancy] = useState({} as Vacancy);
    
    useEffect(() => {
      if (id) {
        HHruHttpService.getInstance().getVacancy(String(id)).then(res => setVacancy(res));
      }
    }, [id]);


    return (
      <div>
        <Head>
          <title>Test hh.ru app</title>
          <meta name="description" content="Test hh.ru app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          <div className={styles.name}>
            {vacancy.name}
          </div>
          <div className={styles.salary}>
              {vacancy.salary?.from ? 'от ' + vacancy.salary.from + vacancy.salary?.currency : '' }
              {vacancy.salary?.to ? ' до ' + vacancy.salary?.to + vacancy.salary?.currency : ''}
              {!vacancy.salary?.to && !vacancy.salary?.from ? 'не указана ' : ''}
          </div>
          <div className={styles.employer}>
            {vacancy.employer?.name}
          </div>
          <div className={styles.area}>
            {vacancy.area?.name}
          </div>
          <div className={styles.experienceEmployment}>
            <div>
              Требуемый опыт работы: {vacancy.experience?.name}
            </div>
            <div >  
              {vacancy.employment?.name}, {vacancy.schedule?.name}
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.descriptionName}>Описание</div>
            <div dangerouslySetInnerHTML={{__html: vacancy.description}}></div>
          </div>
        </div>
      </div>
    )
  }