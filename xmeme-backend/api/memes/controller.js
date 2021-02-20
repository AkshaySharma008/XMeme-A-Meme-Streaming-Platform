const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Memes = require('./model');

// @route : /api/v1/request/
// @req-type : POST
// @description : Post a meme
exports.postMeme = asyncHandler(async (req, res, next)=>{
    const meme = await Memes.create({
        name : req.body.name,
        url : req.body.url,
        caption : req.body.caption
    });
    return res.status(200).json({
        success: true,
        meme
    });

});

// @route : /api/v1/request/
// @req-type : GET
// @description : Get all memes
exports.getMemes = asyncHandler(async (req, res, next)=>{
    const memes = await Memes.find().sort({'creationDate': -1}).limit(100);
    if(memes.length == 0){
        return res.status(200).send([]);
    }
    return res.status(200).json({
        success: true,
        memes
    });
});

// @route : /api/v1/request/id
// @req-type : GET
// @description : Get meme by Id
exports.getMeme = asyncHandler(async (req, res, next)=>{
    const meme = await Memes.findById(req.params.id);
    if(meme.length === 0)
            return next(new ErrorResponse(`No Meme with ${req.params.articleId} found !!`, 404));
    return res.status(200).json({
            success: true,
            meme
    });
});

// @route : /api/v1/request/id
// @req-type : PATCH
// @description : Update meme by Id
exports.updateMeme = asyncHandler(async (req, res, next)=>{
    let meme = await Memes.findById(req.params.id);
    if(!meme) return next(new ErrorResponse(`No Meme with ${req.params.id} found !!`, 404));
    meme = await Memes.findByIdAndUpdate(req.params.id , 
        {
        url : req.body.url,
        caption : req.body.caption},
        {
        new: true,
        runValidators: true
      })
    return res.status(200).json({
            success: true,
            meme
    });
});

// @route : /api/v1/request/id
// @req-type : DELETE
// @description : Delete meme by Id
exports.deleteMeme = asyncHandler(async (req, res, next)=>{
    const meme = await Memes.findByIdAndDelete(req.params.id);
    if(!meme) return next(new ErrorResponse(`No Meme with ${req.params.id} found !!`, 404));
    return res.status(200).json({
            success: true,
            meme
    });
});
