export const endPoints = {
    login: '/api/login',
    register: '/users/create-user',
    createProduct: '/prod/create-product'
  };
  
  export const productEndpoints = {
    uploadImage: '/prod/upload-img',
    uploadIcon: '/prod/upload-icon',
  }
  
  export const endPointUsers = {
    register: "/users",
    login: "/api/login",
    getUser: "/api/users/getById",
    uploadAvatar: "/users/upload-avatar"
  };
  
  export const endPointAdmin = {
  
    //Users
  
    getAllUsers: "/api/users/get-users",
    editUser: "/api/users/edit-user",
    disableUser: "/api/users/disable-user",
    ableUser: "/api/users/unban-user",
    adminUser: "/api/users/user-admin",
    clientUser: "/api/users/user-client",
    getAdminUsers: "/api/users/get-admin-users",
    getBannedUsers: "/api/users/get-banned-users",
    getActiveUsers: "/api/users/get-active-users",
  
    // Products
  
    getProd: "/prod/get-products",
    getDisabledProd: "/prod/get-disabled-products",
    editProd: "/prod/edit-product",
    spotlightProd: "/prod/spotlight-product",
    unSpotlightProd: "/prod/unspotlight-product",
    offerProd: "/prod/offer-product",
    unOfferProd: "/prod/unoffer-product",
    disableProd: "/prod/disable-product",
    ableProd: "/prod/able-product",
    deleteProd: "/prod/delete-product",
    prodOfferPrice: "/prod/set-offer-price",
    editPrice: "/prod/edit-price",
  
  };