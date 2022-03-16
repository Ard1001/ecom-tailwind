import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const item = props.item;
    const priceAfterDiscount = 
            item.original - (item.original * item.discountPercent) / 100;
    return <div className='w-full md:w-2/2 xl:w-1/4 px-4 mb-10'>
        <div className='p-3 border-2 border-gray-300 rounded-lg shadow-md text-gray-800'>
        <span className='z-10 absolute text-xs font-semibold text-green-600 bg-green-100 rounded-2xl py-1 px-3 m-2'>-36%</span>
        <img 
            src={`images/${item.image}`}
            alt = ""
            className='object-fill-relative'
        />

        <div className='pt-5 mb-4'>
            <Link to={item.name}>
                <h1 className='font-bold'>{item.name}</h1>
            </Link> 
            <span className='text-sm text-gray-500'>{item.description}</span>
        </div>

        <div className='flex justify-between'>
            <div className=''>
            <h1 className='text-lg font-bold'>
                <NumberFormat thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} value={priceAfterDiscount} displayType={'text'} />
            </h1>
            {item.discountPercent > 0 && (
                <h2 className='text-sm text-gray-400 font-semibold line-through'>
                Rp. {item.original}
                </h2>
            )}
            </div>
            <div className=''>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">
                Buy
            </button>
            </div>
        </div>
        </div>
    </div>
}

export default ProductCard;