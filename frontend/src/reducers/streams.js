// Reducers specify how app states changes
// Accepts state and action as arguments and returns the next State of App

export default (streams = [], action) => {
    switch (action.type) {
      case "GET_STREAMS":
        console.log("GET_STREAMS", action.payload);
        //... makes copy of the post object
        return action.payload;
      default:
        return streams;
    }
  };
  