import { Button} from '@themesberg/react-bootstrap';
import {Link} from "react-router-dom"
import {Routes} from "Routing/Routes"



const Simple = () => (

    // <Header />
    // <SideBar />
    // <Footer />
    <Button as={Link} variant="primary" className="animate-hover" to={Routes.NotFound.path}>
        Not Found
    </Button>
    
);

export default Simple;