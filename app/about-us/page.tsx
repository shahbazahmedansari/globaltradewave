import React from "react";
import ContactUsCard from "@/components/shared/ContactUsCard";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const AboutUs = () => {
    return (
        <main>
            <section className="m-10 flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-[50%] flex justify-center items-center gap-6">
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/assets/images/image-17.jpg"
                            alt="Farmer"
                            width={250}
                            height={250}
                            className="max-sm:w-[300px] max-sm:h-[300px] rounded-md"
                        />
                        <Image
                            src="/assets/images/image2-11.jpg"
                            alt="Farm"
                            width={250}
                            height={250}
                            className="hidden sm:block rounded-md"
                        />
                    </div>
                    <Image
                        src="/assets/images/image3-11.jpg"
                        alt="Farmer"
                        width={250}
                        height={500}
                        className="hidden sm:block rounded-md"
                    />
                </div>
                <div className="w-full md:w-[50%] mt-5 ml-8">
                    <p className="text-green-900 font-semibold">About Us</p>
                    <h1 className="text-green-900 font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
                        Global Trade Wave
                    </h1>
                    <Image
                        src="/assets/icons/leaf.png"
                        alt="Leaf"
                        width={50}
                        height={50}
                        className="mt-4"
                    />
                    <p className="leading-[30px] mt-5 break-normal text-lg w-full">
                        Global Tradewave is a leading expert in the
                        export-import industry, providing unmatched expertise in
                        international trade. We specialize in navigating customs
                        regulations, securing favorable trade agreements, and
                        optimizing supply chain logistics. Our customized
                        solutions help clients expand globally and manage trade
                        risks effectively. With years of experience, Global
                        Tradewave is the trusted partner for businesses aiming
                        to excel in the global marketplace.
                    </p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="w-full md:w-[50%] flex justify-center items-center">
                    <img
                        src="/assets/images/farmer1.jpg"
                        alt="Farmer-1"
                        className="w-full"
                    />
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
                    <p className="text-green-300 font-semibold">Our Values</p>
                    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
                        Integrity
                    </h1>
                    <Image
                        src="/assets/icons/leaf.png"
                        alt="Leaf"
                        width={50}
                        height={50}
                        className="mt-4"
                    />
                    <p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
                        Upholding the highest ethical standards in every
                        interaction, transaction, and relationship. We
                        prioritize transparency, honesty, and accountability in
                        all our endeavors, fostering trust and reliability
                        within the industry.
                    </p>
                    <h2 className="text-white font-bold md:text-4xl text-xl mt-5">
                        AGRO EXPORTS
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={80} className="text-white" />
                        <p className="text-white font-bold md:text-3xl text-xl">
                            80%
                        </p>
                    </div>
                    <h2 className="text-white font-bold md:text-4xl text-xl mt-5">
                        NON-AGRO EXPORTS
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={20} className="text-white" />
                        <p className="text-white font-bold md:text-3xl text-xl">
                            20%
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
                    <p className="text-green-300 font-semibold">Our Values</p>
                    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
                        Empowerment
                    </h1>
                    <Image
                        src="/assets/icons/leaf.png"
                        alt="Leaf"
                        width={50}
                        height={50}
                        className="mt-4"
                    />
                    <p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
                        Our commitment to ethical sourcing goes beyond business.
                        Through various initiatives, we empower farmers by
                        providing fair prices, imparting agricultural knowledge,
                        and ensuring a dignified livelihood. We believe in
                        building a strong foundation for a sustainable future.
                    </p>
                    <h2 className="text-white font-bold md:text-4xl text-xl mt-5">
                        FARMING SOCIETIES HELPED
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={100} className="text-white" />
                        <p className="text-white font-bold md:text-3xl text-xl">
                            50+
                        </p>
                    </div>
                    <h2 className="text-white font-bold md:text-4xl text-xl mt-5">
                        INR SUPPORT TO FARMERS
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={100} className="text-white" />
                        <p className="text-white font-bold md:text-3xl text-xl">
                            500K+
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[50%] flex justify-center items-center">
                    <img
                        src="/assets/images/farmer2.jpg"
                        alt="Farmer-2"
                        className="w-full h-[510px]"
                    />
                </div>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="w-full md:w-[50%] flex justify-center items-center">
                    <img
                        src="/assets/images/farmer3.jpg"
                        alt="Farmer-3"
                        className="w-full h-[510px]"
                    />
                </div>
                <div className="w-full md:w-[50%] flex flex-col justify-center bg-green-700 p-[30px]">
                    <p className="text-green-300 font-semibold">Our Values</p>
                    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl w-[400px]">
                        Excellence
                    </h1>
                    <Image
                        src="/assets/icons/leaf.png"
                        alt="Leaf"
                        width={50}
                        height={50}
                        className="mt-4"
                    />
                    <p className="leading-[30px] mt-5 break-normal text-lg w-full text-green-200">
                        Striving for excellence in all facets of our operations,
                        from sourcing premium agricultural products to
                        delivering exceptional service. At Global TradeWave, we
                        continuously refine our processes to exceed expectations
                        and set industry benchmarks for quality and service.
                    </p>
                    <h2 className="text-white font-bold text-xl md:text-4xl mt-5">
                        HAPPY IMPORTERS
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={100} className="text-white" />
                        <p className="text-white font-bold text-xl md:text-3xl">
                            20+
                        </p>
                    </div>
                    <h2 className="text-white font-bold md:text-4xl text-xl mt-5">
                        COMPLAINTS RECIEVED
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <Progress value={0} className="text-white" />
                        <p className="text-white font-bold md:text-3xl text-xl">
                            0%
                        </p>
                    </div>
                </div>
            </section>
            <ContactUsCard />
        </main>
    );
};

export default AboutUs;
