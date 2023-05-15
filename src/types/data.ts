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

export interface IFormData {
  name: string;
  email: string;
  password: string;
}

export interface IResponse {
  accessToken: string;
  auth: {};
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {};
  phoneNumber: string | null;
  photoURL: string | null;
  proactiveRefresh: {};
  providerData: [];
  providerId: string;
  reloadListener: {} | null;
  reloadUserInfo: {};
  stsTokenManager: {};
  tenantId: string | null;
  uid: string;
  refreshToken: string;
}
