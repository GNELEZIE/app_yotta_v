import diplome from "../assets/diplome.png";

function checkItem(props){
    const {code} = props;
    return(
        <div className="aximo-all-section bg-light3 pt-5">
          <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3 text-center">
                    <div className="alert alert-success">Ce diplôme est certifié.</div> 
                    <img src={diplome} alt="Diplome" className="diplome" />
                </div>
                
            </div>
          </div>
		</div>

    )
}
export default checkItem;