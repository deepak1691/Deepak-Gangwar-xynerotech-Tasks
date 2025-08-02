export const wrapAsync =(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}

// this function is used for avoid the try catch syntax.