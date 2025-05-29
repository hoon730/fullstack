import SectionTitle from "../components/SectionTitle";
import PortfolioSwiper from "../components/PortfolioSwiper";

const Portfolio = () => {
  return (
    <div className="main portfolio">
      <div className="content-inner">
        <SectionTitle title="portfolio" subTitle="저의 포트폴리오는.." />
        <div className="port-wrap">
          <PortfolioSwiper />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
