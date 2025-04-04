import { Link } from "react-router-dom";
import Header from "../components/header";
import { Footer } from "../components/footer";
import { Media } from "../components/media";

export const Home = () => {
  return (
    <div className="text-[#fff] bg-[#21201c] h-lvh">
      <div className="mx-[171px]">
        <Media />
        <Header />
        <div className="mt-[53px]">
          <div className="flex flex-col gap-[14px]">
            <div className="font-semibold text-[32px]">
              <font className="main-color">/</font>contacts
            </div>
            <div>Who I am</div>
          </div>
        </div>

        <div className="h-[46px]" />

        <div className="flex gap-[59px] justify-between">
          <div className="flex flex-col gap-5 mt-[45px] [line-height:26px] text-[16px] max-w-[600px] text-[#ABB2BF]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
          <div className="flex flex-col gap-4 mt-[100px] p-4 border-1 border-[#ABB2BF]">
            <h1 className="font-semibold text-[16px]">Message me here</h1>
            <div className="flex flex-col gap-2 text-[#ABB2BF]">
              <a
                href="https://github.com/umedzhan"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] p-[1px]">
                  <img src="icons/github.svg" />
                </div>
                umedzhan
              </a>
              <a
                href="mailto:karayev.umedjon@gmail.com"
                className="flex gap-[5px] items-center text-[16px]"
              >
                <div className="flex justify-center items-center w-[32px] h-[32px] px-[3px] py-[7px]">
                  <img src="icons/email.svg" />
                </div>
                karayev.umedjon@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="h-[25px]" />

        <div className="flex flex-col gap-[22px]">
          <h1 className="font-semibold text-[32px]">
            <font className="main-color">#</font>all-media
          </h1>
          <div className="flex gap-[22px]">
            <a
              href="https://github.com/umedzhan"
              className="flex gap-1 items-center"
            >
              <img src="icons/github.svg" />
              @umedzhan
            </a>
            <a href="https://t.me/umezhon" className="flex gap-1 items-center">
              <img src="icons/telegram.svg" />
              @umedzhan
            </a>
          </div>
        </div>

        <div className="h-[83px]" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
