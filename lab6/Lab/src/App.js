
import './App.css';
import Nav from './components/nav/nav'
import './components/nav/nav.css'
import Info from './components/info/info'
import './components/info/info.css'
import Plates from './components/plates/plates'
import ViewMoreButton from './components/viewmoreButton/viewmoreButton'

import Footer from './components/footer/footer'
import './components/footer/footer.css'

function App() {
    return (
        <div className="App">
            <Nav />
            <Info />
            <Plates/>
            <ViewMoreButton />
            <Footer />
        </div>
    );
}

export default App;