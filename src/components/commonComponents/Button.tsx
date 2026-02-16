import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const base = 'px-4 py-2 rounded font-semibold transition-colors';
    const variants = {
        primary:
            'bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)]',
        secondary:
            'bg-white text-[color:var(--color-primary)] border border-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)] hover:text-white',
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
