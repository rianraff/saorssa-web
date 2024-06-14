import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Thumbnail from '@/components/Thumbnail';

export default function Article() {
    return (
        <main className="w-screen h-screen bg-white bg-cover bg-center">
            <Navbar variant='light' />
            <div className="flex flex-col items-center h-max p-20">
                <Headline />
                <div className='mt-4 flex flex-wrap'>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                    <Thumbnail></Thumbnail>
                </div>
            </div>
            <Footer variant='dark' />
        </main>
    );
}