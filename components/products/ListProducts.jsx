"use client";

import CustomPagination from "../layout/CustomPagination";
import Filters from "../layout/Filters";
// import Header from "../layout/Header";
import ProductItem from "./ProductItem";

const ListProducts = ({data}) => {
  // console.log(data);
  return (
    <>
      {/* <Header /> */}
      <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Filters />
            <main className="md:w-2/3 lg:w-3/4 px-3">
              {data?.products?.map((product)=>(
                <ProductItem product={product} key={product._id}/>
              ))}
              <CustomPagination resPerPage={data?.resPerPage} productsCount={data?.filteredProductsCount}/>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListProducts;
