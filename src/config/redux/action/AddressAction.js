import api from "../../api";

export const myAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_MY_ADDRESS_REQUEST",
    });
    const response = await api.get(`/address`, data);
    const address = response.data.data;
    console.log("address,", response.data);
    dispatch({
      type: "GET_MY_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const addAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_ADDRESS_REQUEST",
    });
    await api.post(`/address`, data);

    dispatch({
      type: "ADD_ADDRESS_SUCCESS",
    });
    dispatch(myAddress());
  } catch (error) {
    dispatch({
      type: "ADD_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};

export const changeAddress = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: "CHANGE_ADDRESS_REQUEST",
    });
    const response = await api.put(`/address/primary/${id}`, data);
    const address = response.data.data;
    console.log("address", response.data);
    dispatch({
      type: "CHANGE_ADDRESS_SUCCESS",
      payload: address,
    });
    dispatch(selectedAddress());
  } catch (error) {
    dispatch({
      type: "CHANGE_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const updateAddress = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_ADDRESS_REQUEST",
    });
    const response = await api.put(`/address/${id}`, data);
    const address = response.data.data;
    console.log("address", response.data);
    dispatch({
      type: "UPDATE_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const selectedAddress = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_PRIMARY_ADDRESS_REQUEST",
    });
    const response = await api.get(`/address/primary`);
    const address = response.data.data;
    console.log("Selected Address Response", response.data);
    dispatch({
      type: "GET_PRIMARY_ADDRESS_SUCCESS",
      payload: address,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRIMARY_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
export const deleteAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_ADDRESS_REQUEST",
    });
    await api.delete(`/address/${id}`);
    dispatch({
      type: "DELETE_ADDRESS_SUCCESS",
    });
    dispatch(myAddress());
    dispatch(selectedAddress());
  } catch (error) {
    dispatch({
      type: "DELETE_ADDRESS_FAILURE",
      payload: error.response,
    });
  }
};
