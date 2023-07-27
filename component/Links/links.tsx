import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import './index.css'

const Links: React.FC<{label: string, value: string}> = ({label, value}) => {
    const pathname = usePathname()
    const [active, setActive] = useState(false)

    useEffect(()=>{
        setActive(pathname === label)
    },[pathname])

    return (
        <div>
            <Link className={active ? 'active-link' : 'link'}
                href={label}
            >{value}</Link>
        </div>
    );
};

export default Links;