import Menu from "./Menu";
import ProductCard from "./ProductCard";
import products from "../services/data/product";
import { PropertySafetyFilled } from "@ant-design/icons";
const Layout = (props) => {
    return (
            <div className='container mx-auto'>

                <div className='header flex justify-between border-b border-slate-300 py-2 text-sm'>
                    <div className='flex gap-8'>
                    <a href='/about_us' className='text-blue-500'>chat with us</a>
                    <p className='text-zinc-800'>+62 822 761 1123</p>
                    <p>TokoMedia@gmail.com</p>  
                    </div>
                    <div className=''>
                    <ul className='flex gap-8 text-blue-500'>
                        <li>Blog</li>
                        <li>About US</li>
                        <li>Career</li>
                    </ul>
                    </div>
                </div>

                {/* logo & search */}
                <div className='siteinfo flex justify-between py-14'>
                    <h1 className='text-3xl font-bold'>TokoMedia</h1>
                    <div className='flex w-full justify-center'>
                        <input type="text" className='bg-gray-100 w-3/4 h-5/5 focus:outline-blue-300 rounded-2xl text-lg pl-3' placeholder='Search Products, Categories ...'/>
                        <img src="images/search-icon.png" className='w-4 h-4 self-center -ml-6' alt=""></img>
                    </div>
                    <div className='flex gap-5'>
                        <img src="/images/user-icon.png" className='w-7 h-7 self-center' alt=""></img>
                        <div className="relative w-9 h-9">  
                        <img src="/images/cart-icon.png" className='w-full h-full self-center' alt=""></img>
                            <div className='absolute -bottom-2 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white font-bold'>4</div>
                        </div>  
                    </div>
                </div>

                {/* menu */}
                <div className='flex gap-20 justify-center bg-gray-50 py-4'>
                    <Menu title="Asus" />
                    <Menu title="Acer" />
                    <Menu title="Lenovo" />
                    <Menu title="Apple" />
                    <Menu title="Toshiba" />
                    <Menu title="Dell" />
                    <Menu title="Hp" />
                    <Menu title="Axioo" />
                    <Menu title="Processor" />
                </div>

                {props.children}

                {/* footer */}
                <div className='footer w-full p-10'>
                    <div className='flex justify-between mb-10'>
                        <div className=''>
                            <h1 className='text-lg font-bold mb-5'>Get In Touch</h1>
                            <ul className='font-light text-sm space-y-3'>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>About Us</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Careers</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Press Release</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Blog</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h1 className='text-lg font-bold mb-5'>Connections</h1>
                            <ul className='font-light text-sm space-y-3'>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
                                <img src="/images/fb.png" className='w-5 h-5' alt="" />Facebook
                            </li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
                                <img src="/images/Group.png" className='w-5 h-5' alt="" />Twitter
                            </li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
                                <img src="/images/insta.png" className='w-5 h-5' alt="" />Instagram
                            </li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
                                <img src="/images/yt.png" className='w-5 h-5' alt="" /> Youtube
                            </li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer flex gap-2'>
                                <img src="/images/linkedin.png" className='w-5 h-5' alt="" />Linkedin
                            </li>
                            </ul>
                        </div>

                        <div className=''>
                            <h1 className='text-lg font-bold mb-5'>Earnings</h1>
                            <ul className='font-light text-sm space-y-3'>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Become an Afiliate</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Advertise Your Product</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Sell On Market</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h1 className='text-lg font-bold mb-5'>Account</h1>
                            <ul className='font-light text-sm space-y-3'>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Your Account</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Returns Centre</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>100% Purchase Protection</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Chat With Us</li>
                            <li className='text-blue-500 hover:text-blue-700 cursor-pointer'>Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <span className='text-gray-800 font-bold'>
                        Web Development By Ardi Permana Putra © 2022 TokoMedia.Com
                        </span>
                    </div>
            </div>
        </div>
    )
}

export default Layout;