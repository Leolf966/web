
function Footer() {
    return (
        <div className="boxer">
            <div className="boxer__text">
                <div className="text">
                    <h4 className="boxer__header">Address</h4>
                    <p className="boxer__info">Sunset Boulevard 132</p>
                    <p className="boxer__info">Hollywood Boulevard 87</p>
                </div>
                <img src="../mylogo.png" className="logo"/>
                <div className="textt">
                    <h4 className="boxer__header">Socials</h4>
                    <p className="boxer__info">+74323402394</p>
                    <p className="boxer__info">+74323402394</p>
                </div>
            </div>
            <img src="https://as1.ftcdn.net/v2/jpg/03/01/89/56/1000_F_301895651_8x8TouW7t5YNRHGB7Vdm63vdYBQMqVbo.jpg" className="media"></img>
            <div className="boxer__copyright">
                <p className="copyrightText">2020 IoT © Copyright all rights reserved</p>
            </div>
        </div>
    );
}

export default Footer