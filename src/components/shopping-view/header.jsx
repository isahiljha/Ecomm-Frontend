import { HousePlug, LogOut, Menu, SearchIcon, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser, resetTokenAndCredentials } from "@/store/auth-slice";
import UserCartWrapper from "./cart-drawer";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";
import { GiRolledCloth } from "react-icons/gi";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Marquee from "react-fast-marquee";



function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
        getCurrentMenuItem.id !== "products" &&
        getCurrentMenuItem.id !== "about" &&
        getCurrentMenuItem.id !== "contact" &&
        getCurrentMenuItem.id !== "search"
        ? {
          category: [getCurrentMenuItem.id],
        }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
        new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
      )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
        >
          {menuItem.label}
        </Label>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    // dispatch(logoutUser());
    dispatch(resetTokenAndCredentials());
    sessionStorage.clear();
    navigate("/auth/login");
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);

  console.log(cartItems, "cartItems");

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4 ">

      <div onClick={() => navigate("/shop/account")}>
        <FaRegUser className="mr-2 h-6 w-6 cursor-pointer transition-all duration-100 active:scale-90" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hidden">
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <div
          onClick={() => setOpenCartSheet(true)}
          className="relative cursor-pointer transition-all duration-100 active:scale-90"
        >
          <ShoppingCart className="w-7 h-7" />
          <span className="absolute -top-2 -right-2 font-bold text-sm bg-pink-700 text-white !h-5 !w-5 flex justify-center items-center !text-[10px] rounded-full">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </div>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (<>

    <div className="z-40 w-full">
      <Marquee className="bg-gradient-to-r from-blue-200 via-pink-300 to-green-200 py-2 text-sm" speed={70} >
        <div className="flex items-center gap-7 ms-7">
          <div>Get Extra 5% Off On Prepaid Orders. 💸</div>
          <div>Free Shipping All Over India 🚚</div>
          <div>Best Quality Clothes 👗</div>
          <div>Featured Top Brands 🌟</div>
        </div>
        <div className="flex items-center gap-7 ms-7">
          <div>Get Extra 5% Off On Prepaid Orders. 💸</div>
          <div>Free Shipping All Over India 🚚</div>
          <div>Best Quality Clothes 👗</div>
          <div>Featured Top Brands 🌟</div>
        </div>
      </Marquee>
      <header className="bg-background px-7">
        <div className="flex h-24 items-center justify-between px-4 md:px-6">
          <div className="hidden lg:block" onClick={() => navigate("/shop/search")}>
            <IoIosSearch className="h-7 w-7 transition-all duration-100 active:scale-90 cursor-pointer" />
          </div>
          <Link to="/shop/home" className="flex items-center gap-2 text-2xl">
            <img src="/main-logo.png" className="max-w-80" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle header menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <MenuItems />
              <HeaderRightContent />
            </SheetContent>
          </Sheet>

          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        </div>
      </header>

      <div className="hidden md:flex bg-pink-700 text-white w-full h-12 my-0 mx-auto items-center justify-center uppercase">
        <div className="hidden lg:block ">
          <MenuItems />
        </div>
      </div>
    </div>
  </>
  );
}

export default ShoppingHeader;
