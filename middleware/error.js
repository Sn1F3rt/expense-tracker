const errorHandler = (error, req, res) => {
    if (error.status) {
        res.status(error.status).json({ msg: error.message });
    } else {
        res.status(500).json({ msg: error.message });
    }
};

export default errorHandler;
