import React, {useState} from 'react';
import styles from "./Pagination.module.css";

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, ...props}) => {
    const [portionNumber, setPortionNumber] = useState(1);
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(totalItemsCount/portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.col12}>
            <ul className={styles.pagination}>
                {portionNumber > 1 ? <li onClick={() => setPortionNumber(portionNumber-1)} className={styles.arrow}> {'<'} </li> : null}

                {
                    pages
                        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map(page => {
                        return (
                            <li key={page} className={currentPage === page && styles.active}
                                onClick={() => onPageChanged(page)}>
                                {page}
                            </li>
                        )
                    })
                }

                {portionCount > portionNumber ? <li onClick={() => setPortionNumber(portionNumber+1)} className={styles.arrow}> {'>'} </li> : null}
            </ul>
        </div>
    )
};

export default Pagination;