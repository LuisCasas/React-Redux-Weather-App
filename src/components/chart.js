import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
    // console.log(props.data);

    return(
        <div>
        <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(props.data)}{props.units}</div>
        </div>
    );
}

function average(data){
    // console.log(data);
    // return data;
    if(!data)
    {return;}

   return _.round(_.sum(data)/data.length);
}