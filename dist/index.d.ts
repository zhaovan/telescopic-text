import * as React from 'react';
interface Props {
    children: (string | React.ReactElement | Element)[] | (string | React.ReactElement | Element);
    className?: string;
    color?: string;
    fadeInSpeed?: number;
}
export declare const TelescopicText: ({ children, className, color, fadeInSpeed }: Props) => JSX.Element;
export {};
