import './Preview.css';
import LogoWhite from '../../assets/logo_white.svg'
import CardProduct from './components/CardProduct/CardProduct';

const products = [
    { id: 0, category: 'PC', name: 'Lenovo Y50-70', quantity: 5, price: 25000 },
    { id: 1, category: 'Clothes', name: 'Nike M Nk Df Acd21', quantity: 22, price: 4000 },
    { id: 2, category: 'Plumbing', name: 'CERSANIT MITO 17', quantity: 1337, price: 5000 },
    { id: 3, category: 'Plumbing', name: 'CERSANIT 2', quantity: 13, price: 7000 },

]

const Preview = () => {
    return (
        <div className='Preview'>
            <div className='LogoWhite'>
                <img src={LogoWhite} alt="logoGreen" />
            </div >
            <div className='Cards'>
                {products.map(product =>
                    <CardProduct product={product} />
                )}</div>
        </div>
    )
}

export default Preview;
