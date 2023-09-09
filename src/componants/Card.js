


function Card(props) {
    return (

        <div className="container  p-3 rounded-4" style={{ backgroundColor: "#fec76f", marginTop: "70px" }}>


            <div className="card" style={{ width: "auto" }}>
                <img src={props.img1} style={{ width: "auto", height: "475px" }} className="card-img-top" alt="emogi" />
                <div className="card-body">
                    <h5 className="card-title text-danger">{props.title}</h5>
                    <p className="card-text">{props.about}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.name}</li>
                    <li className="list-group-item">{props.age}</li>
                    <li className="list-group-item">{props.company}</li>
                </ul>
                <div className="card-body">
                    <a href="#link" className="card-link btn btn-primary">{props.link}</a>
                    <a href="#otherlink" className="card-link btn btn-primary">{props.other}</a>
                </div>
            </div>


        </div>

    );
}
export default Card;