import Logo from '@/components/Logo';
import Menu from '@/components/icons/Menu';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { FC } from 'react';

const navbarVariant = cva(
    'flex justify-between p-4 h-12',
    {
        variants: {
            variant: {
                dark: 'text-white bg-black/60 backdrop-blur-sm',
                light: 'text-black bg-white/60 backdrop-blur-sm',
            }
        },
});

interface NavbarProps extends VariantProps<typeof navbarVariant> {}

const Navbar: FC<NavbarProps> = ({variant}) => {
    return (
        <nav className="w-full fixed top-0 z-50">
            <div className={cn(navbarVariant({variant}))}>
                <div className="flex items-center space-x-6">
                    <Logo />
                    <ul className='flex space-x-8 font-gotham'>
                        <li className="font-medium"><a href="/">Home</a></li>
                        <li className="font-light hover:font-medium"><a href="/articles">Article</a></li>
                        <li className="font-light hover:font-medium"><a href="#">Project</a></li>
                        <li className="font-light hover:font-medium"><a href="#">Team</a></li>
                    </ul>
                </div>
                <Menu />
            </div>
        </nav>
    );
}

export default Navbar ;