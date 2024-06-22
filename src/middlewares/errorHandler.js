import { HttpError } from 'http-errors';

const errorHandler = async (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      // status: err.status,
      message: err.message,
      data: err,
    });
    return;
  }

  res.status(500).json({
    message: err.message,
  });
};

export default errorHandler;
