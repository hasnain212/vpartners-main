import React from "react";
import "../HotProducts/HotProduct.css";
import ProductCard from "../ProductCard/ProductCard";
import proimgone from "../HotProducts/assets/productimgone.jpg";
import proimgtwo from "../HotProducts/assets/productimgtwo.jpg";
import proimgthree from "../HotProducts/assets/productimgthree.jpg";
import proimgfour from "../HotProducts/assets/productimagefour.jpg";
import proimgfive from "../HotProducts/assets/productimgfive.jpg";
import proimgsix from "../HotProducts/assets/productimgsix.jpg";
import proimgseven from "../HotProducts/assets/productimgseven.jpg";
import proimgeight from "../HotProducts/assets/productimgeight.jpg";
import proimgnine from "../HotProducts/assets/productimgnine.jpg";
function HotProducts() {
  return ( 
      <div className="hot-products">
        <div className="hot-products-heading">
          <h1>Check-Out Our Hot Products</h1>
        </div>
        <div className="hot-products-items">
          <ProductCard
            productimage={proimgone}
            productdescription="Chinese manufacturer providing high quality and stable price of wpc wall cladding"
          />
          <ProductCard productimage={proimgtwo} productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
          <ProductCard productimage={proimgthree}  productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
          <ProductCard productimage={proimgfour} productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
          <ProductCard productimage={proimgfive}productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding" />
          <ProductCard productimage={proimgsix} productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
          <ProductCard productimage={proimgseven}productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding" />
          <ProductCard productimage={proimgeight} productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
          <ProductCard productimage={proimgnine} productdescription="Visionary_Products providing high quality and stable price of wpc wall cladding"/>
        </div>
      </div>
       
  );
}

export default HotProducts;