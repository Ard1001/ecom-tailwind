import ProductCard from "./ProductCard";
import products from "../services/data/product";
import Layout from "./Layout";
const Home = () => {
    return(
        <Layout>
            <div className="flex md:flex-row-reverse flex-wrap py-14">
                <div className="w-full w-3/4 h-3/4 flex flex-wrap mb-5">
                    {products.map((item, index) => {
                    return <ProductCard item={item} key={index}/>
                })}
                    <div className='w-full h-1/4 flex justify-center item-center'>
                    <a className='flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href ="/Product">Show More Product</a>  
                    </div>

                </div>
            <div className="w-full md:w-1/4  p-4 text-gray-700">
                <div className='w-full mb-10'>
                <h3 className='text-2xl font-bold mb-2'>Produk Terlaris</h3>
                    <div className='mb-2 py-3'>
                    <a className='flex justify-between items-center' href="/Asus">  
                        <span className='text-gray-900 hover:text-gray-500'>Asus</span>
                        <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>320</span>
                    </a>
                    </div>
                    <div className='mb-2 py-3'>
                    <a className='flex justify-between items-center' href="/Apple">  
                        <span className='text-gray-900 hover:text-gray-500'>Apple</span>
                        <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>200</span>
                    </a>
                    </div>
                    <div className='mb-2 py-3'>
                    <a className='flex justify-between items-center' href="/Lenovo">  
                        <span className='text-gray-900 hover:text-gray-500'>Lenovo</span>
                        <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>150</span>
                    </a>
                    </div>
                    <div className='mb-2 py-3'>
                    <a className='flex justify-between items-center' href="/Toshiba">  
                        <span className='text-gray-900 hover:text-gray-500'>Toshiba</span>
                        <span className='bg-blue-600 opacity-80 text-white text-sm font-semobold rounded-lg px-2 py-1'>100</span>
                    </a>
                    </div>
                </div>
                
                <div className='w-full mb-10'>
                    <h3 className='text-2xl font-bold py-3'>Order By</h3>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Termurah
                        </label>
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Terlaris
                        </label>
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Termahal
                        </label>
                    </div>
                </div>

                <div className='w-full mb-10'>
                    <h3 className='text-2xl font-bold py-3'>Rating</h3>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                    </div>
                    <div className='flex justify-left py-4'>
                        <input className="mr-5 leading-tight  h-5 w-5 checked:bg-green-600" type="checkbox" />
                        <img src="/images/icon-stars.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                        <img src="/images/layer.png" className='w-5 h-5' alt="" />
                    </div>
                </div>
                
                <div className='w-full mb-10'>
                    <h3 className='text-2xl font-bold py-6'>Price</h3>
                    <input className='accent-blue-600 w-full' type="range"></input>
                </div>

                <div className='w-full mb-10'>
                    <div className='inline-flex'>
                    <div className='w-1/2'>
                        <h2 className='font-semibold'>Min</h2>
                        <input className='border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-blue-300' type="text" placeholder='0'/>
                    </div>

                    <div className='px-6 pt-10'>
                        <span className='text-gray-400'>-</span>
                    </div>

                    <div className='w-1/2'>
                        <h2 className='font-semibold'>Max</h2>
                        <input className='border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-blue-300' type="text" placeholder='0'/>
                    </div>
                    </div>

                    <div className='inline-flex gap-20 py-5'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Apply
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Reset
                    </button>
                    </div>
                </div> 
            </div>
        </div>

        </Layout>
    )
}

export default Home;