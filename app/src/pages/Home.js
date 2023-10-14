import zdj from "../assets/img/zdj.png";
import "./home.scss";
import Button from "../components/Button";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import ProductCategory from "../components/ProductCategory";

const categoryData = [
  {
    title: "WordPress Themes",
    subtitle: "Thousands of WordPress themes",
    categories: [
      {
        name: "Newest",
        link: "/category/wordpress?sort=date",
      },
      {
        name: "Bestsellers",
        link: "category/wordpress?sort=sales",
      },
    ],
    iconLink:
      "https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/wordpress-c4a4c90a55e94cdf642e0d8e6b58795b144aa04d143ac4f010058190a543122f.svg",
    imgLink:
      "https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-wordpress-594088e5f1d5c3316f598da7a29ca7f8a976ad81da98316d3c198660cd7bdf74.png",
  },
];

const links = [
  {
    name: "Newest",
    link: "/category/wordpress?sort=date",
  },
  {
    name: "Bestsellers",
    link: "category/wordpress?sort=sales",
  },
]


function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container d-flex a-items-y px-md py-xl">
          <div className="home-hero_component__left">
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
      <section className="home-category container">
        <div className="row">
          <div className="col-4">
            <ProductCategory title="WordPress One" subtitle="HTML1" categoris={links}/>
          </div>
          <div className="col-4">
            <ProductCategory title="WordPress Two" subtitle="HTML2" categoris={links}/>
          </div>
          <div className="col-4">
            <ProductCategory title="WordPress Three" subtitle="HTML3" categoris={links}/>
          </div>
          <div className="col-4">
            <ProductCategory title="WordPress Four" subtitle="HTML4" categoris={links}/>
          </div>
          <div className="col-4">
            <ProductCategory title="WordPress Five" subtitle="HTML5" categoris={links}/>
          </div>
          <div className="col-4">
            <ProductCategory title="WordPress Six" subtitle="HTML6" categoris={links}/>
          </div> 
        </div>
      </section>
    </>
  );
}

export default Home;
