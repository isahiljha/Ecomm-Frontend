import { Button } from "@/components/ui/button";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/card-product";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/hooks/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import { LiaTshirtSolid } from "react-icons/lia";
import { GiTravelDress } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import Levis from "../../assets/icons/Levis-Symbol.svg";
import HM from "../../assets/icons/H&M.svg";
import { SiZara } from "react-icons/si";

const categoriesWithIcon = [
  { id: "men", label: "Men's", icon: LiaTshirtSolid, bgUrl: `https://i.pinimg.com/originals/60/b0/a4/60b0a4ee7e032a6281444a82705a665c.jpg` },
  { id: "women", label: "Women's", icon: GiTravelDress, bgUrl: `https://mir-s3-cdn-cf.behance.net/project_modules/disp/46cf69131963891.619f6bd9922c4.jpg` },
  { id: "kids", label: "Kid's", icon: TbMoodKid, bgUrl: `https://i.pinimg.com/736x/d3/29/cf/d329cfb75d0cfef9da2f503dce539a12.jpg` },
  // { id: "accessories", label: "Accessories", icon: BsWatch, bgUrl: `` },
  // { id: "footwear", label: "Footwear", icon: GiRunningShoe, bgUrl: `` },
];

const brandsWithIcon = [
  { id: "zara", label: "Zara", icon: SiZara },
  {
    id: "levi",
    label: "Levi's",
    icon: () => (
      <img src={Levis} alt="Levi's" className="w-full h-full object-contain" />
    ),
  },
  { id: "adidas", label: "Adidas", icon: SiAdidas },
  { id: "h&m", label: "H&M", icon: () => <img src={HM} alt="H&M" className="w-full h-28 mb-4 mt-11 object-contain" /> },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">

      <div className="max-w-screen-2xl h-[71vh] mt-2 bg-[url(https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-MAINBANNER-Z1-Birthdaybash-5090.gif)] bg-cover flex justify-center items-center ">
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-7 mb-11 ">
            Our Collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-7">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className={`h-[70vh] cursor-pointer hover:shadow-lg transition-shadow !p-0 overflow-hidden`}
              >
                <CardContent className="flex flex-col items-center justify-center h-full w-full p-0">
                  <img src={categoryItem.bgUrl} alt={categoryItem.label} className="h-full w-full object-cover" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-7 mb-11 ">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-7">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                <ShoppingProductTile
                  handleGetProductDetails={handleGetProductDetails}
                  product={productItem}
                  handleAddtoCart={handleAddtoCart}
                />
              ))
              : null}
          </div>
        </div>
      </section>



      <section className="py-12 max-w-screen-2xl my-0 mx-auto h-[90vh] rounded-lg overflow-hidden w-full px-11">
        <div className="bg-[url(https://i.pinimg.com/originals/cc/b3/4f/ccb34f51bba6597deec3bf36ed654315.gif)] bg-cover w-full h-full rounded-3xl"></div>
      </section>

      <section className="py-12 px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-7 mb-11 ">
            Kids Collection
          </h2>
          <div className="flex justify-between items-stretch gap-7 relative h-full">
            <div className="w-1/2 bg-[url(https://static.vecteezy.com/system/resources/previews/027/110/341/non_2x/fashion-model-kids-free-photo.jpg)] bg-top rounded-2xl "></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-7">
              {productList && productList.length > 0
                ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
                : null}
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brandsWithIcon.map((brandItem, index) => (
              <Card
                key={index}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {brandItem.icon && <brandItem.icon className="w-40 h-40 mb-4 text-primary" />}
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />




      <section className="py-12 px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-7 mb-11 ">
            Mens Collection
          </h2>
          <div className="flex justify-between items-stretch flex-row-reverse gap-7 relative h-full">
            <div className="w-1/2 bg-[url(https://i.pinimg.com/736x/18/31/ca/1831ca04a9c0c5bc10ae9313b9d5661e.jpg)] bg-center rounded-2xl "></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-7">
              {productList && productList.length > 0
                ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
                : null}
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 px-11">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-7 mb-11 ">
            Womens Collection
          </h2>
          <div className="flex justify-between flex-row-reverse items-stretch gap-7 relative h-full">
            <div className="w-1/2 bg-[url(https://indiater.com/wp-content/uploads/2019/03/women-fashion-social-media-banner-psd.jpg)] bg-top rounded-2xl "></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-7">
              {productList && productList.length > 0
                ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
                : null}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ShoppingHome;
