import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Star} from '../assets/star.svg';
import { useEffect } from 'react';

const StarBox = ({stars, counter, addStar}:{stars:any, counter:any, addStar:any}) => {

    useEffect(()=> {
        if(counter%10===0&&counter!==0) addStar()
    },[counter, addStar])

    return (
        <div id = "star-box">{stars.map((star:string, ind:number)=><Star key={star+ind}/>)}</div>
    )
}

const mapStateToProps = (state:any, counter:any) => ({ stars: state.star as any, counter: state.counter.counter});
const mapDispatchToProps = (dispatch:any) => ({addStar: () => dispatch({type: 'ADD_STAR'})})

export default connect(mapStateToProps, mapDispatchToProps)(StarBox);