
import styles from './personcard.module.css'
import {Cast, Crew, GetPersonImage, PersonType} from "../../MovieService";
import React, {useEffect, useState} from "react";


type ButtonProps = {
    Actor?: Cast,
    CrewMan?: Crew

}



export default function PersonCard({Actor, CrewMan} : ButtonProps) {
    const [PersonImageUrl, setPersonImageUrl] = useState("")
    useEffect(() => {
        GetPersonImage((Actor ? Actor : CrewMan!).id).then((personImage) => {
            if (personImage?.profiles?.at(0)?.file_path){
                setPersonImageUrl(`https://image.tmdb.org/t/p/original/`+personImage?.profiles?.at(0)?.file_path as string)
            }
        });
    }, []);


    if(Actor || CrewMan){
        const PersonDescLink = `https://www.google.com/search?q=${(Actor ? Actor : CrewMan!).name.split(" ").join("+")}`


        return (
            <a href={PersonDescLink} className={styles.link}>
                <div className={styles.card} >
                    <img src={PersonImageUrl ? PersonImageUrl : "/Icons/person.svg"} alt={""} className={styles.personImage}/>
                    <span className={styles.whoIs}>{Actor ? Actor.character : CrewMan!.job}</span>
                    <span className={styles.name}>{(Actor ? Actor : CrewMan!).name}</span>
                </div>
            </a>
        )
    }else{
        return (<></>)
    }

}