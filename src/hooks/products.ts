import { products } from './../data/products';
import axios, { AxiosError } from 'axios';
// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product:IProduct) {
        setProducts( prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            //<IProduct[]> тип данных который мы ожидаем в ответ
            // limit=5 ограничение по полученым элементам
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return { products, error, loading, addProduct }
}