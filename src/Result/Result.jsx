export default function Result({ result, totalRepayamount }) {
  const formattedResult = new Intl.NumberFormat("en-US").format(
    result.toFixed(2)
  );
  const formattedRepayAmount = new Intl.NumberFormat("en-US").format(
    totalRepayamount.toFixed(2)
  );
  if (!result)
    return (
      <div className="bg-slate-700 flex flex-col items-center justify-center p-8 gap-4 md:px-8 md:py-10 md:w-1/2">
        <img src="../assets/images/illustration-empty.svg" alt="result" />
        <h2 className="text-white font-semibold text-xl">Results shown here</h2>
        <p className="text-slate-300 text-[16px] text-center font-medium">
          Complete the form and click "calculate repayment" to see what your
          monthly repayments would be.
        </p>
      </div>
    );
  return (
    <div className="bg-slate-700 flex flex-col p-8 gap-8 md:px-8 md:py-10 md:w-1/2 md:overflow-clip">
      <h1 className="text-white font-semibold text-xl">Your results</h1>
      <p className="text-slate-300 text-[16px] font-medium mb-2 md:mb-4">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div className="bg-slate-900 rounded-md divide-y-2 divide-slate-700 px-4 py-6 border-t-4 border-lime-500 md:px-6 md:py-8">
        <div className="flex flex-col gap-2 mb-3">
          <p className="text-slate-300 text-sm md:text-[16px] ">
            Your monthly repayments
          </p>
          <p className="text-lime-500 text-3xl font-bold md:text-5xl">
            £{formattedResult}
          </p>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <p className="text-slate-300 text-sm md:text-[16px]">
            Total you will repay over the term
          </p>
          <p className="text-white text-xl font-bold md:text-3xl">
            £{formattedRepayAmount}
          </p>
        </div>
      </div>
    </div>
  );
}
