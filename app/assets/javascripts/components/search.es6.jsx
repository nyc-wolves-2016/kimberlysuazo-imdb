class Search extends React.Component {
  render(){
    return(
      <div id="brand">
      <h1> Welcome to (baby) IMDB </h1><p><span className= "title"> </span></p>
      <form id="search-form">
        <input id="search" type="text" name="query" placeholder="Search for a Title here:" />
      </form>
      </div>
    );
  }
}
