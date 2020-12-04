import { useEffect, useRef, useState } from 'react';

export const useFetch = url => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		error: null
	});
	const isMounted = useRef(true);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState(s => ({ ...s, isLoading: true }));
		fetch(url)
			.then(res => res.json())
			.then(data => {
				isMounted.current && setState(s => ({ ...s, data, isLoading: false }));
			})
			.catch(() =>
				setState({
					data: null,
					isLoading: false,
					error: 'Data could not be fetched'
				})
			);
	}, [url]);

	return state;
};
