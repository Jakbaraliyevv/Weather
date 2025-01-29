import imgLogo from "../../img/newq.png";
import cloudy from "../../img/Cloudy.svg";
import maxTemp from "../../img/maxTemp.svg";
import minTemp from "../../img/minTemp.svg";
import cloudy11 from "../../img/cloudy11.svg";
import windy from "../../img/widy.svg";
import normaly from "../../img/normaly.svg";
import loop from "../../img/loop.svg";

const WeatherComponents = () => {
  // Style Bular
  const divStyle = "flex justify-between items-center ";
  const divStyle2 = "flex items-center gap-[30px]";
  const h429 = "text-[rgb(197,206,210)] text-[19px] font-normal";
  const p29 = "text-[19px] text-[#FFF]";
  const imgWith = "w-[17px]";
  // Style Bular

  return (
    <section className="flex justify-between w-full h-[100vh]">
      <div className="pt-4 flex flex-col justify-between">
        <div>
          <img className="w-[200px] top-0" src={imgLogo} alt="" />
        </div>
        <div className="flex gap-[25px] items-center p-[70px]">
          <h1 className="text-[#FFF] text-[92px] font-bold">19 °C </h1>
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

          <div className="py-[60px]">
            <h3 className="text-[#FFF] text-[19px] font-bold ">
              Ob-havo tafsilotlari...
            </h3>
          </div>

          <div className="pb-[40px]">
            <h2 className="text-[#FFF] text-[19px] font-medium font-mono">
              Yengil yomg'irli bo'ron
            </h2>
          </div>

          <div className="flex flex-col gap-9">
            <div className="flex justify-between items-center ">
              <h4 className="text-[rgb(197,206,210)] text-[19px] font-normal">
                Eng yuqori harorat
              </h4>
              <div className="flex items-center gap-[30px]">
                <p className="text-[19px] text-[#FFF]">19 °C</p>
                <img className={imgWith} src={maxTemp} alt="" />
              </div>
            </div>
            <div className={divStyle}>
              <h4 className={h429}>Eng past harorat</h4>
              <div className={divStyle2}>
                <p className={p29}>19 °C</p>
                <img className={imgWith} src={minTemp} alt="" />
              </div>
            </div>
            <div className={divStyle}>
              <h4 className={h429}>Namlik</h4>
              <div className={divStyle2}>
                <p className={p29}>19 °C</p>
                <img className={imgWith} src={normaly} alt="" />
              </div>
            </div>
            <div className={divStyle}>
              <h4 className={h429}>Bulutlik</h4>
              <div className={divStyle2}>
                <p className={p29}>19 °C</p>
                <img className={imgWith} src={cloudy11} alt="" />
              </div>
            </div>
            <div className={divStyle}>
              <h4 className={h429}>Shamollik</h4>
              <div className={divStyle2}>
                <p className={p29}>19 °C</p>
                <img className={imgWith} src={windy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherComponents;
