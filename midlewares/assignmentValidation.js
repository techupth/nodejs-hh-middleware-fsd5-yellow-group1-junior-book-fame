function assignmentValidation(req, res, next) {
  if (req.body.title.length > 35) {
    return res.json({ message: "Title must not be over 35 characters" });
  } else if (req.body.description.length > 35) {
    return res.json({ message: "Description must not exceed 150 characters" });
  } else if (!Array.isArray(req.body.categories)) {
    return res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }
  next();
}
export default assignmentValidation;
