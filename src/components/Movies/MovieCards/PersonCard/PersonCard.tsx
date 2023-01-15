
import styles from './personcard.module.css'
import { GetPersonImage, PersonType} from "../../MovieService";
import React, {useEffect, useState} from "react";


type ButtonProps = {
    Person : PersonType

}



export default function PersonCard({Person} : ButtonProps) {
    const [PersonImageUrl, setPersonImageUrl] = useState("")
    const PersonDescLink = `https://www.google.com/search?q=${Person.name.split(" ").join("+")}`

    useEffect(() => {
        GetPersonImage(Person.id).then((personImage) => {
            if (personImage?.profiles?.at(0)?.file_path){
                setPersonImageUrl(`https://image.tmdb.org/t/p/original/`+personImage?.profiles?.at(0)?.file_path as string)
            }
        });
    }, []);
    return (
        <a href={PersonDescLink} className={styles.link}>
            <div className={styles.card} >
                <img src={PersonImageUrl ? PersonImageUrl : "/person.svg"} alt={""} className={styles.personImage}/>
                <span className={styles.whoIs}>{Person.whoIs}</span>
                <span className={styles.name}>{Person.name}</span>
            </div>
        </a>
    )
}