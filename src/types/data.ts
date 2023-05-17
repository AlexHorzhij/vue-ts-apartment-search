export interface IApartment {
  id: string;
  title: string;
  imgUrl: string;
  descr: string;
  rating: number;
  price: number;
  location: {
    city: string;
  };
  owner: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface ISearchQuery {
  city: string;
  price: number | null;
}

export interface IFeedback {
  name: string;
  rating: number;
  text: string;
  id: string;
}

export interface IValid {
  message: string;
  result: boolean;
}

// export interface IResponse {
//   accessToken: string;
//   auth: {};
//   displayName: string | null;
//   email: string;
//   emailVerified: boolean;
//   isAnonymous: boolean;
//   metadata: {};
//   phoneNumber: string | null;
//   photoURL: string | null;
//   proactiveRefresh: {};
//   providerData: [];
//   providerId: string;
//   reloadListener: {} | null;
//   reloadUserInfo: {};
//   stsTokenManager: {};
//   tenantId: string | null;
//   uid: string;
//   refreshToken: string;
// }

//=========== auth interface

export interface IResponse {
  userName: string | null;
  email: string | null;
  uid: string | null;
}

export interface ISingUp {
  email: string;
  password: string;
  name: string;
}
export interface ISingIn {
  email: string;
  password: string;
}

//========= store interface
export interface State {
  user: {
    userName: string | null;
    email: string | null;
    uid: string | null;
  };
  isAuth: boolean;
}
