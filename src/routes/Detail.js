import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({});
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false);
    },[id]);
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) :
                <div className={styles.movie}>
                    <div className={styles.header}>
                        <h1>THIS IS HEADER</h1>
                    </div>
                    <div className={styles.first}>
                        <img className={styles.movie__img} src={details.medium_cover_image} alt={details.title} />
                        <ul className={styles.fourth}>
                            {details.genres.map((g) =>
                                <li className={styles.genre} key={g}>{g}</li>
                            )}
                        </ul>
                    </div>
                    <div className={styles.second}>
                        <h1 className={styles.movie__title}>{details.title}</h1>
                        <h2 className={styles.movie__year}> {details.year} </h2>
                        <h3 className={styles.movie__description}>{details.description_full}</h3>
                    </div>
                    <div className={styles.third}>
                        <h1>RECOMMEND MOVIES</h1>
                    </div>
                </div>
            }
        </div >
    );
}

export default Detail;