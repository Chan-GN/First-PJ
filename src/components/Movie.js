import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({ coverImg, title, year, summary, genres, id }) {
    function handleImgError(event) {
        event.target.classList = styles.error__img;
    }
    return (
        <div className={styles.movie}>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} className={styles.movie__img} onError={handleImgError} />
            </Link>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((g) =>
                        <li className={styles.movie__genre} key={g}>{g}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;