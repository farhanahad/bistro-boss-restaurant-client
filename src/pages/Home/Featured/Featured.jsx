import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt
            ad asperiores eum ipsa, qui numquam. Commodi ratione neque error
            corrupti debitis nisi eaque, eum explicabo assumenda beatae aut quo
            quos consequuntur nobis quis consectetur distinctio soluta atque
            fugit illum in tempora incidunt! Debitis magni expedita ullam animi
            aliquid doloremque.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
