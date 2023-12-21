import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ perPage, count, path, page }) => {

    const totalLinks = Math.ceil(count / perPage);
    let startLoop = page;
    let diff = totalLinks - page;
    if (diff <= 3) {
        startLoop = totalLinks - 3
    }
    let endLoop = startLoop + 3;
    if (startLoop <= 0) {
        startLoop = 1
    }
    const cls = "pagination-link"
    const links = () => {
        const allLinks = [];
        for (let i = startLoop; i <= endLoop; i++) {
            allLinks.push(<li key={i} ><Link className={`${cls} ${page === i ? 'active' : ""}`} to={`${path}/${i}`}>{i}</Link></li>);
        }
        return allLinks;
    }

    const next = () => {
        if (page < totalLinks) {
            return <li><Link className={cls} to={`${path}/${page + 1}`}>Next</Link></li>
        }
    }

    const prev = () => {
        if (page > 1) {
            return <li><Link className={cls} to={`${path}/${page - 1}`}>Prev</Link></li>
        }
    }


    return count > perPage && (
        <ul className='flex mt-2'>{prev()}{links()}{next()}</ul>
    )
}

export default Pagination;