import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-[url(https://codezeel.com/opencart/OPC02/OPC020028/image/cache/catalog/main-banner-3-1200x570.jpg)] bg-cover w-1/2 px-12 relative">
        <div className="h-full w-full bg-black/50 absolute top-0 left-0 p-7 flex flex-col justify-between">
          <img src="/main-logo.png" className="max-w-96" />
          <p className="text-zinc-200 text-sm"><span className="text-lg font-bold">Disclaimer - </span>This website is fully demo and my personal project. Any elements, models, graphics and medias are fully copied from google. If you like this project please give me a feedback on my email - isahilsumanjha@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
