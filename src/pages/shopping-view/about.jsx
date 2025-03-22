const About = () => {
    return (<>
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-pink-700 text-4xl font-bold mb-4 lg:text-start text-center">
                                        Our Fashion Journey</h2>
                                    <p
                                        className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        From humble beginnings to becoming a fashion leader, our journey is defined by a passion for style, quality, and creativity. We believe in clothing that tells a story and makes a statement.</p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">10+ Years</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">Redefining Fashion Trends</p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">500+ Styles</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">A Collection for Every Personality</p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">50+ Awards</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Excellence in Design</p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-pink-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">98% Customer Satisfaction</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">Driven by Passion for Customer Style</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="sm:w-fit w-full group px-3.5 py-2 bg-pink-50 hover:bg-pink-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                            <span
                                className="px-1.5 text-pink-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Explore Our Collection</span>
                        </button>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div
                            className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/spring-fashion-banner-design-template-82f7da1acac0a09a3a98220d3c8818a3_screen.jpg?ts=1646740594" alt="about Us image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default About;
