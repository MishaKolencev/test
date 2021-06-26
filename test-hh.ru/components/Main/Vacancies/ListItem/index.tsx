import styles from "./ListItem.module.css"

export const ListItem = ({vacancy}) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.head}>
                <div className={styles.name}>{vacancy.name}</div>
                <div className={styles.salary}>
                    {vacancy.salary?.from ? 'от ' + vacancy.salary.from + vacancy.salary?.currency : '' }
                    {vacancy.salary?.to ? ' до ' + vacancy.salary?.to + vacancy.salary?.currency : ''}
                    {!vacancy.salary?.to && !vacancy.salary?.from ? 'не указана ' : ''}
                </div>
            </div>
            <div className={styles.employer}>{vacancy.employer.name}</div>
        </div>
    )
} 