import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

export default function App(){

    const users = [
        {
            "userName": "zelechos",
            "name": "Alex T. H.",
            "isFollowing": true
        },
        {
            "userName": "midudev",
            "name": "Miguel David",
            "isFollowing": false
        },
        {
            "userName": "elhadjx",
            "name": "Jarol",
            "isFollowing": false
        },
    ];

    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard 
                        key={userName}
                        formatUserName={formatUserName} 
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >  
                        {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    );
}


const formatUserName = userName => `@${userName}` ;
