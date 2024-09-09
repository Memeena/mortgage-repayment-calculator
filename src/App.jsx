import { useState } from "react";
import Calculator from "./Calculator/Calculator";
import Result from "./Result/Result";

export default function App() {
  //State variables
  const initialState = {
    amount: "",
    term: "",
    rate: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  //Function to handle "Clear All" button
  function handleReset() {
    setFormData(initialState);
    setErrors({});
    setIsSubmitted(false);
  }

  //Calculating the result and the repay Amount
  const result = isSubmitted
    ? formData.type === "repay"
      ? calcMortgageRepayment()
      : calcMortgageIntOnly()
    : 0;

  const totalRepayamount = result * formData.term * 12;

  //Function to calculate the monthly mortgage Repayment amount
  function calcMortgageRepayment() {
    const result =
      (formData.amount *
        (formData.rate / 12 / 100) *
        (1 + formData.rate / 12 / 100) ** (formData.term * 12)) /
      ((1 + formData.rate / 12 / 100) ** (formData.term * 12) - 1);

    return result;
  }

  //Function to calculate the monthly Interest Only amount
  function calcMortgageIntOnly() {
    const result = (formData.rate / 12 / 100) * formData.amount;
    return result;
  }

  return (
    <div className="bg-white flex flex-col md:flex md:flex-row md:justify-between md:rounded-2xl md:mx-20 md:my-20 lg:mx-60 ">
      <Calculator
        formData={formData}
        setFormData={setFormData}
        handleReset={handleReset}
        errors={errors}
        setErrors={setErrors}
        setIsSubmitted={setIsSubmitted}
      />
      <Result result={result} totalRepayamount={totalRepayamount} />
    </div>
  );
}
