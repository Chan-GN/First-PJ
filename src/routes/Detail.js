import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) :
                <div>
                    <img src={details.medium_cover_image} alt={details.title} />
                    <h1>{details.title} ({details.year}) </h1>
                    <br />
                    <p> download_count : {details.download_count} </p>
                    <p> Like : {details.like_count} </p>
                </div>
            }
        </div >
    );
}

export default Detail;