
import Link from "next/link";
import coffeeStores from "../../data/coffee-stores.json";
import Head from "next/head";
import Image from "next/image";
import cn from 'classnames';

import styles from '../../styles/coffee-store.module.css';
import {useState} from "react";

export async function getStaticProps(staticProps) {
    const {params} = staticProps;
    return {
        props: {
            coffeeStore: coffeeStores.find((coffeeStore) => {
                return coffeeStore.id.toString() === params.id;
            }),
        },
    };
}

export async function getStaticPaths() {
    const paths = coffeeStores.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: false
    }
}

const CoffeeStore = ({coffeeStore}) => {
    const {address, name, neighbourhood, imgUrl} = coffeeStore;
    const [votingCount, setVotingCount] = useState(0);

    const handleUpvoteButton = () => {
        console.log("Upvoted!");
    }


    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
                <meta name={"description"} content={`${name} coffee stores`}/>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href={"/"}>
                            <a>← Back to Home</a>
                        </Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>
                            {name}
                        </h1>
                    </div>
                    <Image
                        src={imgUrl}
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                        />
                </div>
                <div className={cn("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image
                            src={"/static/icons/places.svg"}
                            width={24}
                            height={24}
                            alt={"places icon"}
                            />
                        <p className={styles.text}>{address}</p>
                    </div>
                    {neighbourhood && (
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/nearMe.svg"
                                width="24"
                                height="24"
                                alt="near me icon"
                            />
                            <p className={styles.text}>{neighbourhood}</p>
                        </div>
                    )}
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/star.svg"
                            width="24"
                            height="24"
                            alt="star icon"
                        />
                        <p className={styles.text}>{votingCount}</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
                        Up vote!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeStore;