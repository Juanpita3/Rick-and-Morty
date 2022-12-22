import axios from 'axios';
import React, { useEffect,useState } from 'react';

const ResidentCard = ({urlResident}) => {
    const [resident, setResident] = useState()
    useEffect(() => {
        axios.get(urlResident)
        .then(res =>setResident(res.data))
        .catch(err => console.log(err))
    },[])
    return (
        <article className='Resident-card'>
            <header>
                <img src={resident?.image} alt="" />
                <div>
                    <div className="circle"></div>
                    <h1><span className='status'>{resident?.status}</span></h1>
                </div>
            </header>
            <section>
                <br />
                <br />
                <h2 style={{color: 'green'}}>{resident?.name}</h2>
                <ul>
                    <h1>
                    <li><span style={{color:'aquamarine'}}>Specie: </span>{resident?.species}</li><br />
                        <li><span style={{ color: 'fuchsia'}}>Origin: </span>{resident?.origin.name}</li><br />
                    <li><span style={{color: 'purple'}}>Episodes where appear: </span>{resident?.episode.length}</li>
                    </h1>
                </ul>
            </section>
        </article>
    );
};

export default ResidentCard;