import React, { useReducer, useEffect } from 'react';

import Dragabbels from './Draggables/Dragabbels';
import DragContainer from './DragContainer';
import DropContainer from './DropContainer';

import '../styles/dragabbels.css';

import reducer, { initialState, ACTIONS } from './reducer';

function Main() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const dragStartHandler = (event) => {
		event.target.classList.add('dragging');

		dispatch({
			type: ACTIONS.DRAG_START,
			payload: {
				id: event.target.id,
				dragSrcId: event.target.parentNode.id,
			},
		});
	};
	const dragEndHandler = (event) => {
		event.target.classList.remove('dragging');
	};

	const dragOverHandler = (event) => {
		event.preventDefault();
	};

	const dropOverHandler = (event) => {
		event.preventDefault();
		dispatch({
			type: ACTIONS.DROP_END,
		});
	};
	return (
		<div style={{ display: 'flex' }}>
			<DropContainer
				onDrop={dropOverHandler}
				onDragOver={dragOverHandler}
				drops={state.drops}
			/>
			<DragContainer>
				<Dragabbels
					onDragStart={dragStartHandler}
					onDragEnd={dragEndHandler}
					drags={state.drags}
				/>
			</DragContainer>
		</div>
	);
}

export default Main;
