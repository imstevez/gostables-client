import { useState } from "react";

const SetSwapFeesFactor = (props) => {
  const [sff, setSFF] = useState("");

  const { ttddContract } = props;

  const set = async () => {
    setSFF("");
    try {
      console.log(`SetSwapFeesFactor : ${sff}`);
      if (sff) {
        await ttddContract.SetSwapFeesFactor(sff);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSFF = (e) => {
    if (e.target.value) {
      setSFF(e.target.value);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col py-3">Set Swap Fees Factor</div>
      </div>
      <form className="row g-3 d-flex justify-content-between">
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            placeholder="Swap Fees Factor"
            value={sff}
            onChange={updateSFF}
          />
        </div>

        <div className="col-sm-5">
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => set()}
            >
              Set Swap Fees Factor
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SetSwapFeesFactor;
