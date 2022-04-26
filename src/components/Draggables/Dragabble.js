import React from 'react';
import '../../styles/dragabbels.css';
function Dragabble({ data, id, content, onDragStart, onDragEnd }) {
	return (
		<div
			id='draggables'
			draggable
			className='draggable'
			id={id}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<h2>Dragable Item</h2>
			<p>{content}</p>
			<p>{data}</p>
		</div>
	);
}

export default Dragabble;
