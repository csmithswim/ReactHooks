import React, { useState, useEffect } from 'react';

//A functional component that stores the state of a counter function and displays a chat box when a user is online

function FriendStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id,
    handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, 
    handleStatusChange);
        };    
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function ExampleWithManyStates() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos = useState([{ text: 'Learn Hooks'
}])];
}


