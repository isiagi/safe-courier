export const authRole = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.userRole) || !userModel.findOne({_id: req.user.user})) {
        return Response(res, 401, "Access Forbiden");
      }
      next();
    };
  };
  
  export const authRol = (user, data) => {
    return user.userRole.userType === 'admin' || data.userId === user._id
  };
  
  export function authScope(user){
  
    return user.userRole.userType === 'admin'
    
  }