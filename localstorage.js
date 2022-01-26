export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export default function saveState(loggedInData){
  try {
    // const serializedState = JSON.stringify(state);
    cosole.log(loggedInData)
    return localStorage.setItem('Logged in ?', loggedInData);
  } catch {
    // ignore write errors
  }
};
// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('Logged in ?', serializedState);
//   } catch {
//     // ignore write errors
//   }
// };