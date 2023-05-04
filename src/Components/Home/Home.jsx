import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef/Chef";
import Banner from "./Banner/Banner";
import Foods from "./Foods/Foods";
import Choose from "./Choose/Choose";

const Home = () => {
  const chefs = useLoaderData();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://chef-sarver-sihabmolla11.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <div className="my-5 my-container">
        {/* banner section  */}
        <Banner></Banner>

        {/* card section */}
        <section className="mt-28">
          <div className="text-center">
            <h2 className=" text-5xl font-medium">
              Let's know about some Arabian chefs
            </h2>
            <p className="mt-2">
              Here we will get to know some arabian chefs. <br /> They are all famous
              chefs in Arabic countries. Their food is world famous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-6">
            {chefs.map((chef) => (
              <Chef key={chef.id} chef={chef}></Chef>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-5xl text-center font-medium mt-28 mb-10 capitalize">
            Some famous Arabian food
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16">
            {foods.map((food) => (
              <Foods key={food.id} food={food}></Foods>
            ))}
          </div>
        </section>
      <section className="my-28">
        <h2 className="text-5xl text-center font-medium mb-10 capitalize">
          Why Choose us?
        </h2>
        <p className="my-2 text-center">
          your will choose us because your want get the best quality food from us <br /> and we trying to serving us best.
        </p>
        <Choose></Choose>
      </section>
      </div>
    </div>
  );
};

export default Home;
