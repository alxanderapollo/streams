import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamShow';
import StreamEdit from './streams/StreamShow';
import Header from './Header';


//Client ID: 182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com
//182565464848-94dfl9fd6386iqj6lgecqt3udrkvkqbi.apps.googleusercontent.com

const  App = ()=> {
    return (<div>
        
    <BrowserRouter>
        <div>
        <Header/>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit" exact component={StreamEdit}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
            <Route path="/streams/show" exact component={StreamShow}/>
        </div>
    </BrowserRouter>


        
    </div>)
}

export default App;