import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ForceGraphVR } from 'react-force-graph';

const N = 300;
const randomData =
{
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};

class MyGraph extends Component {

    render() {
        return (
          <div>
            <ForceGraphVR graphData={randomData}/>
          </div>
        );
    }
}

export default MyGraph;