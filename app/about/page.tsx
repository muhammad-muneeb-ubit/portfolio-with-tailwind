import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const page = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-[90vh] bg-black flex box-border">
        <div className="text w-1/2  border-2 border-white border-dotted mt-10 mx-5 rounded-md">
          <div className="description text-white mx-10  ">
            <p className="tracking-wider pt-2 leading-6"> Assalam O Alaikum!</p>
            <p className="tracking-wider pt-2 leading-6">
              My name is Muhammad Muneeb, and I&#39;m a talented frontend developer
              who recently enrolled in intensive training course at Governor
              House and SMIT. With my passion for creativity and eye for design,
              I possess the skills to create stunning and responsive websites
              that captivate visitors and deliver an exceptional user
              experience.
            </p>
            <p className="tracking-wider pt-2 leading-6">
              My expertise in HTML, CSS, JavaScript, Typescript, Tailwind, and
              NextJS allows me to bring your vision to life, while ensuring your
              website is not only aesthetically pleasing but also fully
              functional and user-friendly. I pride myself on my ability to
              create seamless designs that adapt to different devices, so your
              website will look just as impressive on a desktop computer as it
              does on a smartphone
            </p>
          </div>
        </div>
        <div className="pic py-10 w-1/2">
          <Image
            className="w-full rounded-md"
            src="/images/my-full.jpg"
            alt="Logo"
            width={500}
            height={300}  
            style={{width:"70%",height:"108%"}}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
