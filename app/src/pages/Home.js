import zdj from "../assets/img/zdj.png";
import "./home.scss";
import Button from "../components/Button";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";

function Home() {
  return (
    <>
      <section className="home-hero_component__root ">
        <div className="home-hero_component__wrapper d-flex a-items-y px-md py-xl">
          <div>
            <div>
              <h1>
                Professional WordPress Themes & Website Templates for any
                project
              </h1>
              <h2 className="h6 text-wight-400">
                Discover thousands of easy to customize themes, templates & CMS
                products, made by world-class developers.
              </h2>
            </div>
            <form>
              <div className="search-input-wrapper d-flex">
                <input placeholder="e.g. responsive WordPress" />
                <Button extraClass="btn-success d-flex">
                  <SearchIcon className="icon-sm pr-1" /> Search
                </Button>
              </div>
            </form>
          </div>
          <div>
            <img src={zdj} alt="zdj.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
