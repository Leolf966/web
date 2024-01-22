
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
            <div class="social">
                <a href=""><img src="../social_1.svg" alt="Some intro image"  class="footer__img"></img></a>
                <a href=""><img src="../social_2.svg" alt="Some intro image"  class="footer__img"></img></a>
                <a href=""><img src="../social_3.svg" alt="Some intro image"  class="footer__img"></img></a>
                <a href=""><img src="../social_4.svg" alt="Some intro image"  class="footer__img"></img></a>
                <a href=""><img src="../social_5.svg" alt="Some intro image"  class="footer__img"></img></a>
            </div>
            <div className="boxer__copyright">
                <p className="copyrightText">2020 IoT © Copyright all rights reserved</p>
            </div>
        </div>
    );
}

export default Footer