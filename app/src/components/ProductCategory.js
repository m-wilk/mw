import "./product-category.scss"

function ProductCategory({title, subtitle, categoris}) {



  return (
    <div className="product-category p-3">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {categoris.map(({name, link})=> {
          return <a href={link}>{name}</a>
        })}
    
      </div>
      <a>
        <div className="product-category-img-wrapper">
          <img className="img-fluid product-category-icon" src="https://assets.market-storefront.envato-static.com/storefront/assets/category-icons/themeforest/wordpress-c4a4c90a55e94cdf642e0d8e6b58795b144aa04d143ac4f010058190a543122f.svg"/>
          <img className="img-fluid product-category-picture" src="https://assets.market-storefront.envato-static.com/storefront/assets/home/themeforest/category-tiles-wordpress-594088e5f1d5c3316f598da7a29ca7f8a976ad81da98316d3c198660cd7bdf74.png"/>

        </div>
      </a>
    </div>
  );
  
}

export default ProductCategory;
