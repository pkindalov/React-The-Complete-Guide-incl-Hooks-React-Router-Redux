import Header from "./components/common/Header";
import NewInvestmentForm from "./components/NewInvestment/NewInvestmentForm";
import InvestmentsList from "./components/Investments/InvestmentsList";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const noDataMessage = <p className="no-data-msg">No investment calculated yet</p>;
  const calculateHandler = (userInput) => {
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // console.log(currentSavings, yearlyContribution, expectedReturn, duration);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    console.log(yearlyData);
    setData(yearlyData);
  };

  return (
    <div>
      <Header />
      <NewInvestmentForm onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {data.length > 0 ? (
        <InvestmentsList data={data} />
      ) : (
        noDataMessage
      )}
    </div>
  );
}

export default App;
