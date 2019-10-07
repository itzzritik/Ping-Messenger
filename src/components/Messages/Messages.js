import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

const Messages = ({messages}) => (
    <ScrollToBottom>
        messages.map((message, i) => <div key={i}><Message messsage={message} name={name}/></div>);
    </ScrollToBottom>
);

export default Messages;