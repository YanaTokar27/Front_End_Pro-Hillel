import './Products.css';
import Table from '../../components/Table/Table';
import LogoWhite from '../../assets/logo_white.svg'
import ButtonProducts from '../../components/ButtonProducts/ButtonProducts';
import { FaRegUser } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";


function Products() {
    return (
        <div className='Products'>
            <div className='LogoWhite' >
                <img src={LogoWhite} alt="logoGreen" />
            </div >
            <div className='Buttons'>
                <ButtonProducts icon={<FaRegUser className='img user' />} label="Preview"/>
                <ButtonProducts icon={<GoPlus className='img plus' />} label="Add product" />
            </div>
            <h2 className='Title'>Products</h2>
            <Table />
        </div>
    )
}

export default Products;