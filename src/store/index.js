const countReducer =(state=0,action)=>{
  switch(action.type){
    case "add":
      return state+1;
    case "sub":
      return state-1;
    default:
      return state;
  }
}
export default countReducer

