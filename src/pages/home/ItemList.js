import { useFirestore } from '../../hooks/useFirestore';
import React from 'react';

//styles
import styles from './Home.module.css'

export default function ItemList({ items }) {
    const { deleteDocument } = useFirestore('items')
    
    return (
        <ul className={styles.items}>
            {items.map((item) => (
                <li key={item.id}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.amount}>{item.amount}</p>
                    <button onClick={() => deleteDocument(item.id)}>x</button>
                </li>
            ))}
        </ul>
    )
}