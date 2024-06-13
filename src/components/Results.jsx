import { calculateInvestmentResults } from "../util/investment";
import TableComponent from "./TableComponent";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);
  return (
    <section>
      <TableComponent resultsData={resultsData} />
    </section>
  );
}
