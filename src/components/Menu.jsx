import { DownOutlined } from "@ant-design/icons";

function Menu(props) {
    return(
        <div className='flex gap-1 items-center'>
            <a href='/Asus' className='text-1xl font-bold'>
                {props.title}
            </a>
            <DownOutlined className="text-xs ml-1 text-blue-500" />
        </div>
    )
}

export default Menu;