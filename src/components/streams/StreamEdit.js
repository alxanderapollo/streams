//in our app.js we have a colon that comes after the route
//what it is known as route params, or paramters passed on through the path of a website
//the value that is passed , is used as our route param used to decide which stream is going to be edited
import React from 'react'
import {connect} from 'react-redux'
import { fetchStream } from '../../actions';
class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render(){
        if(!this.props.stream){
            return <div>Loading</div>
        }
        return (
        <div>
            {this.props.stream.title}
        </div>
    )
    }
}
const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream})(StreamEdit)