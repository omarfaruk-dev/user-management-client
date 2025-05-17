import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header><NavBar/></header>
            <main className='max-w-7xl mx-auto'><Outlet/> </main>

        </div>
    );
};

export default MainLayout;