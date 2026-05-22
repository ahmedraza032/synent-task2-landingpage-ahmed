import Price from '../components/Price'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white w-full grid grid-cols-1 sm:grid-cols-3 sm:px-[150px] p-24 gap-10">
      <Price
        img={Single}
        name="Single User"
        price={149}
        storage="500 GB Storage"
        usersAllowed="1 User Allowed"
        sendLimit="Send up to 2 GB"
      />
      <Price
        img={Double}
        name="Partnership"
        price={199}
        storage="500 GB Storage"
        usersAllowed="1 User Allowed"
        sendLimit="Send up to 2 GB"
        cardClassName="bg-gray-300"
      />
      <Price
        img={Triple}
        name="Group Account"
        price={299}
        storage="500 GB Storage"
        usersAllowed="1 User Allowed"
        sendLimit="Send up to 2 GB"
      />
    </div>
  );
}

export default Pricing