/* eslint-disable no-undef */

import React, { createRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Graphin, { Utils } from '@antv/graphin';
import '@antv/graphin/dist/index.css'; // 引入Graphin CSS

const data = Utils.mock(20).random().graphin();

const App = () => {
  const graphRef = createRef(null);
  let touchPosition = { x: 0, y: 0 };
  let draggedNode = null;
  let dragCanvas1Node2 = 0;

  const addClickListeners = () => {
    const { graph } = graphRef.current;

    // support drag canvas on mobile
    graph.on("canvas:touchstart", (ev) => {
      touchPosition = { x: ev.clientX, y: ev.clientY };
      dragCanvas1Node2 = 1; // set drag mode to 1 for dragging canvas
    });
    graph.on("canvas:touchmove", (ev) => {
      ev.preventDefault();
      if (dragCanvas1Node2 === 2) {
        // is dragging node, not canvas
        graph.update(draggedNode, {
          ...draggedNode.getModel(),
          x: ev.x,
          y: ev.y
        });
        return;
      }
      const zoomRatio = graph.getZoom();
      const positionDelta = {
        dx: (ev.clientX - touchPosition.x) * zoomRatio,
        dy: (ev.clientY - touchPosition.y) * zoomRatio
      };
      
      touchPosition = { x: ev.clientX, y: ev.clientY };
      
      graph.translate(positionDelta.dx, positionDelta.dy);
    });
    graph.on("canvas:touchend", (ev) => {
      dragCanvas1Node2 = 0; // reset drag mode
    });

    // support drag nodes on mobile
    graph.on("node:touchstart", (ev) => {
      dragCanvas1Node2 = 2;
      draggedNode = ev.item;
    });
    graph.on("node:touchmove", (ev) => {
      ev.preventDefault();
      graph.update(ev.item, { ...ev.item.getModel(), x: ev.x, y: ev.y });
    });
    graph.on("node:touchend", (ev) => {
      dragCanvas1Node2 = 0; // reset drag mode to 0
    });
  };

  useEffect(() => {
    addClickListeners();
  }, []);

  return (
    <div>
      <Graphin data={data} ref={graphRef} layout={{ name: 'force' }} />
    </div>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
