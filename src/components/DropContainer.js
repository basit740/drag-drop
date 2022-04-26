import React from 'react';
import '../styles/dropcontainer.css';
import Dragabble from './Draggables/Dragabble';
function DropContainer({ onDragOver, onDrop, drops }) {
	return (
		<div
			className='drop-container'
			onDrop={onDrop}
			onDragOver={onDragOver}
			id='drop'
		>
			{drops.map((drop) => {
				return (
					<Dragabble
						key={drop.id}
						id={drop.id}
						content={drop.content}
						data={drop.data}
					/>
				);
			})}
		</div>
	);
}

export default DropContainer;
