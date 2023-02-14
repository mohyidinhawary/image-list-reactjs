import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        this.state = { images: [] }
    }
    async onSearchSubmit(entry) {

        const response = await axios.get(`https://pixabay.com/api/?key=30623364-2103e8c44b26358f1972bab5e&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({ images: response.data.hits })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App