"use client"

import * as React from "react"
import { useRef } from "react";
import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: any[]) => twMerge(clsx(args));

export interface AnimatedDockProps {
    className?: string;
    items: DockItemData[];
}

export interface DockItemData {
    link: string;
    Icon: React.ReactNode;
    target?: string;
}

export const AnimatedDock = ({ className, items }: AnimatedDockProps) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-lg px-4 pb-3",
                className,
            )}
        >
            {items.map((item, index) => (
                <DockItem key={index} mouseX={mouseX}>
                    <a
                        href={item.link}
                        target={item.target}
                        rel="noopener noreferrer"
                        className="grow flex items-center justify-center w-full h-full text-primary-foreground"
                    >
                        {item.Icon}
                    </a>
                </DockItem>
            ))}
        </motion.div>
    );
};

interface DockItemProps {
    mouseX: MotionValue<number>;
    children: React.ReactNode;
}

export const DockItem = ({ mouseX, children }: DockItemProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const iconScale = useTransform(width, [40, 80], [1, 1.5]);
    const iconSpring = useSpring(iconScale, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
        >
            <motion.div
                style={{ scale: iconSpring }}
                className="flex items-center justify-center w-full h-full grow"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
