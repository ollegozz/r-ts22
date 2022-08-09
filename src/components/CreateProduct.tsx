import axios from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../models'
import ErrorMessage from './ErrorMessage'

const productDate: IProduct = {
    title: '',
    price: 1.35,
    description: 'asdasdasdadadsasd',
    category: 'elecrtonic',
    image: 'https://i.pravatar.cc/',
    rating: {
        rate: 50,
        count: 70
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
    // функция не чего не возвращает
}

export default function CreateProduct({ onCreate }: CreateProductProps) {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            // trim удалить пробелф справа-слева
            setError('Please, enter valid title')
            return
        }
        productDate.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productDate)
        onCreate(response.data)
        //если все успешно вызывается onCreate()
    }

    const changeHandler = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className='border py-2 px-4 mb-2 w-full'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error = {error}/>}

            <button
                type='submit'
                className='py-2 px-4 border bg-yellow-400 hover:text-black/50'>
                Create
            </button>
        </form>
    )
}
