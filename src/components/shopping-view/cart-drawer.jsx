import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";
import { CardFooter } from "../ui/card";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
        (sum, currentItem) =>
          sum +
          (currentItem?.salePrice > 0
            ? currentItem?.salePrice
            : currentItem?.price) *
          currentItem?.quantity,
        0
      )
      : 0;

  return (
    <SheetContent className="max-w-md p-0">
      <SheetHeader className="py-3 px-5">
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>

      <div className="h-7 bg-pink-700 text-white -ms-[1px] flex items-center justify-center text-xs"> Limited Offer - Get 5% off on prepaid orders</div>
      <div className="h-[89vh] flex flex-col justify-between px-5">

        <div className="mt-7 space-y-5">
          {cartItems && cartItems.length > 0
            ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
            : null}
        </div>

        <CardFooter className="flex flex-col w-full px-0 pb-5 border-t text-sm">
          <div className="mt-3 space-y-2 w-full">
            <div className="flex justify-between">
              <span className="">Total</span>
              <span className="font-semibold">₹ {totalCartAmount}.00</span>
            </div>
            <div className="flex justify-between">
              <span className="">Shipping</span>
              <span className="">Free</span>
            </div>
          </div>
          <Button
            onClick={() => {
              navigate("/shop/checkout");
              setOpenCartSheet(false);
            }}
            size="lg"
            className="w-full mt-6 h-11 text-lg uppercase font-bold bg-pink-700 hover:bg-pink-800 transition-all duration-100 active:scale-95"
          >
            Checkout
          </Button>
        </CardFooter>
      </div>
    </SheetContent>
  );
}

export default UserCartWrapper;
