const Email = () => {
  return (
    <div id="newsletter" className="sm:px-[150px] p-8 bg-black flex flex-col sm:flex-row w-full text-white justify-between">
      <div>
        <h4 className="text-3xl font-bold my-2">
          Want tips & tricks to optimize your flow?
        </h4>
        <p className="font-semibold my-3">
          Sign up to our newsletter to stay updated
        </p>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-8/12 py-2 px-2 my-2 rounded-md"
          />
          <button type="button" className="bg-green-400 px-3 py-2 rounded-md">
            Notify Me
          </button>
        </div>
        <div>
          We care about the privacy of your data. Read about our{" "}
          <a href="#" className="text-green-300">
            privacy policies
          </a>
        </div>
      </div>
    </div>
  );
}

export default Email