import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

type DataType = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  modal: string;
  bgColor: string;
};

const fadeUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
};

const headPhoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam optio iure facilis nemo at facere quos? Eligendi.",
    price: "$199",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam optio iure facilis nemo at facere quos? Eligendi.",
    price: "$199",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam optio iure facilis nemo at facere quos? Eligendi.",
    price: "$199",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState<DataType>(headPhoneData[0]);

  const handleActiveData = (data: DataType) => {
    setActiveData(data);
  };

  return (
    <>
      <section className=" bg-brandDark min-h-screen text-white font-varela overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2  min-h-[700px]">
          {/* Headphone Info */}
          <div className=" flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className=" space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className=" text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className=" text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                    className=" px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* headphone list separator */}
              <div className="  flex w-full items-center justify-center md:justify-start gap-4 !mt-24 ">
                <div className=" flex-1 h-[1px] bg-white"></div>
                <p className=" uppercase text-sm"> Top Headphones for you</p>
                <div className=" flex-1 h-[1px] bg-white"></div>
              </div>

              {/* headphone list switcher */}
              <div className=" grid grid-cols-3 gap-6 sm:gap-10">
                {headPhoneData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="border border-t-white p-2 rounded-lg"
                    >
                      <UpdateFollower
                        mouseOptions={{
                          backgroundColor: item.bgColor,
                          zIndex: 999,
                          followSpeed: 0.5,
                          scale: 5,
                          text: "View Details",
                          textFontSize: "3px",
                        }}
                      >
                        <div
                          onClick={() => handleActiveData(item)}
                          className=" grid sm:grid-cols-2 gap-4 sm:gap-0 place-items-center cursor-pointer "
                        >
                          <div>
                            <img
                              src={item.image}
                              alt=""
                              className=" w-[70px] h-[70px] md:h-[40px] lg:h-[60px] xl:h-[70px] object-contain"
                            />
                          </div>
                          <div className=" space-y-2 ">
                            <p className=" text-base font-bold">{item.price}</p>
                            {/*    <p className=" text-sm font-normal text-nowrap">
                              {item.modal}
                            </p> */}
                          </div>
                        </div>
                        <p className=" text-sm text-center w-full font-normal //text-nowrap mt-3">
                          {item.modal}
                        </p>
                      </UpdateFollower>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Img */}

          <div className=" flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: {
                    duration: 0.2,
                  },
                }}
                src={activeData.image}
                alt=""
                className=" w-[300px] md:w-[400px] xl:w-[500px]"
              />
            </AnimatePresence>
          </div>

          {/* Ws Icon */}
          <div className=" text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
