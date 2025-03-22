import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto text-center shadow-none border-none">
      <div
      onClick={() => handleGetProductDetails(product?._id)}
      className="cursor-pointer group/ProductCard"
      >
        <div className="relative h-80 overflow-hidden rounded-t-md">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-cover object-top rounded-t group-hover/ProductCard:scale-110 transition-all duration-100"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-400">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-400">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-400">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-base tracking-tight mb-2 leading-5 font-light">{product?.title}</h2>
          <div className="flex items-center justify-center gap-3 mb-0">
            {product?.salePrice > 0 ? (
              <span className="text-xl font-semibold text-primary">
                ₹ {product?.salePrice}.00
              </span>
            ) : null}
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-xl text-zinc-500`}
            >
              ₹ {product?.price}.00
            </span>
          </div>
        </CardContent>
      </div>
      <CardFooter className="px-3">
        {product?.totalStock === 0 ? (
          <Button className="w-full opacity-60 cursor-not-allowed">
            Out Of Stock
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full bg-pink-700"
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
