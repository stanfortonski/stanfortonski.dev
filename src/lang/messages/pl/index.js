import Layout from './layout';
import Site from './site';
import Index from './pages';
import Contact from './pages/contact';
import Projects from './pages/projects';

const PL = {
    ...Site,
    ...Layout,
    ...Index,
    ...Projects,
    ...Contact,
};

export default PL;
