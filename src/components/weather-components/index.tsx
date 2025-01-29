import imgLogo from "../../img/newq.png";
import cloudy from "../../img/Cloudy.svg";
import maxTemp from "../../img/maxTemp.svg";
import minTemp from "../../img/minTemp.svg";
import cloudy11 from "../../img/cloudy11.svg";
import windy from "../../img/widy.svg";
import normaly from "../../img/normaly.svg";
import loop from "../../img/loop.svg";

const WeatherComponents = () => {
  return (
    <section className="flex justify-between w-full h-[100vh]">
      <div className="pt-4 flex flex-col justify-between">
        <div>
          <img className="w-[200px] top-0" src={imgLogo} alt="" />
        </div>
        <div className="flex gap-[25px] items-center p-[70px]">
          <h1 className="text-[#FFF] text-[92px] font-bold">19* </h1>
          <div className="flex gap-2 items-center ">
            <div className="">
              <h2 className="text-[#FFF] text-[36px] font-bold">Andijan</h2>
              <div className="flex gap-2 text-[#FFF] text-[19px] ">
                <p>01:29</p>
                <p>Monday</p>
                <p>
                  29 <span>Nov</span> <span>2025</span>
                </p>
              </div>
            </div>
            <img src={cloudy} alt="" />
          </div>
        </div>
      </div>
      <div className="bgIMg p-[30px]">
        <div className="w-[90%]">
          <form className="w-full border-b-2 pb-2  border-[rgb(197,206,210)]">
            <input
              className="w-[90%] bg-transparent outline-none text-[#FFF] h-[25px]"
              type="text"
              placeholder="Joyni qidirish..."
            />
            <button>
              <img className="w-[22px]" src={loop} alt="" />
            </button>
          </form>

          <div>
            <h3>Ob-havo tafsilotlari...</h3>
          </div>

          <div>
            <h2>Yengil yomg'irli bo'ron</h2>
          </div>

          <div>
            <div>
              <h4>Joriy harorat</h4>
              <div>
                <p>19 °C</p>
                <img src={maxTemp} alt="" />
              </div>
            </div>
            <div>
              <h4>Joriy harorat</h4>
              <div>
                <p>19 °C</p>
                <img src={minTemp} alt="" />
              </div>
            </div>
            <div>
              <h4>Joriy harorat</h4>
              <div>
                <p>19 °C</p>
                <img src={normaly} alt="" />
              </div>
            </div>
            <div>
              <h4>Joriy harorat</h4>
              <div>
                <p>19 °C</p>
                <img src={cloudy11} alt="" />
              </div>
            </div>
            <div>
              <h4>Joriy harorat</h4>
              <div>
                <p>19 °C</p>
                <img src={windy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherComponents;
