import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import styles from './Home.module.css'

// components
import PrepForm from './PrepForm'
import ItemList from './ItemList'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } =useCollection(
        'items',
        ["uid", "==", user.uid],
        ["createdAt", "desc"]
    )

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                Preparation List
                {error && <p>{error}</p>}
                {documents && <ItemList items={documents} />}
            </div>
            <div className={styles.sidebar}>
                <PrepForm uid={user.uid} />
            </div>
        </div>
    )
}
