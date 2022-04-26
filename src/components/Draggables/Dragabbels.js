import React from 'react';
import Dragabble from './Dragabble';
function Dragabbels({ onDragStart, onDragEnd, drags }) {
	return (
		<div id='drags'>
			{drags.map((drg, index) => {
				return (
					<Dragabble
						key={drags.id}
						data={drg.data}
						id={drg.id}
						content={drg.content}
						onDragStart={onDragStart}
						onDragEnd={onDragEnd}
					/>
				);
			})}
		</div>
	);
}

export default Dragabbels;
