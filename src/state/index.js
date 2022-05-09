import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({ isUserLoggedIn: false });

export { setGlobalState, useGlobalState}