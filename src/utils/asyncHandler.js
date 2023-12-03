/* we make our wrapper function */


// first way to make this function , using try catch
/* const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        });
    }
}*/

// second way to make this function , using promisses

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler};