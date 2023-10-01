import styles from "./InvestmentsList.module.css";

const InvestmentsList = ({ data }) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((investment, index) => {
          console.log(investment);
          return (
            <tr key={index}>
              <td>{investment.year}</td>
              <td>{investment.savingsEndOfYear}</td>
              <td>{investment.yearlyInterest}</td>
              <td>{investment.yearlyInterest}</td>
            </tr>
          );
        })}
        {/* <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr> */}
      </tbody>
    </table>
  );
};

export default InvestmentsList;
