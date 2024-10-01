import React from 'react'
import './Card.css';

const Card = ({ id, title, tag, status, priority }) => {
const group = localStorage.getItem('group')
    
    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                {group!=='user' &&
                    <div className="imageContainer relative" style={{ width: "20px", height: "20px" }}>
                        <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="UserImage" />
                        <div className={`${status && 'online'} showStatus`}/>
                    </div>}

            </div>
            <div className="cardTitle" style={{ fontWeight: 200 }} >
                <p>{title}</p>
            </div>
            <div className="cardTags">
                {group !== 'priority' && <div className="tags color-grey"> <img src={priority} alt="" /></div>
    
                }
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Card;