import Image from "next/image";
import Link from "next/link";
import cn from 'classnames';

import styles from './card.module.css';

const Card = ({name, imgUrl, href, className}) => {
    return (
        <div className={className}>
            <Link href={href}>
                <a className={styles.cardLink}>
                    <div className={cn("glass",styles.container)}>
                        <div className={styles.cardHeaderWrapper}>

                            <h2 className={styles.cardHeader}>
                                {name}
                            </h2>
                        </div>

                        <div className={styles.cardImageWrapper}>
                            <Image className={styles.cardImage} src={imgUrl} width={260} height={160} />
                        </div>
                    </div>

                </a>
            </Link>
        </div>

    )
}

export default Card;