export const endPoints = {
    login: '/api/login',
    register: '/api/users/create',
    createProduct: '/api/products/create',
    deleteproduct: "/api/products/delete"
  };
  
  export const productEndpoints = {
    uploadImage: '/api/products/upload-img',
    uploadIcon: '/api/products/upload-icon',
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
  
    getProd: "/api/products/get-products",
    getDisabledProd: "/api/products/get-disabled-products",
    editProd: "/api/products/edit-product",
    spotlightProd: "/api/products/spotlight-product",
    unSpotlightProd: "/api/products/unspotlight-product",
    offerProd: "/api/products/offer-product",
    unOfferProd: "/api/products/unoffer-product",
    disableProd: "/api/products/disable-product",
    ableProd: "/api/products/able-product",
    deleteProd: "/api/products/delete",
    prodOfferPrice: "/api/products/set-offer-price",
    editPrice: "/api/products/edit-price",
  
  };