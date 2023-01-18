import styles from './search.module.css'

type SearchProps = {
    action: (value:string) => void;
}

export default function Search({action} : SearchProps) {

    return ( 
        <div className={styles.searchContainer}>
            <input type={'search'} onChange={(event) => action(event.currentTarget.value)} className={styles.searchLine} placeholder={"Type what you would like to watch..."}/>

        </div>
    )
}

