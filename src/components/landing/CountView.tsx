"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CountInViewProps {
    count: number;
}

const CountInView: React.FC<CountInViewProps> = ({ count }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div ref={ref}>
            {
                inView ? (
                    <div className="text-9xl font-semibold text-[#1A1D34]">
                        <CountUp start={0} end={count} duration={4 as any} />
                    </div>
                ) : (
                    <div className="text-9xl font-semibold text-[#1A1D34]">
                        0
                    </div>
                )
            }
        </div>
    );
};

export default CountInView;