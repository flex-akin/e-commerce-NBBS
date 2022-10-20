exports.getProducts = (req, res, next ) => {
    res.status(200).json({
        sucees: true,
        message: "Thsi route will show all products in databease"
    })
}