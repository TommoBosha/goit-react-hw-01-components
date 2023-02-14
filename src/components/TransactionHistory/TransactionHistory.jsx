import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.line}>Type</th>
      <th className={styles.line}>Amount</th>
      <th className={styles.line}>Currency</th>
    </tr>
  </thead>
            <tbody >
                {items.map(({ id, type, amount, currency }) => 
                (<tr className={styles.row} key={id}>
                    <td className={styles.colum}>{type}</td>
                    <td className={styles.colum}>{amount}</td>
                    <td className={styles.colum}>{currency}</td>
                </tr>)
                )}
    </tbody>
   
  
</table>
    )

}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf
        (PropTypes.shape({
         id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    })).isRequired,
   
}