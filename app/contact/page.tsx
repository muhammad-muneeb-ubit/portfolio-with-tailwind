import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div
        style={{ boxSizing: "border-box" }}
        className="py-14 bg-black flex flex-col items-center w-[100%] h-[90vh]"
      >
        <div className="text-white text-5xl ">Contact Me</div>
        <form className="mt-4">
          <label className="text-white mx-3 ">Name: </label>
          <input
            type="text"
            name=""
            id=""
            className="my-2 rounded-sm h-[35px] w-[295px]"
          />{" "}
          <br />
          <label className="text-white mx-3">Email:</label>
          <input
            type="email"
            name=""
            className="my-2 rounded-sm ml-2 h-[35px] w-[295px]"
            id=""
          />{" "}
          <br />
          <label className="text-white mx-3">Phone:</label>
          <input
            type="tel"
            name=""
            className="my-2 rounded-sm h-[35px] w-[295px]"
            id=""
          />{" "}
          <br />
          <label className="text-white mx-3">Message:</label>
          <input
            type="tel"
            name=""
            className="my-2 rounded-sm h-[35px] w-[295px]"
            id=""
          />{" "}
          <br />
        </form>
      </div>
      <Footer />
    </>
  );
}
