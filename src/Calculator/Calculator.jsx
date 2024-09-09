//Validating the form

const validateForm = (data) => {
  const errors = {};

  if (!data.amount) {
    errors.amount = "Amount is required!";
  }

  if (!data.rate) {
    errors.rate = "Rate is required!";
  }

  if (!data.term) {
    errors.term = "Term is required!";
  }

  if (!data.type) {
    errors.type = "Please select a type!";
  }

  return errors;
};

export default function Calculator({
  formData,
  setFormData,
  handleReset,
  errors,
  setErrors,
  setIsSubmitted,
}) {
  //Function to handle change in the input variable
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({});
    setIsSubmitted(false);
  }

  //Function to handle the form submit by clicking on the "calculate repayments" button
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Button clicked");
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    console.log(errors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-10 md:w-1/2 ">
      <div className="md:flex md:justify-between md:align-middle md:mb-4">
        <h1 className="text-lg md:text-2xl font-bold">Mortgage calculator</h1>
        <button
          className="text-[16] underline underline-offset-4 text-slate-500 font-normal pb-6 "
          onClick={handleReset}
        >
          Clear All
        </button>
      </div>
      <form
        className="text-slate-500 text-[16] font-normal flex flex-col gap-5 md:gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="amount" className="font-semibold text-slate-500">
            Mortgage Amount
          </label>
          <div className="flex flex-wrap  rounded-lg shadow-sm">
            <span className="px-4 flex-none basis-1/6 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-slate-500 bg-slate-200 text-[16px] text-slate-700 font-semibold">
              £
            </span>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="input basis-10/12 border-s-0 rounded-l-none"
            />
            {errors.amount && (
              <span className=" mt-2 basis-full text-red-500 text-sm">
                {errors.amount}
              </span>
            )}
          </div>
        </div>
        <div className="md:flex md:gap-6 ">
          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="term" className="font-semibold text-slate-500">
              Mortgage Term
            </label>
            <div className="flex rounded-lg shadow-sm ">
              <input
                type="text"
                value={formData.term}
                name="term"
                id="term"
                onChange={handleChange}
                className="input border-r-0  rounded-r-none "
              ></input>

              <span className="px-4 inline-flex  items-center rounded-r-lg min-w-fit border border-s-0 border-slate-500 bg-slate-200 text-[16px] text-slate-700 font-semibold">
                years
              </span>
            </div>
            {errors.term && (
              <span className=" block mt-2 basis-full  text-red-500 text-sm">
                {errors.term}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 md:w-1/2">
            <label htmlFor="rate" className="font-semibold text-slate-500">
              Interest Rate
            </label>
            <div className="flex rounded-lg shadow-sm  ">
              <input
                type="text"
                value={formData.rate}
                name="rate"
                onChange={handleChange}
                className="input border-r-0  rounded-r-none"
              />
              <span className="px-4 inline-flex items-center rounded-r-lg min-w-fit border border-s-0 border-slate-500 bg-slate-200 text-[16px] text-slate-700 font-semibold">
                %
              </span>
            </div>
            {errors.rate && (
              <span className=" block mt-2 basis-full text-red-500 text-sm">
                {errors.rate}
              </span>
            )}
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-slate-500 mb-3">Mortgage Type</p>
          <div className="grid space-y-3 ">
            <div
              className={`flex items-center ps-4 border rounded ${
                formData.type === "repay"
                  ? "border-lime-400 border-2 bg-lime-100"
                  : "border-slate-500 "
              }`}
            >
              <input
                id="bordered-radio-1"
                type="radio"
                value="repay"
                name="type"
                className={`relative appearance-none bg-white border-slate-500 border-2 focus:ring-lime-500  focus:ring-2 checked:border-lime-400 rounded-full w-4 h-4 text-lime-400 checked:bg-lime-100 ${
                  !formData.type ? "peer-checked:hidden" : ""
                } `}
                onClick={handleChange}
              />
              {formData.type === "repay" && (
                <div className="absolute w-2 h-2 rounded-full bg-lime-500 ml-[3px]"></div>
              )}
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4 ms-2 text-sm font-bold text-slate-900 "
              >
                Repayment
              </label>
            </div>
            <div
              className={`flex items-center ps-4 border  rounded ${
                formData.type === "intOnly"
                  ? "border-lime-500 border-2 bg-lime-100"
                  : "border-slate-500"
              }`}
            >
              <input
                id="bordered-radio-2"
                type="radio"
                value="intOnly"
                name="type"
                onClick={handleChange}
                className="relative appearance-none checked:border-lime-400 rounded-full w-4 h-4 text-lime-400 checked:bg-lime-100 bg-white border-slate-500 border-2 focus:ring-lime-500  focus:ring-2 "
              />
              {formData.type === "intOnly" && (
                <div className="absolute w-2 h-2 rounded-full bg-lime-500 ml-[3px]"></div>
              )}
              <label
                htmlFor="bordered-radio-2"
                className="w-full py-4 ms-2 text-sm font-bold text-slate-900 "
              >
                Interest Only
              </label>
            </div>
          </div>
          {errors.type && (
            <p className="block mt-2 basis-full text-red-500 text-sm">
              Please select a type!
            </p>
          )}
        </div>
        <button className="px-2 py-3 text-slate-800 font-bold flex items-center justify-center gap-4 bg-lime-400 rounded-full mb-8 md:w-max md:px-4 md:py-4">
          <img src="../assets/images/icon-calculator.svg" alt="calc-icon" />
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}
