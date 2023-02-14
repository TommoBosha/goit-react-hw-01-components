import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => {
    return (

    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statlist}>
                {stats.map(stat=>(<li  className={styles.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }} key={stat.id} >
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>))}
  </ul>
</section>
)}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf
        (PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
        id:PropTypes.string,
    })).isRequired,
}
