import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import React from 'react';

// styles
import styles from './Home.module.css'

// components
import PrepForm from './PrepForm'
import ItemList from './ItemList'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'items', 
        ["uid", "==", user.uid], 
        ['createdAt', 'desc']
    )

    return(
        
        <div className={styles.container}>
            <div className={styles.content}>
                <h4>My Preparation List</h4>
                {error && <p>{error}</p>}
                {documents && <ItemList items={documents} />}
            </div>
            <div className={styles.sidebar}>
                <PrepForm uid={user.uid} />
            </div>

        <div className={styles.recommended}>
            <h4>Recommended Items</h4>
            <ul className={styles.list}>
                <li>First aid kit</li>  
                <li>Torch</li>
                <li>3 days food per person</li>
                <li>3 litres water per person</li>
                <li>Blankets</li>
                <li>10 days medication</li>
                <li>Copy of any prescriptions</li>
                <li>Key contacts list</li>
                <li>Insurance and other key docs</li>
                <li>Key supplies for your pets</li>
            </ul>
        </div>
        <div className={styles.rucksack}><img src="https://us.123rf.com/450wm/thsk1344/thsk13441906/thsk1344190600058/131776434-illustration-of-a-set-of-disaster-prevention-goods.jpg?ver=6" alt="Preparation Kit" width="350" height="350"></img></div>
        </div>
        
    )
}
