import { formatter } from "../util/investment";

export default function TableComponent({ resultsData }) {
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead className="thead">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {resultsData.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalInvestedCapital = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year} className="center">
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
