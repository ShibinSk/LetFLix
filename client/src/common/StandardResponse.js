export  const getStandardResponse= async (axiosCall, responseFormatter)=> {
    try {
      const res = await axiosCall;
      let result = res.data;
      const parsedResponse = responseFormatter ? responseFormatter(res.data.data) : null;
      if (parsedResponse) {
        result = { ...result, data: parsedResponse };
      }
      return result;
    } catch (error) {
      const parsedError = error.response && error.response.data ? error.response.data : { message: error.message };
      throw parsedError;
    }
  }
  