export const initialState = {
	drags: [
		{ id: 1, data: 45, content: 'this is item 1' },
		{ id: 2, data: 23, content: 'this is item 2' },
		{ id: 3, data: 91, content: 'this is item 3' },
		{ id: 4, data: 34, content: 'this is item 4' },
		{ id: 5, data: 71, content: 'this is item 5' },
	],
	drops: [],
	draggingId: null,
	dragSrcId: null,
};

export const ACTIONS = {
	DRAG_START: 'drag_start',
	DRAG_END: 'drag_end',
	DRAGGING: 'dragging',
	DRAG_OVER: 'drag_over',
	DROP_END: 'drop_end',
};

export default function reducer(state, action) {
	const type = action.type;

	const prevState = { ...state };

	if (type === ACTIONS.DRAG_START) {
		prevState.draggingId = action.payload.id;
		prevState.dragSrcId = action.payload.dragSrcId;
	}

	if (type === ACTIONS.DROP_END) {
		const dragging = prevState.drags.find(
			(drg) => drg.id == prevState.draggingId
		);

		if (prevState.dragSrcId == 'drop') {
			return;
		}

		prevState.drops = [...prevState.drops, dragging];
	}
	return prevState;
}
