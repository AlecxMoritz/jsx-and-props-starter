import React from 'react';
import Server from './Server/Server';

const buttonStyles = {
    height : '3vh',
    width : '15vw',
    backgroundColor : 'cadetblue',
    borderColor : 'transparent',
    borderRadius : '5px'
}

class Servers extends React.Component {
    state = {
        servers: [  ]
    }

    addServer = async () => {
        let serverNum = Math.floor(Math.random() * 100);
        let onOff = Math.floor(Math.random() * 10) % 2 ? 'Online' : 'Offline';

        let server = {
            num : serverNum,
            onOff : onOff
        };

        let newServers = this.state.servers;
        newServers.push(server);
        
        this.setState({
            servers : newServers
        });
    };

    render() {
        

        const servers = this.state.servers.length > 0 ? (
                this.state.servers.reverse().map((server, index) => {
                    return (
                        <Server key={index} server={ server } />
                    )
                })
        ) : null;

        return (
            <div>
                <button  onClick={ this.addServer }>Add Server</button>
                { servers }
            </div>
        );
    };
};

export default Servers;