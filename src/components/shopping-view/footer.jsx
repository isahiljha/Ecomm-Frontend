import { GiPirateCoat } from "react-icons/gi"
import { Button } from "../ui/button"
import { PhoneCall, PhoneCallIcon, PhoneIcon } from "lucide-react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer class="w-full px-24 my-0 mx-auto bg-pink-700 text-white">
        {/* <!--Grid--> */}
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0 !max-w-80">
                <a href="/"  class="flex items-center gap-2 text-xl font-semibold">
                <img src="/main-logo.png" className="max-w-72 pb-4" />
                </a>
                <div class="py-4 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left flex flex-col justify-start items-start gap-3">
                    <p>This website is just created for fun and my personal educational purposes. Everything which is presented here are fully demo and under copyright contents and I agree that.</p>
                    <p className=" gap-2"><IoLocationSharp className="h-5 w-5 me-1.5 inline-block" /><span className="font-bold text-white">Address:</span> Example Street, Colony 124, Flat No. 7, New Delhi, India, 100001</p>
                    <p className="flex items-start gap-2"><PhoneIcon className="h-4 w-4 me-0.5" /><span className="font-bold text-white">Phone:</span> +91-1234567890, +91-0987654321</p>
                </div>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7">Quick Links</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-zinc-300 hover:text-gray-900 hover:font-semibold">Home</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">About Us</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Contact Us</a></li>
                    <li><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">FAQs</a></li>
                </ul>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left ">
                <h4 class="text-lg text-white font-medium mb-7">Collectoins</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-zinc-300 hover:text-gray-900 hover:font-semibold">All Products</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Mens Fashion</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Womens Fashion</a></li>
                    <li><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Kids Fashion</a></li>
                </ul>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-white font-medium mb-7">Policies</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-zinc-300 hover:text-gray-900 hover:font-semibold">Privacy Policy</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Terms & Condition</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Refund Policy</a></li>
                    <li><a href="javascript:;"  class=" text-zinc-300 hover:text-gray-900 hover:font-semibold">Track Order</a></li>
                </ul>
            </div>
        </div>
        {/* <!--Grid--> */}
        <div class="py-7 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span class="text-sm text-zinc-300 ">©<a href="">StyleClothezMart</a> 2025, All rights reserved.</span>
                <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-white hover:text-pink-700">
                      <FaFacebook/>
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-white hover:text-pink-700">
                        <FaSquareXTwitter/>
                            
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-white hover:text-pink-700">
                        <FaInstagram/>    
                    </a>
                    <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-white hover:text-pink-700">
                        <FaYoutube/>
                    </a>
                </div>
            </div>
        </div>
</footer>
                                        
  )
}

export default Footer