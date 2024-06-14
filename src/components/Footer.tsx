import Logo from '@/components/Logo';
import Menu from '@/components/icons/Menu';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { FC } from 'react';
import Linkedin from './icons/Linkedin';
import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';

const footerVariant = cva(
    'flex items-center justify-between p-10 h-auto',
    {
        variants: {
            variant: {
                dark: 'text-white bg-black backdrop-blur-sm',
                light: 'text-black bg-white backdrop-blur-sm',
            }
        },
});

interface FooterProps extends VariantProps<typeof footerVariant> {}

const Footer: FC<FooterProps> = ({variant}) => {
    return (
        <nav className="w-full">
            <div className={cn(footerVariant({variant}))}>
                <div className='flexx flex-col space-y-4 w-64 font-gotham'>
                    <div className="flex items-center space-x-4 h-8">
                        <Logo />
                        <div className='font-medium text-2xl'>
                            <p>SAORSSA</p>
                        </div>
                    </div>
                    <p className='font-light text-xs text-justify'>
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam. Consectetur adipiscing elit.
                    </p>
                </div>
                <div className='flex flex-row space-x-4'>
                    <Facebook />
                    <Twitter />
                    <Linkedin />
                </div>
            </div>
        </nav>
    );
}

export default Footer ;