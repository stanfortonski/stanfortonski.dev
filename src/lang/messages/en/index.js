import Layout from "./layout";
import Site from "./site";
import Index from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

const EN = {
    ...Site,
    ...Layout,
    ...Index,
    ...Projects,
    ...About,
    ...Contact,
};

export default EN;