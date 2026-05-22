import PropTypes from 'prop-types'

const Price = ({img, name, price, storage, usersAllowed, sendLimit, cardClassName = 'bg-white'}) => {
  return (
    <div
      className={`sm:shadow-xl flex flex-col pt-7 items-center rounded-lg py-8 hover:scale-105 transition-all ${cardClassName}`}
    >
      <img src={img} className="w-[27%]" />
      <p className="m-3 text-2xl font-bold">{name}</p>
      <p className="text-4xl font-bold mb-4">{`$${price}`}</p>
      <div className="divide-gray-300 text-md">
        <p className="border-b-2 border-gray-200 my-2">{storage}</p>
        <p
          className="border-b-2 border-gray-200
        my-2"
        >
          {usersAllowed}
        </p>
        <p className="border-b-2 border-gray-200 my-2">{sendLimit}</p>
      </div>
      <button className="hover:text-green-400 hover:bg-black text-black bg-green-400 px-6 py-2 rounded-md my-2">
        Get Started
      </button>
    </div>
  );
}

Price.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  storage: PropTypes.string.isRequired,
  usersAllowed: PropTypes.string.isRequired,
  sendLimit: PropTypes.string.isRequired,
  cardClassName: PropTypes.string,
}

export default Price