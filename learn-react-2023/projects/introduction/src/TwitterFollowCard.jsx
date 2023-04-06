import {useState} from 'react';

export default function TwitterFollowCard(props){
    const [isFollowing, setIsFollowing] = useState(props.initialIsFollowing);

    const handleClick =()=>{
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? "Siguiendo": "Seguir";
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="el avatar de github de zelechos"
                src={`https://unavatar.io/${props.userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{props.children}</strong>
                <span className='tw-followCard-infoUserName'>{props.formatUserName(props.userName)}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                {text}
                </button>
            </aside>
        </article>
    )
}