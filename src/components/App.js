import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history'


//Client ID: 182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com
//182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com

const  App = ()=> {
    return (<div>
        
    <Router history={history}>
        <div>
        <Header/>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit/:id" exact component={StreamEdit}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
            <Route path="/streams/show" exact component={StreamShow}/>
        </div>
    </Router>
    </div>)
}

export default App;