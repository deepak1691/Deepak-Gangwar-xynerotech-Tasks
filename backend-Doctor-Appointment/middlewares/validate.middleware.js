

export const validate = (schema) => async (req, res, next) => {
   try { 
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const error={
          message: err.issues[0].message
        }
        next(error)
    }
};


//this middlewre help to  validate input filed data.