class Search extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var textArea = this.refs.titleSearch.value;
    var textArea2 = this.refs.yearSearch.value;
    var baseUrl = "http://www.omdbapi.com/?t=";
    if (textArea2 === "") {
      var year  = "";
    } else {
      var year = "&y=" + textArea2;
    }

debugger;
    $.ajax({
      url: baseUrl + textArea + year,
      method: "get"
    }).done(function(response){

      textArea = "";
      textArea2 = "";
      this.props.onSearchTitle(response);
    }.bind(this));
  }

  render(){
    return(
      <div id="brand">
      <h1> Welcome to (baby) IMDB </h1><p><span className= "title"> </span></p>
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref= "titleSearch" id="search" type="text" name="query" placeholder="Search for a Title here:" />
        <input ref= "yearSearch" id="search" type="text" name="query" placeholder="Year (optional)" />
        <input id="search button" type="submit" value="Go" />
      </form>
      </div>
    );
  }
}
