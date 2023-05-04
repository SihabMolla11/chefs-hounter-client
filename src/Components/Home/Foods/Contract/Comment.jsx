import React from "react";

const Comment = () => {
  return (
    <div>
      <h2 className="text-5xl text-center font-medium  mb-10 capitalize">
        comment section
      </h2>
      <div className="w-full md:w-[35%] mx-auto">
        <form>
            <h3 className="text-xl font-medium p-2">Name:</h3>
          <input
            className="p-4 rounded-md w-full"
            type="text"
            required
            placeholder="Email"
          />
          <br />
          <br />
            <h3 className="text-xl font-medium p-2">Email:</h3>
          <input
            className="p-4 rounded-md w-full"
            type="email"
            required
            placeholder="Email"
          />
          <br />
          <br />
          <h3 className="text-xl font-medium p-2">Textarea:</h3>
          <textarea className="p-4 textarea w-full h-[200px]" placeholder="Write here your comment" />
          <input className="my-btn w-full mt-4 mb-8" type="submit" value="submit" required/>
        </form>
      </div>
    </div>
  );
};

export default Comment;
