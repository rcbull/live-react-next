import Foto from "../../assets/img/foto.png";

const Card = () => {
    return (
        <div className="card">
            <a className="card-link">
                <div className="card-img">
                    <img src={Foto} alt="foto" />
                </div>
            </a>
            <h5 className="card-dog-title">h5</h5>

        </div>
    )
};

export default Card;
