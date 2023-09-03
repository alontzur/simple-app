import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

interface linesSkelatonLoaderProps {
    count?: number
}

export function LinesSkelatonLoader({ count = 3 }: linesSkelatonLoaderProps) {

    const [intervalCount, setIntervalCount] = useState(0);

    useEffect(() => {
        setInterval(() => setIntervalCount(prev => prev + 0.1), 100);
    }, [])

    return (
        <>
            <div>{intervalCount}</div>
            <Skeleton count={count} />
        </>
    )
}