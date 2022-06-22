import {useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import React from 'react';

export default function PrepForm({ uid }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('items')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount
        })
    }

    // reset form fields
    useEffect(() => {
        if (response.success ===true) {
            setName('')
            setAmount('')
        }
    }, [response.success])

    return(
        <>
            <h3> Add an Item</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Item name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Amount:</span>
                    <input
                        type="number"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Item</button>
            </form>
        </>
    )
}