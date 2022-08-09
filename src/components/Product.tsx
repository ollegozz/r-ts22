import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Products = (props: ProductProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={props.product.image} className="w-1/6" alt={props.product.title} />
            <p>{props.product.title}</p>
            <p className='font-bold'>{props.product.price} $</p>
            <button
                className={btnClasses.join(' ')}
                // join(' ') объединяет все элементы массива в строку разделитель в ''
                onClick={() => setDetails(prev => !prev)}
            // prev колбэк принимает предыдущее состояние и меняет его
            >
                {details ? 'Hide details' : 'Show datails'}
            </button>
            {details && <div>
                <p className=''>{props.product.description} $</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{props.product?.rating?.rate}</span></p>
                {/* props.product?.rating?.rate   ?  если нет рейтинга выходит пустое */}
            </div>}
        </div>
    );
}

export default Products;