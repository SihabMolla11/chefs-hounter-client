import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef/Chef";
import Banner from "./Banner/Banner";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div className="my-5 my-container">
      {/* banner section  */}
      <Banner></Banner>

      {/* card section */}
      <section className="mt-10">
        <div className="text-center">
          <h2 className=" text-4xl font-medium">Let's meet the chefs</h2>
          <p className="mt-2">Here we will get to know some arabian chefs. They are all famous chefs in Arabic countries. Their food is world famous.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
