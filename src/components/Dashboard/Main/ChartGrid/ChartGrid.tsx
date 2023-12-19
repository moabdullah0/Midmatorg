import { Card, CardContent } from "@mui/material";
import Pieechart from "./Piechart";
import SquareIcon from "@mui/icons-material/Square";
import LineChart from "./LineChart";

const ChartGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-10">
      <Card>
          <CardContent>
            <div className="text-center">
              <h1>Project Budget</h1>
              <div className="flex flex-row items-center w-[50%]">
                <Pieechart />
                <div className="flex flex-col">
                  <small className="">Budget Value:</small>
                  <h5 className="text-blue-700 flex items-center">
                    <SquareIcon />474,988.70€
                  </h5>
                  <small className="">Expenses:</small>
                  <h5 className="text-green-700 flex items-center"><SquareIcon />400,000.00€</h5>
                  <small className="">Remaining:</small>
                  <h5 className="text-gray-400 flex items-center"><SquareIcon />74,988.70€</h5>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="text-center">
              <h1>Donor payments</h1>
              <div className="flex flex-row items-center w-[70%]">
                <LineChart />
                <div className="flex flex-col">
                  <small className="">Total payments from donor: </small>
                  <h5 className="text-blue-700 flex items-center">
                    <SquareIcon />210,000.00€
                  </h5>
                  <small className="">Expenses:</small>
                  <h5 className="text-green-700 flex items-center"><SquareIcon />400,000.00€</h5>
                  <small className="">Remaining:</small>
                  <h5 className="text-red-600 flex items-center"><SquareIcon />-190,000.00</h5>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ChartGrid;
