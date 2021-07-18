import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'
//only want to fetch our streams one time
class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }
    //edit and delete buttons
    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return (
            <div className=" right floated content">

                <Link to={`/streams/edit/${stream.id}`}className="ui button primary">
                    Edit
                </Link>

                <button className="ui button negative">
                    Delete
                </button>

            </div>
            )
        }
    }

    //takes a list of streams and renders them out on the screen
    renderList(){
        return this.props.streams.map(stream =>{
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
            </div>  
        })
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Streams
                    </Link>
                </div>
            )
        }
    }
    render() {
         console.log(this.props.streams)
        return (
            <div>
                 <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>   
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    // takes an obj as arg, takes  all the diffrent values inside of that object are pulled out and are turned into an array 
    return {
        streams:Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
