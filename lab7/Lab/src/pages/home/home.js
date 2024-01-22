import Info from '../../components/info/info'
import '../../components/info/info.css'
import Plates from '../../components/plates/plates'
import '../../components/plates/plates.css'
import ViewMoreButton from '../../components/viewmoreButton/viewmoreButton'
import '../../components/viewmoreButton/viewmoreButton.css'


function Home() {
    return (
        <div className="Home">
            <Info/>
            <Plates/>
            <ViewMoreButton />
        </div>
    );
}

export default Home;