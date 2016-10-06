class Poster extends React.Component {
  constructor(){
    super();
  }

  render() {
    if (this.props.titles.Poster === "N/A") {
      var poster  = "http://www.e-squareindia.com/images/poster-not-available.png"
    } else {
      var poster  = this.props.titles.Poster;
    }

    return(
      <div className= "picture">
        <img src = {poster} />
      </div>
    );
  }
}
