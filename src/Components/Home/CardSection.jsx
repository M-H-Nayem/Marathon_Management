import React from "react";

const CardSection = () => {
  return (
      <div className="my-10">
      <h1 className="text-4xl text-center py-10 font-bold bg-gradient-to-tl from-[#0fed89] to-[#bd570e] bg-clip-text text-transparent "> UPCOMING MARATHON EVENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 gap-5 mx-auto">
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_bike-ride_ba0o.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Bike Ride</h2>
            <p className="text-xl">
              "Choose pedals over pollution — ride your way to a healthier
              life!"
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_drone-race_gddk.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Drone Race</h2>
            <p className="text-xl">
              "Touch the sky with speed — let your drone race carry your dreams!"
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_greek-freak_p532.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Basket</h2>
            <p className="text-xl">
              "Change the game with one shot — rule the court with relentless drive!"
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_playing-golf_016o.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Golf</h2>
            <p className="text-xl">
              "Every swing is a lesson in patience, every hole a quiet triumph — that's golf."
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_skateboard_w3bz.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Skateboard</h2>
            <p className="text-xl">
              "The street is your stage — with speed and balance, your challenge!" 🛹🔥
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-gray-300 text-black w-full  shadow-sm">
          <figure>
            <img className="h-[350px] w-full" src="/undraw_track-and-field_i2au.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Track & Field</h2>
            <p className="text-xl">
            "Speed in every stride, power in every leap — in Track & Field, finally win!" 🏃‍♂️🏅
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Upcoming</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      </div>
  );
};

export default CardSection;
