import React from 'react';


class lemons extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true,
        data: null,

      };
    }
  
    async componentDidMount() {

    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(Response => Response.json())
    .then(data => this.setState({ data}));
     
    }
  
    render() {
      const { data, error, loading } = this.state;
  
      if (!!error) return <h2>{error}</h2>;
  
      if (loading) return <h2>Loading...</h2>;
  
      return <h2>{data}</h2>;
    }
  }

export default lemons;