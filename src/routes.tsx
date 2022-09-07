import { BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';

function Router() {
    
    return (
        <BrowserRouter>
                <Route exact path="/">
                    <Home/>
                </Route>
        </BrowserRouter>
    );
}

export default Router;