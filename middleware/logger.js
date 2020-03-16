/* jshint esversion:10 */
module.exports = (req,res,next)=>{
    console.log('Logging...'); 
    next();
};