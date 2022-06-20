import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Star} from '../assets/star.svg';


const StarBox = ({stars}:{stars:any}) => {

    return (
        <div id = "star-box">{stars.map((star:string, ind:number)=><Star key={star+ind}/>)}</div>
    )
}

const mapStateToProps = (state:any) => ({ stars: state.star as any});

export default connect(mapStateToProps)(StarBox);