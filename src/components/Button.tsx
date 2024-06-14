import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
    'py-3 px-6 font-gotham font-light border-2',
    {
        variants:{
            variant: {
                border_dark : 'text-white border-white bg-transparent hover:bg-white hover:text-black',
                border_light : 'text-black border-black bg-transparent hover:bg-black hover:text-white',
                fill_dark : 'text-black border-white bg-white hover:bg-stone hover:text-white hover:bg-transparent',
            },
            size: {
                sm: 'text-xs',
                md: 'text-sm',
                lg: 'text-lg',
            },
            defaultvariant: {
                variant: 'primary',
                theme: 'light',
                size: 'md',
            },
        },
    });

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({className, variant, size, ...props}) => {
    return (
        <button className={cn(buttonVariants({className, variant, size}))} {...props}/>
    );
}

export { Button, buttonVariants};