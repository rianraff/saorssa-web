import Twitter from '@/components/icons/Twitter';
import Linkedin from '@/components/icons/Linkedin';
import Facebook from '@/components/icons/Facebook';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { FC } from 'react';

const socialFooterVariant = cva(
    'w-full p-2 fixed bottom-0 z-50 flex space-x-5 p-4',
    {
        variants: {
            variant: {
                dark: 'text-white',
                light: 'text-black',
            },
        },
});

interface SocialFooterProps extends VariantProps<typeof socialFooterVariant> {}

const SocialFooter: FC<SocialFooterProps> = ({variant}) => {
    return (
        <div className={cn(socialFooterVariant({variant}))}>
            <Facebook />
            <Twitter />
            <Linkedin />
        </div>
    );
}

export default SocialFooter;