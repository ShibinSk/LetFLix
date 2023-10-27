const HTTP = {
  OK: 200,
  CREATED: 201,
  PROCESSING: 202,
  'BAD REQUEST': 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  'NOT FOUND': 404,
  CONFLICT: 409,
  'UNSUPPORTED MEDIA TYPE': 415,
  'INTERNAL SERVER ERROR': 500,
  'NOT IMPLEMENTED': 501,
  'SERVICE UNAVAILABLE': 503,
};

function extendResponse(req, res, next) {
  res.sendStandardResponse = function (httpStatusText, body) {
    return res.status(HTTP[httpStatusText]).json(body);
  };
  next(); 
}

export default extendResponse; 
