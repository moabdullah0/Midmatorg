import { Card, CardContent } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TwoCard = () => {
  return (
    <div>
    
      <Card className="h-[30%] w-auto mt-10 items-center justify-center">
        <CardContent>
          <div className="flex lg:flex-row sm:flex-col items-center justify-center">
            <div className="flex lg:flex-row items-center">
              <h5 className="text-blue-600 mx-5 font-bold">300,988.70</h5>
              <small className="text-center">Earned Value (EV)</small>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[70%]"></div>
              <span className="text-blue-600 font-bold">70%</span>{" "}
              <small>left from target</small>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card className="h-[40%] mt-10">
        <CardContent>
          <h5 className="pb-5">Project Performance </h5>
          <div className="grid lg:grid-cols-3 h-auto">
            <div className="flex flex-col justify-center items-center  border-r-2 mx-2">
              <small className="font-bold text-blue-600 text-lg">
                0.7
                <ArrowDropUpIcon />
              </small>
              <small className="text-grey-400 ">Cost Performance index</small>
              <small>(CPI)</small>
            </div>
            <div className="flex flex-col justify-center items-center  border-r-2 mx-2">
              <small className="font-bold text-blue-600 text-lg">
                0.5
                <ArrowDropUpIcon />
              </small>
              <small className="text-grey-400 ">
                Schedule Performance Index
              </small>
              <small>(SPI)</small>
            </div>
            <div className="flex flex-col justify-center items-center  border-r-2 ">
              <small className="font-bold text-red-600 text-lg">
                -0.1
                <ArrowDropDownIcon />
              </small>
              <small>To Complete Performance Index</small>
              <small>(TCPI)</small>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoCard;
