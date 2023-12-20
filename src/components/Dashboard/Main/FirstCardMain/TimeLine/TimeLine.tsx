import FlagIcon from "@mui/icons-material/Flag";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const TimeLine = () => {
  return (
    <div className="mt-10 w-[100%] text-center justify-center">
      <ol className="items-center sm:flex text-center justify-center">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-0 ring-white dark:bg-yellow-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div className="mb-11 text-red-600">
                <FlagIcon />
              </div>
            </div>
            <div className="hidden sm:flex w-full bg-green-600 h-0.5 dark:bg-yellow-400"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h6 className="font-bold text-green-600">Done <CheckCircleIcon/></h6>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              5/1/2023
            </time>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-yellow-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div className="mb-11 text-red-600">
                <FlagIcon />
              </div>
            </div>
            <div className="hidden sm:flex w-full bg-green-600 h-0.5 dark:bg-green-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h6 className="font-bold text-green-600">Done <CheckCircleIcon/></h6>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              5/1/2023
            </time>
          </div>
        </li>

        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-yellow-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div className="mb-11 text-red-600">
                <FlagIcon />
              </div>
            </div>
            <div className="hidden sm:flex w-[20vh] bg-green-600 h-0.5 dark:bg-green-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h6 className="font-bold text-green-600">Done <CheckCircleIcon/></h6>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              5/1/2023
            </time>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-yellow-300 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div className="mb-11 text-red-600">
                <FlagIcon />
              </div>
            </div>
            <div className="hidden sm:flex w-[30vh] bg-green-600 h-0.5 dark:bg-green-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h6 className="font-bold text-green-600">Done <CheckCircleIcon/></h6>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              5/1/2023
            </time>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <div className="mb-11 text-gray-600">
                <FlagIcon />
              </div>
            </div>
            <div className="hidden sm:flex w-[50vh] bg-gray-600 h-0.5 dark:bg-green-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h6 className="font-bold text-gray-600">Done</h6>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              5/1/2023
            </time>
          </div>
        </li>
      </ol>
      <div className="border-b-black w-[100%] border-solid border "></div>
      <div className="flex mt-2 text-center justify-start items-center">
        <time className=" block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mx-20">
          5/1/2023
        </time>
        <time className="mx-5 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          5/1/2023
        </time>
        <time className="mx-5 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          5/1/2023
        </time>
        <time className="mx-5 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          5/1/2023
        </time>
        <time className="mx-5 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          5/1/2023
        </time>
      </div>
    </div>
  );
};

export default TimeLine;
