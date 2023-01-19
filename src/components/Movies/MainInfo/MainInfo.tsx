import styles from "./maininfo.module.css";
import { MovieDetails } from "../MovieService";

type MainInfoProps = {
    MovieDetails: MovieDetails;
};

export default function MainInfo({ MovieDetails }: MainInfoProps) {
    return (
        <div className={styles.mainInfo}>
            {MovieDetails.release_date ? (
                <div className={styles.item}>
                    <img
                        src={"/Icons/calendar.svg"}
                        alt={""}
                        className={styles.icon}
                    />
                    <span className={styles.value}>
                        {MovieDetails.release_date}
                    </span>
                </div>
            ) : (
                <></>
            )}

            {MovieDetails.vote_average ? (
                <div className={styles.item}>
                    <img src={"/Icons/star.svg"} alt={""} className={styles.icon} />
                    <span className={styles.value}>
                        {MovieDetails.vote_average?.toString().slice(0, 3)}
                    </span>
                </div>
            ) : (
                <></>
            )}

            {MovieDetails.budget ? (
                <div className={styles.item}>
                    <img src={"/Icons/budget.svg"} alt={""} className={styles.icon} />
                    <span className={styles.value}>
                        {MovieDetails.budget} $
                    </span>
                </div>
            ) : (
                <></>
            )}

            {MovieDetails.production_countries?.at(0)?.iso_3166_1 ? (
                <div className={styles.item}>
                    <img
                        src={"/Icons/country.svg"}
                        alt={""}
                        className={styles.icon}
                    />
                    <span className={styles.value}>
                        {MovieDetails.production_countries?.map(
                            (el) => `${el.iso_3166_1} `
                        )}
                    </span>
                </div>
            ) : (
                <></>
            )}

            {MovieDetails.revenue ? (
                <div className={styles.item}>
                    <img
                        src={"/Icons/revenue.svg"}
                        alt={""}
                        className={styles.icon}
                    />
                    <span className={styles.value}>
                        {MovieDetails.revenue} $
                    </span>
                </div>
            ) : (
                <></>
            )}

            {MovieDetails.runtime ? (
                <div className={styles.item}>
                    <img
                        src={"/Icons/duration.svg"}
                        alt={""}
                        className={styles.icon}
                    />
                    <span className={styles.value}>
                        {MovieDetails.runtime} min
                    </span>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
