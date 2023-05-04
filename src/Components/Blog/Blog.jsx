import React from "react";

const Blog = () => {
  return (
    <div className="my-container">
      <h3 className="text-2xl font-semibold">
        1. what is differences between uncontrolled and controlled components?
      </h3>
      <p className="mt-2">
        <strong className="underline">Answer:-</strong> Uncontrolled components
        are open so anyone can access them.
        <br />
        ‍and Control elements are usually protected so that only those who have
        access to them can use them.
      </p>

      <h3 className="text-2xl mt-8 font-semibold">
        2. How to validate React props using PropTypes?
      </h3>
      <p className="mt-2">
        <strong className="underline">Answer:-</strong> To use PropTypes, we
        need to import it in our component file and define the propTypes object
        at the bottom of our component file.
      </p>

      <h3 className="text-2xl mt-8 font-semibold">
        3. what is the difference between nodejs and express js?
      </h3>
      <p className="mt-2">
        <strong className="underline">Answer:-</strong> NodeJS is an
        event-driven, non-blocking model using JavaScript as its main
        language. It helps to build scalable network applications.
        <br />
        Express is a minimal and flexible Node. js web application framework
        that provides a robust set of features for web and mobile applications.
      </p>
      <h3 className="text-2xl mt-8 font-semibold">
        4. What is a custom hook, and why will you create a custom hook?
      </h3>
      <p className="mt-2 mb-20">
        <strong className="underline">Answer:-</strong> A custom Hook is a
        JavaScript function whose name starts with ”use” and that may call other
        Hooks.
        <br />
        Custome hooks don't need to be rendered repeatedly. As a result, our code writing speed has increased a lot. So we should use custome hooks.
      </p>
    </div>
  );
};

export default Blog;
