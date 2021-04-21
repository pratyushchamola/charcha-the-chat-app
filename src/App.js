import { ChatEngine } from 'react-chat-engine';
import './App.css'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const projectId = process.env.PROJECT_ID

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID={process.env.PROJECT_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;;