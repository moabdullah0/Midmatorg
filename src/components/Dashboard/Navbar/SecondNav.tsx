import SecondNavData from "../../../data/SecondNavData";


const SecondNav = () => {


  return (
    <div className="border-b-2">
      <div className="flex">
        {SecondNavData.map((link, index) => (
          <a
            key={index}
            className={`flex flex-row cursor-pointer mx-2 hover:text-green-400 ${
              index === 0 ? 'text-green-600 border-b-2 border-green-600' : ''
            }`}
          >
            <div>{link.icon}</div>
            <h5>{link.title}</h5>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SecondNav;
