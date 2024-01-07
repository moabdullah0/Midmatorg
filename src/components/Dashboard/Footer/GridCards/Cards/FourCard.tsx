import { Card, CardContent } from "@mui/material";
import FirstCard from "../ChartsSection/doughnutChart";
import img from "../../../../../assets/37244091-1e161088-2484-11e8-9697-80013de58ea6.png";
import PieChart from "../ChartsSection/FirstPieChart";
import SecondPieChart from "../ChartsSection/SecondPieChart";

const FourCard = () => {
  return (
    <div className="grid  grid-cols-2 gap-4 mt-10">
  
      <Card>
        <CardContent>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col">
                <h5 className="text-purple-700 font-bold">474,988.70€</h5>

                <small className="" style={{ whiteSpace: "nowrap" }}>
                  Planned Value (PV)
                </small>

                <h5 className="text-gray-400 font-bold">74,988.70€</h5>
              </div>
              <div className="mx-2">
                <FirstCard />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex flex-col">
                <h5 className="text-green-600 font-bold">400,000.00€</h5>
                <small className="" style={{ whiteSpace: "nowrap" }}>
                  Actual Value(AV)
                </small>
              </div>
              <img className="w-[50%] mx-5 mt-5 " src={img} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div>
            <h6>65,500.70€</h6>
            <small>Estimate To Compete (ETC)</small>
            <div className="w-[50%] flex">
              <PieChart />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="">
            <small className="text-yellow-400 font-bold ">
              600,988.70 € <br />
            </small>
            <small className="">Estimate At Completion (EAC)</small>
            <div className="flex flex-row w-[50%]">
              <SecondPieChart />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FourCard;
