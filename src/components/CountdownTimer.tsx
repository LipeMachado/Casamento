import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        let difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60)
            };
        }

        return timeLeft as { days?: number; hours?: number; minutes?: number; seconds?: number };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { days = 0, hours = 0, minutes = 0 } = timeLeft;

    return (
        <motion.div
            className="flex gap-5 font-sans"
        >
            <div className="w-20 sm:w-28 h-20 sm:h-28 bg-[#D7C6F1] text-[#6a469e] rounded-2xl flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold">{days}</span>
                <span className="text-sm">dias</span>
            </div>
            <div className="w-20 sm:w-28 h-20 sm:h-28 bg-[#D7C6F1] text-[#6a469e] rounded-2xl flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold">{hours}</span>
                <span className="text-sm">horas</span>
            </div>
            <div className="w-20 sm:w-28 h-20 sm:h-28 bg-[#D7C6F1] text-[#6a469e] rounded-2xl flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-4xl font-bold">{minutes}</span>
                <span className="text-sm">minutos</span>
            </div>
        </motion.div>
    );
};

export default CountdownTimer;
