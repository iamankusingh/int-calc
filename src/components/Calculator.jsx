import React, { useState } from "react";

const Calculator = () => {
  // state of simple and compound interest
  let [simple, setSimple] = useState(true);

  let [principle, setPrinciple] = useState(10000);
  let [rate, setRate] = useState(10);
  let [period, setPeriod] = useState(1);
  let [unit, setUnit] = useState(1);
  let [frequency, setFrequency] = useState(365);

  let p = parseInt(principle, 10);
  let r = parseInt(rate, 10);
  let n = parseInt(period, 10);
  let u = parseInt(unit, 10);
  let f = parseInt(frequency, 10);

  // SIMPLE INTEREST CALCULATION
  let si;
  let siA;

  function simpleInterest() {
    si = (p * (r / 100) * n) / u;
    siA = p + si;
  }

  // COMPOUND INTEREST CALCULATION
  let ci;
  let ciA;

  function compoundInterest() {
    ciA = p * (1 + r / 100 / f) ** (f * (n / u));
    ci = ciA - principle;
  }

  if (simple) {
    simpleInterest();
  } else {
    compoundInterest();
  }

  return (
    <section className="p-3 dark:bg-slate-800 max-w-full md:max-w-md">
      <div>
        <div className="cursor-default flex gap-4 justify-center bg-slate-200 rounded-md py-2 dark:bg-slate-600">
          <h2
            htmlFor="simpleBtn"
            className={`text-xl font-bold px-4 rounded-md dark:text-white ${
              simple ? "bg-cyan-200 dark:bg-cyan-950" : "bg-transparent"
            }`}
            onClick={() => {
              setSimple(true);
            }}
          >
            Simple
          </h2>

          <h2
            htmlFor="compoundBtn"
            className={`text-xl font-bold px-4 rounded-md dark:text-white ${
              simple ? "bg-transparent" : "bg-cyan-200 dark:bg-cyan-950"
            }`}
            onClick={() => {
              setSimple(false);
            }}
          >
            Compound
          </h2>
        </div>

        {/* FORM */}
        <form
          action="#"
          className="flex flex-col rounded-xl p-4 bg-slate-200 my-6 dark:bg-slate-600"
        >
          <label
            htmlFor="principleAmt"
            className="text-xl pb-1 dark:text-white"
          >
            Principle Amount :
          </label>
          <input
            type="number"
            id="principleAmt"
            value={principle}
            onChange={(e) => {
              setPrinciple(e.target.value);
            }}
            className="bg-white p-1 text-xl mb-4 rounded-md"
          />

          <label htmlFor="rate" className="text-xl pb-1 dark:text-white">
            rate (%) :
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => {
              setRate(e.target.value);
            }}
            className="bg-white p-1 text-xl mb-4 rounded-md"
          />

          <div className="flex">
            <div className="w-1/2">
              <label
                htmlFor="period"
                className="text-xl pb-1 block dark:text-white"
              >
                Time for :
              </label>

              <input
                type="number"
                id="period"
                value={period}
                onChange={(e) => {
                  setPeriod(e.target.value);
                }}
                className="bg-white p-1 text-xl mb-4 rounded-md w-1/2"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="unit"
                className="text-xl pb-1 block dark:text-white"
              >
                Unit
              </label>
              <select
                name=""
                id="unit"
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                }}
                className="bg-white p-1 text-xl mb-4 rounded-md"
              >
                <option value="1">Year</option>
                <option value="4">Quater</option>
                <option value="12">Month</option>
                <option value="52">Week</option>
                <option value="365">Day</option>
              </select>
            </div>
          </div>

          {!simple ? (
            <div className="flex items-center justify-between">
              <label htmlFor="frequency" className="text-xl dark:text-white">
                Compound frequency
              </label>
              <select
                name=""
                id="frequency"
                value={frequency}
                onChange={(e) => {
                  setFrequency(e.target.value);
                }}
                className="bg-white p-1 text-xl rounded-md"
              >
                <option value="365">Daily</option>
                <option value="52">Weekly</option>
                <option value="12">Monthly</option>
                <option value="4">Quartly</option>
                <option value="2">Semi-Yearly</option>
                <option value="1">Yearly</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>

      <div className="bg-slate-300 p-4 rounded-xl text-xl dark:bg-slate-600">
        <h2 className="text-indigo-800 font-bold text-2xl dark:text-sky-200">
          Result :
        </h2>
        <p className="dark:text-white">
          Interest is : <span className="font-bold">{simple ? si : ci}</span>
        </p>

        <p className="dark:text-white">
          Total Amount is :
          <span className="font-bold"> {simple ? siA : ciA}</span>
        </p>
      </div>
    </section>
  );
};

export default Calculator;
